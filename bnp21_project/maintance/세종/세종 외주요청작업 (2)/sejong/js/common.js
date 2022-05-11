// 레이아웃
function fn_layout() {
  var header = $("#header"),
    btnMenu = header.find(".btnMenu"),
    btnClose = header.find(".btnClose"),
    gnb = header.find("#gnb"),
    depth01 = gnb.find(".menu > ul > li");
  depth02 = depth01.find("> ul");
  translation = gnb.find(".translation");
  btnSOpen = header.find(".btnSOpen");
  searchArea = header.find(".searchArea");

  // GNB
  $(window)
    .resize(function () {
      if ($(window).width() < 1160) {
        btnMenu.addClass("m");
        gnb.find(".menu").hide();
        depth01.addClass("more");
        depth02.find("> li").addClass("more");
        btnMenu.removeClass("on");
      } else {
        btnMenu.removeClass("m");
        depth01.removeClass("more");
        depth02.find("> li").removeClass("more");
      }
    })
    .resize();
  btnMenu.click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("m")) {
      gnb.fadeIn(100).addClass("open");
      depth02.find("> li").has("ul").addClass("arrow");
      gnb
        .find(".menu > ul > li.more > a")
        .off()
        .click(function (e) {
          e.preventDefault();
          if ($(this).parent().hasClass("curr")) {
            depth01.removeClass("curr");
            depth01.find("> ul").slideUp(200);
          } else {
            depth01.removeClass("curr");
            depth01.find("> ul").slideUp(200);
            $(this).parent().addClass("curr");
            $(this).siblings().slideDown(200);
          }
        });
      depth02
        .find("> li.more > a")
        .off()
        .click(function (e) {
          e.preventDefault();
          if ($(this).parent().hasClass("curr")) {
            depth02.find("> li").removeClass("curr");
            depth02.find("> li > ul").slideUp(200);
          } else {
            depth02.find("> li").removeClass("curr");
            depth02.find("> li > ul").slideUp(200);
            $(this).parent().addClass("curr");
            $(this).siblings().slideDown(200);
          }
        });
      $("html, body").css({ overflow: "hidden" });
    } else {
      if ($(this).hasClass("on")) {
        $(this).removeClass("on");
        gnb.find(".menu").slideUp(200);
        $(".dim").fadeOut(200, function () {
          $(this).remove();
        });
      } else {
        $(this).addClass("on");
        gnb.find(".menu").slideDown(200);
        $("#wrap").append("<p class='dim'></p>").find(".dim").fadeIn(200);
      }
      depth01.find("a").unbind("click");
      $("html, body").css({ "overflow-y": "auto" });
    }
  });
  btnClose.click(function (e) {
    e.preventDefault();
    gnb.removeClass("open").fadeOut(400);
    $("html, body").css({ "overflow-y": "auto" });
  });

  // 언어
  translation.find("> a").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      $(this).siblings().slideUp(200);
    } else {
      $(this).addClass("on");
      $(this).siblings().slideDown(200);
    }
  });

  // 검색영역
  btnSOpen.click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      searchArea.removeClass("open");
    } else {
      $(this).addClass("on");
      searchArea.addClass("open");
    }
  });
}

// 20-12-16 추가
function imgFrame(){
  var imgArea = $(".imgSize");
  imgArea.each(function(){
      var imgSrc = $(this).find("img").attr("src");
      $(this).css({
              "background" :" url(" + imgSrc + ") no-repeat",
              "background-size" : "100%",
              "background-position" : "center"
      });
  });
}
$(function () {
  /*****>>>>>>>>>> 공통 <<<<<<<<<<*****/
  /** 공통 호출 **/
  fn_layout(); //레이아웃 호출
  imgFrame();

  // 스킵네비
  $("a[href^='#']").click(function (evt) {
    var anchortarget = $(this).attr("href");
    $(anchortarget).attr("tabindex", -1).focus();
    $(anchortarget).removeAttr("tabindex");
  });
  if (window.location.hash) {
    $(window.location.hash).attr("tabindex", -1).focus();
  }
  var skipNav = $("#skipNav a");
  skipNav.focus(function () {
    skipNav.removeClass("on");
    $(this).addClass("on");
  });
  skipNav.blur(function () {
    skipNav.removeClass("on");
  });

  // 스크롤바
  $(".scroll").mCustomScrollbar();

  // 셀렉트박스
  var selectBox = $(".selectBox select");
  selectBox.change(function () {
    var selectName = $(this).children("option:selected").text();
    $(this).children("option:selected").attr("selected", true);
    $(this).children("option:selected").siblings("option").attr("selected", false);
    $(this).siblings("label").text(selectName);
  });
  selectBox.each(function () {
    var selectName = $(this).children("option:selected").text();
    $(this).siblings("label").text(selectName);
  });

  //국적 korea선택시 14세 미만 셀렉트 노출
  if ($(".ageLimit").length) {
    var countrySelect = $(".countrySelect select");
    countrySelect.change(function () {
      var state = $("#counSelect").children("option:selected").val();
      if (state == "korea") {
        $(".loginForm").find(".ageLimit").show();
      } else {
        $(".loginForm").find(".ageLimit").hide();
      }
    });
    countrySelect.each(function () {
      var state = $("#counSelect").children("option:selected").val();
      if (state == "korea") {
        $(".loginForm").find(".ageLimit").show();
      } else {
        $(".loginForm").find(".ageLimit").hide();
      }
    });
  }

  /*****>>>>>>>>>> 상세페이지 <<<<<<<<<<*****/
  // 컨텐츠 좌측메뉴
  $(".leftMenu .link").on("click", function () {
    $(".leftMenu ul .subLink").slideUp().parent().removeClass("active"), $(this).next().is(":visible") || $(this).next().slideDown().parent().addClass("active");
  });

  //리스트 카테고리(원형 4)
  var cateSwiper = new Swiper(".cateSwiper", {
    slidesPerView: 4,
    navigation: {
      nextEl: ".cate-swiper-button-next",
      prevEl: ".cate-swiper-button-prev",
    },
    breakpoints: {
      767: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
    },
  });
  //리스트 카테고리(사각 3)
  var txtCateSwiper = new Swiper(".txtCateSwiper", {
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
    },
  });
  //리스트 카테고리(사각 5)
  var txtCateSwiper02 = new Swiper(".txtCateSwiper02", {
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      767: {
        slidesPerView: "auto",
      },
    },
  });
  // 컨텐츠 리스트
  var listSwiper = new Swiper(".listSwiper", {
    slidesPerView: 4,
    spaceBetween: 12,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row",
    breakpoints: {
      767: {
        slidesPerView: 2,
        navigation: {
          nextEl: ".list-swiper-button-next",
          prevEl: ".list-swiper-button-prev",
        },
      },
    },
  });
  var listSwiper02 = new Swiper(".listSwiper02", {
    slidesPerView: 4,
    spaceBetween: 12,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row",
    breakpoints: {
      767: {
        slidesPerView: 2,
        navigation: {
          nextEl: ".list02-swiper-button-next",
          prevEl: ".list02-swiper-button-prev",
        },
      },
    },
  });

  //웹툰리스트 카테고리
  var conListCateSwiper = new Swiper(".conListCateSwiper", {
    slidesPerView: 7,
    breakpoints: {
      767: {
        slidesPerView: "auto",
        spaceBetween: 3,
      },
    },
  });

  //통합검색 카테고리 리스트
  var srchSwiper = new Swiper(".srchSwiper", {
    slidesPerView: 7,
    breakpoints: {
      767: {
        slidesPerView: "auto",
      },
    },
  });

  //나의 이모티콘 상단 이모티콘슬라이드
  var emoSwiper = new Swiper(".emoSwiper", {
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerGroup: 5,
    autoplay: {
      delay: 2500,
    },
    speed: 1500,
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: "auto",
      },
    },
  });
  $(".emoSwiper-pause").click(function () {
    emoSwiper.autoplay.stop();
    $(".emoSwiper-pause").removeClass("on");
    $(".emoSwiper-play").addClass("on");
  });
  $(".iemoSwiper-play").click(function () {
    emoSwiper.autoplay.start();
    $(".emoSwiper-play").removeClass("on");
    $(".emoSwiper-pause").addClass("on");
  });

  //연관동영상 리스트 세로길이
  var videoHeight = $(".videoList").outerHeight() - 40;
  var videoHeight02 = $(".videoList").outerHeight();
  var listTit = $(".videoList").find(".reListTit").height();

  $(".videoList")
    .find(".scroll")
    .css("height", videoHeight - listTit - 1);
  $(".addCateVideo .videoList")
    .find(".scroll")
    .css("height", videoHeight02 - listTit - 1);

  // 탭(페이지탭)
  var tabFunction = $(".tabArea, .findTab");
  tabFunction.each(function () {
    var btnTab = $(this).find("> ul li a"),
      tabBox = $(this).find(".tabContArea > div");

    btnTab.click(function (e) {
      e.preventDefault();
      var i = $(this).parent().index();
      btnTab.parent().removeClass("curr");
      tabBox.hide();
      $(this).parent().addClass("curr");
      tabBox.eq(i).show();
    });
  });

  //탭2(input 탭)
  var tabFunction = $(".tabWrap");
  tabFunction.each(function () {
    var btnTab = $(this).find(".checkboxWrap .checkbox"),
      tabBox = $(this).find(".tabBox > div");

    btnTab.click(function (e) {
      e.preventDefault();
      var i = $(this).index();
      btnTab.removeClass("curr");
      tabBox.hide();
      $(this).addClass("curr");
      $(this).find("input[type='checkbox'] + label").attr("checked");
      tabBox.eq(i).show();
    });
  });

  // 서브탭
  var tabFunction = $(".subTabArea");
  tabFunction.each(function () {
    var btnTab = $(this).find("> ul li a"),
      tabBox = $(this).find(".subTabContArea > div");

    btnTab.click(function (e) {
      e.preventDefault();
      var i = $(this).parent().index();
      btnTab.parent().removeClass("curr");
      tabBox.hide();
      $(this).parent().addClass("curr");
      tabBox.eq(i).show();
    });
  });

  //체크박스
  $(".checkboxWrap .checkbox").click(function () {
    if ($(this).find("input[type=checkbox]").is(":checked")) {
      $(this).find("input[type=checkbox]").attr("checked", true);
    } else {
      $(this).find("input[type=checkbox]").attr("checked", false);
    }
  });
  //라디오버튼
  $(".checkboxWrap .checkbox").click(function () {
    if ($(this).find("input[type=radio]").is(":checked")) {
      $(this).find("input[type=radio]").attr("checked", true);
      $(this).siblings(".checkbox").find("input[type=radio]").attr("checked", false);
      $(this).addClass("curr").siblings(".checkbox").removeClass("curr");
    } else {
      //$(this).find("input[type=radio]").attr("checked", false);
      $(this).removeClass("curr");
    }
  });

  //레퍼런스 리스트) 체크박스 전체선택
  $(".check-all").click(function () {
    $(".checkboxList .checkbox input").prop("checked", this.checked);
    $(".agree .checkbox input").prop("checked", this.checked);
  });

  //레퍼런스 리스트) 버튼클릭시 카테고리 선택 창 열림
  $(".cateOBtn").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".advancedSrch > div").slideUp(200);
    } else {
      $(this).addClass("active");
      $(".advancedSrch > div").slideDown(200);
    }
  });

  //모바일 셀렉트 탭
  var tabSelect = $(".tabSelect select");
  tabSelect.change(function () {
    var selectName = $(this).children("option:selected").text();
    $(this).siblings("label").text(selectName);
    var targetSelectNum = $(this).prop("selectedIndex");
    $(".tabContArea > div").eq(targetSelectNum).show();
    $(".tabContArea > div").eq(targetSelectNum).siblings("div").hide();
  });
  var tabSelect = $(".tabSelect select");
  tabSelect.change(function () {
    $(this).children("option:selected").attr("selected", true);
    $(this).children("option:selected").siblings("option").attr("selected", false);
  });

  // 아코디언
  var accordionList = $(".accoFunc"),
    btnAcco = accordionList.find("> ul > li > a");
  btnAcco.click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("on")) {
      btnAcco.removeClass("on").parents("li").removeClass("on");
      btnAcco.siblings("div").slideUp(200);
    } else {
      btnAcco.removeClass("on").parents("li").removeClass("on");
      btnAcco.siblings("div").slideUp(200);
      $(this).addClass("on").parents("li").addClass("on");
      $(this).siblings("div").slideDown(200);
    }
    fn_tree();
  });

  // 체크박스 + 아코디언 (개인정보동의)
  var checkAcco = $(".checkAccoFunc"),
    checkBtnAcco = checkAcco.find("> ul > li > span > a");
  checkBtnAcco.click(function (e) {
    e.preventDefault();
    if ($(this).parents("span").hasClass("on")) {
      checkBtnAcco.parents("span").removeClass("on").parents("li").removeClass("on");
      checkBtnAcco.parents("span").siblings("div").slideUp(200);
    } else {
      checkBtnAcco.parents("span").removeClass("on").parents("li").removeClass("on");
      checkBtnAcco.parents("span").siblings("div").slideUp(200);
      $(this).addClass("on").parents("span").addClass("on");
      $(this).parents("span").siblings("div").slideDown(200);
    }
    fn_tree();
  });

  // 아코디언 전부닫기/열기 버튼
  var detailaAcco = $(".processDetail .accoFunc"),
    deAccoList = detailaAcco.find("> ul > li > a").siblings("div"),
    detailBtnAcco = detailaAcco.find(".accoOpen");

  $(".accoOpen").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").children("span").text("전부열기");
      detailaAcco.find("> ul > li").removeClass("on");
      deAccoList.slideUp(200);
    } else {
      $(this).addClass("active").children("span").text("전부닫기");
      detailaAcco.find("> ul > li").addClass("on");
      deAccoList.slideDown(200);
    }
  });

  //온라인테스트 페이지 지원브라우저 팝업 열기
  $(".browserSurppot").click(function (e) {
    e.preventDefault();
    $(".infoPop").css("display", "block");
  });
  $(".infoPop_close_btn").click(function (e) {
    e.preventDefault();
    $(".infoPop").css("display", "none");
  });

   //온라인테스트 페이지 지원브라우저 팝업 열기 20-12-14
   $("#iosysApp .clearfix span:nth-child(2)").click(function (e) {
    e.preventDefault();
    $(".infoPop").css("display", "block");
    });
    $(".infoPop_close_btn").click(function (e) {
        e.preventDefault();
        $(".infoPop").css("display", "none");
    });

  //댓글창 스티커 리스틑 박스
  $(".sticker").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      $(".emoList").slideUp(200);
      $(".wbBottom").css("height", $(".btnBar").outerHeight());
    } else {
      $(this).addClass("on");
      $(".emoList").slideDown(200);
      $(".wbBottom").css("height", $(".btnBar").outerHeight(true) + $(".emoList > ul").outerHeight(true));
      console.log($(".emoList > ul").outerHeight(true));
    }
  });

  //로그인 input hover 효과
  $(".loginWrap .inputList input").click(function (e) {
    $(this).parent("p").addClass("on");
    $(this).parent("p").siblings("p").removeClass("on");
  });
  //회원가입 14세미만 셀렉트클릭시 추가정보입력 노출
  if ($(".ageLimit").length) {
    $(".addInfoBtn .checkbox").click(function (e) {
      if ($(this).hasClass("show")) {
        $(".formAddInfo").slideDown(200);
      } else {
        $(".formAddInfo").slideUp(200);
      }
    });
  }

  //마이페이지 캐릭터 지정 팝업 캐릭터 선택
  $(".layerPop  .iconList a").click(function (e) {
    $(this).addClass("active").parents("li").siblings("li").children("a").removeClass("active");
  });

  //마이페이지 마일리지 적립 캘린더
  calendar = $("#calendar").fullCalendar({
    fixedWeekCount: false,
    showNonCurrentDates: true,
    height: "auto",
    header: {
      left: "",
      center: "prevYear prev title next nextYear",
      right: "today",
    },
    locale: "ko",
  });
  $(".fc-day").click(function () {
    var modal = $(".mileageList").html();
    $(this).addClass("show").html(modal);
  });

  // 20-12-14

    


});



//k-pop 컨텐츠 컨트롤버튼
$(window).scroll(function () {
  if ($(".detailTit").length) {
    var windowScroll = $(window).scrollTop() + 30,
      detailTit = $(".detailTit").position().top + 143;
    $(window)
      .resize(function () {
        var width = $(window).width();
        if (width < 768) {
          if ($(window).scrollTop() > detailTit) {
            $(".fixedBtn").css("top", windowScroll + "px");
          } else {
            $(".fixedBtn").css("top", "353px");
          }
        } else {
          if ($(window).scrollTop() > detailTit) {
            $(".fixedBtn").css("top", windowScroll + "px");
          } else {
            $(".fixedBtn").css("top", "290px");
          }
        }
      })
      .resize();
  }
});

$(window)
  .resize(function () {
    var width = $(window).width();
    if (width < 768) {
      //번역 아이콘 리스트
      var tranSlider = new Swiper(".tranSlider", {
        slidesPerView: 4,
        spaceBetween: 5,
      });
      // 모바일 게시판에서 비밀글일때 자물쇠이미지 삽입
      if ($(".dSubject").find(".subject").hasClass("lock")) {
        $(".dSubject").find(".lock").append("<img src='../images/contents/ico_table_lock.png'>");
      }
    }
  })
  .resize();
// 레이어 팝업
function fn_layer(e, s) {
  var pdt = $("." + e)
      .find(".inBox")
      .css("padding-top")
      .replace(/[^-\d\.]/g, ""),
    pdb = $("." + e)
      .find(".inBox")
      .css("padding-bottom")
      .replace(/[^-\d\.]/g, "");
  $("." + e)
    .fadeIn(200)
    .addClass("on");
  $("body, html").css({ overflow: "hidden" });
  $(window)
    .resize(function () {
      $("." + e)
        .find(".inBox")
        .css({ width: s + "px" });
      $("." + e)
        .find(".cont")
        .css({ "max-height": $("." + e).height() - 6 - (Number(pdt) + Number(pdb)) });
    })
    .resize();
}
// 레이어 팝업 닫기
function fn_layer_close(t) {
  $(t).closest(".inBox").parent().fadeOut(200).removeClass("on");
  $("body, html").css({ overflow: "auto" });
}
