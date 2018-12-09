"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _bindAll = _interopRequireDefault(require("lodash/bindAll"));

var _social_btns = _interopRequireDefault(require("../shared/social_btns"));

var _general_nav = _interopRequireDefault(require("./header/general_nav"));

var _scroll_to_anchor = _interopRequireDefault(require("controllers/scroll_to_anchor"));

var _fb = _interopRequireDefault(require("assets/fb.svg"));

var _git = _interopRequireDefault(require("assets/git.svg"));

var _in = _interopRequireDefault(require("assets/in.svg"));

var _home_img = _interopRequireDefault(require("assets/home_img.jpg"));

var _mail = _interopRequireDefault(require("assets/mail.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var ProffesionalExperienceHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(ProffesionalExperienceHeader, _Component);

  function ProffesionalExperienceHeader(props) {
    var _this;

    _classCallCheck(this, ProffesionalExperienceHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProffesionalExperienceHeader).call(this, props));
    _this.state = {
      socialBtns: [{
        path: 'https://www.linkedin.com/in/micha%C5%82-mucha-85b796b4/',
        ico: _in.default
      }, {
        type: 'mail',
        path: 'michal.mucha.kr@gmail.com',
        ico: _mail.default
      }, {
        path: 'https://www.facebook.com/micha.tomasz.mucha',
        ico: _fb.default
      }, {
        path: 'https://github.com/michalmuchakr',
        ico: _git.default
      }],
      isNavSticky: false
    };
    (0, _bindAll.default)(_assertThisInitialized(_assertThisInitialized(_this)), ['scrollSpy']);
    return _this;
  }

  _createClass(ProffesionalExperienceHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollSpy();
    }
  }, {
    key: "scrollSpy",
    value: function scrollSpy() {
      var _this2 = this;

      window.onscroll = function () {
        var isNavSticky = _this2.state.isNavSticky,
            scrolled = window.scrollY;

        if (!isNavSticky && scrolled > 100) {
          _this2.setState({
            isNavSticky: true
          });
        } else if (isNavSticky && scrolled <= 100) {
          _this2.setState({
            isNavSticky: false
          });
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          socialBtns = _this$state.socialBtns,
          isNavSticky = _this$state.isNavSticky;
      var moveView = this.props.moveView;
      return _react.default.createElement("header", {
        className: "header",
        style: {
          backgroundImage: "url(".concat(_home_img.default, ")")
        }
      }, _react.default.createElement(_general_nav.default, {
        isNavSticky: isNavSticky,
        moveView: moveView
      }), _react.default.createElement("div", {
        className: "col-12"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "headTitle__introduction col-xl-4 col-lg-6 ml-auto",
        "data-aos": "fade-left"
      }, _react.default.createElement("h2", {
        className: "headTitle__introduction-title"
      }, "Welcome to General Cube!"), _react.default.createElement("p", {
        className: "headTitle__introduction-paragraph"
      }, "Let me introduce myself, my name is Micha\u0142 and I'm a UI developer from Poland, specialized in javascript and it's a pleasure to greet you at my personal website. Here you could find some information's about my professional experience, take a look at extract from my portfolio, read blog posts related to Front End Universe."), _react.default.createElement("p", {
        className: "headTitle__introduction-paragraph"
      }, "Feel free to contact me via email or social media."), _react.default.createElement(_social_btns.default, {
        socialBtns: socialBtns
      }), _react.default.createElement("p", {
        className: "headTitle__introduction-sub-paragraph"
      }, "May the UI dev be with you."), _react.default.createElement("button", {
        type: "button",
        className: "headTitle__introduction__explore-more btn btn-outline-dark mb-5",
        "data-anchor": "#about",
        "data-aos-delay": 2000,
        "data-aos": "zoom-in",
        onClick: function onClick(e) {
          return _scroll_to_anchor.default.init(e);
        }
      }, "Explore more")))));
    }
  }]);

  return ProffesionalExperienceHeader;
}(_react.Component);

exports.default = ProffesionalExperienceHeader;