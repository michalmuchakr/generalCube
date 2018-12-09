"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AboutCard() {
  return _react.default.createElement("div", {
    className: "about-card card my-5"
  }, _react.default.createElement("div", {
    className: "about-card-body card-body"
  }, _react.default.createElement("div", {
    className: "about-card__article col-md-6",
    "data-aos": "fade-zoom-in"
  }, _react.default.createElement("p", null, _react.default.createElement("strong", null, "General Cube"), " has been started up in purpose of knowledge sharing, websites and web application development in early 2014. In case of freelance activity and membership of IT companies and software houses as Front-end or UI developer, there was, and fortunatelly still is, an opportunity to cooperate with great experts and take part in outnumber projects in many categories, such as e-commerce webshops, personal websites, telecommunication industry app, education application, web chat application, insurence single-page application."), _react.default.createElement("p", null, "Always choosing technology that solves a problem, not the ", _react.default.createElement("i", null, "trendy"), " one. Always working smart not hard."))), _react.default.createElement("div", {
    className: "about__list list-group"
  }, _react.default.createElement("div", {
    className: "about__list-item list-group-item list-group-item-action flex-column align-items-start active",
    "data-aos": "fade-left"
  }, _react.default.createElement("div", {
    className: "d-flex w-100 justify-content-between"
  }, _react.default.createElement("h5", {
    className: "about__list-title"
  }, "Modern applications and websites")), _react.default.createElement("p", {
    className: "about__list-paragraph"
  }, "Based on up-to-date technologies we could build the solution from scratch or develop existing one.")), _react.default.createElement("div", {
    className: "about__list-item list-group-item list-group-item-action flex-column align-items-start",
    "data-aos": "fade-left",
    "data-aos-delay": 100
  }, _react.default.createElement("div", {
    className: "d-flex w-100 justify-content-between"
  }, _react.default.createElement("h5", {
    className: "mb-1"
  }, "UI & UX implementation")), _react.default.createElement("p", {
    className: "mb-1"
  }, "We focus on accessibility and useability of product during the whole development process.")), _react.default.createElement("div", {
    className: "about__list-item list-group-item list-group-item-action flex-column align-items-start",
    "data-aos": "fade-left",
    "data-aos-delay": 200
  }, _react.default.createElement("div", {
    className: "d-flex w-100 justify-content-between"
  }, _react.default.createElement("h5", {
    className: "mb-1"
  }, "Single page applications")), _react.default.createElement("p", {
    className: "mb-1"
  }, "Single paged application developed using React JS library or Backbone / Marionette framework are powerful tools for building great applications.")), _react.default.createElement("div", {
    className: "about__list-item list-group-item list-group-item-action flex-column align-items-start",
    "data-aos": "fade-left",
    "data-aos-delay": 300
  }, _react.default.createElement("div", {
    className: "d-flex w-100 justify-content-between"
  }, _react.default.createElement("h5", {
    className: "mb-1"
  }, "Rest API integration")), _react.default.createElement("p", {
    className: "mb-1"
  }, "Javascript based application could be easily integrated with any REST Api. Also Node JS and Express gives opportunity to build complex.")), _react.default.createElement("div", {
    className: "about__list-item list-group-item list-group-item-action flex-column align-items-start",
    "data-aos": "fade-left",
    "data-aos-delay": 400
  }, _react.default.createElement("div", {
    className: "d-flex w-100 justify-content-between"
  }, _react.default.createElement("h5", {
    className: "mb-1"
  }, "Cross browser and device compatibility")), _react.default.createElement("p", {
    className: "mb-1"
  }, "Support of all browser always challenge. Application should looks well and be compatible with every device whatever browser user choose.")), _react.default.createElement("div", {
    className: "about__list-item list-group-item list-group-item-action flex-column align-items-start",
    "data-aos": "fade-left",
    "data-aos-delay": 500
  }, _react.default.createElement("div", {
    className: "d-flex w-100 justify-content-between"
  }, _react.default.createElement("h5", {
    className: "mb-1"
  }, "Responsive design")), _react.default.createElement("p", {
    className: "mb-1"
  }, "In conjunction with outnumber amount of users browse web using smartphones, it is a good habit to prepare application or website for those users who prefer searching web that way."))));
}

var _default = AboutCard;
exports.default = _default;