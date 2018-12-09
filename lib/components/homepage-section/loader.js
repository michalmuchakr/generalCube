"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _loader = _interopRequireDefault(require("assets/loader.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Loader(_ref) {
  var hiddenLoader = _ref.hiddenLoader;
  return _react.default.createElement("div", {
    className: "loader ".concat(hiddenLoader && 'hidden')
  }, _react.default.createElement("div", {
    className: "loader_content"
  }, _react.default.createElement("img", {
    src: _loader.default,
    alt: "loader"
  }), _react.default.createElement("h2", null, "Loading")));
}

var _default = Loader;
exports.default = _default;