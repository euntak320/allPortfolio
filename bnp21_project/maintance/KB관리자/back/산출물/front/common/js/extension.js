/*******************************************************************************
 * 파 일 명 : extension.js
 * 작 성 자 : ohy
 * 작 성 일 : 2019-10-02
 * 기    능 : interaction script
 ******************************************************************************/
$(function(){
    var front = {
        winW : null,
        winH : null,
        st : null,
        bcFlag : false,
        bcTarget:null,
        scrollStats:0,
        datepicker:false,

    	init : function(){
            front.setPay = ($('.setPayTop').length > 0) ? true : false;
            front.resultIs = ($('.resultBox.type3').length > 0) ? true : false;

            front.scroll();
            front.common.tab();
            front.common.accordion();
            front.common.toggle();

            front.resultBox();

            setTimeout(function(){front.main();},0);
    	},

    	scroll : function(){
           var _win = $(window),
               _wrap = $("#wrap");

    	   front.st = _win.scrollTop();
           (front.st > 10) ? _wrap.addClass('fixed') : _wrap.removeClass('fixed');

           if(front.setPay){
               var _headH = $("#header").height(),
                   _setT = $(".setPayTop").offset().top,
                   _setV = _setT - _headH;
               (front.st >= (_setV)) ? $(".setPayManBox .setPayTop").addClass('fixed') : $(".setPayManBox .setPayTop").removeClass('fixed');
           }

    	},

    	common : {
               tab : function(){
                      $(".tabAct").each(function(){
                          var _this =$(this),
                              _id = _this.find(".on a").attr("data-id");
                          $("#" + _id).addClass("dpb").siblings(".tabCnt").removeClass("dpb");
                      });

                      $(".tabMenu li a").on("click", function(){
                          var _this = $(this);
                          _this.parent().addClass("on").siblings("li").removeClass("on");
                      });

                      $(".tabAct li a").on("click", function(){
                          var _this = $(this),
                              _id = _this.attr("data-id");
                          $("#" + _id).addClass("dpb").siblings(".tabCnt").removeClass("dpb");
                      });
                  },

                  accordion : function(){
                      $(".accAct .accLi.open .accCnt").each(function(){
                          $(this).css("display","block");
                      });

                      $(".accAct .accBtn").on("click", function(){
                          var _this = $(this),
                              _parent = _this.closest(".accLi"),
                              _accLi = _this.closest(".accLi").siblings(".accLi"),
                              _accTit = _accLi.find(".accTit");

                              if(!_parent.is(".open")) {
                                  _parent.toggleClass("on").siblings(".accLi").removeClass("on");
                                  _this.closest(".accTit").toggleClass("on").next(".accCnt").slideToggle();
                                  _accTit.removeClass("on");
                              }else{
                                  _parent.removeClass("open").find(".accCnt").slideUp();
                              }

                              $(_accLi).each(function(){
                                  var _this = $(this);
                                  (!_this.is(".open")) ? _this.find(".accCnt").slideUp() : '';
                              });
                      });

                  },

                  toggle : function(){
                      $(".toggAct .toggBtn").on("click", function(){
                          $(this).closest(".toggTit").toggleClass("on").next(".toggCnt").toggle();
                      });
                  },

            },

        allMenu : {
            open:function(){
                $(".allMenuWrap").animate({right: 0}, 400);
                $(".allMenuWrap .allCnt").on("scroll", function(){
                    var _value = $(this).scrollTop(),
                        _target = $(".allMenuWrap");
                    (_value  > 0) ? _target.addClass('on') : _target.removeClass('on');
                });
                $("body").append("<div class='allDim'></div>").find(".allDim").fadeIn();
            },
            close:function(){
                $(".allMenuWrap").animate({right:-100+"%"}, 400);
                $(".allDim").fadeOut(500, function(){$(".allDim").remove();});
            }
        },

        resultBox : function(){
               var _headerHeight = $("#header").innerHeight();
               var _btmHeight = $(".btmBtnWrap").innerHeight();
               var _padding = _headerHeight+_btmHeight + 1;
               var _winHeight = $(document).innerHeight() - _padding;
               var _conHeight = $(".resultBox .in").innerHeight();
               if(_winHeight < _conHeight){
                   $(".resultBox").addClass("rel");
               }else{
                   $(".resultBox").removeClass("rel");
               }
        },

        main : function(){
            var _headerHeight = $("#header").innerHeight();
            var _useHeight = $(".main .useCashInfo").innerHeight();
            var _btmHeight = $(".mainBanWrap .item").innerHeight();
            var _copyHeight = $(".copyright").innerHeight();
            var _padding = _headerHeight+_useHeight+_btmHeight+_copyHeight + 1;
            var _winHeight = $(document).innerHeight() - _padding;
            var _conHeight = $(".mainVbIn").innerHeight();

            if(_winHeight < _conHeight){
                $(".main").addClass("rel");
            }else{
                $(".main").removeClass("rel");
            }
        },


   };

   front.init();


    /* ***** layout ***** */



    /* ***** content ***** */
    $("#header .btnNavi.menu").on("click", function(){
        front.allMenu.open();
    });

    $(".allMenuWrap .btnNavi.close").on("click", function(){
        front.allMenu.close();
    });



	/* ***** common ***** */
	$(document).on("click", "a[href='#'], a[href='#none']", function(e){e.preventDefault();});

    /* window scrolling */
    $(window).scroll(function() {
    	front.scroll();
    });

    $(".textareaWrap .textarea").on("focusin", function(){
        $(this).closest(".textareaWrap").addClass("on");
    }).on("focusout", function(){
        $(this).closest(".textareaWrap").removeClass("on");
    });



    /* ***** content ***** */
    if($(".vbSlider .item.on .bankLogo img").length > 0) {
        var _this = $(".vbSlider .item.on .bankLogo img");
        _this.attr("src", _this.attr("src").replace("_off.png", "_on.png"));
    };

    if($(".vbSlider .item").length == 1) {
        $(".vbSlider .item").addClass("one");
        $(".vbWrap .slick-nav").remove();
    };

    $(".vbSlider .btn.star").on("click", function(){
        var _this = $(this),
            _item = _this.closest(".item"),
            _logo = _item.find(".bankLogo img"),
            _onLogo = $(".vbSlider .item.on .bankLogo img"),
            _url1 = _onLogo.attr("src").replace("_on.png", "_off.png"),
            _url2 = _logo.attr("src").replace("_off.png", "_on.png");

        _onLogo.attr("src", _url1);
        _item.addClass("on").find(".bankLogo img").attr("src", _url2);
        _this.closest(".slick-slide").siblings(".slick-slide").find(".item").removeClass("on");

    });

    $(".intFocsUl .liForm .input").on("focus", function(){
        var _parent = $(this).closest(".liForm");
        _parent.addClass("on");
    }).on("focusout", function(){
        var _parent = $(this).closest(".liForm");
        _parent.removeClass("on");
    });


    /* ** 간편설정 ** */
    /* 결제수단관리 */
    $(".btnTxt.modi").on("click", function(){
        var _wrap = $(".setCardList");
        _wrap.toggleClass("modi");
        (_wrap.is(".modi")) ? $('.setCardList .li').arrangeable({dragSelector: '.dragBtn'}) : '';
    });

    $(".setPayManBox .setPayTop .btnTxt.modi").on("click", function(){
        $(this).closest(".setPayManBox").addClass("on");
    });

    $(".setPayManBox .setPayTop .btnTxt.canc").on("click", function(){
        $(this).closest(".setPayManBox").removeClass("on");
    });


    /* ** 결제 ** */
    $(".moreWrap").on("click", function(){
        var _parent = $(this).parent();
        $(this).toggleClass("on");
    });

    if($(".paySlider .item.on").length > 0) {
        var _this = $(".paySlider .item.on .bankLogo img");
        _this.attr("src", _this.attr("src").replace("_off.png", "_on.png"));
    };

    $(".paySlider .item").on("click", function(){
        var _this = $(this),
            _logo = _this.find(".bankLogo img"),
            _onLogo = $(".paySlider .item.on .bankLogo img")
            _url1 = _onLogo.attr("src").replace("_on.png", "_off.png"),
            _url2 = _logo.attr("src").replace("_off.png", "_on.png"),
            _num = _this.closest(".slick-slide").attr("data-slick-index");

        _onLogo.attr("src", _url1);
        _logo.attr("src", _url2);
        _this.addClass("on").closest(".slick-slide").siblings(".slick-slide").find(".item").removeClass("on");

        $('.paySlider').slick('slickGoTo', _num);
    });

    $(".resultBox .moreWrap").on("click", function(){
        front.resultBox();
    });



	//jquery end
});
