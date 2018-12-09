"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Accordion(_ref) {
  var id = _ref.id,
      items = _ref.items;
  return _react.default.createElement("div", {
    className: "accordion mt-3",
    id: id
  }, items.map(function (item, index) {
    return _react.default.createElement("div", {
      className: "card",
      key: index
    }, _react.default.createElement("div", {
      className: "card-header",
      id: "headingOne"
    }, _react.default.createElement("h5", {
      className: "mb-0"
    }, _react.default.createElement("button", {
      className: "btn btn-link",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseOne",
      "aria-expanded": "true",
      "aria-controls": "collapseOne"
    }, item.title))), _react.default.createElement("div", {
      id: "collapseOne",
      className: "collapse ".concat(index === 0 ? 'show' : ''),
      "aria-labelledby": "headingOne",
      "data-parent": "#".concat(id)
    }, _react.default.createElement("div", {
      className: "card-body"
    }, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")));
  }));
}

var _default = Accordion;
exports.default = _default;