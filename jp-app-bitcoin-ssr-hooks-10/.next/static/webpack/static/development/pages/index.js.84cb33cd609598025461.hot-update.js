webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MasterPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MasterPage */ "./components/MasterPage.js");
/* harmony import */ var _components_Precio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Precio */ "./components/Precio.js");
/* harmony import */ var _components_Noticias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Noticias */ "./components/Noticias.js");
/* harmony import */ var _components_Eventos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Eventos */ "./components/Eventos.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/fernando.miras/Documents/ReactUDEMY/jp-app-bitcoin-ssr-hooks-10/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // COMPONENTES



 // llamando al fetch mediante ssr



var Index = function Index(props) {
  return __jsx(_components_MasterPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Precio del bitcoin"), __jsx(_components_Precio__WEBPACK_IMPORTED_MODULE_3__["default"], {
    precio: props.precioBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Noticias sobre Bitcoin"), __jsx(_components_Noticias__WEBPACK_IMPORTED_MODULE_4__["default"], {
    noticias: props.noticias,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h2", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Pr\xF3ximos Eventos Bitcoin"), __jsx(_components_Eventos__WEBPACK_IMPORTED_MODULE_5__["default"], {
    eventos: props.eventos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))));
}; // getInitialProps; es como el ComponentDidMunt pero con SSR. Aca de donde se hace el llamado a las API
// a los valores lo guarda como props. Para acceder a los props se tiene q especificar en el Index = (props), para poder acceder a las prosp


Index.getInitialProps = function _callee() {
  var precio, noticias, eventos, resPrecio, resNoticias, resEventos;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://api.coinmarketcap.com/v2/ticker/1/'));

        case 2:
          precio = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=6c1c1dfcb4a943c7bf481bc628b80153&language=es'));

        case 5:
          noticias = _context.sent;
          _context.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&token=HBE2HXYSTXVA5EMYDOO2'));

        case 8:
          eventos = _context.sent;
          _context.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(precio.json());

        case 11:
          resPrecio = _context.sent;
          _context.next = 14;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(noticias.json());

        case 14:
          resNoticias = _context.sent;
          _context.next = 17;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(eventos.json());

        case 17:
          resEventos = _context.sent;
          return _context.abrupt("return", {
            precioBitcoin: resPrecio.data.quotes.USD,
            noticias: resNoticias.articles,
            eventos: resEventos.events
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.84cb33cd609598025461.hot-update.js.map