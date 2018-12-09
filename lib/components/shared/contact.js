"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _location = _interopRequireDefault(require("assets/location.png"));

var _administrator = _interopRequireDefault(require("assets/administrator.png"));

var _mail = _interopRequireDefault(require("assets/mail.png"));

var _call_incomming = _interopRequireDefault(require("assets/call_incomming.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Contact() {
  return _react.default.createElement("div", {
    id: "contact",
    className: "contact"
  }, _react.default.createElement("div", {
    className: "headTitle-content"
  }, _react.default.createElement("h2", {
    className: "general-title"
  }, "General Cube"), _react.default.createElement("p", null, "Modern applications and websites.")), _react.default.createElement("div", {
    className: "contact-card__tab"
  }, _react.default.createElement("div", {
    className: "contact-card__tab__img-wrap"
  }, _react.default.createElement("img", {
    src: _location.default,
    alt: "location"
  })), _react.default.createElement("div", {
    className: "contact-card__tab__descript"
  }, _react.default.createElement("h3", {
    className: "contact-card__tab__title"
  }, "Poland"), _react.default.createElement("h4", {
    className: "contact-card__tab__sub-title"
  }, "Ma\u0142opolska, Krak\xF3w"))), _react.default.createElement("div", {
    className: "contact-card__tab"
  }, _react.default.createElement("div", {
    className: "contact-card__tab__img-wrap"
  }, _react.default.createElement("img", {
    src: _administrator.default,
    alt: "administrator"
  })), _react.default.createElement("div", {
    className: "contact-card__tab__descript"
  }, _react.default.createElement("h3", {
    className: "contact-card__tab__title"
  }, "Micha\u0142 Mucha"), _react.default.createElement("h4", {
    className: "contact-card__tab__sub-title"
  }, "UI Developer"))), _react.default.createElement("div", {
    className: "contact-card__tab"
  }, _react.default.createElement("div", {
    className: "contact-card__tab__img-wrap"
  }, _react.default.createElement("img", {
    src: _mail.default,
    alt: "mail"
  })), _react.default.createElement("h3", {
    className: "contact-card__tab__title"
  }, "michal.mucha.kr@gmail.com")), _react.default.createElement("div", {
    className: "contact-card__tab"
  }, _react.default.createElement("div", {
    className: "contact-card__tab__img-wrap"
  }, _react.default.createElement("img", {
    src: _call_incomming.default,
    alt: "phone"
  })), _react.default.createElement("h3", {
    className: "contact-card__tab__title"
  }, "+48 784 085 059")));
}

var _default = Contact;
exports.default = _default;