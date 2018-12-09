"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _test = _interopRequireDefault(require("assets/test.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Carousel(_ref) {
  var id = _ref.id,
      images = _ref.images;
  return _react.default.createElement("div", {
    id: id,
    className: "carousel slide",
    "data-ride": "carousel"
  }, _react.default.createElement("ol", {
    className: "carousel-indicators"
  }, images.map(function (_it, _idx) {
    return _react.default.createElement("li", {
      "data-target": "#".concat(id),
      "data-slide-to": _idx,
      className: _idx === 0 ? 'active' : '',
      key: _idx
    });
  })), _react.default.createElement("div", {
    className: "carousel-inner"
  }, images.map(function (item, _idx) {
    return _react.default.createElement("div", {
      className: "carousel-item".concat(_idx === 0 ? ' active' : '', " "),
      key: _idx
    }, _react.default.createElement("img", {
      className: "d-block w-100",
      src: item.imgPath,
      alt: "First slide"
    }));
  })), images.length > 1 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("a", {
    className: "carousel-control-prev",
    href: "#".concat(id),
    role: "button",
    "data-slide": "prev"
  }, _react.default.createElement("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true"
  }), _react.default.createElement("span", {
    className: "sr-only"
  }, "Previous")), _react.default.createElement("a", {
    className: "carousel-control-next",
    href: "#".concat(id),
    role: "button",
    "data-slide": "next"
  }, _react.default.createElement("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true"
  }), _react.default.createElement("span", {
    className: "sr-only"
  }, "Next"))));
}

var _default = Carousel;
exports.default = _default;