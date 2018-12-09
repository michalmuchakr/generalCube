"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _portfolio_card = _interopRequireDefault(require("./portfolio/portfolio_card"));

var _themeUnit = _interopRequireDefault(require("assets/theme-unit-1-1.PNG"));

var _themeUnit2 = _interopRequireDefault(require("assets/theme-unit-2.PNG"));

var _themeUnit3 = _interopRequireDefault(require("assets/theme-unit-3.PNG"));

var _styleWebshop = _interopRequireDefault(require("assets/style-webshop.PNG"));

var _theblok = _interopRequireDefault(require("assets/theblok.PNG"));

var _ddc = _interopRequireDefault(require("assets/ddc.png"));

var _astom = _interopRequireDefault(require("assets/astom.PNG"));

var _raraavis = _interopRequireDefault(require("assets/raraavis.png"));

var _tournamen_manager_v = _interopRequireDefault(require("assets/tournamen_manager_v2.PNG"));

var _boilerplate = _interopRequireDefault(require("assets/boilerplate.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Portfolio =
/*#__PURE__*/
function (_Component) {
  _inherits(Portfolio, _Component);

  function Portfolio(props) {
    var _this;

    _classCallCheck(this, Portfolio);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Portfolio).call(this, props));
    _this.state = {
      portfolioCards: [{
        pill: 'pill-7',
        git: true,
        live: false,
        imgPath: _tournamen_manager_v.default,
        link: 'https://github.com/michalmuchakr/tournament_manager',
        desc: 'MERN (Mongo, Express, React & Redux, NodeJS) stack singlepage application. Prepared in case of managment of tablesoccer tournamet manager, that could be easly used in other kind of tournaments.',
        title: 'Tournament manager',
        features: ['Mongoose library included', 'CRUD players management', 'Add tournament functionality', 'Ligue or tornament groups with final stage', 'Add players to tournament', 'Advanced algorithm calculates add and edit results', 'Automaticly generate teams, timetable, score table', 'Managment of tournament matches', 'Automatic update of scrore table', 'Generate semi-final and finals based on results', 'Win team summary']
      }, {
        pill: 'pill-1',
        git: false,
        live: true,
        imgPath: _themeUnit.default,
        link: 'http://theme12.nopcommerce.pl/',
        title: 'Arsenios webshop theme',
        desc: 'Modern webshop template developed as Front End developer at Unit Soft Company',
        features: ['Shopping cart design', 'Product preview', 'Categories subpages', 'Filters plugin'],
        inColaboration: {
          link: 'https://www.unit-soft.pl/',
          companyName: 'Unit Soft'
        }
      }, {
        pill: 'pill-2',
        imgPath: _themeUnit2.default,
        git: false,
        live: true,
        link: 'http://theme11.nopcommerce.pl/',
        title: 'Runners webshop theme',
        desc: 'Minimalisctc webshop template developed as Front End developer at Unit Soft Company',
        features: ['Responsive and cross browser layout', 'Modern homepage', 'Shopping cart design', 'Product preview page', 'Categories and subcategories subpages', 'REST API ajax based filters plugin'],
        inColaboration: {
          link: 'https://www.unit-soft.pl/',
          companyName: 'Unit Soft'
        }
      }, {
        pill: 'pill-3',
        imgPath: _themeUnit3.default,
        git: false,
        live: true,
        link: 'http://theme10.nopcommerce.pl/',
        title: 'Default webshop theme',
        desc: 'Bootstrap 4 based default webshop template, developed as Front End developer at Unit Soft Company',
        features: ['NopCommerce integration', 'Shopping cart design', 'Product preview', 'Categories subpages'],
        inColaboration: {
          link: 'https://www.unit-soft.pl/',
          companyName: 'Unit Soft'
        }
      }, {
        pill: 'pill-4',
        imgPath: _theblok.default,
        git: false,
        live: true,
        link: 'http://theblok.com.pl/',
        desc: 'Website for company involved in architectural industry for more than 25 years, presents projects design by theBlok company.',
        title: 'TheBlok',
        features: ['Responsive crossbrowser webpage', 'Unique responsive design', 'CMS Wordpres implementation']
      }, {
        pill: 'pill-5',
        imgPath: _ddc.default,
        git: false,
        live: true,
        link: 'http://domenydlaciebie.pl/',
        title: 'Domeny dla Ciebie',
        inColaboration: {
          link: 'http://catdesign.pl/',
          companyName: 'CATDESIGN IT SP. Z O.O'
        }
      }, {
        pill: 'pill-6',
        imgPath: _styleWebshop.default,
        git: false,
        live: true,
        link: 'http://generalcube.com/webshoptheme/',
        title: 'Style Webshop',
        desc: 'Homepage layout for webshop',
        features: ['Responsive design', 'Modern, bootstrap based layout']
      }, {
        pill: 'pill-8',
        imgPath: _astom.default,
        git: false,
        live: true,
        title: 'Astom Tomasz Mucha',
        link: 'http://astom.com.pl/',
        features: ['sth', 'sth2']
      }, {
        pill: 'pill-9',
        imgPath: _raraavis.default,
        git: false,
        live: true,
        title: 'RaraAvis',
        link: 'http://raraavis.com.pl/',
        features: ['sth', 'sth2']
      }, {
        pill: 'pill-10',
        imgPath: _boilerplate.default,
        git: true,
        live: false,
        title: 'React Boilerplate',
        link: 'https://github.com/michalmuchakr/preconfigurated-react',
        desc: 'Babel & React & Webpack ready to use boilerplate, that could help start up a new project.',
        features: ['React JS + React Router', 'Hot reload development server.', 'Style preprocessor included.', 'Absolute import paths.']
      }]
    };
    return _this;
  }

  _createClass(Portfolio, [{
    key: "render",
    value: function render() {
      var portfolioCards = this.state.portfolioCards;
      return _react.default.createElement("div", {
        id: "portfolio",
        className: "portfolio col-xl-9 mx-auto"
      }, _react.default.createElement("div", {
        className: "col-12 px-0"
      }, _react.default.createElement("h2", {
        className: "general-sub-title"
      }, "Portfolio")), _react.default.createElement("div", {
        className: "col-12"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "portfolio-nav col-md-4 px-0"
      }, _react.default.createElement("div", {
        className: "nav flex-column nav-pills",
        id: "v-pills-tab",
        role: "tablist",
        "aria-orientation": "vertical",
        "data-aos": "fade-right"
      }, portfolioCards.map(function (item, idx) {
        return _react.default.createElement("a", {
          className: "portfolio-nav-link nav-link btn btn-outline-secondary rounded-0  ".concat(idx === 0 ? 'active' : ''),
          "data-toggle": "tab",
          key: idx,
          href: "#".concat(item.pill),
          "aria-controls": item.pill,
          role: "tab"
        }, item.title);
      }))), _react.default.createElement("div", {
        className: "portfolio-screen col-md-8"
      }, _react.default.createElement("div", {
        className: "tab-content",
        id: "v-pills-tabContent",
        "data-aos": "fade-left"
      }, portfolioCards.map(function (item, idx) {
        return _react.default.createElement(_portfolio_card.default, {
          key: idx,
          item: item,
          idx: idx
        });
      }))))));
    }
  }]);

  return Portfolio;
}(_react.Component);

exports.default = Portfolio;