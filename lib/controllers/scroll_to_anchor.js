"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var scrollToAnchor = {
  init: function init(e) {
    e.stopPropagation();
    var targetOffsetTop = document.querySelectorAll(event.target.getAttribute('data-anchor'))[0].offsetTop - 100;
    var scrollOptions = {
      left: 0,
      top: targetOffsetTop,
      behavior: 'smooth'
    };
    window.scrollTo(scrollOptions);
  }
};
var _default = scrollToAnchor;
exports.default = _default;