module.exports =
__NEXT_REGISTER_PAGE('/', function() {
          var comp =
      webpackJsonp([4],{

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/index.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
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
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

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


/***/ })

},[3])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map