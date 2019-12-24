webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Noticia.js":
/*!*******************************!*\
  !*** ./components/Noticia.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/fernando.miras/Documents/ReactUDEMY/jp-app-bitcoin-ssr-hooks-10/components/Noticia.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Noticia = function Noticia(props) {
  var _props$noticia = props.noticia,
      urlToImage = _props$noticia.urlToImage,
      url = _props$noticia.url,
      title = _props$noticia.title,
      description = _props$noticia.description,
      source = _props$noticia.source;
  var imagen;

  if (urlToImage !== '') {
    imagen = __jsx("img", {
      src: urlToImage,
      alt: title,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  } else {
    imagen = __jsx("p", {
      className: "text-center my-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Imagen No Disponible");
  }

  return __jsx("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, imagen), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, title), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, description), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, source.name), __jsx("a", {
    href: url,
    target: "_blank",
    className: "btn btn-primary d-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Leer Noticia"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticia);

/***/ }),

/***/ "./components/Noticias.js":
/*!********************************!*\
  !*** ./components/Noticias.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Noticia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Noticia */ "./components/Noticia.js");
var _jsxFileName = "/Users/fernando.miras/Documents/ReactUDEMY/jp-app-bitcoin-ssr-hooks-10/components/Noticias.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Noticias = function Noticias(props) {
  return __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.noticias.map(function (noticia) {
    return __jsx(_Noticia__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: noticia.url,
      noticia: noticia,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticias);

/***/ })

})
//# sourceMappingURL=index.js.08275c3e4a703e61d8fe.hot-update.js.map