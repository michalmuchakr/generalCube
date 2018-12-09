"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SocialBtns(_ref) {
  var socialBtns = _ref.socialBtns;
  return _react.default.createElement("div", {
    className: "socialButons"
  }, socialBtns.map(function (item, idx) {
    return _react.default.createElement("a", {
      className: "socialButons-link",
      "data-aos": "fade-zoom-in",
      "data-aos-delay": "".concat(eval(idx * 500)),
      href: item.type ? "mailto:".concat(item.path) : item.path,
      key: idx,
      target: "_blank",
      rel: "noopener"
    }, _react.default.createElement("img", {
      src: item.ico,
      alt: "logo",
      className: "w-100"
    }));
  }));
}

var _default = SocialBtns;
exports.default = _default;