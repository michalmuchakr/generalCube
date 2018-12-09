"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Lang() {
  return _react.default.createElement("div", {
    className: "headTitle__lang btn-group"
  }, _react.default.createElement("button", {
    type: "button",
    className: "btn btn-outline-secondary dropdown-toggle general-nav-element lang-btn",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "English"), _react.default.createElement("div", {
    className: "dropdown-menu dropdown-menu-right"
  }, _react.default.createElement("button", {
    className: "dropdown-item",
    type: "button"
  }, "Polish"), _react.default.createElement("button", {
    className: "dropdown-item",
    type: "button"
  }, "Russian"), _react.default.createElement("button", {
    className: "dropdown-item",
    type: "button"
  }, "German")));
}

var _default = Lang;
exports.default = _default;