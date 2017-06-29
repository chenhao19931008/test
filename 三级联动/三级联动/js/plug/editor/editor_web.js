$.fn.extend({
    _opt: {
        placeholader: "",
        validHtml: [],
        limitSize: 3,
        showServer: !1
    },
    artEditor: function(e) {

        var t = this,
            a = {
                "-webkit-user-select": "text",
                "user-select": "text",
                "overflow-y": "auto",
                "text-break": "brak-all",
                outline: "none",
                cursor: "text"
            };
        $(this).css(a).attr("contenteditable", !0), t._opt = $.extend(t._opt, e);
        try {
            $(t._opt.imgTar).on("change", function(e) {
                t._opt["placeholader"]=="";
                var a = e.target.files[0];
                if (e.target.value = "", Math.ceil(a.size / 1024 / 1024) > t._opt.limitSize)
                    return void layer.open({content:"文件太大,文件大小不能超过3MB",btn:["确定"]});


                var r = new FileReader;
                layer.open({type: 2});
                r.readAsDataURL(a), r.onload = function(e) {

                    var r = e.target.result,
                        o = new Image;
                    if (o.src = e.target.result, t._opt.compressSize && Math.ceil(a.size / 1024 / 1024) > t._opt.compressSize && (r = t.compressHandler(o)), t._opt.showServer) return void t.upload(r);
                    var i = '<img src="' + r + '" style="width:90%;" />';
                    t.insertImage(i);
                    layer.open({type: 2,time:0.1});
                }
            }), t.placeholderHandler(), t.pasteHandler()
        } catch (e) {
            console.log(e)
        }
        t._opt.formInputId && $("#" + t._opt.formInputId)[0] && $(t).on("input", function() {
            $("#" + t._opt.formInputId).val(t.getValue())
        })
    },
    compressHandler: function(e) {
        //console.log(0)
        var t, a = document.createElement("canvas"),
            r = a.getContext("2d"),
            o = document.createElement("canvas"),
            i = o.getContext("2d"),
            l = (e.src.length, e.width),
            n = e.height;
        (t = l * n / 4e6) > 1 ? (t = Math.sqrt(t), l /= t, n /= t) : t = 1, a.width = l, a.height = n, r.fillStyle = "#fff", r.fillRect(0, 0, a.width, a.height);
        var s;
        if ((s = l * n / 1e6) > 1) {
            s = ~~(Math.sqrt(s) + 1);
            var c = ~~(l / s),
                p = ~~(n / s);
            o.width = c, o.height = p;
            for (var d = 0; d < s; d++)
                for (var h = 0; h < s; h++) i.drawImage(e, d * c * t, h * p * t, c * t, p * t, 0, 0, c, p), r.drawImage(o, d * c, h * p, c, p)
        } else r.drawImage(e, 0, 0, l, n);
        var g = a.toDataURL("image/jpeg", .1);
        return o.width = o.height = a.width = a.height = 0, g
    },
    upload: function(e) {
        //console.log(1)
        var t = this;
        t._opt.uploadField;
        $.ajax({
            url: t._opt.uploadUrl,
            type: "post",
            data: $.extend(t._opt.data, {
                filed: e
            }),
            cache: !1
        }).then(function(e) {
            var a = t._opt.uploadSuccess(e);
            if (a) {
                var r = '<img src="' + a + '" style="width:90%;" />';
                t.insertImage(r)
            } else console.log("地址为空啊!大兄弟", a)
        }, function(e) {
            t._opt.uploadError(e.status, e)
        })
    },
    insertImage: function(e) {
        //console.log(2)
        $(this).focus();
        var t = window.getSelection ? window.getSelection() : document.selection,
            a = t.createRange ? t.createRange() : t.getRangeAt(0);
        if (window.getSelection) {
            a.collapse(!1);
            for (var r = a.createContextualFragment(e), o = r.lastChild; o && "br" == o.nodeName.toLowerCase() && o.previousSibling && "br" == o.previousSibling.nodeName.toLowerCase();) {
                var i = o;
                o = o.previousSibling, r.removeChild(i)
            }
            a.insertNode(a.createContextualFragment("<br/>")), a.insertNode(r), o && (a.setEndAfter(o), a.setStartAfter(o)), t.removeAllRanges(), t.addRange(a)
        } else a.pasteHTML(e), a.collapse(!1), a.select();
        this._opt.formInputId && $("#" + this._opt.formInputId)[0] && $("#" + this._opt.formInputId).val(this.getValue())
    },
    pasteHandler: function() {
        //console.log(3)
        var e = this;
        $(this).on("paste", function(t) {
            console.log(t.clipboardData.items);
            var a = $(this).html();
            console.log(a), valiHTML = e._opt.validHtml, a = a.replace(/_moz_dirty=""/gi, "").replace(/\[/g, "[[-").replace(/\]/g, "-]]").replace(/<\/ ?tr[^>]*>/gi, "[br]").replace(/<\/ ?td[^>]*>/gi, "&nbsp;&nbsp;").replace(/<(ul|dl|ol)[^>]*>/gi, "[br]").replace(/<(li|dd)[^>]*>/gi, "[br]").replace(/<p [^>]*>/gi, "[br]").replace(new RegExp("<(/?(?:" + valiHTML.join("|") + ")[^>]*)>", "gi"), "[$1]").replace(new RegExp('<span([^>]*class="?at"?[^>]*)>', "gi"), "[span$1]").replace(/<[^>]*>/g, "").replace(/\[\[\-/g, "[").replace(/\-\]\]/g, "]").replace(new RegExp("\\[(/?(?:" + valiHTML.join("|") + "|img|span)[^\\]]*)\\]", "gi"), "<$1>"), /firefox/.test(navigator.userAgent.toLowerCase()) || (a = a.replace(/\r?\n/gi, "<br>")), $(this).html(a)
        })
    },
    placeholderHandler: function() {
        //console.log(4)
        var e = this;
        $(this).on("focus", function() {
            $.trim($(this).html()) === e._opt.placeholader && $(this).html("")
        }).on("blur", function() {
            $(this).html() || $(this).html(e._opt.placeholader)
        }), $.trim($(this).html()) || $(this).html(e._opt.placeholader)
    },
    getValue: function() {
        return $(this).html()
    },
    setValue: function(e) {
        $(this).html(e)
    }
});
