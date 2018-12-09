"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeroPage() {
  return _react.default.createElement("div", {
    className: "hero-page"
  }, _react.default.createElement("h1", null, "Hero Page"));
}

var _default = HeroPage;
exports.default = _default;