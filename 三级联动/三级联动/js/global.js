document.write("<script type=\"text\/javascript\" src=\"\/\/m.27270.com\/js\/27270App.js\"><\/script>");
/*Lazyload*/
function Lazyload(options){this.options=$.extend({},Lazyload.DEFAULTS,options||{});this.show()}(function($){$.extend(Lazyload,{DEFAULTS:{container:document,attr:"lazysrc",timeout:200},init:function(options){var options=options||{};new Lazyload(options)}});Lazyload.prototype={getClient:function(){return{"top":document.documentElement.clientHeight+Math.max(document.documentElement.scrollTop,document.body.scrollTop),"left":document.documentElement.clientWidth+Math.max(document.documentElement.scrollLeft,document.body.scrollLeft)}},check:function(){this.container=$(this.options.container);this.imgNum=this.container.find("img["+this.options.attr+"]");var _this=this;if(this.imgNum.length){this.timer&&clearTimeout(this.timer);this.timer=setTimeout(function(){var arr=[],gc=_this.getClient();$.each(_this.imgNum,function(i,o){if($(o).offset().top<=gc.top&&$(o).offset().left<=gc.left){var attrval=$(o).attr("lazysrc");attrval&&$(o).attr("src",attrval).removeAttr("lazysrc").hide().fadeIn()}else{arr.push(o)}});_this.imgNum=arr},this.options.timeout)}else{$(window).unbind("scroll",this.check);$(window).unbind("resize",this.check)}},show:function(){var _this=this;$(window).bind("scroll",function(){_this.check()});$(window).bind("resize",function(){_this.check()});this.check()}};$.extend({Lazyload:Lazyload})})(jQuery);$(document).ready(function(){Lazyload.init({container:document,attr:"lazysrc",timeout:50,threshold:1000})});
$(function(){setTimeout(onWidthChange,500);});
function onWidthChange(){
    if( $(window).width() > 0 ) {
        var e = document.documentElement.clientWidth;
        var font_size = e * .04 + "px";
        var font_size_small = e * .03 + "px";
        $(".autosize").css("font-size",font_size);
        $(".font_size_small").css("font-size",font_size_small);
        var PicW64 = $("#PicW64").height();
        var PicW64_a = $("#PicW64_a").height();
        $("#PicW30 em").height(PicW64-25);
        $("#PicW30_a em").height(PicW64_a-25);
        var val = $("#daohang").attr("val");
        if (val==1){
            var ShowNewNav = $("#ShowNewNav").height();
            $("#WrapAutoHeight").height(ShowNewNav-1);
        }else if (val == 0){
            $("#WrapAutoHeight").height("auto");
        }
    }
    setTimeout(onWidthChange,500);
}
function daohang(){
    var daohang = $("#daohang");
    var ShowNewNav = $("#ShowNewNav");
    var WrapAutoHeight = $("#WrapAutoHeight").height();
    daohang.click(function(){
        var val = $("#daohang").attr("val");
        if (val == 0){
            ShowNewNav = $("#ShowNewNav").show(200);
            var val = $("#daohang").attr("val",1);
            var ShowNewNav = $("#ShowNewNav").height();
            $("#WrapAutoHeight").height(ShowNewNav);
        }else{
            ShowNewNav = $("#ShowNewNav").hide(200);
            var val = $("#daohang").attr("val",0);
            $("#WrapAutoHeight").height("auto");
            $("#ShowNewNav").removeAttr('style');
        }
    });
}
function TagLists(id){
    /**
     *导航tag和内页tag颜色控制
     */
    var doc=document;
    var c=doc.getElementById(id);
    var d=c.getElementsByTagName("li");
    for (var i=0;d.length>i;i++){
        var rand ="tit"+Math.floor(1+Math.random()*20);
        d[i].className=rand;
    }
    var a=doc.getElementsByClassName("TagBox")[0];
    if (a !=null){
        var b=a.getElementsByTagName("a");
        for (var i=0;b.length>i;i++){
            var rand = "tit"+Math.floor(1+Math.random()*4);
            b[i].className=rand;
        }
    }
}
function Pages(){
    var doc=document;
    var a=doc.getElementById("Pages");
    var b=a.getElementsByTagName("li");
    var c=doc.getElementById("thisclass").getAttribute("thisclass");
    var d=doc.getElementById("pageinfo").getAttribute("pageinfo");
    var e=doc.createElement("li");
    e.className="AppEndLi";
    e.innerHTML="<span>"+c+"</span><font color='#999'> / "+d+"</font>";
    a.insertBefore(e,b[0]);
}
function show_Pic(){
    /**
     *热门美女图片轮播
     */
    var doc=document;
    var a=doc.getElementsByClassName("Hot_pic")[0];
    var b=a.getElementsByClassName("libox");
    for (var i=0;i<b.length;i++){
        var c=b[i].getElementsByTagName("a");
        var rand=Math.floor(0+Math.random()*2);
        for (var ii=0;ii<c.length;ii++){
            c[ii].style.display="none";
        }
        c[rand].style.display="block";
    }
}
function showDesc(id,lh){
    var doc=document;
    var a=doc.getElementById(id);
    var b=a.getElementsByTagName("p")[0];
    var c=doc.createElement("div");
    c.className="arc-txt-arrow";
    var d=b.offsetHeight;
    if(d>lh*3){
        a.style.height=lh*4+"px";
        a.style.paddingBottom="16px";
        a.appendChild(c);

    }
    c.onclick=function(){
        if (c.className.indexOf("arc-txt-arrow")>-1&&c !=null){
            c.className="arc_txt_up";
            a.style.height="auto";
        }else{
            c.className="arc-txt-arrow";
            a.style.height=lh*4+"px";
        }
    }

}/**
 * Created by Administrator on 2017/3/25.
 */
