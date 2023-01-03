/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n}\n\n.board {\n  margin: 20px;\n  height: 300px;\n  width: 300px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.squareDiv {\n  box-sizing: border-box;\n  height: 30px;\n  width: 30px;\n  border: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: inherit;\n}\n\n.ship {\n  background-color: lightpink;\n}\n\n.water {\n  background-color: lightskyblue;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":["body {\n  display: flex;\n}\n\n.board {\n  margin: 20px;\n  height: 300px;\n  width: 300px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.squareDiv {\n  box-sizing: border-box;\n  height: 30px;\n  width: 30px;\n  border: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: inherit;\n}\n\n.ship {\n  background-color: lightpink;\n}\n\n.water {\n  background-color: lightskyblue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _gamedom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamedom */ "./src/gamedom.js");



// import GameBoard from "./gameboard";
// import Ship from "./ship";
const gameDom = (0,_gamedom__WEBPACK_IMPORTED_MODULE_2__["default"])();

const Game = () => {
  let currentPlayer;
  let currentOpponent;

  const setUpGame = () => {
    currentPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("player");
    currentOpponent = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("computer");
    gameDom.renderBoard(currentPlayer);
    gameDom.renderBoard(currentOpponent);
    gameDom.setClickEvent(currentOpponent, getMove);
    gameDom.toggleClick(currentPlayer, currentOpponent);
  };

  const startGame = () => {
    setUpGame();
  };

  const changeTurn = () => {
    const temp = currentPlayer;
    currentPlayer = currentOpponent;
    currentOpponent = temp;
    if (currentPlayer.player !== "player") {
      playGame();
    }
    gameDom.toggleClick(currentPlayer, currentOpponent);
  };

  const getMove = (event) => {
    const cord = parseInt(event.target.id);
    playGame(cord);
  };

  const playGame = (cord = null) => {
    if (currentPlayer.player === "player") {
      playerLogic(cord);
    } else {
      computerLogic(cord);
    }
  };
  const concludeGame = () => {
    gameDom.disableAllPointerEvents();
    console.log("Game Over", currentPlayer, "WON");
  };

  const playerLogic = (cord) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    gameDom.updateBoard(currentOpponent);
    gameDom.disablePointerEvent(currentOpponent);
    if (currentOpponent.board.getLose()) {
      concludeGame();
      return;
    }
    if (!(0,_helper__WEBPACK_IMPORTED_MODULE_1__.isShip)(hitTarget)) {
      changeTurn();
    }
  };

  const computerLogic = (cord) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    gameDom.updateBoard(currentOpponent);
    if (winner() === currentPlayer) {
      console.log(currentPlayer, "WONNNNNNNN");
      return;
    }
    if (!(0,_helper__WEBPACK_IMPORTED_MODULE_1__.isShip)(hitTarget)) {
      changeTurn();
    } else {
      playGame();
    }
  };

  const gameOver = () => {
    if (currentOpponent.board.allSunk()) {
      return true;
    }
    return false;
  };

  const winner = () => {
    if (gameOver()) {
      return currentPlayer;
    }
  };

  return { setUpGame, startGame };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");



const GameBoard = () => {
  const gameBoard = [];
  const hitCords = [];
  let lose = false;
  const turn = 0;
  const getTruns = () => turn;
  const getLose = () => lose;
  for (let i = 1; i <= 100; i += 1) {
    gameBoard.push(i);
  }

  const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("CV");
  const battleShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("BB");
  const cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("CA");
  const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("SS");
  const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("DD");
  const allShips = [carrier, battleShip, cruiser, submarine, destroyer];

  const outsideBoard = (ship, startCord, position) => {
    if (
      (position === "horizontal" &&
        startCord + ship.getLength() - 1 > (0,_helper__WEBPACK_IMPORTED_MODULE_1__.roundUpNearest10)(startCord)) ||
      (position === "vertical" &&
        startCord + ship.getLength() * 10 > 100 + (0,_helper__WEBPACK_IMPORTED_MODULE_1__.lastDigit)(startCord))
    ) {
      return true;
    }
    return false;
  };

  // returns true if a surrounding cordinate is a ship cordinate
  const checkCircumference = (index) => {
    const circumIndices = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.circumIndicesHelper)(index);
    let i = 0;
    while (i < circumIndices.length) {
      if ((0,_helper__WEBPACK_IMPORTED_MODULE_1__.isShip)(gameBoard[circumIndices[i]])) {
        return true;
      }
      i += 1;
    }
    return false;
  };

  const overlaps = (ship, startCord, position) => {
    const stepUpValue = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.increment)(position);
    let i = 0;
    let j = startCord - 1;
    while (i < ship.getLength()) {
      if (checkCircumference(j)) {
        return true;
      }
      i += 1;
      j += stepUpValue;
    }
    return false;
  };

  const canPlaceShip = (ship, startCord, position) => {
    if (outsideBoard(ship, startCord, position)) {
      return false;
    }
    if (overlaps(ship, startCord, position)) {
      return false;
    }
    return true;
  };

  const placeShip = (ship, startCord, position) => {
    const shipCords = [];

    if (canPlaceShip(ship, startCord, position)) {
      const stepUpValue = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.increment)(position);
      let i = 0;
      let j = startCord - 1;
      while (i < ship.getLength()) {
        gameBoard[j] = ship.type;
        shipCords.push(j + 1);
        i += 1;
        j += stepUpValue;
      }

      ship.deploy();
      ship.setCords(shipCords);
      return ship.isDeployed();
    }

    ship.couldNotDeploy();
    return ship.isDeployed();
  };

  const getShipFromSymbol = (symbol) => {
    let getShip;
    allShips.forEach((ship) => {
      if (ship.type === symbol) {
        getShip = ship;
      }
    });
    return getShip;
  };

  const alreadyHit = (cord) => {
    if (hitCords.includes(cord)) {
      return true;
    }
    return false;
  };

  function getOnlyDiagonalCords(onBoardCord) {
    const cord = onBoardCord - 1;
    const exlude = [cord, cord + 1, cord - 1, cord + 10, cord - 10];
    return (0,_helper__WEBPACK_IMPORTED_MODULE_1__.circumIndicesHelper)(cord).filter((value) => !exlude.includes(value));
  }

  const hitDiagonal = (cord) => {
    const possibleCords = getOnlyDiagonalCords(cord);
    possibleCords.forEach((value) => {
      gameBoard[value] = "water";
      if (!alreadyHit(value + 1)) {
        hitCords.push(value + 1);
      }
    });
    return possibleCords.map((value) => value + 1);
  };

  const allShipsDeployed = () => {
    for (let i = 0; i < allShips.length; i += 1) {
      if (allShips[i].isDeployed() === "failed") {
        return false;
      }
    }
    return true;
  };

  function getAllAdjacentCords(ship) {
    return ship.getCords().reduce((adjacentArray, shipCord) => {
      (0,_helper__WEBPACK_IMPORTED_MODULE_1__.circumIndicesHelper)(shipCord - 1).forEach((adjCord) => {
        if (!adjacentArray.includes(adjCord)) adjacentArray.push(adjCord);
      });
      return adjacentArray;
    }, []);
  }

  const hitShipAdjacent = (ship) => {
    if (ship.isSunk()) {
      const remainingCords = getAllAdjacentCords(ship)
        .map((value) => value + 1)
        .filter((value) => !hitCords.includes(value));

      remainingCords.forEach((cord) => {
        gameBoard[cord - 1] = "water";
      });

      return remainingCords;
    }
    return null;
  };

  let initiated;

  const getInitiated = () => initiated;

  const initiateBoard = () => {
    if (allShipsDeployed()) {
      initiated = true;
    } else {
      initiated = false;
    }
  };

  function noAttack() {
    return "h";
  }

  function updateShip(hitTarget, cord) {
    const ship = getShipFromSymbol(hitTarget);
    ship.hit();
    hitDiagonal(cord);
    hitShipAdjacent(ship);
  }

  function attackShip(cord) {
    hitCords.push(cord);
    const hitTarget = gameBoard[cord - 1];
    gameBoard[cord - 1] = "h";
    updateShip(hitTarget, cord);
    allSunk();
    return hitTarget;
  }

  function attackWater(cord) {
    hitCords.push(cord);
    const hitTarget = gameBoard[cord - 1];
    gameBoard[cord - 1] = "water";
    return hitTarget;
  }

  const recieveAttack = (cord) => {
    let hitTarget;
    if (alreadyHit(cord)) {
      hitTarget = noAttack();
    } else if ((0,_helper__WEBPACK_IMPORTED_MODULE_1__.isShip)(gameBoard[cord - 1])) {
      hitTarget = attackShip(cord);
    } else {
      hitTarget = attackWater(cord);
    }
    return hitTarget;
  };

  const allSunk = () => {
    for (let i = 0; i < allShips.length; i += 1) {
      if (allShips[i].isDeployed() && allShips[i].isSunk() === false) {
        return false;
      }
    }
    lose = true;
    return true;
  };

  const getHitCords = () => hitCords;

  return {
    canPlaceShip,
    gameBoard,
    placeShip,
    recieveAttack,
    allSunk,
    isShip: _helper__WEBPACK_IMPORTED_MODULE_1__.isShip,
    allShips,
    allShipsDeployed,
    hitCords,
    checkCircumference,
    hitDiagonal,
    hitShipAdjacent,
    getHitCords,
    getTruns,
    initiateBoard,
    getInitiated,
    getLose,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/gamedom.js":
/*!************************!*\
  !*** ./src/gamedom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GameDom = () => {
  const renderBoard = (PlayerObject) => {
    const body = document.querySelector("body");
    const board = document.createElement("div");
    board.id = PlayerObject.player;
    board.classList.add("board");

    for (let i = 0; i < 100; i += 1) {
      const squareDiv = document.createElement("div");
      squareDiv.id = i + 1;
      squareDiv.classList.add("squareDiv");
      board.appendChild(squareDiv);
    }
    body.appendChild(board);
  };

  const setClickEvent = (opponent, getMove) => {
    const opponentBoard = document.querySelectorAll(`#${opponent.player} div`);
    opponentBoard.forEach((squareDiv) => {
      squareDiv.addEventListener("click", getMove);
    });
  };

  const toggleClick = (player, opponent) => {
    document.getElementById(player.player).style.pointerEvents = "none";
    document.getElementById(opponent.player).style.pointerEvents = "auto";
  };

  const disablePointerEvent = (opponent) => {
    const squareDivs = document.querySelectorAll(`#${opponent.player} div`);
    opponent.board.gameBoard.forEach((value, index) => {
      if (value === "h" || value === "water") {
        squareDivs[index].style.pointerEvents = "none";
      }
    });
  };

  const updateBoard = (opponent) => {
    const squareDivs = document.querySelectorAll(`#${opponent.player} div`);
    opponent.board.gameBoard.forEach((value, index) => {
      if (value === "h") {
        squareDivs[index].classList.add("ship");
        squareDivs[index].textContent = "h";
      } else if (value === "water") {
        squareDivs[index].classList.add("water");
        squareDivs[index].textContent = "w";
      }
    });
  };

  const disableAllPointerEvents = () => {
    const squares = document.querySelectorAll(".squareDiv");
    squares.forEach((square) => {
      square.style.pointerEvents = "none";
    });
  };

  return {
    disableAllPointerEvents,
    toggleClick,
    renderBoard,
    setClickEvent,
    disablePointerEvent,
    updateBoard,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameDom);


/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "circumIndicesHelper": () => (/* binding */ circumIndicesHelper),
/* harmony export */   "increment": () => (/* binding */ increment),
/* harmony export */   "isShip": () => (/* binding */ isShip),
/* harmony export */   "lastDigit": () => (/* binding */ lastDigit),
/* harmony export */   "roundUpNearest10": () => (/* binding */ roundUpNearest10)
/* harmony export */ });
function circumIndicesHelper(i) {
  const leftColumn = [10, 20, 30, 40, 50, 60, 70, 80];
  const rightColumn = [19, 29, 39, 49, 59, 69, 79, 89];
  let circumIndices = [];
  switch (true) {
    case i === 0:
      circumIndices = [i, i + 1, i + 10, i + 11];
      break;
    case i === 9:
      circumIndices = [i, i - 1, i + 9, i + 10];
      break;
    case i === 90:
      circumIndices = [i, i - 10, i + 1, i - 9];
      break;
    case i === 99:
      circumIndices = [i, i - 1, i - 10, i - 11];
      break;
    case i > 0 && i < 9:
      circumIndices = [i, i + 1, i + 10, i + 11, i + 9, i - 1];
      break;
    case i > 90 && i < 99:
      circumIndices = [i, i - 11, i - 10, i - 9, i + 1, i - 1];
      break;
    case leftColumn.includes(i):
      circumIndices = [i, i - 10, i - 9, i + 1, i + 10, i + 11];
      break;
    case rightColumn.includes(i):
      circumIndices = [i, i - 11, i - 10, i - 1, i + 9, i + 10];
      break;

    default:
      circumIndices = [
        i,
        i + 1,
        i - 1,
        i + 10,
        i - 10,
        i + 11,
        i - 11,
        i - 9,
        i + 9,
      ];
  }
  return circumIndices;
}

function roundUpNearest10(num) {
  return Math.ceil(num / 10) * 10;
}

function lastDigit(num) {
  if (num % 10 === 0) {
    return 10;
  }
  return num % 10;
}

function isShip(value) {
  const symbols = ["CV", "BB", "CA", "SS", "DD"];
  if (symbols.includes(value)) {
    return true;
  }
  return false;
}

function increment(position) {
  if (position === "horizontal") {
    return 1;
  }
  if (position === "vertical") {
    return 10;
  }
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



const Player = (player) => {
  let turn;
  const hitCords = [];
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  if (player === "player") {
    turn = true;
    const carrier = board.allShips[0];
    const battleShip = board.allShips[1];
    const cruiser = board.allShips[2];
    const submarine = board.allShips[3];
    const destroyer = board.allShips[4];
    board.placeShip(carrier, 15, "horizontal");
    board.placeShip(battleShip, 55, "horizontal");
    board.placeShip(cruiser, 13, "vertical");
    board.placeShip(submarine, 72, "vertical");
    board.placeShip(destroyer, 85, "vertical");
  } else {
    turn = false;
    const carrier = board.allShips[0];
    // const battleShip = board.allShips[1];
    // const cruiser = board.allShips[2];
    // const submarine = board.allShips[3];
    // const destroyer = board.allShips[4];
    board.placeShip(carrier, 1, "vertical");
    // board.placeShip(battleShip, 3, "vertical");
    // board.placeShip(cruiser, 5, "vertical");
    // board.placeShip(submarine, 7, "vertical");
    // board.placeShip(destroyer, 9, "vertical");
  }

  const getTurn = () => turn;

  const changeTurn = () => {
    turn = !turn;
  };

  function getRandomInt(minimum, maximum) {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const possibleMove = [];
  for (let i = 1; i < 101; i++) {
    possibleMove.push(i);
  }

  function removeItemOnce(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const numberOfTurns = 0;
  const getTruns = () => numberOfTurns;

  function playerAttacks(opponent, cord) {
    const hitCord = opponent.board.recieveAttack(cord);
    return hitCord;
  }

  function getRandom(array) {
    return array[Math.floor(Math.random() * possibleMove.length)];
  }

  function computerAttacks(opponent) {
    const cord = getRandom(possibleMove);
    const hitCord = opponent.board.recieveAttack(cord);
    opponent.board.hitCords.forEach((value) => {
      removeItemOnce(possibleMove, value);
    });
    return hitCord;
  }

  const attack = (opponent, cord = null) => {
    let hitCord;
    if (player === "player") {
      hitCord = playerAttacks(opponent, cord);
    } else {
      hitCord = computerAttacks(opponent);
    }
    return hitCord;
  };

  return { getTurn, changeTurn, attack, board, player, hitCords, getTruns };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (type, hits = 0, sunk = false) => {
  let length;
  let cord = null;
  let deployed = false;
  switch (type) {
    case "CV":
      length = 5;
      break;
    case "BB":
      length = 4;
      break;
    case "CA":
      length = 3;
      break;
    case "SS":
      length = 3;
      break;
    case "DD":
      length = 2;
      break;
    default:
      length = 0;
      break;
  }

  const getHits = () => hits;
  const getLength = () => length;
  const isDeployed = () => deployed;
  const setCords = (cords) => {
    cord = cords;
  };

  const hit = () => {
    if (hits === length) {
      return;
    }
    hits += 1;
    if (hits === length) {
      sunk = true;
    }
  };

  const isSunk = () => sunk;

  const deploy = () => {
    deployed = true;
  };

  const couldNotDeploy = () => {
    deployed = "failed";
  };

  const getCords = () => cord;

  return {
    type,
    hit,
    getHits,
    isSunk,
    getLength,
    deploy,
    deployed,
    isDeployed,
    couldNotDeploy,
    getCords,
    setCords,
    cord,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game */ "./src/game.js");







const game = (0,_game__WEBPACK_IMPORTED_MODULE_4__["default"])();
game.startGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3RFcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRVM7QUFDTTtBQUNWO0FBQ0E7O0FBRTFCLGFBQWEsaURBQUk7QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9nYW1lZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc3F1YXJlRGl2IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBpbmhlcml0O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XFxufVxcblxcbi53YXRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5zcXVhcmVEaXYge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGluaGVyaXQ7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IGlzU2hpcCB9IGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IEdhbWVEb20gZnJvbSBcIi4vZ2FtZWRvbVwiO1xuLy8gaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbi8vIGltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmNvbnN0IGdhbWVEb20gPSBHYW1lRG9tKCk7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGxldCBjdXJyZW50UGxheWVyO1xuICBsZXQgY3VycmVudE9wcG9uZW50O1xuXG4gIGNvbnN0IHNldFVwR2FtZSA9ICgpID0+IHtcbiAgICBjdXJyZW50UGxheWVyID0gUGxheWVyKFwicGxheWVyXCIpO1xuICAgIGN1cnJlbnRPcHBvbmVudCA9IFBsYXllcihcImNvbXB1dGVyXCIpO1xuICAgIGdhbWVEb20ucmVuZGVyQm9hcmQoY3VycmVudFBsYXllcik7XG4gICAgZ2FtZURvbS5yZW5kZXJCb2FyZChjdXJyZW50T3Bwb25lbnQpO1xuICAgIGdhbWVEb20uc2V0Q2xpY2tFdmVudChjdXJyZW50T3Bwb25lbnQsIGdldE1vdmUpO1xuICAgIGdhbWVEb20udG9nZ2xlQ2xpY2soY3VycmVudFBsYXllciwgY3VycmVudE9wcG9uZW50KTtcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgc2V0VXBHYW1lKCk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlVHVybiA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gY3VycmVudFBsYXllcjtcbiAgICBjdXJyZW50UGxheWVyID0gY3VycmVudE9wcG9uZW50O1xuICAgIGN1cnJlbnRPcHBvbmVudCA9IHRlbXA7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIucGxheWVyICE9PSBcInBsYXllclwiKSB7XG4gICAgICBwbGF5R2FtZSgpO1xuICAgIH1cbiAgICBnYW1lRG9tLnRvZ2dsZUNsaWNrKGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRPcHBvbmVudCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TW92ZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvcmQgPSBwYXJzZUludChldmVudC50YXJnZXQuaWQpO1xuICAgIHBsYXlHYW1lKGNvcmQpO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlHYW1lID0gKGNvcmQgPSBudWxsKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIucGxheWVyID09PSBcInBsYXllclwiKSB7XG4gICAgICBwbGF5ZXJMb2dpYyhjb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcHV0ZXJMb2dpYyhjb3JkKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNvbmNsdWRlR2FtZSA9ICgpID0+IHtcbiAgICBnYW1lRG9tLmRpc2FibGVBbGxQb2ludGVyRXZlbnRzKCk7XG4gICAgY29uc29sZS5sb2coXCJHYW1lIE92ZXJcIiwgY3VycmVudFBsYXllciwgXCJXT05cIik7XG4gIH07XG5cbiAgY29uc3QgcGxheWVyTG9naWMgPSAoY29yZCkgPT4ge1xuICAgIGNvbnN0IGhpdFRhcmdldCA9IGN1cnJlbnRQbGF5ZXIuYXR0YWNrKGN1cnJlbnRPcHBvbmVudCwgY29yZCk7XG4gICAgZ2FtZURvbS51cGRhdGVCb2FyZChjdXJyZW50T3Bwb25lbnQpO1xuICAgIGdhbWVEb20uZGlzYWJsZVBvaW50ZXJFdmVudChjdXJyZW50T3Bwb25lbnQpO1xuICAgIGlmIChjdXJyZW50T3Bwb25lbnQuYm9hcmQuZ2V0TG9zZSgpKSB7XG4gICAgICBjb25jbHVkZUdhbWUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpc1NoaXAoaGl0VGFyZ2V0KSkge1xuICAgICAgY2hhbmdlVHVybigpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb21wdXRlckxvZ2ljID0gKGNvcmQpID0+IHtcbiAgICBjb25zdCBoaXRUYXJnZXQgPSBjdXJyZW50UGxheWVyLmF0dGFjayhjdXJyZW50T3Bwb25lbnQsIGNvcmQpO1xuICAgIGdhbWVEb20udXBkYXRlQm9hcmQoY3VycmVudE9wcG9uZW50KTtcbiAgICBpZiAod2lubmVyKCkgPT09IGN1cnJlbnRQbGF5ZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIsIFwiV09OTk5OTk5OTlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpc1NoaXAoaGl0VGFyZ2V0KSkge1xuICAgICAgY2hhbmdlVHVybigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5R2FtZSgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudE9wcG9uZW50LmJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCB3aW5uZXIgPSAoKSA9PiB7XG4gICAgaWYgKGdhbWVPdmVyKCkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50UGxheWVyO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBzZXRVcEdhbWUsIHN0YXJ0R2FtZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7XG4gIGNpcmN1bUluZGljZXNIZWxwZXIsXG4gIGxhc3REaWdpdCxcbiAgcm91bmRVcE5lYXJlc3QxMCxcbiAgaXNTaGlwLFxuICBpbmNyZW1lbnQsXG59IGZyb20gXCIuL2hlbHBlclwiO1xuXG5jb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IFtdO1xuICBjb25zdCBoaXRDb3JkcyA9IFtdO1xuICBsZXQgbG9zZSA9IGZhbHNlO1xuICBjb25zdCB0dXJuID0gMDtcbiAgY29uc3QgZ2V0VHJ1bnMgPSAoKSA9PiB0dXJuO1xuICBjb25zdCBnZXRMb3NlID0gKCkgPT4gbG9zZTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpICs9IDEpIHtcbiAgICBnYW1lQm9hcmQucHVzaChpKTtcbiAgfVxuXG4gIGNvbnN0IGNhcnJpZXIgPSBTaGlwKFwiQ1ZcIik7XG4gIGNvbnN0IGJhdHRsZVNoaXAgPSBTaGlwKFwiQkJcIik7XG4gIGNvbnN0IGNydWlzZXIgPSBTaGlwKFwiQ0FcIik7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoXCJTU1wiKTtcbiAgY29uc3QgZGVzdHJveWVyID0gU2hpcChcIkREXCIpO1xuICBjb25zdCBhbGxTaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVTaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llcl07XG5cbiAgY29uc3Qgb3V0c2lkZUJvYXJkID0gKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pID0+IHtcbiAgICBpZiAoXG4gICAgICAocG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmXG4gICAgICAgIHN0YXJ0Q29yZCArIHNoaXAuZ2V0TGVuZ3RoKCkgLSAxID4gcm91bmRVcE5lYXJlc3QxMChzdGFydENvcmQpKSB8fFxuICAgICAgKHBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIgJiZcbiAgICAgICAgc3RhcnRDb3JkICsgc2hpcC5nZXRMZW5ndGgoKSAqIDEwID4gMTAwICsgbGFzdERpZ2l0KHN0YXJ0Q29yZCkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIHJldHVybnMgdHJ1ZSBpZiBhIHN1cnJvdW5kaW5nIGNvcmRpbmF0ZSBpcyBhIHNoaXAgY29yZGluYXRlXG4gIGNvbnN0IGNoZWNrQ2lyY3VtZmVyZW5jZSA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNpcmN1bUluZGljZXMgPSBjaXJjdW1JbmRpY2VzSGVscGVyKGluZGV4KTtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBjaXJjdW1JbmRpY2VzLmxlbmd0aCkge1xuICAgICAgaWYgKGlzU2hpcChnYW1lQm9hcmRbY2lyY3VtSW5kaWNlc1tpXV0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaSArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgb3ZlcmxhcHMgPSAoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0ZXBVcFZhbHVlID0gaW5jcmVtZW50KHBvc2l0aW9uKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSBzdGFydENvcmQgLSAxO1xuICAgIHdoaWxlIChpIDwgc2hpcC5nZXRMZW5ndGgoKSkge1xuICAgICAgaWYgKGNoZWNrQ2lyY3VtZmVyZW5jZShqKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGkgKz0gMTtcbiAgICAgIGogKz0gc3RlcFVwVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjYW5QbGFjZVNoaXAgPSAoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikgPT4ge1xuICAgIGlmIChvdXRzaWRlQm9hcmQoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG92ZXJsYXBzKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc2hpcENvcmRzID0gW107XG5cbiAgICBpZiAoY2FuUGxhY2VTaGlwKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pKSB7XG4gICAgICBjb25zdCBzdGVwVXBWYWx1ZSA9IGluY3JlbWVudChwb3NpdGlvbik7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBsZXQgaiA9IHN0YXJ0Q29yZCAtIDE7XG4gICAgICB3aGlsZSAoaSA8IHNoaXAuZ2V0TGVuZ3RoKCkpIHtcbiAgICAgICAgZ2FtZUJvYXJkW2pdID0gc2hpcC50eXBlO1xuICAgICAgICBzaGlwQ29yZHMucHVzaChqICsgMSk7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgaiArPSBzdGVwVXBWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgc2hpcC5kZXBsb3koKTtcbiAgICAgIHNoaXAuc2V0Q29yZHMoc2hpcENvcmRzKTtcbiAgICAgIHJldHVybiBzaGlwLmlzRGVwbG95ZWQoKTtcbiAgICB9XG5cbiAgICBzaGlwLmNvdWxkTm90RGVwbG95KCk7XG4gICAgcmV0dXJuIHNoaXAuaXNEZXBsb3llZCgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBGcm9tU3ltYm9sID0gKHN5bWJvbCkgPT4ge1xuICAgIGxldCBnZXRTaGlwO1xuICAgIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLnR5cGUgPT09IHN5bWJvbCkge1xuICAgICAgICBnZXRTaGlwID0gc2hpcDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZ2V0U2hpcDtcbiAgfTtcblxuICBjb25zdCBhbHJlYWR5SGl0ID0gKGNvcmQpID0+IHtcbiAgICBpZiAoaGl0Q29yZHMuaW5jbHVkZXMoY29yZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0T25seURpYWdvbmFsQ29yZHMob25Cb2FyZENvcmQpIHtcbiAgICBjb25zdCBjb3JkID0gb25Cb2FyZENvcmQgLSAxO1xuICAgIGNvbnN0IGV4bHVkZSA9IFtjb3JkLCBjb3JkICsgMSwgY29yZCAtIDEsIGNvcmQgKyAxMCwgY29yZCAtIDEwXTtcbiAgICByZXR1cm4gY2lyY3VtSW5kaWNlc0hlbHBlcihjb3JkKS5maWx0ZXIoKHZhbHVlKSA9PiAhZXhsdWRlLmluY2x1ZGVzKHZhbHVlKSk7XG4gIH1cblxuICBjb25zdCBoaXREaWFnb25hbCA9IChjb3JkKSA9PiB7XG4gICAgY29uc3QgcG9zc2libGVDb3JkcyA9IGdldE9ubHlEaWFnb25hbENvcmRzKGNvcmQpO1xuICAgIHBvc3NpYmxlQ29yZHMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGdhbWVCb2FyZFt2YWx1ZV0gPSBcIndhdGVyXCI7XG4gICAgICBpZiAoIWFscmVhZHlIaXQodmFsdWUgKyAxKSkge1xuICAgICAgICBoaXRDb3Jkcy5wdXNoKHZhbHVlICsgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29yZHMubWFwKCh2YWx1ZSkgPT4gdmFsdWUgKyAxKTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc0RlcGxveWVkID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhbGxTaGlwc1tpXS5pc0RlcGxveWVkKCkgPT09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRBbGxBZGphY2VudENvcmRzKHNoaXApIHtcbiAgICByZXR1cm4gc2hpcC5nZXRDb3JkcygpLnJlZHVjZSgoYWRqYWNlbnRBcnJheSwgc2hpcENvcmQpID0+IHtcbiAgICAgIGNpcmN1bUluZGljZXNIZWxwZXIoc2hpcENvcmQgLSAxKS5mb3JFYWNoKChhZGpDb3JkKSA9PiB7XG4gICAgICAgIGlmICghYWRqYWNlbnRBcnJheS5pbmNsdWRlcyhhZGpDb3JkKSkgYWRqYWNlbnRBcnJheS5wdXNoKGFkakNvcmQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWRqYWNlbnRBcnJheTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBjb25zdCBoaXRTaGlwQWRqYWNlbnQgPSAoc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDb3JkcyA9IGdldEFsbEFkamFjZW50Q29yZHMoc2hpcClcbiAgICAgICAgLm1hcCgodmFsdWUpID0+IHZhbHVlICsgMSlcbiAgICAgICAgLmZpbHRlcigodmFsdWUpID0+ICFoaXRDb3Jkcy5pbmNsdWRlcyh2YWx1ZSkpO1xuXG4gICAgICByZW1haW5pbmdDb3Jkcy5mb3JFYWNoKChjb3JkKSA9PiB7XG4gICAgICAgIGdhbWVCb2FyZFtjb3JkIC0gMV0gPSBcIndhdGVyXCI7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlbWFpbmluZ0NvcmRzO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBsZXQgaW5pdGlhdGVkO1xuXG4gIGNvbnN0IGdldEluaXRpYXRlZCA9ICgpID0+IGluaXRpYXRlZDtcblxuICBjb25zdCBpbml0aWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgIGlmIChhbGxTaGlwc0RlcGxveWVkKCkpIHtcbiAgICAgIGluaXRpYXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRpYXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBub0F0dGFjaygpIHtcbiAgICByZXR1cm4gXCJoXCI7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTaGlwKGhpdFRhcmdldCwgY29yZCkge1xuICAgIGNvbnN0IHNoaXAgPSBnZXRTaGlwRnJvbVN5bWJvbChoaXRUYXJnZXQpO1xuICAgIHNoaXAuaGl0KCk7XG4gICAgaGl0RGlhZ29uYWwoY29yZCk7XG4gICAgaGl0U2hpcEFkamFjZW50KHNoaXApO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNrU2hpcChjb3JkKSB7XG4gICAgaGl0Q29yZHMucHVzaChjb3JkKTtcbiAgICBjb25zdCBoaXRUYXJnZXQgPSBnYW1lQm9hcmRbY29yZCAtIDFdO1xuICAgIGdhbWVCb2FyZFtjb3JkIC0gMV0gPSBcImhcIjtcbiAgICB1cGRhdGVTaGlwKGhpdFRhcmdldCwgY29yZCk7XG4gICAgYWxsU3VuaygpO1xuICAgIHJldHVybiBoaXRUYXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2tXYXRlcihjb3JkKSB7XG4gICAgaGl0Q29yZHMucHVzaChjb3JkKTtcbiAgICBjb25zdCBoaXRUYXJnZXQgPSBnYW1lQm9hcmRbY29yZCAtIDFdO1xuICAgIGdhbWVCb2FyZFtjb3JkIC0gMV0gPSBcIndhdGVyXCI7XG4gICAgcmV0dXJuIGhpdFRhcmdldDtcbiAgfVxuXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoY29yZCkgPT4ge1xuICAgIGxldCBoaXRUYXJnZXQ7XG4gICAgaWYgKGFscmVhZHlIaXQoY29yZCkpIHtcbiAgICAgIGhpdFRhcmdldCA9IG5vQXR0YWNrKCk7XG4gICAgfSBlbHNlIGlmIChpc1NoaXAoZ2FtZUJvYXJkW2NvcmQgLSAxXSkpIHtcbiAgICAgIGhpdFRhcmdldCA9IGF0dGFja1NoaXAoY29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpdFRhcmdldCA9IGF0dGFja1dhdGVyKGNvcmQpO1xuICAgIH1cbiAgICByZXR1cm4gaGl0VGFyZ2V0O1xuICB9O1xuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGFsbFNoaXBzW2ldLmlzRGVwbG95ZWQoKSAmJiBhbGxTaGlwc1tpXS5pc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBsb3NlID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRIaXRDb3JkcyA9ICgpID0+IGhpdENvcmRzO1xuXG4gIHJldHVybiB7XG4gICAgY2FuUGxhY2VTaGlwLFxuICAgIGdhbWVCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBhbGxTdW5rLFxuICAgIGlzU2hpcCxcbiAgICBhbGxTaGlwcyxcbiAgICBhbGxTaGlwc0RlcGxveWVkLFxuICAgIGhpdENvcmRzLFxuICAgIGNoZWNrQ2lyY3VtZmVyZW5jZSxcbiAgICBoaXREaWFnb25hbCxcbiAgICBoaXRTaGlwQWRqYWNlbnQsXG4gICAgZ2V0SGl0Q29yZHMsXG4gICAgZ2V0VHJ1bnMsXG4gICAgaW5pdGlhdGVCb2FyZCxcbiAgICBnZXRJbml0aWF0ZWQsXG4gICAgZ2V0TG9zZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcbiIsImNvbnN0IEdhbWVEb20gPSAoKSA9PiB7XG4gIGNvbnN0IHJlbmRlckJvYXJkID0gKFBsYXllck9iamVjdCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQuaWQgPSBQbGF5ZXJPYmplY3QucGxheWVyO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcXVhcmVEaXYuaWQgPSBpICsgMTtcbiAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwic3F1YXJlRGl2XCIpO1xuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlRGl2KTtcbiAgICB9XG4gICAgYm9keS5hcHBlbmRDaGlsZChib2FyZCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0Q2xpY2tFdmVudCA9IChvcHBvbmVudCwgZ2V0TW92ZSkgPT4ge1xuICAgIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtvcHBvbmVudC5wbGF5ZXJ9IGRpdmApO1xuICAgIG9wcG9uZW50Qm9hcmQuZm9yRWFjaCgoc3F1YXJlRGl2KSA9PiB7XG4gICAgICBzcXVhcmVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldE1vdmUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUNsaWNrID0gKHBsYXllciwgb3Bwb25lbnQpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwbGF5ZXIucGxheWVyKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3Bwb25lbnQucGxheWVyKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gIH07XG5cbiAgY29uc3QgZGlzYWJsZVBvaW50ZXJFdmVudCA9IChvcHBvbmVudCkgPT4ge1xuICAgIGNvbnN0IHNxdWFyZURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtvcHBvbmVudC5wbGF5ZXJ9IGRpdmApO1xuICAgIG9wcG9uZW50LmJvYXJkLmdhbWVCb2FyZC5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCJoXCIgfHwgdmFsdWUgPT09IFwid2F0ZXJcIikge1xuICAgICAgICBzcXVhcmVEaXZzW2luZGV4XS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQm9hcmQgPSAob3Bwb25lbnQpID0+IHtcbiAgICBjb25zdCBzcXVhcmVEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7b3Bwb25lbnQucGxheWVyfSBkaXZgKTtcbiAgICBvcHBvbmVudC5ib2FyZC5nYW1lQm9hcmQuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09IFwiaFwiKSB7XG4gICAgICAgIHNxdWFyZURpdnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICBzcXVhcmVEaXZzW2luZGV4XS50ZXh0Q29udGVudCA9IFwiaFwiO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJ3YXRlclwiKSB7XG4gICAgICAgIHNxdWFyZURpdnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJ3YXRlclwiKTtcbiAgICAgICAgc3F1YXJlRGl2c1tpbmRleF0udGV4dENvbnRlbnQgPSBcIndcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNhYmxlQWxsUG9pbnRlckV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVEaXZcIik7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkaXNhYmxlQWxsUG9pbnRlckV2ZW50cyxcbiAgICB0b2dnbGVDbGljayxcbiAgICByZW5kZXJCb2FyZCxcbiAgICBzZXRDbGlja0V2ZW50LFxuICAgIGRpc2FibGVQb2ludGVyRXZlbnQsXG4gICAgdXBkYXRlQm9hcmQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lRG9tO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNpcmN1bUluZGljZXNIZWxwZXIoaSkge1xuICBjb25zdCBsZWZ0Q29sdW1uID0gWzEwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwLCA4MF07XG4gIGNvbnN0IHJpZ2h0Q29sdW1uID0gWzE5LCAyOSwgMzksIDQ5LCA1OSwgNjksIDc5LCA4OV07XG4gIGxldCBjaXJjdW1JbmRpY2VzID0gW107XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaSA9PT0gMDpcbiAgICAgIGNpcmN1bUluZGljZXMgPSBbaSwgaSArIDEsIGkgKyAxMCwgaSArIDExXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaSA9PT0gOTpcbiAgICAgIGNpcmN1bUluZGljZXMgPSBbaSwgaSAtIDEsIGkgKyA5LCBpICsgMTBdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpID09PSA5MDpcbiAgICAgIGNpcmN1bUluZGljZXMgPSBbaSwgaSAtIDEwLCBpICsgMSwgaSAtIDldO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpID09PSA5OTpcbiAgICAgIGNpcmN1bUluZGljZXMgPSBbaSwgaSAtIDEsIGkgLSAxMCwgaSAtIDExXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaSA+IDAgJiYgaSA8IDk6XG4gICAgICBjaXJjdW1JbmRpY2VzID0gW2ksIGkgKyAxLCBpICsgMTAsIGkgKyAxMSwgaSArIDksIGkgLSAxXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaSA+IDkwICYmIGkgPCA5OTpcbiAgICAgIGNpcmN1bUluZGljZXMgPSBbaSwgaSAtIDExLCBpIC0gMTAsIGkgLSA5LCBpICsgMSwgaSAtIDFdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBsZWZ0Q29sdW1uLmluY2x1ZGVzKGkpOlxuICAgICAgY2lyY3VtSW5kaWNlcyA9IFtpLCBpIC0gMTAsIGkgLSA5LCBpICsgMSwgaSArIDEwLCBpICsgMTFdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSByaWdodENvbHVtbi5pbmNsdWRlcyhpKTpcbiAgICAgIGNpcmN1bUluZGljZXMgPSBbaSwgaSAtIDExLCBpIC0gMTAsIGkgLSAxLCBpICsgOSwgaSArIDEwXTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGNpcmN1bUluZGljZXMgPSBbXG4gICAgICAgIGksXG4gICAgICAgIGkgKyAxLFxuICAgICAgICBpIC0gMSxcbiAgICAgICAgaSArIDEwLFxuICAgICAgICBpIC0gMTAsXG4gICAgICAgIGkgKyAxMSxcbiAgICAgICAgaSAtIDExLFxuICAgICAgICBpIC0gOSxcbiAgICAgICAgaSArIDksXG4gICAgICBdO1xuICB9XG4gIHJldHVybiBjaXJjdW1JbmRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmRVcE5lYXJlc3QxMChudW0pIHtcbiAgcmV0dXJuIE1hdGguY2VpbChudW0gLyAxMCkgKiAxMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3REaWdpdChudW0pIHtcbiAgaWYgKG51bSAlIDEwID09PSAwKSB7XG4gICAgcmV0dXJuIDEwO1xuICB9XG4gIHJldHVybiBudW0gJSAxMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2hpcCh2YWx1ZSkge1xuICBjb25zdCBzeW1ib2xzID0gW1wiQ1ZcIiwgXCJCQlwiLCBcIkNBXCIsIFwiU1NcIiwgXCJERFwiXTtcbiAgaWYgKHN5bWJvbHMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50KHBvc2l0aW9uKSB7XG4gIGlmIChwb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAocG9zaXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgIHJldHVybiAxMDtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgUGxheWVyID0gKHBsYXllcikgPT4ge1xuICBsZXQgdHVybjtcbiAgY29uc3QgaGl0Q29yZHMgPSBbXTtcbiAgY29uc3QgYm9hcmQgPSBHYW1lQm9hcmQoKTtcblxuICBpZiAocGxheWVyID09PSBcInBsYXllclwiKSB7XG4gICAgdHVybiA9IHRydWU7XG4gICAgY29uc3QgY2FycmllciA9IGJvYXJkLmFsbFNoaXBzWzBdO1xuICAgIGNvbnN0IGJhdHRsZVNoaXAgPSBib2FyZC5hbGxTaGlwc1sxXTtcbiAgICBjb25zdCBjcnVpc2VyID0gYm9hcmQuYWxsU2hpcHNbMl07XG4gICAgY29uc3Qgc3VibWFyaW5lID0gYm9hcmQuYWxsU2hpcHNbM107XG4gICAgY29uc3QgZGVzdHJveWVyID0gYm9hcmQuYWxsU2hpcHNbNF07XG4gICAgYm9hcmQucGxhY2VTaGlwKGNhcnJpZXIsIDE1LCBcImhvcml6b250YWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGJhdHRsZVNoaXAsIDU1LCBcImhvcml6b250YWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGNydWlzZXIsIDEzLCBcInZlcnRpY2FsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmUsIDcyLCBcInZlcnRpY2FsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIsIDg1LCBcInZlcnRpY2FsXCIpO1xuICB9IGVsc2Uge1xuICAgIHR1cm4gPSBmYWxzZTtcbiAgICBjb25zdCBjYXJyaWVyID0gYm9hcmQuYWxsU2hpcHNbMF07XG4gICAgLy8gY29uc3QgYmF0dGxlU2hpcCA9IGJvYXJkLmFsbFNoaXBzWzFdO1xuICAgIC8vIGNvbnN0IGNydWlzZXIgPSBib2FyZC5hbGxTaGlwc1syXTtcbiAgICAvLyBjb25zdCBzdWJtYXJpbmUgPSBib2FyZC5hbGxTaGlwc1szXTtcbiAgICAvLyBjb25zdCBkZXN0cm95ZXIgPSBib2FyZC5hbGxTaGlwc1s0XTtcbiAgICBib2FyZC5wbGFjZVNoaXAoY2FycmllciwgMSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAvLyBib2FyZC5wbGFjZVNoaXAoYmF0dGxlU2hpcCwgMywgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAvLyBib2FyZC5wbGFjZVNoaXAoY3J1aXNlciwgNSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAvLyBib2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLCA3LCBcInZlcnRpY2FsXCIpO1xuICAgIC8vIGJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIsIDksIFwidmVydGljYWxcIik7XG4gIH1cblxuICBjb25zdCBnZXRUdXJuID0gKCkgPT4gdHVybjtcblxuICBjb25zdCBjaGFuZ2VUdXJuID0gKCkgPT4ge1xuICAgIHR1cm4gPSAhdHVybjtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluaW11bSwgbWF4aW11bSkge1xuICAgIGNvbnN0IG1pbiA9IE1hdGguY2VpbChtaW5pbXVtKTtcbiAgICBjb25zdCBtYXggPSBNYXRoLmZsb29yKG1heGltdW0pO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG4gIH1cblxuICBjb25zdCBwb3NzaWJsZU1vdmUgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDE7IGkrKykge1xuICAgIHBvc3NpYmxlTW92ZS5wdXNoKGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSXRlbU9uY2UoYXJyLCB2YWx1ZSkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGNvbnN0IG51bWJlck9mVHVybnMgPSAwO1xuICBjb25zdCBnZXRUcnVucyA9ICgpID0+IG51bWJlck9mVHVybnM7XG5cbiAgZnVuY3Rpb24gcGxheWVyQXR0YWNrcyhvcHBvbmVudCwgY29yZCkge1xuICAgIGNvbnN0IGhpdENvcmQgPSBvcHBvbmVudC5ib2FyZC5yZWNpZXZlQXR0YWNrKGNvcmQpO1xuICAgIHJldHVybiBoaXRDb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlTW92ZS5sZW5ndGgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrcyhvcHBvbmVudCkge1xuICAgIGNvbnN0IGNvcmQgPSBnZXRSYW5kb20ocG9zc2libGVNb3ZlKTtcbiAgICBjb25zdCBoaXRDb3JkID0gb3Bwb25lbnQuYm9hcmQucmVjaWV2ZUF0dGFjayhjb3JkKTtcbiAgICBvcHBvbmVudC5ib2FyZC5oaXRDb3Jkcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgcmVtb3ZlSXRlbU9uY2UocG9zc2libGVNb3ZlLCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpdENvcmQ7XG4gIH1cblxuICBjb25zdCBhdHRhY2sgPSAob3Bwb25lbnQsIGNvcmQgPSBudWxsKSA9PiB7XG4gICAgbGV0IGhpdENvcmQ7XG4gICAgaWYgKHBsYXllciA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgaGl0Q29yZCA9IHBsYXllckF0dGFja3Mob3Bwb25lbnQsIGNvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXRDb3JkID0gY29tcHV0ZXJBdHRhY2tzKG9wcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGhpdENvcmQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0VHVybiwgY2hhbmdlVHVybiwgYXR0YWNrLCBib2FyZCwgcGxheWVyLCBoaXRDb3JkcywgZ2V0VHJ1bnMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAodHlwZSwgaGl0cyA9IDAsIHN1bmsgPSBmYWxzZSkgPT4ge1xuICBsZXQgbGVuZ3RoO1xuICBsZXQgY29yZCA9IG51bGw7XG4gIGxldCBkZXBsb3llZCA9IGZhbHNlO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiQ1ZcIjpcbiAgICAgIGxlbmd0aCA9IDU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQ0FcIjpcbiAgICAgIGxlbmd0aCA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU1NcIjpcbiAgICAgIGxlbmd0aCA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRERcIjpcbiAgICAgIGxlbmd0aCA9IDI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbGVuZ3RoID0gMDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcbiAgY29uc3QgaXNEZXBsb3llZCA9ICgpID0+IGRlcGxveWVkO1xuICBjb25zdCBzZXRDb3JkcyA9IChjb3JkcykgPT4ge1xuICAgIGNvcmQgPSBjb3JkcztcbiAgfTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaWYgKGhpdHMgPT09IGxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaXRzICs9IDE7XG4gICAgaWYgKGhpdHMgPT09IGxlbmd0aCkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHN1bms7XG5cbiAgY29uc3QgZGVwbG95ID0gKCkgPT4ge1xuICAgIGRlcGxveWVkID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjb3VsZE5vdERlcGxveSA9ICgpID0+IHtcbiAgICBkZXBsb3llZCA9IFwiZmFpbGVkXCI7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29yZHMgPSAoKSA9PiBjb3JkO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZSxcbiAgICBoaXQsXG4gICAgZ2V0SGl0cyxcbiAgICBpc1N1bmssXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGRlcGxveSxcbiAgICBkZXBsb3llZCxcbiAgICBpc0RlcGxveWVkLFxuICAgIGNvdWxkTm90RGVwbG95LFxuICAgIGdldENvcmRzLFxuICAgIHNldENvcmRzLFxuICAgIGNvcmQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmNvbnN0IGdhbWUgPSBHYW1lKCk7XG5nYW1lLnN0YXJ0R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9