"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PortfolioCard(_ref) {
  var item = _ref.item,
      idx = _ref.idx;
  var containList = item.features || item.inColaboration;
  return _react.default.createElement("div", {
    className: "tab-pane fade ".concat(idx === 0 ? 'active show' : ''),
    id: item.pill,
    role: "tabpanel",
    "aria-labelledby": item.pill
  }, _react.default.createElement("div", {
    className: "portfolio-card card"
  }, containList && _react.default.createElement("div", {
    className: "portfolio-card-collapse collapse",
    id: "funcionalityCollapse"
  }, _react.default.createElement("ul", {
    className: "list-group list-group-flush"
  }, item.features && item.features.map(function (item, idx) {
    return _react.default.createElement("li", {
      key: idx,
      className: "list-group-item"
    }, item);
  }), item.inColaboration && _react.default.createElement("li", {
    className: "list-group-item"
  }, _react.default.createElement("a", {
    href: item.inColaboration.link
  }, "Developed with ", item.inColaboration.companyName, " ")))), _react.default.createElement("h5", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, _react.default.createElement("span", null, item.title), _react.default.createElement("button", {
    className: "portfolio-card-btn btn btn-outline-dark ml-auto rounded-0",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#funcionalityCollapse",
    "aria-expanded": "false",
    "aria-controls": "funcionalityCollapse"
  }, "Functionality included"), _react.default.createElement("a", {
    className: "portfolio-card-btn btn btn-outline-dark rounded-0",
    href: item.link,
    role: "button",
    target: "_blank",
    rel: "noopener"
  }, item.live ? 'Visit page' : 'GIT repository', " ")), _react.default.createElement("div", {
    className: "portfolio-img-wrap shadow"
  }, _react.default.createElement("img", {
    className: "card-img-top",
    src: item.imgPath,
    alt: "Card image cap"
  })), item.desc && _react.default.createElement("div", {
    className: "card-body"
  }, item.desc)));
}

var _default = PortfolioCard;
exports.default = _default;