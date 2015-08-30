module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(97);

  var _fbjsLibExecutionEnvironment = __webpack_require__(96);

  var _Layout = __webpack_require__(11);

  var _Layout2 = _interopRequireDefault(_Layout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(6);
    }, '/500': function _() {
      return __webpack_require__(7);
    }, '/drinks': function drinks() {
      return __webpack_require__(8);
    }, '/hot-roll': function hotRoll() {
      return __webpack_require__(9);
    }, '/': function _() {
      return __webpack_require__(10);
    }, '/pizza': function pizza() {
      return __webpack_require__(12);
    }, '/promo': function promo() {
      return __webpack_require__(13);
    }, '/roll': function roll() {
      return __webpack_require__(14);
    }, '/set': function set() {
      return __webpack_require__(15);
    }, '/sushi': function sushi() {
      return __webpack_require__(16);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path.replace('.html', '')] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _Layout2['default'],
            null,
            component && _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    (function () {
      var container = document.getElementById('app');
      route('/' + location.pathname.split('/').pop(), function callee$1$0(component) {
        return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              return context$2$0.abrupt('return', (0, _reactDom.render)(component, container));

            case 1:
            case 'end':
              return context$2$0.stop();
          }
        }, null, _this);
      });
    })();
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _menu = __webpack_require__(3);

  var _menu2 = _interopRequireDefault(_menu);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var id = _props.id;
        var items = _props.items;

        return _react2['default'].createElement(
          'div',
          { className: 'main' },
          _react2['default'].createElement(
            'div',
            { className: 'content' },
            _react2['default'].createElement(
              'h1',
              { className: 'title title-' + id },
              _menu2['default'].find(function (item) {
                return item.id === id;
              }).text
            ),
            items.map(function (item) {
              return _react2['default'].createElement(
                'div',
                { className: 'product product-' + id, key: item.id },
                _react2['default'].createElement(
                  'div',
                  { className: 'product-header' },
                  _react2['default'].createElement('img', {
                    className: 'product-image',
                    src: item.image.url,
                    width: item.image.width,
                    height: item.image.height,
                    alt: item.image.alt
                  })
                ),
                _react2['default'].createElement('h2', { className: 'product-title', dangerouslySetInnerHTML: { __html: item.title } }),
                item.description && _react2['default'].createElement('p', { className: 'product-desc', dangerouslySetInnerHTML: { __html: item.description } }),
                item.cost && _react2['default'].createElement(
                  'div',
                  { className: 'product-cost' },
                  item.cost,
                  ' тг'
                )
              );
            })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'sidebar' },
            _react2['default'].createElement(
              'h3',
              { className: 'nav-title' },
              'Меню'
            ),
            _react2['default'].createElement(
              'ul',
              { className: 'nav' },
              _menu2['default'].map(function (item) {
                return _react2['default'].createElement(
                  'li',
                  { className: 'nav-item', key: item.id },
                  item.id === id ? item.text : _react2['default'].createElement(
                    'a',
                    { className: 'nav-link', href: '/' + item.id },
                    item.text
                  )
                );
              })
            )
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        id: _react.PropTypes.string.isRequired,
        items: _react.PropTypes.array.isRequired
      },
      enumerable: true
    }]);

    return _default;
  })();

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = [{
    id: 'pizza',
    text: 'Пицца'
  }, {
    id: 'roll',
    text: 'Роллы'
  }, {
    id: 'sushi',
    text: 'Суши'
  }, {
    id: 'hot-roll',
    text: 'Теплые роллы'
  }, {
    id: 'set',
    text: 'Сеты'
  }, {
    id: 'drinks',
    text: 'Напитки'
  }, {
    id: 'promo',
    text: 'Акции'
  }];
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "353c44c7502d30287c5a641dc2b52147.jpg"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "82759d2f7729b5b816303988b8c5fec3.jpg"

/***/ },
/* 6 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = null;
  module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = null;
  module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _jsContent = __webpack_require__(2);

  var _jsContent2 = _interopRequireDefault(_jsContent);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(_jsContent2['default'], { id: 'drinks', items: [{
            id: 'coke',
            image: {
              url: __webpack_require__(21),
              width: 685,
              height: 215,
              alt: 'Напитки Кока-Кола, Фанта и Спрайт'
            },
            title: 'Кока-Кола, Фанта, Спрайт.',
            description: '1 литр / 2 литра',
            cost: '250 / 350'
          }] });
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _jsContent = __webpack_require__(2);

  var _jsContent2 = _interopRequireDefault(_jsContent);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(_jsContent2['default'], { id: 'hot-roll', items: [{
            id: 'bekon-v-tempure',
            image: {
              url: __webpack_require__(23),
              width: 800,
              height: 800,
              alt: 'Горячий бекон в темпуре ролл'
            },
            title: 'Бекон в темпуре',
            description: 'Бекон, помидор, огурец, краб, сыр Филадельфия, панировочные сухари.<br> 8 шт.',
            cost: 1500
          }, {
            id: 'syake-tempura',
            image: {
              url: __webpack_require__(27),
              width: 800,
              height: 800,
              alt: 'Горячий Сяке темпура ролл'
            },
            title: 'Сяке темпура',
            description: 'Копчёный угорь, лосось, авокадо, панировочные сухари.<br> 8 шт.',
            cost: 1500
          }, {
            id: 'kunsey-tempura',
            image: {
              url: __webpack_require__(25),
              width: 800,
              height: 800,
              alt: 'Горячий Кунсей темпура ролл'
            },
            title: 'Кунсей темпура',
            description: 'Копченый лосось,<br> сыр Филадельфия,<br> снежный краб.<br> 8 шт.',
            cost: 1300
          }, {
            id: 'maguro-tempura',
            image: {
              url: __webpack_require__(26),
              width: 800,
              height: 800,
              alt: 'Горячий Магуро темпура ролл'
            },
            title: 'Магуро темпура',
            description: 'Омлет, огурец, тунец,<br> соус Спайси, стружка тунца.<br> 8 шт.',
            cost: 1300
          }, {
            id: 'domashniy',
            image: {
              url: __webpack_require__(24),
              width: 800,
              height: 800,
              alt: 'Горячий домашний ролл'
            },
            title: 'Домашний ролл',
            description: 'Бекон, креветка,<br> сыр Филадельфия.<br> 8 шт.',
            cost: 1850
          }] });
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = null;
  module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _menu = __webpack_require__(3);

  var _menu2 = _interopRequireDefault(_menu);

  __webpack_require__(17);

  var Layout = (function () {
    function Layout() {
      _classCallCheck(this, Layout);
    }

    _createClass(Layout, [{
      key: 'render',
      value: function render() {
        var children = this.props.children;

        var logo = _react2['default'].createElement('img', { src: __webpack_require__(93), width: 502, height: 143, alt: 'Love Pizza Logo' });

        return _react2['default'].createElement(
          'div',
          { className: 'container' },
          _react2['default'].createElement(
            'div',
            { className: 'header' },
            children ? _react2['default'].createElement(
              'a',
              { className: 'logo', href: '/' },
              logo
            ) : _react2['default'].createElement(
              'div',
              { className: 'logo' },
              logo
            ),
            _react2['default'].createElement(
              'div',
              { className: 'contacts' },
              _react2['default'].createElement(
                'div',
                { className: 'working-hours' },
                'ежедневно с 10.00 до 01.00'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'local' },
                _react2['default'].createElement(
                  'a',
                  { className: 'phone', href: 'tel:+77292330660' },
                  '330-660'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'mobile' },
                _react2['default'].createElement(
                  'a',
                  { className: 'phone', href: 'tel:+77088330660' },
                  '8(708) 8-330-660'
                )
              )
            )
          ),
          !children && _react2['default'].createElement(
            'a',
            { className: 'promo', href: '/promo' },
            _react2['default'].createElement('img', {
              className: 'promo-image',
              src: __webpack_require__(5),
              width: 960,
              height: 320,
              alt: 'Закажи две пиццы и получи 1 литр колы бесплатно'
            })
          ),
          !children && _react2['default'].createElement(
            'ul',
            { className: 'menu' },
            _menu2['default'].filter(function (m) {
              return m.id !== 'promo';
            }).map(function (item) {
              return _react2['default'].createElement(
                'li',
                { className: 'menu-item', key: item.id },
                _react2['default'].createElement(
                  'a',
                  { className: 'menu-link menu-' + item.id, href: '/' + item.id },
                  item.text
                )
              );
            })
          ),
          children,
          _react2['default'].createElement(
            'div',
            { className: 'footer' },
            _react2['default'].createElement(
              'div',
              { className: 'shipping' },
              _react2['default'].createElement(
                'span',
                { className: 'address' },
                'Доставка по г. Актау'
              ),
              _react2['default'].createElement(
                'b',
                { className: 'cost' },
                'бесплатно'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'payment' },
                'Оплата счёта наличными.'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'footer-contacts' },
              _react2['default'].createElement(
                'div',
                { className: 'working-hours' },
                'ежедневно с 10.00 до 01.00'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'local' },
                _react2['default'].createElement(
                  'a',
                  { className: 'footer-phone', href: 'tel:+77292330660' },
                  '330-660'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'mobile' },
                _react2['default'].createElement(
                  'a',
                  { className: 'footer-phone', href: 'tel:+77088330660' },
                  '8(708) 8-330-660'
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'social' },
              _react2['default'].createElement(
                'div',
                { className: 'social-title' },
                'Мы в соцсетях'
              ),
              _react2['default'].createElement(
                'ul',
                { className: 'social-list' },
                _react2['default'].createElement(
                  'li',
                  { className: 'social-item' },
                  _react2['default'].createElement(
                    'a',
                    {
                      className: 'social-link social-vk',
                      href: 'https://vk.com/aktau_lovepizza',
                      target: '_blank',
                      title: 'ВКонтакте'
                    },
                    _react2['default'].createElement(
                      'svg',
                      { width: '42', height: '42' },
                      _react2['default'].createElement('path', { d: 'M31.7 22c-1.2-1.2-2.7-2.1-4.6-2.5v-.2c1.3-.6 2.4-1.4 3.2-2.6.8-1.2 1.1-2.5 1.1-4.1 0-1.3-.3-2.5-.8-3.5-.6-1-1.4-1.8-2.5-2.4-1-.6-2.1-.9-3.3-1.1-1.2-.2-2.9-.3-5.2-.3h-11v31.2H21c2.2 0 3.9-.2 5.3-.6 1.4-.4 2.7-1 3.9-2 1-.8 1.8-1.7 2.4-2.9.6-1.2.9-2.5.9-4.1 0-2-.6-3.7-1.8-4.9zM16.3 11.1H20c.7 0 1.3.1 1.8.4.5.2.9.6 1.2 1.2.3.5.4 1 .4 1.5 0 .7-.1 1.3-.4 1.8-.2.5-.7.9-1.3 1.2-.6.3-1.1.4-1.7.4h-3.8l.1-6.5zm8.6 17.8c-.3.6-.8 1-1.6 1.3-.8.3-1.6.5-2.4.6h-4.6V23H21c.8 0 1.5.1 2 .3.8.3 1.4.7 1.8 1.2.4.5.6 1.3.6 2.3 0 .8-.2 1.5-.5 2.1z' })
                    )
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'social-item' },
                  _react2['default'].createElement(
                    'a',
                    {
                      className: 'social-link social-ok',
                      href: 'https://ok.ru/group/53642114826347',
                      target: '_blank',
                      title: 'Одноклассники'
                    },
                    _react2['default'].createElement(
                      'svg',
                      { width: '42', height: '42' },
                      _react2['default'].createElement('path', { d: 'M20.988 21.248c4.613 0 8.277-3.664 8.277-8.278 0-4.614-3.664-8.278-8.277-8.278-4.614 0-8.278 3.664-8.278 8.278 0 4.478 3.664 8.278 8.278 8.278zm0-12.485c2.306 0 4.07 1.764 4.07 4.07 0 2.308-1.764 4.072-4.07 4.072-2.307 0-4.07-1.764-4.07-4.07 0-2.172 1.763-4.072 4.07-4.072zm6.106 13.027c-2.307 1.9-6.106 1.9-6.106 1.9s-3.8 0-6.107-1.9c-1.76-1.357-2.98-.542-3.523.407-.814 1.63.136 2.443 2.17 3.8 1.765 1.086 4.208 1.628 5.836 1.764L18 29.12l-4.885 4.885c-.68.68-.68 1.9 0 2.714l.27.27c.68.675 1.9.675 2.715 0l4.886-4.888 4.885 4.885c.68.676 1.9.676 2.718 0l.27-.274c.68-.678.68-1.9 0-2.714l-4.884-4.886-1.356-1.357c1.628-.134 3.935-.54 5.7-1.762 2.035-1.357 2.985-2.17 2.17-3.8-.407-.95-1.628-1.764-3.392-.407z' })
                    )
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'social-item' },
                  _react2['default'].createElement(
                    'a',
                    {
                      className: 'social-link social-ig',
                      href: 'https://instagram.com/aktau_lovepizza',
                      target: '_blank',
                      title: 'Instagram'
                    },
                    _react2['default'].createElement(
                      'svg',
                      { width: '42', height: '42' },
                      _react2['default'].createElement('path', { d: 'M30.1 6.2H11.9c-3.1 0-5.7 2.6-5.7 5.7V30c0 3.1 2.6 5.7 5.7 5.7H30c3.1 0 5.7-2.6 5.7-5.7V12c.1-3.2-2.5-5.8-5.6-5.8zm1.6 3.4h.7v5h-5v-5h4.3zM16.8 18c.9-1.3 2.5-2.2 4.2-2.2 1.7 0 3.3.9 4.2 2.2.6.9 1 1.9 1 3 0 2.9-2.3 5.2-5.2 5.2-2.9 0-5.2-2.3-5.2-5.2 0-1.1.4-2.2 1-3zm16.1 12.1c0 1.6-1.3 2.8-2.8 2.8H11.9c-1.6 0-2.8-1.3-2.8-2.8V18h4.4c-.4.9-.6 2-.6 3 0 4.5 3.6 8.1 8.1 8.1s8.1-3.6 8.1-8.1c0-1.1-.2-2.1-.6-3h4.4v12.1z' })
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                null,
                'Разработан ',
                _react2['default'].createElement(
                  'a',
                  { className: 'designer', href: 'https://vk.com/inna_design', target: '_blank' },
                  'inna_design'
                )
              )
            ),
            _react2['default'].createElement('div', { className: 'tomato' }),
            _react2['default'].createElement('div', { className: 'mushroom' })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element
      },
      enumerable: true
    }]);

    return Layout;
  })();

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _jsContent = __webpack_require__(2);

  var _jsContent2 = _interopRequireDefault(_jsContent);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(_jsContent2['default'], { id: 'pizza', items: [{
            id: 'love',
            image: {
              url: __webpack_require__(36),
              width: 800,
              height: 800,
              alt: 'Пицца Love pizza'
            },
            title: 'Love pizza',
            description: 'Бекон, говядина, болг. перец,<br> куриная грудка, помидоры,<br> сыр Моцарелла, шампиньоны,<br> соус Томатно-горчичный.',
            cost: 2300
          }, {
            id: 'pepperoni',
            image: {
              url: __webpack_require__(39),
              width: 800,
              height: 800,
              alt: 'Пицца Пепперони классик'
            },
            title: 'Пепперони классик',
            description: 'Колбаска Пепперони,<br> шампиньоны,<br> сыр Моцарелла.',
            cost: 2200
          }, {
            id: 'romano',
            image: {
              url: __webpack_require__(41),
              width: 800,
              height: 800,
              alt: 'Пицца Романо'
            },
            title: 'Романо',
            description: 'Фарш говяжий, оливки,<br> помидоры, шампиньоны,<br> сыр Моцарелла.',
            cost: 2100
          }, {
            id: 'carnaval',
            image: {
              url: __webpack_require__(30),
              width: 800,
              height: 800,
              alt: 'Пицца Карнавал'
            },
            title: 'Карнавал',
            description: 'Салями, брынза, зелень, лук,<br> сыр Моцарелла, шампиньоны,<br> помидоры.',
            cost: 2000
          }, {
            id: 'four-cheese',
            image: {
              url: __webpack_require__(33),
              width: 800,
              height: 800,
              alt: 'Пицца Четыре сыра'
            },
            title: 'Четыре сыра',
            description: 'Сыр Эмменталь,<br> сыр Моцарелла, сыр Дорблю<br> сыр Пармезан.',
            cost: 2000
          }, {
            id: 'mexican',
            image: {
              url: __webpack_require__(37),
              width: 800,
              height: 800,
              alt: 'Мексиканская пицца'
            },
            title: 'Мексиканская',
            description: 'Говяжий фарш, болг. перец,<br> сыр Моцарелла,<br> перец Чили.',
            cost: 2100
          }, {
            id: 'vegetarian',
            image: {
              url: __webpack_require__(45),
              width: 800,
              height: 800,
              alt: 'Вегетарианская пицца'
            },
            title: 'Вегетарианская',
            description: 'Помидоры, маслины,<br> болг. перец, кукуруза,<br> сыр Моцарелла.',
            cost: 1600
          }, {
            id: 'astana',
            image: {
              url: __webpack_require__(29),
              width: 800,
              height: 800,
              alt: 'Пицца Астана'
            },
            title: 'Астана',
            description: 'Бекон, куриная грудка, пепперони, зелень, помидоры, шампиньоны, соус Горчичный, лук, чеснок, сыр Пармезан.',
            cost: 2300
          }, {
            id: 'hawaiian',
            image: {
              url: __webpack_require__(34),
              width: 800,
              height: 800,
              alt: 'Пицца Гавайская'
            },
            title: 'Гавайская',
            description: 'Ветчина, ананасы,<br> пицца соус,<br> сыр Моцарелла.',
            cost: 1800
          }, {
            id: 'margherita',
            image: {
              url: __webpack_require__(4),
              width: 800,
              height: 800,
              alt: 'Пицца Маргарита'
            },
            title: 'Маргарита',
            description: 'Сыр Моцарелла,<br> помидоры,<br> пицца соус.',
            cost: 1400
          }, {
            id: 'mushroom',
            image: {
              url: __webpack_require__(38),
              width: 800,
              height: 800,
              alt: 'Пицца Грибная'
            },
            title: 'Грибная',
            description: 'Шампиньоны,<br> помидоры, пицца соус,<br> сыр Моцарелла.',
            cost: 1500
          }, {
            id: 'salami',
            image: {
              url: __webpack_require__(42),
              width: 800,
              height: 800,
              alt: 'Пицца Салями'
            },
            title: 'Салями',
            description: 'Салями, шампиньоны,<br> корнишоны, помидоры,<br> сыр Моцарелла.',
            cost: 2000
          }, {
            id: 'seafood',
            image: {
              url: __webpack_require__(43),
              width: 800,
              height: 800,
              alt: 'Морская пицца'
            },
            title: 'Морская',
            description: 'Королевские креветки,<br> кольца кальмара, помидоры,<br> зелень, сыр Моцарелла,<br> соус Тар-тар.',
            cost: 2600
          }, {
            id: 'suprim',
            image: {
              url: __webpack_require__(44),
              width: 800,
              height: 800,
              alt: 'Пицца Суприм'
            },
            title: 'Суприм',
            description: 'Охотничьи колбаски, помидоры, копченая курица, шампиньоны, корнишоны,<br> сыр Моцарелла.',
            cost: 1900
          }, {
            id: 'pronto',
            image: {
              url: __webpack_require__(40),
              width: 800,
              height: 800,
              alt: 'Пицца Пронто'
            },
            title: 'Пронто',
            description: 'Курица копченая, помидоры,<br> корнишоны, кукуруза,<br> сыр Моцарелла.',
            cost: 1900
          }, {
            id: 'zastolnaya',
            image: {
              url: __webpack_require__(46),
              width: 800,
              height: 800,
              alt: 'Пицца Застольная'
            },
            title: 'Застольная',
            description: 'Говяжий фарш, помидоры,<br> сыр Моцарелла, лук,<br> огурцы маринованные,<br> соус Горчичный.',
            cost: 2200
          }, {
            id: 'fiesta',
            image: {
              url: __webpack_require__(32),
              width: 800,
              height: 800,
              alt: 'Пицца Фиеста'
            },
            title: 'Фиеста',
            description: 'Ветчина, болг. перец,<br> горошек, помидоры,<br> сыр Моцарелла.',
            cost: 1900
          }, {
            id: 'chicken',
            image: {
              url: __webpack_require__(31),
              width: 800,
              height: 800,
              alt: 'Куриная пицца'
            },
            title: 'Куриная',
            description: 'Курица копченая,<br> помидоры, пицца соус,<br> сыр Моцарелла.',
            cost: 1800
          }, {
            id: 'hunt',
            image: {
              url: __webpack_require__(35),
              width: 600,
              height: 600,
              alt: 'Пицца Хант'
            },
            title: 'Пицца Хант',
            description: 'Охотничьи колбаски,<br> болг. перец, помидоры,<br> сыр Моцарелла.',
            cost: 1700
          }, {
            id: 'constructor',
            image: {
              url: __webpack_require__(4),
              width: 800,
              height: 800,
              alt: 'Конструктор пиццы'
            },
            title: 'Конструктор',
            description: 'Сыр Моцарелла, пицца соус, основа для пиццы. Дополнительные ингердиенты можно заказть по телефону.',
            cost: 1200
          }] });
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _jsContent = __webpack_require__(2);

  var _jsContent2 = _interopRequireDefault(_jsContent);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(_jsContent2['default'], { id: 'promo', items: [{
            id: 'free-coke',
            image: {
              url: __webpack_require__(5),
              width: 960,
              height: 320,
              alt: 'При заказе 2-х пицц 1 литр Колы в подарок'
            },
            title: 'При заказе 2-х пицц 1 литр Колы в подарок'
          }, {
            id: 'over-5000',
            image: {
              url: __webpack_require__(49),
              width: 960,
              height: 320,
              alt: 'При заказе на сумму свыше 5000 тг Летний ролл в подарок'
            },
            title: 'При заказе на сумму свыше 5000 тг Летний ролл в подарок'
          }, {
            id: 'over-10000',
            image: {
              url: __webpack_require__(48),
              width: 960,
              height: 320,
              alt: 'При заказе на сумму свыше 10000 тг скидка 10% + пицца Маргарита в подарок'
            },
            title: 'При заказе на сумму свыше 10000 тг<br> скидка 10% + пицца Маргарита в подарок'
          }, {
            id: 'birthday',
            image: {
              url: __webpack_require__(47),
              width: 960,
              height: 320,
              alt: 'Подарок в День Рождения скидка 25% на все меню'
            },
            title: 'Подарок в День Рождения скидка 25% на все меню'
          }] });
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _jsContent = __webpack_require__(2);

  var _jsContent2 = _interopRequireDefault(_jsContent);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(_jsContent2['default'], { id: 'roll', items: [{
            id: 'maguro-maki',
            image: {
              url: __webpack_require__(62),
              width: 800,
              height: 800,
              alt: 'Ролл Магуро Маки'
            },
            title: 'Магуро Маки',
            description: 'Тунец, рис, нори.',
            cost: 700
          }, {
            id: 'ebi-maki',
            image: {
              url: __webpack_require__(54),
              width: 800,
              height: 800,
              alt: 'Ролл Эби Маки'
            },
            title: 'Эби Маки',
            description: 'Креветка, рис, нори.',
            cost: 700
          }, {
            id: 'avocado-maki',
            image: {
              url: __webpack_require__(52),
              width: 800,
              height: 800,
              alt: 'Ролл Авокадо Маки'
            },
            title: 'Авокадо Маки',
            description: 'Авокадо, рис, нори.',
            cost: 600
          }, {
            id: 'kappa-maki',
            image: {
              url: __webpack_require__(59),
              width: 800,
              height: 800,
              alt: 'Ролл Каппа Маки'
            },
            title: 'Каппа Маки',
            description: 'Огурец, кунжут, рис, нори.',
            cost: 500
          }, {
            id: 'syake-maki',
            image: {
              url: __webpack_require__(67),
              width: 800,
              height: 800,
              alt: 'Ролл Сяке Маки'
            },
            title: 'Сяке Маки',
            description: 'Лосось, рис, нори.',
            cost: 600
          }, {
            id: 'unagi-maki',
            image: {
              url: __webpack_require__(68),
              width: 800,
              height: 800,
              alt: 'Ролл Унаги Маки'
            },
            title: 'Унаги Маки',
            description: 'Копчёный угорь, рис,<br> кунжут, нори.',
            cost: 700
          }, {
            id: 'ebi-roru',
            image: {
              url: __webpack_require__(55),
              width: 800,
              height: 800,
              alt: 'Ролл Эби Рору'
            },
            title: 'Эби Рору',
            description: 'Креветки, кунжут, огурец,<br> лист салата,<br> сыр Филадельфия.<br> 8 шт.',
            cost: 1400
          }, {
            id: 'shef-toku-sen',
            image: {
              url: __webpack_require__(65),
              width: 800,
              height: 800,
              alt: 'Шеф Току Сен ролл'
            },
            title: 'Шеф Току Сен ролл',
            description: 'Икра Масаго, кунжут, угорь, огурец, сыр Филадельфия,<br> соус Терияки.<br> 8 шт.',
            cost: 1900
          }, {
            id: 'philadelphia',
            image: {
              url: __webpack_require__(63),
              width: 800,
              height: 800,
              alt: 'Ролл Филадельфия'
            },
            title: 'Филадельфия',
            description: 'Лосось, огурец,<br> сыр Филадельфия.<br> 8 шт.',
            cost: 1550
          }, {
            id: 'summer',
            image: {
              url: __webpack_require__(66),
              width: 800,
              height: 800,
              alt: 'Летний ролл'
            },
            title: 'Летний',
            description: 'Зелень, огурец,<br> сыр Филадельфия,<br> копчёный лосось.<br> 8 шт.',
            cost: 1300
          }, {
            id: 'gurman',
            image: {
              url: __webpack_require__(56),
              width: 800,
              height: 800,
              alt: 'Ролл Гурман'
            },
            title: 'Гурман',
            description: 'Икра Тобико, авокадо, копчёный лосось, огурец,<br> сыр Филадельфия.<br> 8 шт.',
            cost: 1900
          }, {
            id: 'cezar',
            image: {
              url: __webpack_require__(53),
              width: 800,
              height: 800,
              alt: 'Цезарь ролл'
            },
            title: 'Цезарь',
            description: 'Курица с паприкой,<br> соус Цезарь, сыр Пармезан, кунжут, лист салата.<br> 8 шт.',
            cost: 1100
          }, {
            id: 'kunsey-maki-khit',
            image: {
              url: __webpack_require__(61),
              width: 800,
              height: 800,
              alt: 'Ролл Кунсей Маки Хит'
            },
            title: 'Кунсей Маки Хит',
            description: 'Лосось, кунжут,<br> лист салата, соус Хот.<br> 8 шт.',
            cost: 1100
          }, {
            id: 'kasan-roru',
            image: {
              url: __webpack_require__(60),
              width: 800,
              height: 800,
              alt: 'Ролл Касан Рору'
            },
            title: 'Касан Рору',
            description: 'Лосось, угорь, стружка тунца, сыр Филадельфия,<br> авокадо, огурец.<br> 8 шт.',
            cost: 1200
          }, {
            id: 'kaliforniya',
            image: {
              url: __webpack_require__(57),
              width: 800,
              height: 800,
              alt: 'Калифорния ролл'
            },
            title: 'Калифорния',
            description: 'Икра Масаго, авокадо, лосось, майонез, огурец.<br> 8 шт.',
            cost: 1400
          }, {
            id: 'kanada',
            image: {
              url: __webpack_require__(58),
              width: 800,
              height: 800,
              alt: 'Канада ролл'
            },
            title: 'Канада',
            description: 'Копчёный угорь, авокадо,<br> сыр Филадельфия.<br> 8 шт.',
            cost: 1950
          }, {
            id: 'salmon-skin',
            image: {
              url: __webpack_require__(64),
              width: 800,
              height: 800,
              alt: 'Ролл Салмон Скин'
            },
            title: 'Салмон Скин',
            description: 'Жаренная кожа лосося, омлет, кунжут, сыр Филадельфия, огурец.<br> 8 шт.',
            cost: 1200
          }, {
            id: 'zelenyi',
            image: {
              url: __webpack_require__(69),
              width: 800,
              height: 800,
              alt: 'Зелёный ролл'
            },
            title: 'Зелёный ролл',
            description: 'Ветчина, зелень,<br> сыр Филадельфия,<br> болгарский перец.<br> 8 шт.',
            cost: 1300
          }, {
            id: 'alyaska-khit',
            image: {
              url: __webpack_require__(51),
              width: 800,
              height: 800,
              alt: 'Ролл Аляска Хит'
            },
            title: 'Аляска Хит',
            description: 'Лосось, краб, огурец,<br> сыр Филадельфия,<br> авокадо, кунжут.<br> 8 шт.',
            cost: 1500
          }] });
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _jsContent = __webpack_require__(2);

  var _jsContent2 = _interopRequireDefault(_jsContent);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(_jsContent2['default'], { id: 'set', items: [{
            id: 'love',
            image: {
              url: __webpack_require__(71),
              width: 685,
              height: 215,
              alt: 'Ролл Цезарь, Пицца Салями и Кока-кола сет'
            },
            title: 'Love set',
            description: 'Пицца Салями (Салями, помидоры, корнишоны, шампиньоны, сыр Моцарелла).<br> Ролл Цезарь (курица, соус Цезарь, сыр Пармезан, кунжут, лист салата).<br> Кока-Кола 1 литр.',
            cost: 2900
          }, {
            id: 'trio',
            image: {
              url: __webpack_require__(72),
              width: 685,
              height: 215,
              alt: 'Ролл Филадельфия, Ролл Цезарь и Ролл Калифорния сет'
            },
            title: 'Ассорти Трио',
            description: 'Ролл Филадельфия (лосось, огурец, сыр Филадельфия).<br> Ролл Калифорния с лососем (икра Масаго, лосось, огурец, майонез, авокадо).<br> Ролл Цезарь (курица, соус Цезарь, сыр Пармезан, кунжут, лист салата).',
            cost: 3650
          }, {
            id: 'vip',
            image: {
              url: __webpack_require__(73),
              width: 685,
              height: 215,
              alt: 'Пицца Морская, Кока-Кола, Ролл Филадельфия, тёплый ролл Кунсей темпура и Сяке маки сет'
            },
            title: 'VIP set',
            description: 'Пицца Морская.<br> Сушки : Эби 1 шт, Унаги 1 шт, Сяке 1 шт, Магуро 1 шт, Икура 1 шт.<br> Ролл Филадельфия, тёплый ролл Кунсей темпура, Сяке маки.<br> Кока-Кола 1 литр.',
            cost: 7300
          }] });
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _jsContent = __webpack_require__(2);

  var _jsContent2 = _interopRequireDefault(_jsContent);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(_jsContent2['default'], { id: 'sushi', items: [{
            id: 'syake',
            image: {
              url: __webpack_require__(83),
              width: 800,
              height: 800,
              alt: 'Сяке суша'
            },
            title: 'Сяке суша',
            description: 'Лосось, рис.',
            cost: 300
          }, {
            id: 'maguro',
            image: {
              url: __webpack_require__(81),
              width: 800,
              height: 800,
              alt: 'Магуро суша'
            },
            title: 'Магуро суша',
            description: 'Тунец, рис.',
            cost: 300
          }, {
            id: 'unagi',
            image: {
              url: __webpack_require__(85),
              width: 800,
              height: 800,
              alt: 'Унаги суша'
            },
            title: 'Унаги суша',
            description: 'Копчёный угорь, рис,<br> нори, кунжут.',
            cost: 300
          }, {
            id: 'ebi',
            image: {
              url: __webpack_require__(77),
              width: 800,
              height: 800,
              alt: 'Эби суша'
            },
            title: 'Эби суша',
            description: 'Креветка, рис.',
            cost: 300
          }, {
            id: 'chuka',
            image: {
              url: __webpack_require__(75),
              width: 800,
              height: 800,
              alt: 'Чука'
            },
            title: 'Чука',
            description: 'Водоросли Чука,<br> рис, нори.',
            cost: 350
          }, {
            id: 'syake-spaisi',
            image: {
              url: __webpack_require__(82),
              width: 800,
              height: 800,
              alt: 'Сяке Спайси суша'
            },
            title: 'Сяке Спайси',
            description: 'Лосось, рис, нори,<br> острый соус.',
            cost: 350
          }, {
            id: 'maguro-spaisi',
            image: {
              url: __webpack_require__(80),
              width: 800,
              height: 800,
              alt: 'Магуро Спайси суша'
            },
            title: 'Магуро Спайси',
            description: 'Тунец, рис,<br> острый соус, нори.',
            cost: 350
          }, {
            id: 'ebi-spaisi',
            image: {
              url: __webpack_require__(76),
              width: 800,
              height: 800,
              alt: 'Эби Спайси суша'
            },
            title: 'Эби Спайси',
            description: 'Креветка, рис, нори,<br> острый соус.',
            cost: 350
          }, {
            id: 'unagi-spaisi',
            image: {
              url: __webpack_require__(84),
              width: 800,
              height: 800,
              alt: 'Унаги Спайси суша'
            },
            title: 'Унаги Спайси',
            description: 'Копчёный угорь,<br> рис, нори,<br> острый соус.',
            cost: 350
          }, {
            id: 'kani-spaisi',
            image: {
              url: __webpack_require__(79),
              width: 800,
              height: 800,
              alt: 'Кани Спайси суша'
            },
            title: 'Кани Спайси',
            description: 'Краб, рис, нори,<br> острый соус.',
            cost: 350
          }, {
            id: 'ikura',
            image: {
              url: __webpack_require__(78),
              width: 800,
              height: 800,
              alt: 'Икура суша'
            },
            title: 'Икура',
            description: 'Икра летучей рыбы,<br> рис, нори.',
            cost: 350
          }] });
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(18)();
  // imports


  // module
  exports.push([module.id, "html{height:100%;background:#c7974e;color:#000;font:9pt/1.5 Verdana,Geneva,sans-serif}body{margin:0;min-height:100%}img,svg{vertical-align:middle}svg{fill:currentColor}.bg{position:fixed;top:0;left:0;width:100%;height:100%;background:url(" + __webpack_require__(19) + ");background-size:20pc}.container{position:relative;margin:0 auto;width:60pc}.header{padding:2.15em 0 1.1em}.header:after{display:table;clear:both;content:' '}.logo{position:relative;left:-15px;float:left}.contacts{float:right;padding:1.2em 20px 0;color:#fff;text-align:center;text-shadow:0 2px #000;white-space:nowrap;font-weight:700}.working-hours{font-size:1pc}.local{font-size:54px;line-height:1.2}.mobile{position:relative;top:-.45em;font-size:25px}.phone{color:#fe6309;text-decoration:none}.promo{display:block;margin:0 0 2.5em}.promo-image{border-radius:30px}.menu{margin:0 0 2.5em;padding:19px 0 1px 1px;background:#fff;box-shadow:0 0 5px #000;list-style:none}.menu:after{display:table;clear:both;content:' '}.menu-item{position:relative;float:left;margin:0 0 18px 18px;width:293px}.menu-item:before{position:absolute;top:82px;right:42px;bottom:3px;left:42px;box-shadow:0 2px 1pc #4d5362;content:''}.menu-link{position:relative;display:block;padding:20px 75pt 20px 20px;height:252px;border:2px solid #bfbfbf;background:#fff 100% 100% no-repeat;background-size:290px;color:#000;text-decoration:none;font-size:30px;line-height:1.2;-webkit-transition:font-size .2s ease,background-size .2s ease,border-color .3s ease-out;transition:font-size .2s ease,background-size .2s ease,border-color .3s ease-out}.menu-link:hover{border-color:#fe6309;background-size:230px;color:#fe6309;font-size:42px;-webkit-transition:font-size .2s ease,background-size .2s ease;transition:font-size .2s ease,background-size .2s ease}.menu-pizza{background-image:url(" + __webpack_require__(28) + ")}.menu-roll{background-image:url(" + __webpack_require__(50) + ")}.menu-sushi{background-image:url(" + __webpack_require__(74) + ")}.menu-hot-roll{background-image:url(" + __webpack_require__(22) + ")}.menu-set{background-image:url(" + __webpack_require__(70) + ")}.menu-drinks{background-image:url(" + __webpack_require__(20) + ")}.main{margin:0 0 2.5em;background:#fff;box-shadow:0 0 5px #000}.main:after{display:table;clear:both;content:' '}.content{float:right;width:705px}.title{overflow:hidden;margin:0 0 20px;padding:0;width:682px;height:217px;border:2px solid #ededed;border-top:0;background:#fff no-repeat;text-indent:-99999em;white-space:nowrap;font-weight:400}.title-pizza{background-image:url(" + __webpack_require__(88) + ")}.title-roll{background-image:url(" + __webpack_require__(90) + ")}.title-sushi{background-image:url(" + __webpack_require__(92) + ")}.title-hot-roll{background-image:url(" + __webpack_require__(87) + ")}.title-set{background-image:url(" + __webpack_require__(91) + ")}.title-drinks{background-image:url(" + __webpack_require__(86) + ")}.title-promo{background-image:url(" + __webpack_require__(89) + ")}.product{position:relative;float:left;overflow:hidden;margin:0 20px 20px 0;width:211px;height:366px;border:2px solid #ededed;background:#ededed;text-align:center;-webkit-transition:border-color .3s ease-out;transition:border-color .3s ease-out}.product-drinks,.product-promo,.product-set{width:681px;text-align:left}.product-promo{height:300px}.product:hover{border-color:#fe6309;-webkit-transition:none;transition:none}.product-header{position:relative;overflow:hidden;height:213px;background:#fff}.product-hot-roll .product-image,.product-pizza .product-image,.product-roll .product-image,.product-sushi .product-image{position:absolute;top:7px;left:6px;width:200px;height:200px;-webkit-transition:all .35s ease;transition:all .35s ease}.product-pizza .product-image{top:9px;left:8px;width:195px;height:195px}.product-pizza:hover .product-image{top:-91px;left:-92px;width:25pc;height:25pc}.product-hot-roll:hover .product-image,.product-roll:hover .product-image{top:-90pt;left:0;width:25pc;height:25pc}.product-sushi:hover .product-image{top:-50px;left:-92px;width:25pc;height:25pc}.product-promo .product-header{height:227px}.product-promo .product-image{width:100%;height:auto}.product-drinks .product-cost,.product-drinks .product-desc,.product-drinks .product-title,.product-promo .product-cost,.product-promo .product-desc,.product-promo .product-title,.product-set .product-cost,.product-set .product-desc,.product-set .product-title{padding-right:43px;padding-left:43px}.product-drinks .product-cost,.product-promo .product-cost,.product-set .product-cost{text-align:right}.product-title{margin:0;padding:8px 5px 5px;color:#000;font-weight:400;font-size:18px}.product-desc{margin:0;padding:0 5px;color:#7a7a7a}.product-cost{position:absolute;right:0;bottom:0;left:0;padding:0 0 1px;background:#ededed;color:#fe6309;font-size:28px}.sidebar{float:left;padding:171px 0 0 33px;width:203px}.nav-title{margin:0 0 20px;padding:0;color:#000;font-weight:400;font-size:3pc;line-height:3pc}.nav{margin:0;padding:0 0 20px;color:#fe6309;list-style:none;font-size:22px;cursor:default}.nav-link{padding:3px 0;text-decoration:none;cursor:pointer}.nav-link,.nav:hover{color:#000}.nav-link:hover,.nav:hover .nav-item:hover{color:#fe6309}.footer{position:relative;margin:0 0 2.5em;background:#fff;box-shadow:0 0 5px #000}.footer:after{display:table;clear:both;content:' '}.shipping{float:left;padding:18px 20px 18px 63px;width:250px;text-align:center;white-space:nowrap;font-size:18px}.address{display:block;font-size:20px}.cost{display:inline-block;margin:0 0 8px;padding:0 0 8px;border-bottom:1px solid #898989;color:#325e19;text-transform:uppercase;font-size:2pc;line-height:1.2}.payment{font-weight:700;font-size:15px}.footer-contacts{float:left;padding:20px 0 5px;width:293px;text-align:center;white-space:nowrap;font-weight:700}.footer-phone{color:#c41301;text-decoration:none}.social{float:left;padding:20px 0 20px 40px;width:274px}.social-title{font-weight:700;font-size:1pc}.social-list{margin:10px 0 14px;padding:0;list-style:none}.social-item{display:inline-block;margin:0 10px 0 0;vertical-align:top}.social-link{display:block;color:#fff;text-decoration:none}.social-vk{background:#4d76a4}.social-ok{background:#f38420}.social-ig{background:#3c5a99}.designer{color:#c41301;text-decoration:none}.designer:hover{text-decoration:underline}.tomato{position:absolute;top:15px;left:-52px;width:90pt;height:99pt;background:url(" + __webpack_require__(95) + ") no-repeat}.mushroom{position:absolute;right:-33px;bottom:-1pc;width:131px;height:110px;background:url(" + __webpack_require__(94) + ") no-repeat}", ""]);

  // exports


/***/ },
/* 18 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "268e410bdf199b68b3e90e89d88f6b63.jpg"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "e6729b3bf776eef637a956618d1100af.jpg"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "0d2bd946cfba83b3e07069d8729b0fdc.jpg"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "4013b2a10fb01aac0025b91deb666fd2.jpg"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "e413cfa75a6b0426c487e35b9529e380.jpg"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "7bfe3c6adaf670a44f51f20383ae9c10.jpg"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "614ba968750844c002ae26ad3193264f.jpg"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "42a86c29d30a4712c620b6fb340b2f1d.jpg"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "7ee01640c1335f43a267774961604f15.jpg"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "7fccc9ac23e3e1aa322f3b70f2293966.jpg"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "162f04d8363ab32b007f2e0ded71b9f0.jpg"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "ed7ff31a558f159a1fe2c8dacb82b9c2.jpg"

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "d2597ea6eed922df864a2ea8a4734ec8.jpg"

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "758f73318b353a503c2a0cc2648d574a.jpg"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "6773f4568862602027e7c6e64564b573.jpg"

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "2787c850f4c7ffae84cea8cc1b1f618c.jpg"

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "6f5df625246ff64808302e04a61f2164.jpg"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "85903f8436e91f9bdb1d5a1141eebcdd.jpg"

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "456c5b8678b7b2d20e9f1459616848d1.jpg"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "22665da2c96b7e67b63de2fa59758cb8.jpg"

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "b89bf26d1cb34bbde7565355c4e5e2fc.jpg"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "62f097ef143037cc03bb0b54056aae57.jpg"

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "6c59b1657d72479e2b90d0bf5b4c3ad2.jpg"

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "f5ea4bbe18ff04c56b73c7c41adb1f94.jpg"

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "bf721e01ba1710660b172a7919ca24dd.jpg"

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "47edc9b7cb37fded23f6f2b0c76ce356.jpg"

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "468143aaf30ef0fea96d52e6c9d8bccf.jpg"

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "5e02cca7d1d90b5f7d4fc403755d6781.jpg"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "238c02062a33959c7f5f3f1522201db5.jpg"

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "ef2ff1623f099cddcd3ead705deb7b1e.jpg"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "e824c995e076af9689b495e92de87e91.jpg"

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "b752e5a03db136c56328ebce02675993.jpg"

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "ec3ee90a61428f1cc35cf196a88c9b0a.jpg"

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "2b2257329f7cc9985a21bda37aaf1104.jpg"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "80343e5cf4028c696d5c25442a2d8d0b.jpg"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "f546fcca9778d3bbb0ec4bdbbc59513b.jpg"

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "8e9865178044d2ccedae5b5c0e869aeb.jpg"

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "41b7b0140604f31cd469a3866e35f8d8.jpg"

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "ebf4816909d24f36557d5ac06155e954.jpg"

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "9b96f568bf45e70b651bd9940305a12c.jpg"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "61021caccd8049dc4fda1777a73adffd.jpg"

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "b18469f225cfbe1bbf009a20fd6e3216.jpg"

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "7172031109b944c108eec3946d8c205b.jpg"

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "ca9ad9ddfcfebdf1c16da054659e0d42.jpg"

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "10389aa448b327a00e0e56fb6d5fc835.jpg"

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "d1b92501723aef399c95a967310279af.jpg"

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "9ee4de62fa0f990696514693f605ac61.jpg"

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "be4fcafbf9971c9f25139db2f6e7b24e.jpg"

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "6f23006b490ae433a6fcd1f7e30d446e.jpg"

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "86ebdf58f7bafe800e59a587d4404841.jpg"

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "920485c6bb875146cf15495dab564421.jpg"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "18db19cd2b423c9599354465f678cf42.jpg"

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "5f405c05e466b5e2b627dcdfd9d4fe0d.jpg"

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "fe9ae7ac3a3ae7e515d9890827ed5d92.jpg"

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "3f4eb9307858194a49496100ad975c62.jpg"

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "8f2d661a025ca5c440b2377f8724d3eb.jpg"

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "d58645601f54eaf69eb8efa806ad5405.jpg"

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "c9771596b7fb00993e386a1d3d5cbf5e.jpg"

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "4bd0626da195d8150996d0260c3c0c7e.jpg"

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "15409b4284be42a88d2b50ec675b9277.jpg"

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "f2244dac989cd9f96387664e8a3d59a3.jpg"

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "cc6bb9478ba26a9c283f190e98193b24.jpg"

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "6a49b22f8b22c3fadd5fb81c78496d93.jpg"

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "7b48520c7b2b5a0b66a091c09aaf2377.jpg"

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "622342625e7da79a82e5428e3ae2983c.jpg"

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "1f5ffe121fadbd3ea69a1e28bf3ea0e7.jpg"

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "65886b4cf32e7f3093facb183daff804.jpg"

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "af2d8712fefef57e8314db4e092de503.jpg"

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "58dfcc8c70c565e420303f078f4b6695.jpg"

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "ec75eae745c0bc4eeb1ff1f185c608e2.jpg"

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "b50df50dde7ab36e014dcbd817db18f0.jpg"

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "3187e899a72021a8db2b6f7046b38331.jpg"

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "9125b709160af4296e3e1fab99c33b46.jpg"

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "eab8729a0a79423be5be19ffaf80140f.jpg"

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "3313f5929a9d6a24efac1ca2beb5ff84.png"

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "ecb4ab3d5976bbc076f9289ee9d570a8.png"

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "e811c93992557aac3ff21ce5f9604def.png"

/***/ },
/* 96 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 97 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);