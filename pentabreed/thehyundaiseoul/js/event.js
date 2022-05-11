"use strict";

/* JS */
var LINK_PC = 'https://www.ehyundai.com/newPortal/SN/SN_0201000.do?evntCrdCd=E4002102066040&category=event&page=1&noleft=Y';
var LINK_MO = 'https://bit.ly/39Iwpq3';
var mobileAgain = false;
var mylink = LINK_MO;

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  var target = document.querySelectorAll('.mass__rolling__contents');
  target.forEach(function (item) {
    item.classList.add('animation-on-going');
  });
} // 리사이즈 애니메이션 재시작


function forceCssKeyframes() {
  var target = document.querySelectorAll('.mass__rolling__contents');
  target.forEach(function (item) {
    item.classList.remove('animation-on-going');
    void item.offsetWidth;
    item.classList.add('animation-on-going');
  });
} // 링크 변경


function linkAdapt(link) {
  var links = document.querySelectorAll('.link-adaptable');
  links.forEach(function (item) {
    return item.href = link;
  });
} // 초기 로드 이벤트 시작


App.bindCallback(['load'], function () {
  App.sizeMode === 0 ? mylink = LINK_MO : mylink = LINK_PC;
  init();
  linkAdapt(mylink);
});
App.bindCallback(['resize'], function () {
  if (App.sizeMode === 0) {
    if (!mobileAgain) forceCssKeyframes();
    mobileAgain = true;
    mylink = LINK_MO;
  } else {
    forceCssKeyframes();
    mobileAgain = false;
    mylink = LINK_PC;
  }

  linkAdapt(mylink);
});