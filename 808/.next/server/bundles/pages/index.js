module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_style__ = __webpack_require__("./static/style.js");

var _jsxFileName = "/Users/cristobalsciutto/dev/challenges/808/pages/index.js";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var types = [{
  name: "default",
  color: "#E6E8BF",
  file: ""
}, {
  name: "bass",
  color: "#DDDA00",
  file: "/static/sounds/bass.mp3"
}, {
  name: "snare",
  color: "#F27900",
  file: "/static/sounds/snare.mp3"
}, {
  name: "hat",
  color: "#DD1D00",
  file: "/static/sounds/hat.mp3"
}];

var Pad =
/*#__PURE__*/
function (_Component) {
  _inherits(Pad, _Component);

  function Pad() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Pad);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Pad.__proto__ || Object.getPrototypeOf(Pad)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        type: 0
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "cycleType", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          type: (_this.state.type + 1) % types.length
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "playAudio", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var path = types[_this.state.type].file;
        if (path) new Audio(path).play();
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.cycleType();

                case 2:
                  _this.playAudio();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(Pad, [{
    key: "render",
    value: function render() {
      var active = this.props.active;
      if (active) this.playAudio();
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__static_style__["e" /* padStyle */], {
          backgroundColor: types[this.state.type].color,
          boxShadow: active ? null : '3px 3px 3px #9E9E9E'
        }),
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      });
    }
  }]);

  return Pad;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

;

var Canvas =
/*#__PURE__*/
function (_Component2) {
  _inherits(Canvas, _Component2);

  function Canvas() {
    var _ref2;

    var _temp2, _this2;

    _classCallCheck(this, Canvas);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(_this2, (_temp2 = _this2 = _possibleConstructorReturn(this, (_ref2 = Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this2), "timeout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty(_assertThisInitialized(_this2), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        activeIndex: -1
      }
    }), Object.defineProperty(_assertThisInitialized(_this2), "cycleActiveIndex", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this2.timeout = setTimeout(function () {
          return _this2.setState({
            activeIndex: (_this2.state.activeIndex + 1) % 16
          });
        }, _this2.props.interval);
      }
    }), Object.defineProperty(_assertThisInitialized(_this2), "componentWillReceiveProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newProps) {
        clearTimeout(_this2.timeout);
      }
    }), _temp2));
  }

  _createClass(Canvas, [{
    key: "render",
    value: function render() {
      var playing = this.props.playing;
      var activeIndex = this.state.activeIndex;
      if (playing) this.cycleActiveIndex();
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__static_style__["a" /* canvasStyle */]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _toConsumableArray(Array(16)).map(function (e, i) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Pad, {
          key: i,
          active: playing && activeIndex === i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        });
      }));
    }
  }]);

  return Canvas;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

;

var StartStopButton = function StartStopButton(_ref3) {
  var onClick = _ref3.onClick,
      label = _ref3.label;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__static_style__["f" /* startStopButtonStyle */]),
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, label);
};

var BpmInput =
/*#__PURE__*/
function (_Component3) {
  _inherits(BpmInput, _Component3);

  function BpmInput() {
    _classCallCheck(this, BpmInput);

    return _possibleConstructorReturn(this, (BpmInput.__proto__ || Object.getPrototypeOf(BpmInput)).apply(this, arguments));
  }

  _createClass(BpmInput, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__static_style__["b" /* flexDefault */], {
          flexDirection: 'column'
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "BPM"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        style: {
          fontFamily: 'PhatBoy',
          width: '42px',
          padding: '4px',
          textAlign: 'center'
        },
        type: "number",
        value: this.props.bpm,
        onChange: function onChange(e) {
          return _this3.props.handleBpm(e);
        },
        pattern: "^\\d*$",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }));
    }
  }]);

  return BpmInput;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

;

var Interface =
/*#__PURE__*/
function (_Component4) {
  _inherits(Interface, _Component4);

  function Interface() {
    var _ref4;

    var _temp3, _this4;

    _classCallCheck(this, Interface);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _possibleConstructorReturn(_this4, (_temp3 = _this4 = _possibleConstructorReturn(this, (_ref4 = Interface.__proto__ || Object.getPrototypeOf(Interface)).call.apply(_ref4, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this4), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        playing: false,
        bpm: 120
      }
    }), _temp3));
  }

  _createClass(Interface, [{
    key: "handleBpm",
    value: function handleBpm(e) {
      var bpm = Math.min(Math.max(e.target.value, 1), 150);
      this.setState({
        bpm: bpm
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _state = this.state,
          bpm = _state.bpm,
          playing = _state.playing;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__static_style__["c" /* interfaceStyle */]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        className: "jsx-2544072547"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "2544072547",
        css: "@font-face{font-family:'PhatBoy';src:url(/static/phatboy.otf);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlJMkIsQUFHbUMsc0JBQ08sNkJBQy9CIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jcmlzdG9iYWxzY2l1dHRvL2Rldi9jaGFsbGVuZ2VzLzgwOCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgZmxleERlZmF1bHQsXG4gIHBhZFN0eWxlLFxuICBjYW52YXNTdHlsZSxcbiAgc3RhcnRTdG9wQnV0dG9uU3R5bGUsXG4gIHRpdGxlU3R5bGUsXG4gIGludGVyZmFjZVN0eWxlLFxuICBsaW5rU3R5bGUsXG4gIGFwcFN0eWxlLFxufSBmcm9tICcuLi9zdGF0aWMvc3R5bGUnO1xuXG5jb25zdCB0eXBlcyA9IFtcbiAgeyBuYW1lOiBcImRlZmF1bHRcIiwgY29sb3I6IFwiI0U2RThCRlwiLCBmaWxlOiBcIlwiIH0sXG4gIHsgbmFtZTogXCJiYXNzXCIsICAgIGNvbG9yOiBcIiNERERBMDBcIiwgZmlsZTogXCIvc3RhdGljL3NvdW5kcy9iYXNzLm1wM1wiICB9LFxuICB7IG5hbWU6IFwic25hcmVcIiwgICBjb2xvcjogXCIjRjI3OTAwXCIsIGZpbGU6IFwiL3N0YXRpYy9zb3VuZHMvc25hcmUubXAzXCIgfSxcbiAgeyBuYW1lOiBcImhhdFwiLCAgICAgY29sb3I6IFwiI0REMUQwMFwiLCBmaWxlOiBcIi9zdGF0aWMvc291bmRzL2hhdC5tcDNcIiAgIH0sXG5dXG5cbmNsYXNzIFBhZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0geyB0eXBlOiAwIH1cblxuICBjeWNsZVR5cGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICB0eXBlOiAodGhpcy5zdGF0ZS50eXBlICsgMSkgJSB0eXBlcy5sZW5ndGgsXG4gIH0pXG5cbiAgcGxheUF1ZGlvID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSB0eXBlc1t0aGlzLnN0YXRlLnR5cGVdLmZpbGU7XG4gICAgaWYgKHBhdGgpIG5ldyBBdWRpbyhwYXRoKS5wbGF5KCk7XG4gIH1cblxuICBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB0aGlzLmN5Y2xlVHlwZSgpO1xuICAgIHRoaXMucGxheUF1ZGlvKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2FjdGl2ZX0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChhY3RpdmUpIHRoaXMucGxheUF1ZGlvKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLnBhZFN0eWxlLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdHlwZXNbdGhpcy5zdGF0ZS50eXBlXS5jb2xvcixcbiAgICAgICAgICBib3hTaGFkb3c6IChhY3RpdmUgPyBudWxsIDogJzNweCAzcHggM3B4ICM5RTlFOUUnKSxcbiAgICAgICAgfX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59O1xuXG5jbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICB0aW1lb3V0ID0gbnVsbFxuICBzdGF0ZSA9IHtcbiAgICBhY3RpdmVJbmRleDogLTEsXG4gIH1cblxuICBjeWNsZUFjdGl2ZUluZGV4ID0gKCkgPT4ge1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZShcbiAgICAgIHsgYWN0aXZlSW5kZXg6ICh0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ICsgMSkgJSAxNiB9XG4gICAgKSwgdGhpcy5wcm9wcy5pbnRlcnZhbCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5ld1Byb3BzKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwbGF5aW5nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgYWN0aXZlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHBsYXlpbmcpIHRoaXMuY3ljbGVBY3RpdmVJbmRleCgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IC4uLmNhbnZhc1N0eWxlIH19PlxuICAgICAgICB7Wy4uLkFycmF5KDE2KV0ubWFwKChlLCBpKSA9PlxuICAgICAgICAgIDxQYWQga2V5PXtpfSBhY3RpdmU9e3BsYXlpbmcgJiYgYWN0aXZlSW5kZXggPT09IGl9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmNvbnN0IFN0YXJ0U3RvcEJ1dHRvbiA9ICh7b25DbGljaywgbGFiZWx9KSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgLi4uc3RhcnRTdG9wQnV0dG9uU3R5bGUgfX0gb25DbGljaz17b25DbGlja30gPlxuICAgIHtsYWJlbH1cbiAgPC9kaXY+XG4pO1xuXG5jbGFzcyBCcG1JbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAuLi5mbGV4RGVmYXVsdCxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICB9fT5cbiAgICAgICAgPHNwYW4+QlBNPC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udEZhbWlseTogJ1BoYXRCb3knLFxuICAgICAgICAgICAgd2lkdGg6ICc0MnB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICc0cHgnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5icG19XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnByb3BzLmhhbmRsZUJwbShlKX1cbiAgICAgICAgICBwYXR0ZXJuPVwiXlxcZCokXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmNsYXNzIEludGVyZmFjZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHBsYXlpbmc6IGZhbHNlLFxuICAgIGJwbTogMTIwLFxuICB9XG5cbiAgaGFuZGxlQnBtKGUpIHtcbiAgICBjb25zdCBicG0gPSBNYXRoLm1pbihNYXRoLm1heChlLnRhcmdldC52YWx1ZSwgMSksIDE1MCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YnBtfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2JwbSwgcGxheWluZ30gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IC4uLmludGVyZmFjZVN0eWxlIH19PlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQaGF0Qm95JztcbiAgICAgICAgICAgIHNyYzogdXJsKC9zdGF0aWMvcGhhdGJveS5vdGYpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDxwIHN0eWxlPXt7IC4uLnRpdGxlU3R5bGUgfX0+Um9sYW5kIFRSIDgwODwvcD5cbiAgICAgICAgPENhbnZhcyBcbiAgICAgICAgICBwbGF5aW5nPXtwbGF5aW5nfVxuICAgICAgICAgIGludGVydmFsPXsxMDAwICogKDYwIC8gdGhpcy5zdGF0ZS5icG0gLyA0KX1cbiAgICAgICAgLz5cbiAgICAgICAgPFN0YXJ0U3RvcEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3BsYXlpbmc6ICFwbGF5aW5nfSl9XG4gICAgICAgICAgbGFiZWw9XCJTdGFydC9TdG9wXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpblRvcDogJy00MnB4JyxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnNTgwcHgnLFxuICAgICAgICB9fT5cbiAgICAgICAgICA8QnBtSW5wdXRcbiAgICAgICAgICAgIGJwbT17YnBtfVxuICAgICAgICAgICAgaGFuZGxlQnBtPXt0aGlzLmhhbmRsZUJwbS5iaW5kKHRoaXMpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBzdHlsZT17ey4uLmxpbmtTdHlsZX19IGhyZWY9XCJodHRwczovL2NzY2l1dHRvLmdpdGh1Yi5pb1wiPlxuICAgICAgICAgIGJ5IGNzY2l1dHRvXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IDxJbnRlcmZhY2UvPjtcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        style: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__static_style__["g" /* titleStyle */]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        className: "jsx-2544072547"
      }, "Roland TR 808"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Canvas, {
        playing: playing,
        interval: 1000 * (60 / this.state.bpm / 4),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(StartStopButton, {
        onClick: function onClick() {
          return _this5.setState({
            playing: !playing
          });
        },
        label: "Start/Stop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          marginTop: '-42px',
          marginLeft: '580px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        className: "jsx-2544072547"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(BpmInput, {
        bpm: bpm,
        handleBpm: this.handleBpm.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        style: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__static_style__["d" /* linkStyle */]),
        href: "https://csciutto.github.io",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        className: "jsx-2544072547"
      }, "by csciutto"));
    }
  }]);

  return Interface;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Interface, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    }
  });
});

/***/ }),

/***/ "./static/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flexDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return padStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canvasStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return startStopButtonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return titleStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return interfaceStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return linkStyle; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var flexDefault = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
var padStyle = {
  height: '150px',
  width: '150px',
  borderRadius: '5px',
  margin: '6px'
};
var canvasStyle = _objectSpread({}, flexDefault, {
  height: '100%',
  width: '648px',
  flexWrap: 'wrap'
});
var startStopButtonStyle = _objectSpread({}, flexDefault, {
  height: '45px',
  width: '200px',
  borderRadius: '5px',
  marginTop: '30px',
  backgroundColor: '#2F2E3E',
  boxShadow: '3px 3px 3px #9E9E9E',
  fontFamily: 'PhatBoy',
  color: 'white'
});
var titleStyle = {
  fontFamily: 'PhatBoy',
  fontSize: '54px',
  margin: '40px'
};
var interfaceStyle = _objectSpread({}, flexDefault, {
  flexDirection: 'column',
  fontFamily: 'PhatBoy'
});
var linkStyle = {
  fontSize: '10px',
  fontFamily: 'sans-serif',
  marginTop: '20px',
  textDecoration: 'none',
  color: '#000000'
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map