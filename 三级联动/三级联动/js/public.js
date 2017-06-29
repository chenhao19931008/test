//登录注册验证
function login(){

  var user = $.trim($('#sign_username').val());

  var pass = $.trim($('#sign_password').val());


  if(user==""){
    layer.open({
      skin:'msg',
      content:'用户名不能为空',
      time:1.5
    });
    return false;
  }else if(pass==""){
    layer.open({
      skin:'msg',
      content:'密码不能为空',
      time:1.5
    });
    return false;
  }
  // }else{

  // 	$.ajax({
  // 		url:"",
  // 		type:"post",
  // 		dataType:"json",
  // 		data:{user:user,pass:pass},
  // 		async:true,
  // 		cache:false,
  // 		success:function(data){
  // 			console.log(data)
  // 		}
  // 	});
  // }


  return true;

}
/**
 *注册验证
 */
function register() {
    var email = $.trim($('#reg_username').val());
    var password = $.trim($("#reg_password").val());
    var password_confirm = $.trim($("#reg_password_r").val());
    var reg_email = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    // var phone = $.trim($(".phoneVal").val());
    // var captcha = $.trim($(".codeVal").val());
    //var agree = $(".agreeCheck").attr("checked");


   if (!reg_email.test(email) || email == "") {
      layer.open({
        skin:'msg',
        content:'请正确输入邮箱号',
        time:1.5
      });
        return false;
    } else if (password.length < 6 || password.length > 20 || password == "") {
      layer.open({
        skin:'msg',
        content:'请输入6位数密码',
        time:1.5
      });
        return false;
    }else if(password_confirm==""){
      layer.open({
        skin:'msg',
        content:'请再次输入密码',
        time:1.5
      });
        return false;

    } else if (password_confirm !== password) {

      layer.open({
        skin:'msg',
        content:'两次密码输入不一致',
        time:1.5
      });
        return false;
    }

    return true;
}


//

//添加商品数量
;(function ($){
    //基类
    function shopClass(ele,options){
        this.ele = ele;
        this.opts = $.extend({}, $.fn.shop.defaults,options);
        this.num=1;

    }
    //添加法法
    shopClass.prototype  = {
        init:function(){
            this.add();
            this.minus();
            this.mouseEvent();
        },
        //增加方法
        add:function(){

            var _this = this;

            $(_this.opts.add).on('click',function(){
                _this.num++;

                $(_this.opts["inputVal"]).val(parseInt(_this.num));
            });


        },
        //减少方法
        minus:function(){
            var _this = this;
            $(_this.opts.minus).on('click',function(){
                _this.num--;
                if(_this.num<1){
                    _this.num=1;
                    return;
                }else{
                    $(_this.opts["inputVal"]).val(_this.num)
                }

            });

        },
        //键盘事件
        mouseEvent:function(){
            var _this = this;
            $(document).on('keydown',function(e){
                var ev = e.keyCode;

                $(document).on('keyup',function(e){
                    ev = e.keyCode;
                    _this.num = $(_this.opts.inputVal).val();
                    if((ev>57&&ev<97 || ev<48 || ev>105)&&ev!=8){
                        $(_this.opts.inputVal).val(1);
                        return false;
                    }else if($(_this.opts.inputVal).val()==""){
                        $(_this.opts.inputVal).val(1);
                        return false;
                    }
                })

            });

        }

    }



    $.fn.shop = function(options){
        var startShop = new shopClass(this,options);
        startShop.init();

        return this;
    }
    //默认值
    $.fn.shop.defaults = {
        "container":".shop-choose-num",
        "add":".add-shop",
        "minus":".minus-shop",
        "inputVal":"#shop-num"
    }

})(jQuery);

//

function touchEvent(elem){

    $(document).on('touchstart',elem,function(){

        $(this).addClass('active');
    });
    $(document).on('touchmove',elem,function(){

        $(this).removeClass('active');
    });
    $(document).on('touchend',elem,function(){

        $(this).removeClass('active');
    });
}


//图片查看

;(function($){

    var photo = function(ele){

        this.ele= ele;

        this.init();
    }
    photo.prototype={
        init:function(){

            this.creatDom();
        },
        creatDom:function(){

            var photoDom = $('<div class="photo-wrap"></div>');
            var img = new Image();

            img.onload = function(){
                var pic = $('<img src="'+img.src+'" />');
                photoDom.html(pic);
                var h = pic.height();

               if(pic.width()>$(window).width()){
                   pic.width($(window).width());
                   pic.css({
                       "width":"100%",
                       "height":(pic.height()),
                       position:"absolute",
                       top:"50%",
                       left:"50%",
                       "margin-left":"-50%",
                       "margin-top":(-pic.height()/2),

                   });
               }
                pic.css({
                    "width":(pic.width()),
                    "height":(pic.height()),
                    position:"absolute",
                    top:"50%",
                    left:"50%",
                    "margin-left":(-pic.width()/2),
                    "margin-top":(-pic.height()/2),

                });



            }

            img.src = $(this.ele).attr('src');

            photoDom.css({
                position:"fixed",
                top:"0",
                left:"0",
                width:"100%",
                height:"100%",
                background:"rgba(0,0,0,.6)",
                "z-index":999,
                "text-align":"center"

            });


            $(window).resize(function(){

            });
            $('body').append(photoDom);
            if(photoDom){
                photoDom.css({
                    position:"fixed",
                    top:"0",
                    left:"0",
                    width:"100%",
                    height:"100%",
                    background:"rgba(0,0,0,.6)",
                    "z-index":999

                });
            }else{
                $('body').append(photoDom);
            }

            photoDom.on('click',function(){
                $(this).remove();
            });
        }
    }

    window.photo = photo;

})(jQuery);


$('.base_detail_imagebox img').on('click',function(){
    new photo($(this));
});



$(function() {
    FastClick.attach(document.body);


    $('.js-sort-btn').on('click',function(){
        $('.js_cc_pocowap').addClass('active');
        $('.base_body').hide(300);
    });
    $('.cc_back').on('click',function(){
        $('.js_cc_pocowap').removeClass('active');
        $('.base_body').show(300);
    });
    //显示侧边栏
      $('.cc_option').on('click',function(){
          $('.js-wrap').addClass('active');

          $('.overbase').show();

      });
      //隐藏侧边栏
      $('.js-wrap').on('click',function(){
        $('.js-wrap').removeClass('active');
          $('.overbase').hide();

      });

      //侧边栏
      $('.cc_panel_ul li').on('touchstart',function(){
        $(this).addClass('active');
      }).on('touchend',function(){
          $(this).removeClass('active');
      });



      //显示登陆注册
      $('.js-login-btn').on('click',function(){

          $('#sign').addClass('active');

          $('.base_body').hide();
      });

        //返回首页
      $('.cc_sign_back').on('click',function(){
          $('.js-sign-box').removeClass('active');
            $('.base_body').show();
      });

      //显示注册
      $('.js-reg-btn').on('click',function(){
        $('#reg').addClass('active');

      });



        //发布按钮
        //
        $('.publish-float-box').on('click',function(){

            $(this).children('.publish-float-btn').toggleClass('active');
            //  $('.publish-float-list').toggle();
            $('.publish-float-list li').toggleClass('active');
        });

        // 个人中心
        $(document).on('click','.header-save',function(){
            $(this).find('.down-list').toggleClass('active');
        });

        function _tab(elem,tarElem){
            this.elem = elem;

            this.tarElem = tarElem;
            var _this = this;
            $(this.elem).children().on('click',function(){
                var index = $(this).index();
                  $(this).addClass('active').siblings().removeClass('active');

                  $(_this.tarElem).children().eq(index).addClass('current').siblings().removeClass('current');

            });
        }


        new _tab('.person-tab','.person-tab-content');

        var tab2 = new _tab('.my-order-nav','.order-list-box');

        var  payTab = new _tab('.pay-number-list ul','.pay-number-list');


        var shoucang = new _tab('.collect-nav','.collect-content-box');


        // $('.header-save').on('click',function(){
        //     $('.down-list').toggleClass('active');
        // });

});
