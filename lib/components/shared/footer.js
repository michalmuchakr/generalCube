"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _contact = _interopRequireDefault(require("./contact"));

var _scroll_to_anchor = _interopRequireDefault(require("controllers/scroll_to_anchor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer() {
  return _react.default.createElement("footer", {
    className: "footer"
  }, _react.default.createElement("div", {
    className: "col-9 mx-auto my-5"
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-md-6"
  }, _react.default.createElement("h4", null, "Sitemap"), _react.default.createElement("ul", {
    className: "list-group list-group-flush footer-column"
  }, _react.default.createElement("li", {
    className: "list-group-item footer-item",
    "data-anchor": "#about",
    onClick: function onClick(e) {
      return _scroll_to_anchor.default.init(e);
    }
  }, "About"), _react.default.createElement("li", {
    className: "list-group-item footer-item",
    "data-anchor": "#about",
    onClick: function onClick(e) {
      return _scroll_to_anchor.default.init(e);
    }
  }, "Technologies"), _react.default.createElement("li", {
    className: "list-group-item footer-item",
    "data-anchor": "#portfolio",
    onClick: function onClick(e) {
      return _scroll_to_anchor.default.init(e);
    }
  }, "Portfolio"), _react.default.createElement("li", {
    className: "list-group-item footer-item"
  }, "Blog"))), _react.default.createElement("div", {
    className: "col-md-6"
  }, _react.default.createElement(_contact.default, null)))));
}

var _default = Footer;
exports.default = _default;