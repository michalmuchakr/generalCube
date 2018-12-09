"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Nav() {
  return _react.default.createElement("nav", null, _react.default.createElement("ul", null, _react.default.createElement("li", {
    className: "col-12 col-md-3 p-5 scollLink",
    "data-scroll": "#aboutSection"
  }, _react.default.createElement("span", {
    className: "fa fa-sliders",
    "aria-hidden": "true"
  }), _react.default.createElement("span", null, "O nas")), _react.default.createElement("li", {
    className: "col-12 col-md-3 p-5 scollLink",
    "data-scroll": "#howWeDoIt"
  }, _react.default.createElement("span", {
    className: "fa fa-cogs",
    "aria-hidden": "true"
  }), _react.default.createElement("span", null, "Technologie")), _react.default.createElement("li", {
    className: "col-12 col-md-3 p-5 scollLink",
    "data-scroll": "#projects"
  }, _react.default.createElement("span", {
    className: "fa fa-paint-brush",
    "aria-hidden": "true"
  }), _react.default.createElement("span", null, "Portfolio")), _react.default.createElement("li", {
    className: "col-12 col-md-3 p-5 scollLink",
    "data-scroll": "#contact"
  }, _react.default.createElement("span", {
    className: "fa fa-paper-plane",
    "aria-hidden": "true"
  }), _react.default.createElement("span", null, "Kontakt"))));
}

var _default = Nav;
exports.default = _default;