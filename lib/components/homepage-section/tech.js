"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tech = _interopRequireDefault(require("assets/tech.svg"));

var _webpack = _interopRequireDefault(require("assets/webpack.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tech() {
  var tech = [{
    ico: _webpack.default,
    title: 'HTML 5',
    cardTxt: 'Preprocessors such a JSX, HAML, Handlebars, JQuery templates.'
  }, {
    ico: _webpack.default,
    title: 'Javascript',
    cardTxt: 'Vanila JS ECMAScript version 6 and 5, Coffee Script, JQuery.'
  }, {
    ico: _webpack.default,
    title: 'CSS',
    cardTxt: 'Preprocessors such a SASS, SCSS, LESS.'
  }, {
    ico: _webpack.default,
    title: 'Ajax',
    cardTxt: 'Asynchronous requests to connect Application with REST API.'
  }, {
    ico: _webpack.default,
    title: 'React & Redux',
    cardTxt: 'Powerfull javascript libary and global state managment.'
  }, {
    ico: _webpack.default,
    title: 'Backbone',
    cardTxt: 'Javascript libary to build sigle page applications.'
  }, {
    ico: _webpack.default,
    title: 'Webpack',
    cardTxt: 'Module boundler for Javascript helps organize modern applications.'
  }, {
    ico: _webpack.default,
    title: 'Node JS',
    cardTxt: 'Cross-platform environment Javascript that executes code outside of browser.'
  }, {
    ico: _webpack.default,
    title: 'Express Js',
    cardTxt: 'Standard server framework for NodeJS hepls build JavaScript based API server.'
  }, {
    ico: _webpack.default,
    title: 'Mongo DB',
    cardTxt: 'Document oriented, NoSQL database uses JSON-like documents and schemas.'
  }, {
    ico: _webpack.default,
    title: 'Github',
    cardTxt: 'Version-control system, that organize team cooperation on shared codebase.'
  }, {
    ico: _webpack.default,
    title: 'Photoshop',
    cardTxt: 'Raster graphic editor developed by Adobe, comon tool for cuting psd files.'
  }];
  return _react.default.createElement("div", {
    id: "tech",
    className: "tech col-xl-8 mx-auto"
  }, _react.default.createElement("h2", {
    className: "general-sub-title"
  }, "Technologies used in projects"), _react.default.createElement("div", {
    className: "col-12"
  }, _react.default.createElement("div", {
    className: "row d-flex justify-content-between align-items-center"
  }, _react.default.createElement("div", {
    className: "tech__left col-md-4 pl-0",
    "data-aos": "fade-right"
  }, tech.slice(0, 3).map(function (item, index) {
    return _react.default.createElement("div", {
      className: "tech__card card w-100",
      key: index
    }, _react.default.createElement("div", {
      className: "card-body"
    }, _react.default.createElement("h5", {
      className: "card-title tech__card-title"
    }, item.title), _react.default.createElement("p", {
      className: "card-text"
    }, item.cardTxt)));
  })), _react.default.createElement("div", {
    className: "tech__center-img col-md-3"
  }, _react.default.createElement("img", {
    className: "d-block w-100",
    "data-aos": "zoom-in",
    src: _tech.default,
    alt: "Third slide"
  })), _react.default.createElement("div", {
    className: "tech__right col-md-4 pr-0",
    "data-aos": "fade-left"
  }, tech.slice(3, 6).map(function (item, index) {
    return _react.default.createElement("div", {
      className: "tech__card card w-100",
      key: index
    }, _react.default.createElement("div", {
      className: "card-body"
    }, _react.default.createElement("h5", {
      className: "card-title tech__card-title"
    }, item.title), _react.default.createElement("p", {
      className: "card-text"
    }, item.cardTxt)));
  })), _react.default.createElement("div", {
    className: "col-12 px-0 mt-5"
  }, _react.default.createElement("div", {
    className: "row"
  }, tech.slice(6).map(function (item, index) {
    return _react.default.createElement("div", {
      className: "col-md-4",
      key: index,
      "data-aos": "zoom-in"
    }, _react.default.createElement("div", {
      className: "tech__card card w-100"
    }, _react.default.createElement("div", {
      className: "card-body"
    }, _react.default.createElement("h5", {
      className: "card-title tech__card-title"
    }, item.title), _react.default.createElement("p", {
      className: "card-text"
    }, item.cardTxt))));
  }))))));
}

var _default = Tech;
exports.default = _default;