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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n}\n\n.board {\n  margin: 20px;\n  height: 300px;\n  width: 300px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.squareDiv {\n  box-sizing: border-box;\n  height: 30px;\n  width: 30px;\n  border: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB","sourcesContent":["body {\n  display: flex;\n}\n\n.board {\n  margin: 20px;\n  height: 300px;\n  width: 300px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.squareDiv {\n  box-sizing: border-box;\n  height: 30px;\n  width: 30px;\n  border: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ "./src/helper.js");





const Game = () => {
  let currentPlayer;
  let currentOpponent;

  const setUpGame = () => {
    currentPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("player");
    currentOpponent = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("computer");
    renderBoard(currentPlayer);
    renderBoard(currentOpponent);
  };

  const gameOver = () => {
    if (currentOpponent.board.allSunk()) {
      return true;
    }
    return false;
  };

  const startGame = () => {
    setUpGame();
    setClickEvent();
    toggleClick(currentPlayer, currentOpponent);
  };

  const setClickEvent = () => {
    const opponentDiv = document.querySelectorAll(
      `#${currentOpponent.player} div`
    );
    opponentDiv.forEach((squareDiv) => {
      squareDiv.addEventListener("click", getMove, { once: true });
    });
  };

  const changeTurn = () => {
    const temp = currentPlayer;
    currentPlayer = currentOpponent;
    currentOpponent = temp;
    console.log("change turn", currentPlayer);
    if (currentPlayer.player !== "player") {
      playGame();
    }
    toggleClick();
  };

  const updateBoard = (player) => {
    const squareDivs = document.querySelectorAll(`#${player.player} div`);
    player.board.gameBoard.forEach((value, index) => {
      if (value === "h") {
        squareDivs[index].textContent = "h";
      }
    });
  };

  const disablePointerEvent = () => {
    const squareDivs = document.querySelectorAll(
      `#${currentOpponent.player} div`
    );
    currentOpponent.board.gameBoard.forEach((value, index) => {
      if (value === "h") {
        squareDivs[index].style.pointerEvents = "none";
      }
    });
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

  const playerLogic = (cord) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    updateBoard(currentOpponent);
    disablePointerEvent();
    if (winner() === currentPlayer) {
      console.log(currentPlayer, "WONN");
      return;
    }
    if (!(0,_helper__WEBPACK_IMPORTED_MODULE_3__.isShip)(hitTarget)) {
      changeTurn();
    }
  };

  const computerLogic = (cord) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    updateBoard(currentOpponent);
    if (winner() === currentPlayer) {
      console.log(currentPlayer, "WONNNNNNNN");
      return;
    }
    if (!(0,_helper__WEBPACK_IMPORTED_MODULE_3__.isShip)(hitTarget)) {
      changeTurn();
    } else {
      playGame();
    }
  };

  const getMove2 = (event) => {
    let cordValue;
    if (currentPlayer.player === "player") {
      const cord = parseInt(event.target.id);
      cordValue = currentPlayer.attack(currentOpponent, cord);
    } else {
      cordValue = currentPlayer.attack(currentOpponent);
    }
    updateBoard(currentOpponent);
    if (winner() === currentPlayer) {
      console.log(currentPlayer, "won");
    }

    if (!currentOpponent.board.isShip(cordValue.type)) {
      changeTurn();
    }
  };

  const computerLoop = () => {
    while (currentPlayer.player === "computer") {
      getMove();
    }
    console.log("computer played");
  };

  const winner = () => {
    if (gameOver()) {
      return currentPlayer;
    }
  };

  const renderBoard = (PlayerObject) => {
    const body = document.querySelector("body");
    const board = document.createElement("div");
    board.id = PlayerObject.player;
    board.classList.add("board");

    for (let i = 0; i < 100; i += 1) {
      const squareDiv = document.createElement("div");
      squareDiv.id = i + 1;
      squareDiv.classList.add("squareDiv");
      // squareDiv.textContent = PlayerObject.board.gameBoard[i];
      board.appendChild(squareDiv);
    }
    body.appendChild(board);
  };

  const toggleClick = (player = currentPlayer, opponent = currentOpponent) => {
    document.getElementById(player.player).style.pointerEvents = "none";
    document.getElementById(opponent.player).style.pointerEvents = "auto";
  };

  const printArray = (array) => {
    let i = 1;
    let k = 0;
    while (i < 11) {
      let str = "";
      for (let j = k; j < i * 10; j++) {
        str += ` ${array[j]} `;
      }
      console.log(str);
      k += 10;
      i++;
    }
  };
  const board = player.board.gameBoard;
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
  const turn = 0;
  const getTruns = () => turn;
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
      gameBoard[value] = "h";
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
        gameBoard[cord - 1] = "h";
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
    return hitTarget;
  }

  function attackWater(cord) {
    hitCords.push(cord);
    const hitTarget = gameBoard[cord - 1];
    gameBoard[cord - 1] = "h";
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
      if (allShips[i].isSunk() === false) {
        return false;
      }
    }
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
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


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
    const battleShip = board.allShips[1];
    const cruiser = board.allShips[2];
    const submarine = board.allShips[3];
    const destroyer = board.allShips[4];
    board.placeShip(carrier, 1, "vertical");
    board.placeShip(battleShip, 3, "vertical");
    board.placeShip(cruiser, 5, "vertical");
    board.placeShip(submarine, 7, "vertical");
    board.placeShip(destroyer, 9, "vertical");
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
  let numberOfTurns = 0;
  const getTruns = () => numberOfTurns;

  const attack = (opponent, cord = null) => {
    if (!board.allShipsDeployed()) {
      return;
    }
    if (player === "player") {
      const retVal = opponent.board.recieveAttack(cord);
      return retVal;
    }
    if (opponent.board.allSunk()) {
      return;
    }
    numberOfTurns += 1;
    cord = possibleMove[Math.floor(Math.random() * possibleMove.length)];
    const retVal = opponent.board.recieveAttack(cord);
    opponent.board.hitCords.forEach((value) => {
      removeItemOnce(possibleMove, value);
    });
    return retVal;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3RFcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRVM7QUFDTTtBQUNWO0FBQ0E7O0FBRTFCLGFBQWEsaURBQUk7QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ib2FyZCB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnNxdWFyZURpdiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ib2FyZCB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnNxdWFyZURpdiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHtcbiAgY2lyY3VtSW5kaWNlc0hlbHBlcixcbiAgbGFzdERpZ2l0LFxuICByb3VuZFVwTmVhcmVzdDEwLFxuICBpc1NoaXAsXG4gIGluY3JlbWVudCxcbn0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGxldCBjdXJyZW50UGxheWVyO1xuICBsZXQgY3VycmVudE9wcG9uZW50O1xuXG4gIGNvbnN0IHNldFVwR2FtZSA9ICgpID0+IHtcbiAgICBjdXJyZW50UGxheWVyID0gUGxheWVyKFwicGxheWVyXCIpO1xuICAgIGN1cnJlbnRPcHBvbmVudCA9IFBsYXllcihcImNvbXB1dGVyXCIpO1xuICAgIHJlbmRlckJvYXJkKGN1cnJlbnRQbGF5ZXIpO1xuICAgIHJlbmRlckJvYXJkKGN1cnJlbnRPcHBvbmVudCk7XG4gIH07XG5cbiAgY29uc3QgZ2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRPcHBvbmVudC5ib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIHNldFVwR2FtZSgpO1xuICAgIHNldENsaWNrRXZlbnQoKTtcbiAgICB0b2dnbGVDbGljayhjdXJyZW50UGxheWVyLCBjdXJyZW50T3Bwb25lbnQpO1xuICB9O1xuXG4gIGNvbnN0IHNldENsaWNrRXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3Bwb25lbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYCMke2N1cnJlbnRPcHBvbmVudC5wbGF5ZXJ9IGRpdmBcbiAgICApO1xuICAgIG9wcG9uZW50RGl2LmZvckVhY2goKHNxdWFyZURpdikgPT4ge1xuICAgICAgc3F1YXJlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRNb3ZlLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlVHVybiA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gY3VycmVudFBsYXllcjtcbiAgICBjdXJyZW50UGxheWVyID0gY3VycmVudE9wcG9uZW50O1xuICAgIGN1cnJlbnRPcHBvbmVudCA9IHRlbXA7XG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2UgdHVyblwiLCBjdXJyZW50UGxheWVyKTtcbiAgICBpZiAoY3VycmVudFBsYXllci5wbGF5ZXIgIT09IFwicGxheWVyXCIpIHtcbiAgICAgIHBsYXlHYW1lKCk7XG4gICAgfVxuICAgIHRvZ2dsZUNsaWNrKCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQm9hcmQgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3Qgc3F1YXJlRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3BsYXllci5wbGF5ZXJ9IGRpdmApO1xuICAgIHBsYXllci5ib2FyZC5nYW1lQm9hcmQuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09IFwiaFwiKSB7XG4gICAgICAgIHNxdWFyZURpdnNbaW5kZXhdLnRleHRDb250ZW50ID0gXCJoXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGlzYWJsZVBvaW50ZXJFdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBzcXVhcmVEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGAjJHtjdXJyZW50T3Bwb25lbnQucGxheWVyfSBkaXZgXG4gICAgKTtcbiAgICBjdXJyZW50T3Bwb25lbnQuYm9hcmQuZ2FtZUJvYXJkLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSBcImhcIikge1xuICAgICAgICBzcXVhcmVEaXZzW2luZGV4XS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TW92ZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvcmQgPSBwYXJzZUludChldmVudC50YXJnZXQuaWQpO1xuICAgIHBsYXlHYW1lKGNvcmQpO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlHYW1lID0gKGNvcmQgPSBudWxsKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIucGxheWVyID09PSBcInBsYXllclwiKSB7XG4gICAgICBwbGF5ZXJMb2dpYyhjb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcHV0ZXJMb2dpYyhjb3JkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxheWVyTG9naWMgPSAoY29yZCkgPT4ge1xuICAgIGNvbnN0IGhpdFRhcmdldCA9IGN1cnJlbnRQbGF5ZXIuYXR0YWNrKGN1cnJlbnRPcHBvbmVudCwgY29yZCk7XG4gICAgdXBkYXRlQm9hcmQoY3VycmVudE9wcG9uZW50KTtcbiAgICBkaXNhYmxlUG9pbnRlckV2ZW50KCk7XG4gICAgaWYgKHdpbm5lcigpID09PSBjdXJyZW50UGxheWVyKSB7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50UGxheWVyLCBcIldPTk5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghaXNTaGlwKGhpdFRhcmdldCkpIHtcbiAgICAgIGNoYW5nZVR1cm4oKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJMb2dpYyA9IChjb3JkKSA9PiB7XG4gICAgY29uc3QgaGl0VGFyZ2V0ID0gY3VycmVudFBsYXllci5hdHRhY2soY3VycmVudE9wcG9uZW50LCBjb3JkKTtcbiAgICB1cGRhdGVCb2FyZChjdXJyZW50T3Bwb25lbnQpO1xuICAgIGlmICh3aW5uZXIoKSA9PT0gY3VycmVudFBsYXllcikge1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFBsYXllciwgXCJXT05OTk5OTk5OXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzU2hpcChoaXRUYXJnZXQpKSB7XG4gICAgICBjaGFuZ2VUdXJuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXlHYW1lKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldE1vdmUyID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGNvcmRWYWx1ZTtcbiAgICBpZiAoY3VycmVudFBsYXllci5wbGF5ZXIgPT09IFwicGxheWVyXCIpIHtcbiAgICAgIGNvbnN0IGNvcmQgPSBwYXJzZUludChldmVudC50YXJnZXQuaWQpO1xuICAgICAgY29yZFZhbHVlID0gY3VycmVudFBsYXllci5hdHRhY2soY3VycmVudE9wcG9uZW50LCBjb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29yZFZhbHVlID0gY3VycmVudFBsYXllci5hdHRhY2soY3VycmVudE9wcG9uZW50KTtcbiAgICB9XG4gICAgdXBkYXRlQm9hcmQoY3VycmVudE9wcG9uZW50KTtcbiAgICBpZiAod2lubmVyKCkgPT09IGN1cnJlbnRQbGF5ZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIsIFwid29uXCIpO1xuICAgIH1cblxuICAgIGlmICghY3VycmVudE9wcG9uZW50LmJvYXJkLmlzU2hpcChjb3JkVmFsdWUudHlwZSkpIHtcbiAgICAgIGNoYW5nZVR1cm4oKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJMb29wID0gKCkgPT4ge1xuICAgIHdoaWxlIChjdXJyZW50UGxheWVyLnBsYXllciA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICBnZXRNb3ZlKCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiY29tcHV0ZXIgcGxheWVkXCIpO1xuICB9O1xuXG4gIGNvbnN0IHdpbm5lciA9ICgpID0+IHtcbiAgICBpZiAoZ2FtZU92ZXIoKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckJvYXJkID0gKFBsYXllck9iamVjdCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQuaWQgPSBQbGF5ZXJPYmplY3QucGxheWVyO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcXVhcmVEaXYuaWQgPSBpICsgMTtcbiAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwic3F1YXJlRGl2XCIpO1xuICAgICAgLy8gc3F1YXJlRGl2LnRleHRDb250ZW50ID0gUGxheWVyT2JqZWN0LmJvYXJkLmdhbWVCb2FyZFtpXTtcbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZURpdik7XG4gICAgfVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUNsaWNrID0gKHBsYXllciA9IGN1cnJlbnRQbGF5ZXIsIG9wcG9uZW50ID0gY3VycmVudE9wcG9uZW50KSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheWVyLnBsYXllcikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wcG9uZW50LnBsYXllcikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICB9O1xuXG4gIGNvbnN0IHByaW50QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgaSA9IDE7XG4gICAgbGV0IGsgPSAwO1xuICAgIHdoaWxlIChpIDwgMTEpIHtcbiAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgZm9yIChsZXQgaiA9IGs7IGogPCBpICogMTA7IGorKykge1xuICAgICAgICBzdHIgKz0gYCAke2FycmF5W2pdfSBgO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coc3RyKTtcbiAgICAgIGsgKz0gMTA7XG4gICAgICBpKys7XG4gICAgfVxuICB9O1xuICBjb25zdCBib2FyZCA9IHBsYXllci5ib2FyZC5nYW1lQm9hcmQ7XG4gIHJldHVybiB7IHNldFVwR2FtZSwgc3RhcnRHYW1lIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHtcbiAgY2lyY3VtSW5kaWNlc0hlbHBlcixcbiAgbGFzdERpZ2l0LFxuICByb3VuZFVwTmVhcmVzdDEwLFxuICBpc1NoaXAsXG4gIGluY3JlbWVudCxcbn0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gW107XG4gIGNvbnN0IGhpdENvcmRzID0gW107XG4gIGNvbnN0IHR1cm4gPSAwO1xuICBjb25zdCBnZXRUcnVucyA9ICgpID0+IHR1cm47XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSArPSAxKSB7XG4gICAgZ2FtZUJvYXJkLnB1c2goaSk7XG4gIH1cblxuICBjb25zdCBjYXJyaWVyID0gU2hpcChcIkNWXCIpO1xuICBjb25zdCBiYXR0bGVTaGlwID0gU2hpcChcIkJCXCIpO1xuICBjb25zdCBjcnVpc2VyID0gU2hpcChcIkNBXCIpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKFwiU1NcIik7XG4gIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoXCJERFwiKTtcbiAgY29uc3QgYWxsU2hpcHMgPSBbY2FycmllciwgYmF0dGxlU2hpcCwgY3J1aXNlciwgc3VibWFyaW5lLCBkZXN0cm95ZXJdO1xuXG4gIGNvbnN0IG91dHNpZGVCb2FyZCA9IChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKFxuICAgICAgKHBvc2l0aW9uID09PSBcImhvcml6b250YWxcIiAmJlxuICAgICAgICBzdGFydENvcmQgKyBzaGlwLmdldExlbmd0aCgpIC0gMSA+IHJvdW5kVXBOZWFyZXN0MTAoc3RhcnRDb3JkKSkgfHxcbiAgICAgIChwb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmXG4gICAgICAgIHN0YXJ0Q29yZCArIHNoaXAuZ2V0TGVuZ3RoKCkgKiAxMCA+IDEwMCArIGxhc3REaWdpdChzdGFydENvcmQpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyByZXR1cm5zIHRydWUgaWYgYSBzdXJyb3VuZGluZyBjb3JkaW5hdGUgaXMgYSBzaGlwIGNvcmRpbmF0ZVxuICBjb25zdCBjaGVja0NpcmN1bWZlcmVuY2UgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBjaXJjdW1JbmRpY2VzID0gY2lyY3VtSW5kaWNlc0hlbHBlcihpbmRleCk7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDwgY2lyY3VtSW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChpc1NoaXAoZ2FtZUJvYXJkW2NpcmN1bUluZGljZXNbaV1dKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IG92ZXJsYXBzID0gKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdGVwVXBWYWx1ZSA9IGluY3JlbWVudChwb3NpdGlvbik7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gc3RhcnRDb3JkIC0gMTtcbiAgICB3aGlsZSAoaSA8IHNoaXAuZ2V0TGVuZ3RoKCkpIHtcbiAgICAgIGlmIChjaGVja0NpcmN1bWZlcmVuY2UoaikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpICs9IDE7XG4gICAgICBqICs9IHN0ZXBVcFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY2FuUGxhY2VTaGlwID0gKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pID0+IHtcbiAgICBpZiAob3V0c2lkZUJvYXJkKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvdmVybGFwcyhzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHNoaXBDb3JkcyA9IFtdO1xuXG4gICAgaWYgKGNhblBsYWNlU2hpcChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSkge1xuICAgICAgY29uc3Qgc3RlcFVwVmFsdWUgPSBpbmNyZW1lbnQocG9zaXRpb24pO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgbGV0IGogPSBzdGFydENvcmQgLSAxO1xuICAgICAgd2hpbGUgKGkgPCBzaGlwLmdldExlbmd0aCgpKSB7XG4gICAgICAgIGdhbWVCb2FyZFtqXSA9IHNoaXAudHlwZTtcbiAgICAgICAgc2hpcENvcmRzLnB1c2goaiArIDEpO1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIGogKz0gc3RlcFVwVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHNoaXAuZGVwbG95KCk7XG4gICAgICBzaGlwLnNldENvcmRzKHNoaXBDb3Jkcyk7XG4gICAgICByZXR1cm4gc2hpcC5pc0RlcGxveWVkKCk7XG4gICAgfVxuXG4gICAgc2hpcC5jb3VsZE5vdERlcGxveSgpO1xuICAgIHJldHVybiBzaGlwLmlzRGVwbG95ZWQoKTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwRnJvbVN5bWJvbCA9IChzeW1ib2wpID0+IHtcbiAgICBsZXQgZ2V0U2hpcDtcbiAgICBhbGxTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC50eXBlID09PSBzeW1ib2wpIHtcbiAgICAgICAgZ2V0U2hpcCA9IHNoaXA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGdldFNoaXA7XG4gIH07XG5cbiAgY29uc3QgYWxyZWFkeUhpdCA9IChjb3JkKSA9PiB7XG4gICAgaWYgKGhpdENvcmRzLmluY2x1ZGVzKGNvcmQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldE9ubHlEaWFnb25hbENvcmRzKG9uQm9hcmRDb3JkKSB7XG4gICAgY29uc3QgY29yZCA9IG9uQm9hcmRDb3JkIC0gMTtcbiAgICBjb25zdCBleGx1ZGUgPSBbY29yZCwgY29yZCArIDEsIGNvcmQgLSAxLCBjb3JkICsgMTAsIGNvcmQgLSAxMF07XG4gICAgcmV0dXJuIGNpcmN1bUluZGljZXNIZWxwZXIoY29yZCkuZmlsdGVyKCh2YWx1ZSkgPT4gIWV4bHVkZS5pbmNsdWRlcyh2YWx1ZSkpO1xuICB9XG5cbiAgY29uc3QgaGl0RGlhZ29uYWwgPSAoY29yZCkgPT4ge1xuICAgIGNvbnN0IHBvc3NpYmxlQ29yZHMgPSBnZXRPbmx5RGlhZ29uYWxDb3Jkcyhjb3JkKTtcbiAgICBwb3NzaWJsZUNvcmRzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBnYW1lQm9hcmRbdmFsdWVdID0gXCJoXCI7XG4gICAgICBpZiAoIWFscmVhZHlIaXQodmFsdWUgKyAxKSkge1xuICAgICAgICBoaXRDb3Jkcy5wdXNoKHZhbHVlICsgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29yZHMubWFwKCh2YWx1ZSkgPT4gdmFsdWUgKyAxKTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc0RlcGxveWVkID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhbGxTaGlwc1tpXS5pc0RlcGxveWVkKCkgPT09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRBbGxBZGphY2VudENvcmRzKHNoaXApIHtcbiAgICByZXR1cm4gc2hpcC5nZXRDb3JkcygpLnJlZHVjZSgoYWRqYWNlbnRBcnJheSwgc2hpcENvcmQpID0+IHtcbiAgICAgIGNpcmN1bUluZGljZXNIZWxwZXIoc2hpcENvcmQgLSAxKS5mb3JFYWNoKChhZGpDb3JkKSA9PiB7XG4gICAgICAgIGlmICghYWRqYWNlbnRBcnJheS5pbmNsdWRlcyhhZGpDb3JkKSkgYWRqYWNlbnRBcnJheS5wdXNoKGFkakNvcmQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWRqYWNlbnRBcnJheTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBjb25zdCBoaXRTaGlwQWRqYWNlbnQgPSAoc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDb3JkcyA9IGdldEFsbEFkamFjZW50Q29yZHMoc2hpcClcbiAgICAgICAgLm1hcCgodmFsdWUpID0+IHZhbHVlICsgMSlcbiAgICAgICAgLmZpbHRlcigodmFsdWUpID0+ICFoaXRDb3Jkcy5pbmNsdWRlcyh2YWx1ZSkpO1xuXG4gICAgICByZW1haW5pbmdDb3Jkcy5mb3JFYWNoKChjb3JkKSA9PiB7XG4gICAgICAgIGdhbWVCb2FyZFtjb3JkIC0gMV0gPSBcImhcIjtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVtYWluaW5nQ29yZHM7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGxldCBpbml0aWF0ZWQ7XG5cbiAgY29uc3QgZ2V0SW5pdGlhdGVkID0gKCkgPT4gaW5pdGlhdGVkO1xuXG4gIGNvbnN0IGluaXRpYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgaWYgKGFsbFNoaXBzRGVwbG95ZWQoKSkge1xuICAgICAgaW5pdGlhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdGlhdGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIG5vQXR0YWNrKCkge1xuICAgIHJldHVybiBcImhcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNoaXAoaGl0VGFyZ2V0LCBjb3JkKSB7XG4gICAgY29uc3Qgc2hpcCA9IGdldFNoaXBGcm9tU3ltYm9sKGhpdFRhcmdldCk7XG4gICAgc2hpcC5oaXQoKTtcbiAgICBoaXREaWFnb25hbChjb3JkKTtcbiAgICBoaXRTaGlwQWRqYWNlbnQoc2hpcCk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2tTaGlwKGNvcmQpIHtcbiAgICBoaXRDb3Jkcy5wdXNoKGNvcmQpO1xuICAgIGNvbnN0IGhpdFRhcmdldCA9IGdhbWVCb2FyZFtjb3JkIC0gMV07XG4gICAgZ2FtZUJvYXJkW2NvcmQgLSAxXSA9IFwiaFwiO1xuICAgIHVwZGF0ZVNoaXAoaGl0VGFyZ2V0LCBjb3JkKTtcbiAgICByZXR1cm4gaGl0VGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNrV2F0ZXIoY29yZCkge1xuICAgIGhpdENvcmRzLnB1c2goY29yZCk7XG4gICAgY29uc3QgaGl0VGFyZ2V0ID0gZ2FtZUJvYXJkW2NvcmQgLSAxXTtcbiAgICBnYW1lQm9hcmRbY29yZCAtIDFdID0gXCJoXCI7XG4gICAgcmV0dXJuIGhpdFRhcmdldDtcbiAgfVxuXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoY29yZCkgPT4ge1xuICAgIGxldCBoaXRUYXJnZXQ7XG4gICAgaWYgKGFscmVhZHlIaXQoY29yZCkpIHtcbiAgICAgIGhpdFRhcmdldCA9IG5vQXR0YWNrKCk7XG4gICAgfSBlbHNlIGlmIChpc1NoaXAoZ2FtZUJvYXJkW2NvcmQgLSAxXSkpIHtcbiAgICAgIGhpdFRhcmdldCA9IGF0dGFja1NoaXAoY29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpdFRhcmdldCA9IGF0dGFja1dhdGVyKGNvcmQpO1xuICAgIH1cbiAgICByZXR1cm4gaGl0VGFyZ2V0O1xuICB9O1xuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGFsbFNoaXBzW2ldLmlzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGdldEhpdENvcmRzID0gKCkgPT4gaGl0Q29yZHM7XG5cbiAgcmV0dXJuIHtcbiAgICBjYW5QbGFjZVNoaXAsXG4gICAgZ2FtZUJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGFsbFN1bmssXG4gICAgaXNTaGlwLFxuICAgIGFsbFNoaXBzLFxuICAgIGFsbFNoaXBzRGVwbG95ZWQsXG4gICAgaGl0Q29yZHMsXG4gICAgY2hlY2tDaXJjdW1mZXJlbmNlLFxuICAgIGhpdERpYWdvbmFsLFxuICAgIGhpdFNoaXBBZGphY2VudCxcbiAgICBnZXRIaXRDb3JkcyxcbiAgICBnZXRUcnVucyxcbiAgICBpbml0aWF0ZUJvYXJkLFxuICAgIGdldEluaXRpYXRlZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcbiIsImV4cG9ydCBmdW5jdGlvbiBjaXJjdW1JbmRpY2VzSGVscGVyKGkpIHtcbiAgY29uc3QgbGVmdENvbHVtbiA9IFsxMCwgMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODBdO1xuICBjb25zdCByaWdodENvbHVtbiA9IFsxOSwgMjksIDM5LCA0OSwgNTksIDY5LCA3OSwgODldO1xuICBsZXQgY2lyY3VtSW5kaWNlcyA9IFtdO1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGkgPT09IDA6XG4gICAgICBjaXJjdW1JbmRpY2VzID0gW2ksIGkgKyAxLCBpICsgMTAsIGkgKyAxMV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIGkgPT09IDk6XG4gICAgICBjaXJjdW1JbmRpY2VzID0gW2ksIGkgLSAxLCBpICsgOSwgaSArIDEwXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaSA9PT0gOTA6XG4gICAgICBjaXJjdW1JbmRpY2VzID0gW2ksIGkgLSAxMCwgaSArIDEsIGkgLSA5XTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaSA9PT0gOTk6XG4gICAgICBjaXJjdW1JbmRpY2VzID0gW2ksIGkgLSAxLCBpIC0gMTAsIGkgLSAxMV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIGkgPiAwICYmIGkgPCA5OlxuICAgICAgY2lyY3VtSW5kaWNlcyA9IFtpLCBpICsgMSwgaSArIDEwLCBpICsgMTEsIGkgKyA5LCBpIC0gMV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIGkgPiA5MCAmJiBpIDwgOTk6XG4gICAgICBjaXJjdW1JbmRpY2VzID0gW2ksIGkgLSAxMSwgaSAtIDEwLCBpIC0gOSwgaSArIDEsIGkgLSAxXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgbGVmdENvbHVtbi5pbmNsdWRlcyhpKTpcbiAgICAgIGNpcmN1bUluZGljZXMgPSBbaSwgaSAtIDEwLCBpIC0gOSwgaSArIDEsIGkgKyAxMCwgaSArIDExXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgcmlnaHRDb2x1bW4uaW5jbHVkZXMoaSk6XG4gICAgICBjaXJjdW1JbmRpY2VzID0gW2ksIGkgLSAxMSwgaSAtIDEwLCBpIC0gMSwgaSArIDksIGkgKyAxMF07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBjaXJjdW1JbmRpY2VzID0gW1xuICAgICAgICBpLFxuICAgICAgICBpICsgMSxcbiAgICAgICAgaSAtIDEsXG4gICAgICAgIGkgKyAxMCxcbiAgICAgICAgaSAtIDEwLFxuICAgICAgICBpICsgMTEsXG4gICAgICAgIGkgLSAxMSxcbiAgICAgICAgaSAtIDksXG4gICAgICAgIGkgKyA5LFxuICAgICAgXTtcbiAgfVxuICByZXR1cm4gY2lyY3VtSW5kaWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kVXBOZWFyZXN0MTAobnVtKSB7XG4gIHJldHVybiBNYXRoLmNlaWwobnVtIC8gMTApICogMTA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0RGlnaXQobnVtKSB7XG4gIGlmIChudW0gJSAxMCA9PT0gMCkge1xuICAgIHJldHVybiAxMDtcbiAgfVxuICByZXR1cm4gbnVtICUgMTA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NoaXAodmFsdWUpIHtcbiAgY29uc3Qgc3ltYm9scyA9IFtcIkNWXCIsIFwiQkJcIiwgXCJDQVwiLCBcIlNTXCIsIFwiRERcIl07XG4gIGlmIChzeW1ib2xzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudChwb3NpdGlvbikge1xuICBpZiAocG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKHBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICByZXR1cm4gMTA7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IFBsYXllciA9IChwbGF5ZXIpID0+IHtcbiAgbGV0IHR1cm47XG4gIGNvbnN0IGhpdENvcmRzID0gW107XG4gIGNvbnN0IGJvYXJkID0gR2FtZUJvYXJkKCk7XG5cbiAgaWYgKHBsYXllciA9PT0gXCJwbGF5ZXJcIikge1xuICAgIHR1cm4gPSB0cnVlO1xuICAgIGNvbnN0IGNhcnJpZXIgPSBib2FyZC5hbGxTaGlwc1swXTtcbiAgICBjb25zdCBiYXR0bGVTaGlwID0gYm9hcmQuYWxsU2hpcHNbMV07XG4gICAgY29uc3QgY3J1aXNlciA9IGJvYXJkLmFsbFNoaXBzWzJdO1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IGJvYXJkLmFsbFNoaXBzWzNdO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IGJvYXJkLmFsbFNoaXBzWzRdO1xuICAgIGJvYXJkLnBsYWNlU2hpcChjYXJyaWVyLCAxNSwgXCJob3Jpem9udGFsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChiYXR0bGVTaGlwLCA1NSwgXCJob3Jpem9udGFsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChjcnVpc2VyLCAxMywgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLCA3MiwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCA4NSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgfSBlbHNlIHtcbiAgICB0dXJuID0gZmFsc2U7XG4gICAgY29uc3QgY2FycmllciA9IGJvYXJkLmFsbFNoaXBzWzBdO1xuICAgIGNvbnN0IGJhdHRsZVNoaXAgPSBib2FyZC5hbGxTaGlwc1sxXTtcbiAgICBjb25zdCBjcnVpc2VyID0gYm9hcmQuYWxsU2hpcHNbMl07XG4gICAgY29uc3Qgc3VibWFyaW5lID0gYm9hcmQuYWxsU2hpcHNbM107XG4gICAgY29uc3QgZGVzdHJveWVyID0gYm9hcmQuYWxsU2hpcHNbNF07XG4gICAgYm9hcmQucGxhY2VTaGlwKGNhcnJpZXIsIDEsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGJhdHRsZVNoaXAsIDMsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGNydWlzZXIsIDUsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSwgNywgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCA5LCBcInZlcnRpY2FsXCIpO1xuICB9XG5cbiAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHR1cm47XG5cbiAgY29uc3QgY2hhbmdlVHVybiA9ICgpID0+IHtcbiAgICB0dXJuID0gIXR1cm47XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbmltdW0sIG1heGltdW0pIHtcbiAgICBjb25zdCBtaW4gPSBNYXRoLmNlaWwobWluaW11bSk7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5mbG9vcihtYXhpbXVtKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICB9XG5cbiAgY29uc3QgcG9zc2libGVNb3ZlID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMTAxOyBpKyspIHtcbiAgICBwb3NzaWJsZU1vdmUucHVzaChpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUl0ZW1PbmNlKGFyciwgdmFsdWUpIHtcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgbGV0IG51bWJlck9mVHVybnMgPSAwO1xuICBjb25zdCBnZXRUcnVucyA9ICgpID0+IG51bWJlck9mVHVybnM7XG5cbiAgY29uc3QgYXR0YWNrID0gKG9wcG9uZW50LCBjb3JkID0gbnVsbCkgPT4ge1xuICAgIGlmICghYm9hcmQuYWxsU2hpcHNEZXBsb3llZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwbGF5ZXIgPT09IFwicGxheWVyXCIpIHtcbiAgICAgIGNvbnN0IHJldFZhbCA9IG9wcG9uZW50LmJvYXJkLnJlY2lldmVBdHRhY2soY29yZCk7XG4gICAgICByZXR1cm4gcmV0VmFsO1xuICAgIH1cbiAgICBpZiAob3Bwb25lbnQuYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG51bWJlck9mVHVybnMgKz0gMTtcbiAgICBjb3JkID0gcG9zc2libGVNb3ZlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlTW92ZS5sZW5ndGgpXTtcbiAgICBjb25zdCByZXRWYWwgPSBvcHBvbmVudC5ib2FyZC5yZWNpZXZlQXR0YWNrKGNvcmQpO1xuICAgIG9wcG9uZW50LmJvYXJkLmhpdENvcmRzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICByZW1vdmVJdGVtT25jZShwb3NzaWJsZU1vdmUsIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0VmFsO1xuICB9O1xuXG4gIHJldHVybiB7IGdldFR1cm4sIGNoYW5nZVR1cm4sIGF0dGFjaywgYm9hcmQsIHBsYXllciwgaGl0Q29yZHMsIGdldFRydW5zIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKHR5cGUsIGhpdHMgPSAwLCBzdW5rID0gZmFsc2UpID0+IHtcbiAgbGV0IGxlbmd0aDtcbiAgbGV0IGNvcmQgPSBudWxsO1xuICBsZXQgZGVwbG95ZWQgPSBmYWxzZTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcIkNWXCI6XG4gICAgICBsZW5ndGggPSA1O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkJCXCI6XG4gICAgICBsZW5ndGggPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNBXCI6XG4gICAgICBsZW5ndGggPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlNTXCI6XG4gICAgICBsZW5ndGggPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkREXCI6XG4gICAgICBsZW5ndGggPSAyO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGxlbmd0aCA9IDA7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiBoaXRzO1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG4gIGNvbnN0IGlzRGVwbG95ZWQgPSAoKSA9PiBkZXBsb3llZDtcbiAgY29uc3Qgc2V0Q29yZHMgPSAoY29yZHMpID0+IHtcbiAgICBjb3JkID0gY29yZHM7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGlmIChoaXRzID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGl0cyArPSAxO1xuICAgIGlmIChoaXRzID09PSBsZW5ndGgpIHtcbiAgICAgIHN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdW5rO1xuXG4gIGNvbnN0IGRlcGxveSA9ICgpID0+IHtcbiAgICBkZXBsb3llZCA9IHRydWU7XG4gIH07XG5cbiAgY29uc3QgY291bGROb3REZXBsb3kgPSAoKSA9PiB7XG4gICAgZGVwbG95ZWQgPSBcImZhaWxlZFwiO1xuICB9O1xuXG4gIGNvbnN0IGdldENvcmRzID0gKCkgPT4gY29yZDtcblxuICByZXR1cm4ge1xuICAgIHR5cGUsXG4gICAgaGl0LFxuICAgIGdldEhpdHMsXG4gICAgaXNTdW5rLFxuICAgIGdldExlbmd0aCxcbiAgICBkZXBsb3ksXG4gICAgZGVwbG95ZWQsXG4gICAgaXNEZXBsb3llZCxcbiAgICBjb3VsZE5vdERlcGxveSxcbiAgICBnZXRDb3JkcyxcbiAgICBzZXRDb3JkcyxcbiAgICBjb3JkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBnYW1lID0gR2FtZSgpO1xuZ2FtZS5zdGFydEdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==