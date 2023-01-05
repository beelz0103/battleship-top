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
    gameDom.showPlayerShips(currentPlayer);
    gameDom.renderBoard(currentOpponent);
    gameDom.setClickEvent(currentOpponent, getMove);
    gameDom.toggleClick(currentOpponent, currentPlayer);
    setClickEvent2(currentPlayer, moveShip);
  };

  document.querySelector("#startGame").addEventListener("click", startGame2);

  function startGame2() {
    gameDom.toggleClick(currentPlayer, currentOpponent);
    removeClickEvent2(currentPlayer, moveShip);
  }

  const setClickEvent2 = (player, moveShip) => {
    const squareDivs = document.querySelectorAll(`#${player.player} div`);
    player.board.gameBoard.forEach((value, index) => {
      // if (isShip(value)) {
      squareDivs[index].addEventListener("click", moveShip);
      // squareDivs[index].textContent = value;
      // squareDivs[index].style.backgroundColor = "#839b97";
      // }
    });
  };

  const removeClickEvent2 = (player, moveShip) => {
    const squareDivs = document.querySelectorAll(`#${player.player} div`);
    player.board.gameBoard.forEach((value, index) => {
      squareDivs[index].removeEventListener("click", moveShip);
    });
  };

  const moveFune = (shipType) => {
    const revertStateArray = [];
    const sqDivs = document.querySelectorAll(`#player div`);
    const ship = currentPlayer.board.getShipFromSymbol(shipType);
    const shipIndex = ship.getCords().map((value) => value - 1);
    let position;
    console.log(shipIndex);
    if (shipIndex[1] - shipIndex[0] === 1) {
      position = "horizontal";
    } else if (shipIndex[1] - shipIndex[0] === 10) {
      position = "vertical";
    }
    shipIndex.forEach((value, index) => {
      if (index === 0) {
        sqDivs[value].textContent = "🗘";
        revertStateArray.push(value);
      }
      sqDivs[value].style.backgroundColor = "#9f5f80";
      revertStateArray.push(value);
    });
    const blah = (e) => {
      currentPlayer.board.moveShip(ship, parseInt(e.target.id), position);
      sqDivs.forEach((value) => {
        value.removeEventListener("click", blah);
      });
      revertStateArray.forEach((value) => {
        sqDivs[value].textContent = "";
        sqDivs[value].style.backgroundColor = "";
      });
      setClickEvent2(currentPlayer, moveShip);

      gameDom.showPlayerShips(currentPlayer);
    };

    sqDivs.forEach((value) => {
      value.addEventListener("click", blah);
    });
  };

  const moveShipHelper = (cord) => {
    removeClickEvent2(currentPlayer, moveShip);
    const shipType = currentPlayer.board.gameBoard[cord - 1];
    if ((0,_helper__WEBPACK_IMPORTED_MODULE_1__.isShip)(shipType)) {
      moveFune(shipType);
    } else {
      console.log("this was not a ship");
      setClickEvent2(currentPlayer, moveShip);
    }
  };

  const moveShip = (e) => {
    moveShipHelper(parseInt(e.target.id));
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

  const isOffBoard = (ship, startCord, position) => {
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
  const isAdjacentToOrOverlappingWithShip = (cord) => {
    const surroundingIndices = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getSurroundingIndices)(cord - 1);
    return surroundingIndices.some((index) => (0,_helper__WEBPACK_IMPORTED_MODULE_1__.isShip)(gameBoard[index]));
  };

  const canPlaceShip = (ship, startCord, position) => {
    if (isOffBoard(ship, startCord, position)) {
      return false;
    }
    if (isAdjacentToOrOverlappingWithShip(startCord)) {
      return false;
    }
    return true;
  };

  const placeShip = (ship, startCord, position) => {
    if (!canPlaceShip(ship, startCord, position)) {
      ship.couldNotDeploy();
      return false;
    }

    const shipCords = [];
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
    return true;
  };

  function removeShipFromBoard(shipCords, ship) {
    ship.setCords(null);
    shipCords.forEach((value) => {
      gameBoard[value - 1] = value;
    });
  }

  function unremoveShipFromBoard(shipCords, ship) {
    ship.setCords(shipCords);
    shipCords.forEach((value) => {
      gameBoard[value - 1] = ship.type;
    });
  }

  const togglePosition = (startCord, preMoveStartCord, position) => {
    if (startCord === preMoveStartCord) {
      return position === "horizontal" ? "vertical" : "horizontal";
    }
    return position;
  };

  const moveShip = (ship, startCord, position) => {
    const preMoveCords = ship.getCords();
    const newPosition = togglePosition(startCord, preMoveCords[0], position);
    removeShipFromBoard(preMoveCords, ship);
    const isShipMoved = placeShip(ship, startCord, newPosition);
    if (!isShipMoved) {
      unremoveShipFromBoard(preMoveCords, ship);
    }
    return isShipMoved;
  };

  const hitDiagonal = (cord) => {
    const possibleCords = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getDiagonalCords)(cord - 1);
    possibleCords.forEach((value) => {
      gameBoard[value] = "water";
      if (!hitCords.includes(value + 1)) {
        hitCords.push(value + 1);
      }
    });
    return possibleCords.map((value) => value + 1);
  };

  function getAllAdjacentCords(ship) {
    const shipCords = ship.getCords();
    const adjacentCords = [];
    for (let i = 0; i < shipCords.length; i += 1) {
      const surroundingIndices = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getSurroundingIndices)(shipCords[i] - 1);
      for (let j = 0; j < surroundingIndices.length; j += 1) {
        const adjCord = surroundingIndices[j];
        if (
          !adjacentCords.includes(adjCord) &&
          !hitCords.includes(adjCord + 1)
        ) {
          adjacentCords.push(adjCord);
        }
      }
    }
    return adjacentCords.map((value) => value + 1);
  }

  const hitShipAdjacent = (ship) => {
    if (!ship.isSunk()) {
      return null;
    }
    const remainingCords = getAllAdjacentCords(ship);
    remainingCords.forEach((cord) => {
      gameBoard[cord - 1] = "water";
    });
    return remainingCords;
  };

  function updateShip(hitTarget, cord) {
    const targetShip = allShips.find((ship) => ship.type === hitTarget);
    targetShip.hit();
    hitDiagonal(cord);
    hitShipAdjacent(targetShip);
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
    if (hitCords.includes(cord)) {
      hitTarget = "h";
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

  return {
    gameBoard,
    allShips,
    hitCords,
    placeShip,
    moveShip,
    isAdjacentToOrOverlappingWithShip,
    recieveAttack,
    hitDiagonal,
    hitShipAdjacent,
    allSunk,
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
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


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

  const showPlayerShips = (currentPlayer) => {
    const squareDivs = document.querySelectorAll(
      `#${currentPlayer.player} div`
    );
    currentPlayer.board.gameBoard.forEach((value, index) => {
      if ((0,_helper__WEBPACK_IMPORTED_MODULE_0__.isShip)(value)) {
        squareDivs[index].style.backgroundColor = "#839b97";
      }
    });
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
    showPlayerShips,
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
/* harmony export */   "getDiagonalCords": () => (/* binding */ getDiagonalCords),
/* harmony export */   "getSurroundingIndices": () => (/* binding */ getSurroundingIndices),
/* harmony export */   "increment": () => (/* binding */ increment),
/* harmony export */   "isShip": () => (/* binding */ isShip),
/* harmony export */   "lastDigit": () => (/* binding */ lastDigit),
/* harmony export */   "roundUpNearest10": () => (/* binding */ roundUpNearest10),
/* harmony export */   "structuredClone": () => (/* binding */ structuredClone)
/* harmony export */ });
function getSurroundingIndices(i) {
  const leftColumn = [10, 20, 30, 40, 50, 60, 70, 80];
  const rightColumn = [19, 29, 39, 49, 59, 69, 79, 89];

  switch (true) {
    case i === 0:
      return [i, i + 1, i + 10, i + 11];

    case i === 9:
      return [i, i - 1, i + 9, i + 10];

    case i === 90:
      return [i, i - 10, i + 1, i - 9];

    case i === 99:
      return [i, i - 1, i - 10, i - 11];

    case i > 0 && i < 9:
      return [i, i + 1, i + 10, i + 11, i + 9, i - 1];

    case i > 90 && i < 99:
      return [i, i - 11, i - 10, i - 9, i + 1, i - 1];

    case leftColumn.includes(i):
      return [i, i - 10, i - 9, i + 1, i + 10, i + 11];

    case rightColumn.includes(i):
      return [i, i - 11, i - 10, i - 1, i + 9, i + 10];

    default:
      return [i, i + 1, i - 1, i + 10, i - 10, i + 11, i - 11, i - 9, i + 9];
  }
}

function getDiagonalCords(i) {
  const leftColumn = [10, 20, 30, 40, 50, 60, 70, 80];
  const rightColumn = [19, 29, 39, 49, 59, 69, 79, 89];

  switch (true) {
    case i === 0:
      return [i + 11];

    case i === 9:
      return [i + 9];

    case i === 90:
      return [i - 9];

    case i === 99:
      return [i - 11];

    case i > 0 && i < 9:
      return [i + 11, i + 9];

    case i > 90 && i < 99:
      return [i - 11, i - 9];

    case leftColumn.includes(i):
      return [i - 9, i + 11];

    case rightColumn.includes(i):
      return [i - 11, i + 9];

    default:
      return [i + 11, i - 11, i - 9, i + 9];
  }
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

function structuredClone(array) {
  return JSON.parse(JSON.stringify(array));
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
    deployed = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztBQ0FxQjs7QUFFUztBQUNNO0FBQ1Y7QUFDQTs7QUFFMUIsYUFBYSxpREFBSTtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL2dhbWVkb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5zcXVhcmVEaXYge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGluaGVyaXQ7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ib2FyZCB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnNxdWFyZURpdiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb2ludGVyLWV2ZW50czogaW5oZXJpdDtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xcbn1cXG5cXG4ud2F0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgaXNTaGlwIH0gZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgR2FtZURvbSBmcm9tIFwiLi9nYW1lZG9tXCI7XG4vLyBpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuLy8gaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuY29uc3QgZ2FtZURvbSA9IEdhbWVEb20oKTtcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgbGV0IGN1cnJlbnRQbGF5ZXI7XG4gIGxldCBjdXJyZW50T3Bwb25lbnQ7XG5cbiAgY29uc3Qgc2V0VXBHYW1lID0gKCkgPT4ge1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIik7XG4gICAgY3VycmVudE9wcG9uZW50ID0gUGxheWVyKFwiY29tcHV0ZXJcIik7XG4gICAgZ2FtZURvbS5yZW5kZXJCb2FyZChjdXJyZW50UGxheWVyKTtcbiAgICBnYW1lRG9tLnNob3dQbGF5ZXJTaGlwcyhjdXJyZW50UGxheWVyKTtcbiAgICBnYW1lRG9tLnJlbmRlckJvYXJkKGN1cnJlbnRPcHBvbmVudCk7XG4gICAgZ2FtZURvbS5zZXRDbGlja0V2ZW50KGN1cnJlbnRPcHBvbmVudCwgZ2V0TW92ZSk7XG4gICAgZ2FtZURvbS50b2dnbGVDbGljayhjdXJyZW50T3Bwb25lbnQsIGN1cnJlbnRQbGF5ZXIpO1xuICAgIHNldENsaWNrRXZlbnQyKGN1cnJlbnRQbGF5ZXIsIG1vdmVTaGlwKTtcbiAgfTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0R2FtZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lMik7XG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lMigpIHtcbiAgICBnYW1lRG9tLnRvZ2dsZUNsaWNrKGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRPcHBvbmVudCk7XG4gICAgcmVtb3ZlQ2xpY2tFdmVudDIoY3VycmVudFBsYXllciwgbW92ZVNoaXApO1xuICB9XG5cbiAgY29uc3Qgc2V0Q2xpY2tFdmVudDIgPSAocGxheWVyLCBtb3ZlU2hpcCkgPT4ge1xuICAgIGNvbnN0IHNxdWFyZURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtwbGF5ZXIucGxheWVyfSBkaXZgKTtcbiAgICBwbGF5ZXIuYm9hcmQuZ2FtZUJvYXJkLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gaWYgKGlzU2hpcCh2YWx1ZSkpIHtcbiAgICAgIHNxdWFyZURpdnNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb3ZlU2hpcCk7XG4gICAgICAvLyBzcXVhcmVEaXZzW2luZGV4XS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgLy8gc3F1YXJlRGl2c1tpbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjODM5Yjk3XCI7XG4gICAgICAvLyB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQ2xpY2tFdmVudDIgPSAocGxheWVyLCBtb3ZlU2hpcCkgPT4ge1xuICAgIGNvbnN0IHNxdWFyZURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtwbGF5ZXIucGxheWVyfSBkaXZgKTtcbiAgICBwbGF5ZXIuYm9hcmQuZ2FtZUJvYXJkLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgc3F1YXJlRGl2c1tpbmRleF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1vdmVTaGlwKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBtb3ZlRnVuZSA9IChzaGlwVHlwZSkgPT4ge1xuICAgIGNvbnN0IHJldmVydFN0YXRlQXJyYXkgPSBbXTtcbiAgICBjb25zdCBzcURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjcGxheWVyIGRpdmApO1xuICAgIGNvbnN0IHNoaXAgPSBjdXJyZW50UGxheWVyLmJvYXJkLmdldFNoaXBGcm9tU3ltYm9sKHNoaXBUeXBlKTtcbiAgICBjb25zdCBzaGlwSW5kZXggPSBzaGlwLmdldENvcmRzKCkubWFwKCh2YWx1ZSkgPT4gdmFsdWUgLSAxKTtcbiAgICBsZXQgcG9zaXRpb247XG4gICAgY29uc29sZS5sb2coc2hpcEluZGV4KTtcbiAgICBpZiAoc2hpcEluZGV4WzFdIC0gc2hpcEluZGV4WzBdID09PSAxKSB7XG4gICAgICBwb3NpdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgIH0gZWxzZSBpZiAoc2hpcEluZGV4WzFdIC0gc2hpcEluZGV4WzBdID09PSAxMCkge1xuICAgICAgcG9zaXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgfVxuICAgIHNoaXBJbmRleC5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBzcURpdnNbdmFsdWVdLnRleHRDb250ZW50ID0gXCLwn5eYXCI7XG4gICAgICAgIHJldmVydFN0YXRlQXJyYXkucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBzcURpdnNbdmFsdWVdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzlmNWY4MFwiO1xuICAgICAgcmV2ZXJ0U3RhdGVBcnJheS5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICBjb25zdCBibGFoID0gKGUpID0+IHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIuYm9hcmQubW92ZVNoaXAoc2hpcCwgcGFyc2VJbnQoZS50YXJnZXQuaWQpLCBwb3NpdGlvbik7XG4gICAgICBzcURpdnMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJsYWgpO1xuICAgICAgfSk7XG4gICAgICByZXZlcnRTdGF0ZUFycmF5LmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIHNxRGl2c1t2YWx1ZV0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBzcURpdnNbdmFsdWVdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XG4gICAgICB9KTtcbiAgICAgIHNldENsaWNrRXZlbnQyKGN1cnJlbnRQbGF5ZXIsIG1vdmVTaGlwKTtcblxuICAgICAgZ2FtZURvbS5zaG93UGxheWVyU2hpcHMoY3VycmVudFBsYXllcik7XG4gICAgfTtcblxuICAgIHNxRGl2cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJsYWgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVTaGlwSGVscGVyID0gKGNvcmQpID0+IHtcbiAgICByZW1vdmVDbGlja0V2ZW50MihjdXJyZW50UGxheWVyLCBtb3ZlU2hpcCk7XG4gICAgY29uc3Qgc2hpcFR5cGUgPSBjdXJyZW50UGxheWVyLmJvYXJkLmdhbWVCb2FyZFtjb3JkIC0gMV07XG4gICAgaWYgKGlzU2hpcChzaGlwVHlwZSkpIHtcbiAgICAgIG1vdmVGdW5lKHNoaXBUeXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJ0aGlzIHdhcyBub3QgYSBzaGlwXCIpO1xuICAgICAgc2V0Q2xpY2tFdmVudDIoY3VycmVudFBsYXllciwgbW92ZVNoaXApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcCA9IChlKSA9PiB7XG4gICAgbW92ZVNoaXBIZWxwZXIocGFyc2VJbnQoZS50YXJnZXQuaWQpKTtcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgc2V0VXBHYW1lKCk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlVHVybiA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gY3VycmVudFBsYXllcjtcbiAgICBjdXJyZW50UGxheWVyID0gY3VycmVudE9wcG9uZW50O1xuICAgIGN1cnJlbnRPcHBvbmVudCA9IHRlbXA7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIucGxheWVyICE9PSBcInBsYXllclwiKSB7XG4gICAgICBwbGF5R2FtZSgpO1xuICAgIH1cbiAgICBnYW1lRG9tLnRvZ2dsZUNsaWNrKGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRPcHBvbmVudCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TW92ZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvcmQgPSBwYXJzZUludChldmVudC50YXJnZXQuaWQpO1xuICAgIHBsYXlHYW1lKGNvcmQpO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlHYW1lID0gKGNvcmQgPSBudWxsKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIucGxheWVyID09PSBcInBsYXllclwiKSB7XG4gICAgICBwbGF5ZXJMb2dpYyhjb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcHV0ZXJMb2dpYyhjb3JkKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNvbmNsdWRlR2FtZSA9ICgpID0+IHtcbiAgICBnYW1lRG9tLmRpc2FibGVBbGxQb2ludGVyRXZlbnRzKCk7XG4gICAgY29uc29sZS5sb2coXCJHYW1lIE92ZXJcIiwgY3VycmVudFBsYXllciwgXCJXT05cIik7XG4gIH07XG5cbiAgY29uc3QgcGxheWVyTG9naWMgPSAoY29yZCkgPT4ge1xuICAgIGNvbnN0IGhpdFRhcmdldCA9IGN1cnJlbnRQbGF5ZXIuYXR0YWNrKGN1cnJlbnRPcHBvbmVudCwgY29yZCk7XG4gICAgZ2FtZURvbS51cGRhdGVCb2FyZChjdXJyZW50T3Bwb25lbnQpO1xuICAgIGdhbWVEb20uZGlzYWJsZVBvaW50ZXJFdmVudChjdXJyZW50T3Bwb25lbnQpO1xuICAgIGlmIChjdXJyZW50T3Bwb25lbnQuYm9hcmQuZ2V0TG9zZSgpKSB7XG4gICAgICBjb25jbHVkZUdhbWUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpc1NoaXAoaGl0VGFyZ2V0KSkge1xuICAgICAgY2hhbmdlVHVybigpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb21wdXRlckxvZ2ljID0gKGNvcmQpID0+IHtcbiAgICBjb25zdCBoaXRUYXJnZXQgPSBjdXJyZW50UGxheWVyLmF0dGFjayhjdXJyZW50T3Bwb25lbnQsIGNvcmQpO1xuICAgIGdhbWVEb20udXBkYXRlQm9hcmQoY3VycmVudE9wcG9uZW50KTtcbiAgICBpZiAod2lubmVyKCkgPT09IGN1cnJlbnRQbGF5ZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIsIFwiV09OTk5OTk5OTlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpc1NoaXAoaGl0VGFyZ2V0KSkge1xuICAgICAgY2hhbmdlVHVybigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5R2FtZSgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudE9wcG9uZW50LmJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCB3aW5uZXIgPSAoKSA9PiB7XG4gICAgaWYgKGdhbWVPdmVyKCkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50UGxheWVyO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBzZXRVcEdhbWUsIHN0YXJ0R2FtZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7XG4gIGdldFN1cnJvdW5kaW5nSW5kaWNlcyxcbiAgbGFzdERpZ2l0LFxuICByb3VuZFVwTmVhcmVzdDEwLFxuICBpc1NoaXAsXG4gIGluY3JlbWVudCxcbiAgZ2V0RGlhZ29uYWxDb3Jkcyxcbn0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gW107XG4gIGNvbnN0IGhpdENvcmRzID0gW107XG4gIGxldCBsb3NlID0gZmFsc2U7XG4gIGNvbnN0IGdldExvc2UgPSAoKSA9PiBsb3NlO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDA7IGkgKz0gMSkge1xuICAgIGdhbWVCb2FyZC5wdXNoKGkpO1xuICB9XG5cbiAgY29uc3QgY2FycmllciA9IFNoaXAoXCJDVlwiKTtcbiAgY29uc3QgYmF0dGxlU2hpcCA9IFNoaXAoXCJCQlwiKTtcbiAgY29uc3QgY3J1aXNlciA9IFNoaXAoXCJDQVwiKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gU2hpcChcIlNTXCIpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKFwiRERcIik7XG4gIGNvbnN0IGFsbFNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZVNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcblxuICBjb25zdCBpc09mZkJvYXJkID0gKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pID0+IHtcbiAgICBpZiAoXG4gICAgICAocG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmXG4gICAgICAgIHN0YXJ0Q29yZCArIHNoaXAuZ2V0TGVuZ3RoKCkgLSAxID4gcm91bmRVcE5lYXJlc3QxMChzdGFydENvcmQpKSB8fFxuICAgICAgKHBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIgJiZcbiAgICAgICAgc3RhcnRDb3JkICsgc2hpcC5nZXRMZW5ndGgoKSAqIDEwID4gMTAwICsgbGFzdERpZ2l0KHN0YXJ0Q29yZCkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIHJldHVybnMgdHJ1ZSBpZiBhIHN1cnJvdW5kaW5nIGNvcmRpbmF0ZSBpcyBhIHNoaXAgY29yZGluYXRlXG4gIGNvbnN0IGlzQWRqYWNlbnRUb09yT3ZlcmxhcHBpbmdXaXRoU2hpcCA9IChjb3JkKSA9PiB7XG4gICAgY29uc3Qgc3Vycm91bmRpbmdJbmRpY2VzID0gZ2V0U3Vycm91bmRpbmdJbmRpY2VzKGNvcmQgLSAxKTtcbiAgICByZXR1cm4gc3Vycm91bmRpbmdJbmRpY2VzLnNvbWUoKGluZGV4KSA9PiBpc1NoaXAoZ2FtZUJvYXJkW2luZGV4XSkpO1xuICB9O1xuXG4gIGNvbnN0IGNhblBsYWNlU2hpcCA9IChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKGlzT2ZmQm9hcmQoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzQWRqYWNlbnRUb09yT3ZlcmxhcHBpbmdXaXRoU2hpcChzdGFydENvcmQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKCFjYW5QbGFjZVNoaXAoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikpIHtcbiAgICAgIHNoaXAuY291bGROb3REZXBsb3koKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwQ29yZHMgPSBbXTtcbiAgICBjb25zdCBzdGVwVXBWYWx1ZSA9IGluY3JlbWVudChwb3NpdGlvbik7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gc3RhcnRDb3JkIC0gMTtcbiAgICB3aGlsZSAoaSA8IHNoaXAuZ2V0TGVuZ3RoKCkpIHtcbiAgICAgIGdhbWVCb2FyZFtqXSA9IHNoaXAudHlwZTtcbiAgICAgIHNoaXBDb3Jkcy5wdXNoKGogKyAxKTtcbiAgICAgIGkgKz0gMTtcbiAgICAgIGogKz0gc3RlcFVwVmFsdWU7XG4gICAgfVxuICAgIHNoaXAuZGVwbG95KCk7XG4gICAgc2hpcC5zZXRDb3JkcyhzaGlwQ29yZHMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVNoaXBGcm9tQm9hcmQoc2hpcENvcmRzLCBzaGlwKSB7XG4gICAgc2hpcC5zZXRDb3JkcyhudWxsKTtcbiAgICBzaGlwQ29yZHMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGdhbWVCb2FyZFt2YWx1ZSAtIDFdID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1bnJlbW92ZVNoaXBGcm9tQm9hcmQoc2hpcENvcmRzLCBzaGlwKSB7XG4gICAgc2hpcC5zZXRDb3JkcyhzaGlwQ29yZHMpO1xuICAgIHNoaXBDb3Jkcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgZ2FtZUJvYXJkW3ZhbHVlIC0gMV0gPSBzaGlwLnR5cGU7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB0b2dnbGVQb3NpdGlvbiA9IChzdGFydENvcmQsIHByZU1vdmVTdGFydENvcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKHN0YXJ0Q29yZCA9PT0gcHJlTW92ZVN0YXJ0Q29yZCkge1xuICAgICAgcmV0dXJuIHBvc2l0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgIH1cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgbW92ZVNoaXAgPSAoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHByZU1vdmVDb3JkcyA9IHNoaXAuZ2V0Q29yZHMoKTtcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRvZ2dsZVBvc2l0aW9uKHN0YXJ0Q29yZCwgcHJlTW92ZUNvcmRzWzBdLCBwb3NpdGlvbik7XG4gICAgcmVtb3ZlU2hpcEZyb21Cb2FyZChwcmVNb3ZlQ29yZHMsIHNoaXApO1xuICAgIGNvbnN0IGlzU2hpcE1vdmVkID0gcGxhY2VTaGlwKHNoaXAsIHN0YXJ0Q29yZCwgbmV3UG9zaXRpb24pO1xuICAgIGlmICghaXNTaGlwTW92ZWQpIHtcbiAgICAgIHVucmVtb3ZlU2hpcEZyb21Cb2FyZChwcmVNb3ZlQ29yZHMsIHNoaXApO1xuICAgIH1cbiAgICByZXR1cm4gaXNTaGlwTW92ZWQ7XG4gIH07XG5cbiAgY29uc3QgaGl0RGlhZ29uYWwgPSAoY29yZCkgPT4ge1xuICAgIGNvbnN0IHBvc3NpYmxlQ29yZHMgPSBnZXREaWFnb25hbENvcmRzKGNvcmQgLSAxKTtcbiAgICBwb3NzaWJsZUNvcmRzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBnYW1lQm9hcmRbdmFsdWVdID0gXCJ3YXRlclwiO1xuICAgICAgaWYgKCFoaXRDb3Jkcy5pbmNsdWRlcyh2YWx1ZSArIDEpKSB7XG4gICAgICAgIGhpdENvcmRzLnB1c2godmFsdWUgKyAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcG9zc2libGVDb3Jkcy5tYXAoKHZhbHVlKSA9PiB2YWx1ZSArIDEpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEFsbEFkamFjZW50Q29yZHMoc2hpcCkge1xuICAgIGNvbnN0IHNoaXBDb3JkcyA9IHNoaXAuZ2V0Q29yZHMoKTtcbiAgICBjb25zdCBhZGphY2VudENvcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHN1cnJvdW5kaW5nSW5kaWNlcyA9IGdldFN1cnJvdW5kaW5nSW5kaWNlcyhzaGlwQ29yZHNbaV0gLSAxKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3Vycm91bmRpbmdJbmRpY2VzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGFkakNvcmQgPSBzdXJyb3VuZGluZ0luZGljZXNbal07XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhYWRqYWNlbnRDb3Jkcy5pbmNsdWRlcyhhZGpDb3JkKSAmJlxuICAgICAgICAgICFoaXRDb3Jkcy5pbmNsdWRlcyhhZGpDb3JkICsgMSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWRqYWNlbnRDb3Jkcy5wdXNoKGFkakNvcmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhZGphY2VudENvcmRzLm1hcCgodmFsdWUpID0+IHZhbHVlICsgMSk7XG4gIH1cblxuICBjb25zdCBoaXRTaGlwQWRqYWNlbnQgPSAoc2hpcCkgPT4ge1xuICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHJlbWFpbmluZ0NvcmRzID0gZ2V0QWxsQWRqYWNlbnRDb3JkcyhzaGlwKTtcbiAgICByZW1haW5pbmdDb3Jkcy5mb3JFYWNoKChjb3JkKSA9PiB7XG4gICAgICBnYW1lQm9hcmRbY29yZCAtIDFdID0gXCJ3YXRlclwiO1xuICAgIH0pO1xuICAgIHJldHVybiByZW1haW5pbmdDb3JkcztcbiAgfTtcblxuICBmdW5jdGlvbiB1cGRhdGVTaGlwKGhpdFRhcmdldCwgY29yZCkge1xuICAgIGNvbnN0IHRhcmdldFNoaXAgPSBhbGxTaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLnR5cGUgPT09IGhpdFRhcmdldCk7XG4gICAgdGFyZ2V0U2hpcC5oaXQoKTtcbiAgICBoaXREaWFnb25hbChjb3JkKTtcbiAgICBoaXRTaGlwQWRqYWNlbnQodGFyZ2V0U2hpcCk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2tTaGlwKGNvcmQpIHtcbiAgICBoaXRDb3Jkcy5wdXNoKGNvcmQpO1xuICAgIGNvbnN0IGhpdFRhcmdldCA9IGdhbWVCb2FyZFtjb3JkIC0gMV07XG4gICAgZ2FtZUJvYXJkW2NvcmQgLSAxXSA9IFwiaFwiO1xuICAgIHVwZGF0ZVNoaXAoaGl0VGFyZ2V0LCBjb3JkKTtcbiAgICBhbGxTdW5rKCk7XG4gICAgcmV0dXJuIGhpdFRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFja1dhdGVyKGNvcmQpIHtcbiAgICBoaXRDb3Jkcy5wdXNoKGNvcmQpO1xuICAgIGNvbnN0IGhpdFRhcmdldCA9IGdhbWVCb2FyZFtjb3JkIC0gMV07XG4gICAgZ2FtZUJvYXJkW2NvcmQgLSAxXSA9IFwid2F0ZXJcIjtcbiAgICByZXR1cm4gaGl0VGFyZ2V0O1xuICB9XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb3JkKSA9PiB7XG4gICAgbGV0IGhpdFRhcmdldDtcbiAgICBpZiAoaGl0Q29yZHMuaW5jbHVkZXMoY29yZCkpIHtcbiAgICAgIGhpdFRhcmdldCA9IFwiaFwiO1xuICAgIH0gZWxzZSBpZiAoaXNTaGlwKGdhbWVCb2FyZFtjb3JkIC0gMV0pKSB7XG4gICAgICBoaXRUYXJnZXQgPSBhdHRhY2tTaGlwKGNvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXRUYXJnZXQgPSBhdHRhY2tXYXRlcihjb3JkKTtcbiAgICB9XG4gICAgcmV0dXJuIGhpdFRhcmdldDtcbiAgfTtcblxuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhbGxTaGlwc1tpXS5pc0RlcGxveWVkKCkgJiYgYWxsU2hpcHNbaV0uaXNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9zZSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lQm9hcmQsXG4gICAgYWxsU2hpcHMsXG4gICAgaGl0Q29yZHMsXG4gICAgcGxhY2VTaGlwLFxuICAgIG1vdmVTaGlwLFxuICAgIGlzQWRqYWNlbnRUb09yT3ZlcmxhcHBpbmdXaXRoU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGhpdERpYWdvbmFsLFxuICAgIGhpdFNoaXBBZGphY2VudCxcbiAgICBhbGxTdW5rLFxuICAgIGdldExvc2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmQ7XG4iLCJpbXBvcnQgeyBpc1NoaXAgfSBmcm9tIFwiLi9oZWxwZXJcIjtcblxuY29uc3QgR2FtZURvbSA9ICgpID0+IHtcbiAgY29uc3QgcmVuZGVyQm9hcmQgPSAoUGxheWVyT2JqZWN0KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZC5pZCA9IFBsYXllck9iamVjdC5wbGF5ZXI7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc3F1YXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZURpdi5pZCA9IGkgKyAxO1xuICAgICAgc3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVEaXZcIik7XG4gICAgICBib2FyZC5hcHBlbmRDaGlsZChzcXVhcmVEaXYpO1xuICAgIH1cbiAgICBib2R5LmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgfTtcblxuICBjb25zdCBzaG93UGxheWVyU2hpcHMgPSAoY3VycmVudFBsYXllcikgPT4ge1xuICAgIGNvbnN0IHNxdWFyZURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYCMke2N1cnJlbnRQbGF5ZXIucGxheWVyfSBkaXZgXG4gICAgKTtcbiAgICBjdXJyZW50UGxheWVyLmJvYXJkLmdhbWVCb2FyZC5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpc1NoaXAodmFsdWUpKSB7XG4gICAgICAgIHNxdWFyZURpdnNbaW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzgzOWI5N1wiO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldENsaWNrRXZlbnQgPSAob3Bwb25lbnQsIGdldE1vdmUpID0+IHtcbiAgICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7b3Bwb25lbnQucGxheWVyfSBkaXZgKTtcbiAgICBvcHBvbmVudEJvYXJkLmZvckVhY2goKHNxdWFyZURpdikgPT4ge1xuICAgICAgc3F1YXJlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRNb3ZlKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVDbGljayA9IChwbGF5ZXIsIG9wcG9uZW50KSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheWVyLnBsYXllcikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wcG9uZW50LnBsYXllcikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVQb2ludGVyRXZlbnQgPSAob3Bwb25lbnQpID0+IHtcbiAgICBjb25zdCBzcXVhcmVEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7b3Bwb25lbnQucGxheWVyfSBkaXZgKTtcbiAgICBvcHBvbmVudC5ib2FyZC5nYW1lQm9hcmQuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09IFwiaFwiIHx8IHZhbHVlID09PSBcIndhdGVyXCIpIHtcbiAgICAgICAgc3F1YXJlRGl2c1tpbmRleF0uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUJvYXJkID0gKG9wcG9uZW50KSA9PiB7XG4gICAgY29uc3Qgc3F1YXJlRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke29wcG9uZW50LnBsYXllcn0gZGl2YCk7XG4gICAgb3Bwb25lbnQuYm9hcmQuZ2FtZUJvYXJkLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSBcImhcIikge1xuICAgICAgICBzcXVhcmVEaXZzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgc3F1YXJlRGl2c1tpbmRleF0udGV4dENvbnRlbnQgPSBcImhcIjtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwid2F0ZXJcIikge1xuICAgICAgICBzcXVhcmVEaXZzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwid2F0ZXJcIik7XG4gICAgICAgIHNxdWFyZURpdnNbaW5kZXhdLnRleHRDb250ZW50ID0gXCJ3XCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGlzYWJsZUFsbFBvaW50ZXJFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlRGl2XCIpO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGlzYWJsZUFsbFBvaW50ZXJFdmVudHMsXG4gICAgdG9nZ2xlQ2xpY2ssXG4gICAgcmVuZGVyQm9hcmQsXG4gICAgc2V0Q2xpY2tFdmVudCxcbiAgICBkaXNhYmxlUG9pbnRlckV2ZW50LFxuICAgIHVwZGF0ZUJvYXJkLFxuICAgIHNob3dQbGF5ZXJTaGlwcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVEb207XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3Vycm91bmRpbmdJbmRpY2VzKGkpIHtcbiAgY29uc3QgbGVmdENvbHVtbiA9IFsxMCwgMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODBdO1xuICBjb25zdCByaWdodENvbHVtbiA9IFsxOSwgMjksIDM5LCA0OSwgNTksIDY5LCA3OSwgODldO1xuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaSA9PT0gMDpcbiAgICAgIHJldHVybiBbaSwgaSArIDEsIGkgKyAxMCwgaSArIDExXTtcblxuICAgIGNhc2UgaSA9PT0gOTpcbiAgICAgIHJldHVybiBbaSwgaSAtIDEsIGkgKyA5LCBpICsgMTBdO1xuXG4gICAgY2FzZSBpID09PSA5MDpcbiAgICAgIHJldHVybiBbaSwgaSAtIDEwLCBpICsgMSwgaSAtIDldO1xuXG4gICAgY2FzZSBpID09PSA5OTpcbiAgICAgIHJldHVybiBbaSwgaSAtIDEsIGkgLSAxMCwgaSAtIDExXTtcblxuICAgIGNhc2UgaSA+IDAgJiYgaSA8IDk6XG4gICAgICByZXR1cm4gW2ksIGkgKyAxLCBpICsgMTAsIGkgKyAxMSwgaSArIDksIGkgLSAxXTtcblxuICAgIGNhc2UgaSA+IDkwICYmIGkgPCA5OTpcbiAgICAgIHJldHVybiBbaSwgaSAtIDExLCBpIC0gMTAsIGkgLSA5LCBpICsgMSwgaSAtIDFdO1xuXG4gICAgY2FzZSBsZWZ0Q29sdW1uLmluY2x1ZGVzKGkpOlxuICAgICAgcmV0dXJuIFtpLCBpIC0gMTAsIGkgLSA5LCBpICsgMSwgaSArIDEwLCBpICsgMTFdO1xuXG4gICAgY2FzZSByaWdodENvbHVtbi5pbmNsdWRlcyhpKTpcbiAgICAgIHJldHVybiBbaSwgaSAtIDExLCBpIC0gMTAsIGkgLSAxLCBpICsgOSwgaSArIDEwXTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW2ksIGkgKyAxLCBpIC0gMSwgaSArIDEwLCBpIC0gMTAsIGkgKyAxMSwgaSAtIDExLCBpIC0gOSwgaSArIDldO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaWFnb25hbENvcmRzKGkpIHtcbiAgY29uc3QgbGVmdENvbHVtbiA9IFsxMCwgMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODBdO1xuICBjb25zdCByaWdodENvbHVtbiA9IFsxOSwgMjksIDM5LCA0OSwgNTksIDY5LCA3OSwgODldO1xuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaSA9PT0gMDpcbiAgICAgIHJldHVybiBbaSArIDExXTtcblxuICAgIGNhc2UgaSA9PT0gOTpcbiAgICAgIHJldHVybiBbaSArIDldO1xuXG4gICAgY2FzZSBpID09PSA5MDpcbiAgICAgIHJldHVybiBbaSAtIDldO1xuXG4gICAgY2FzZSBpID09PSA5OTpcbiAgICAgIHJldHVybiBbaSAtIDExXTtcblxuICAgIGNhc2UgaSA+IDAgJiYgaSA8IDk6XG4gICAgICByZXR1cm4gW2kgKyAxMSwgaSArIDldO1xuXG4gICAgY2FzZSBpID4gOTAgJiYgaSA8IDk5OlxuICAgICAgcmV0dXJuIFtpIC0gMTEsIGkgLSA5XTtcblxuICAgIGNhc2UgbGVmdENvbHVtbi5pbmNsdWRlcyhpKTpcbiAgICAgIHJldHVybiBbaSAtIDksIGkgKyAxMV07XG5cbiAgICBjYXNlIHJpZ2h0Q29sdW1uLmluY2x1ZGVzKGkpOlxuICAgICAgcmV0dXJuIFtpIC0gMTEsIGkgKyA5XTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW2kgKyAxMSwgaSAtIDExLCBpIC0gOSwgaSArIDldO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZFVwTmVhcmVzdDEwKG51bSkge1xuICByZXR1cm4gTWF0aC5jZWlsKG51bSAvIDEwKSAqIDEwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdERpZ2l0KG51bSkge1xuICBpZiAobnVtICUgMTAgPT09IDApIHtcbiAgICByZXR1cm4gMTA7XG4gIH1cbiAgcmV0dXJuIG51bSAlIDEwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTaGlwKHZhbHVlKSB7XG4gIGNvbnN0IHN5bWJvbHMgPSBbXCJDVlwiLCBcIkJCXCIsIFwiQ0FcIiwgXCJTU1wiLCBcIkREXCJdO1xuICBpZiAoc3ltYm9scy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnQocG9zaXRpb24pIHtcbiAgaWYgKHBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmIChwb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgcmV0dXJuIDEwO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJ1Y3R1cmVkQ2xvbmUoYXJyYXkpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbn1cbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IFBsYXllciA9IChwbGF5ZXIpID0+IHtcbiAgbGV0IHR1cm47XG4gIGNvbnN0IGhpdENvcmRzID0gW107XG4gIGNvbnN0IGJvYXJkID0gR2FtZUJvYXJkKCk7XG5cbiAgaWYgKHBsYXllciA9PT0gXCJwbGF5ZXJcIikge1xuICAgIHR1cm4gPSB0cnVlO1xuICAgIGNvbnN0IGNhcnJpZXIgPSBib2FyZC5hbGxTaGlwc1swXTtcbiAgICBjb25zdCBiYXR0bGVTaGlwID0gYm9hcmQuYWxsU2hpcHNbMV07XG4gICAgY29uc3QgY3J1aXNlciA9IGJvYXJkLmFsbFNoaXBzWzJdO1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IGJvYXJkLmFsbFNoaXBzWzNdO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IGJvYXJkLmFsbFNoaXBzWzRdO1xuICAgIGJvYXJkLnBsYWNlU2hpcChjYXJyaWVyLCAxNSwgXCJob3Jpem9udGFsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChiYXR0bGVTaGlwLCA1NSwgXCJob3Jpem9udGFsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChjcnVpc2VyLCAxMywgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLCA3MiwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCA4NSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgfSBlbHNlIHtcbiAgICB0dXJuID0gZmFsc2U7XG4gICAgY29uc3QgY2FycmllciA9IGJvYXJkLmFsbFNoaXBzWzBdO1xuICAgIGNvbnN0IGJhdHRsZVNoaXAgPSBib2FyZC5hbGxTaGlwc1sxXTtcbiAgICBjb25zdCBjcnVpc2VyID0gYm9hcmQuYWxsU2hpcHNbMl07XG4gICAgY29uc3Qgc3VibWFyaW5lID0gYm9hcmQuYWxsU2hpcHNbM107XG4gICAgY29uc3QgZGVzdHJveWVyID0gYm9hcmQuYWxsU2hpcHNbNF07XG4gICAgYm9hcmQucGxhY2VTaGlwKGNhcnJpZXIsIDEsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGJhdHRsZVNoaXAsIDMsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGNydWlzZXIsIDUsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSwgNywgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCA5LCBcInZlcnRpY2FsXCIpO1xuICB9XG5cbiAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHR1cm47XG5cbiAgY29uc3QgY2hhbmdlVHVybiA9ICgpID0+IHtcbiAgICB0dXJuID0gIXR1cm47XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbmltdW0sIG1heGltdW0pIHtcbiAgICBjb25zdCBtaW4gPSBNYXRoLmNlaWwobWluaW11bSk7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5mbG9vcihtYXhpbXVtKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICB9XG5cbiAgY29uc3QgcG9zc2libGVNb3ZlID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMTAxOyBpKyspIHtcbiAgICBwb3NzaWJsZU1vdmUucHVzaChpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUl0ZW1PbmNlKGFyciwgdmFsdWUpIHtcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBjb25zdCBudW1iZXJPZlR1cm5zID0gMDtcbiAgY29uc3QgZ2V0VHJ1bnMgPSAoKSA9PiBudW1iZXJPZlR1cm5zO1xuXG4gIGZ1bmN0aW9uIHBsYXllckF0dGFja3Mob3Bwb25lbnQsIGNvcmQpIHtcbiAgICBjb25zdCBoaXRDb3JkID0gb3Bwb25lbnQuYm9hcmQucmVjaWV2ZUF0dGFjayhjb3JkKTtcbiAgICByZXR1cm4gaGl0Q29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbShhcnJheSkge1xuICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZU1vdmUubGVuZ3RoKV07XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlckF0dGFja3Mob3Bwb25lbnQpIHtcbiAgICBjb25zdCBjb3JkID0gZ2V0UmFuZG9tKHBvc3NpYmxlTW92ZSk7XG4gICAgY29uc3QgaGl0Q29yZCA9IG9wcG9uZW50LmJvYXJkLnJlY2lldmVBdHRhY2soY29yZCk7XG4gICAgb3Bwb25lbnQuYm9hcmQuaGl0Q29yZHMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIHJlbW92ZUl0ZW1PbmNlKHBvc3NpYmxlTW92ZSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBoaXRDb3JkO1xuICB9XG5cbiAgY29uc3QgYXR0YWNrID0gKG9wcG9uZW50LCBjb3JkID0gbnVsbCkgPT4ge1xuICAgIGxldCBoaXRDb3JkO1xuICAgIGlmIChwbGF5ZXIgPT09IFwicGxheWVyXCIpIHtcbiAgICAgIGhpdENvcmQgPSBwbGF5ZXJBdHRhY2tzKG9wcG9uZW50LCBjb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGl0Q29yZCA9IGNvbXB1dGVyQXR0YWNrcyhvcHBvbmVudCk7XG4gICAgfVxuICAgIHJldHVybiBoaXRDb3JkO1xuICB9O1xuXG4gIHJldHVybiB7IGdldFR1cm4sIGNoYW5nZVR1cm4sIGF0dGFjaywgYm9hcmQsIHBsYXllciwgaGl0Q29yZHMsIGdldFRydW5zIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKHR5cGUsIGhpdHMgPSAwLCBzdW5rID0gZmFsc2UpID0+IHtcbiAgbGV0IGxlbmd0aDtcbiAgbGV0IGNvcmQgPSBudWxsO1xuICBsZXQgZGVwbG95ZWQgPSBmYWxzZTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcIkNWXCI6XG4gICAgICBsZW5ndGggPSA1O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkJCXCI6XG4gICAgICBsZW5ndGggPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNBXCI6XG4gICAgICBsZW5ndGggPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlNTXCI6XG4gICAgICBsZW5ndGggPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkREXCI6XG4gICAgICBsZW5ndGggPSAyO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGxlbmd0aCA9IDA7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiBoaXRzO1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG4gIGNvbnN0IGlzRGVwbG95ZWQgPSAoKSA9PiBkZXBsb3llZDtcbiAgY29uc3Qgc2V0Q29yZHMgPSAoY29yZHMpID0+IHtcbiAgICBjb3JkID0gY29yZHM7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGlmIChoaXRzID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGl0cyArPSAxO1xuICAgIGlmIChoaXRzID09PSBsZW5ndGgpIHtcbiAgICAgIHN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdW5rO1xuXG4gIGNvbnN0IGRlcGxveSA9ICgpID0+IHtcbiAgICBkZXBsb3llZCA9IHRydWU7XG4gIH07XG5cbiAgY29uc3QgY291bGROb3REZXBsb3kgPSAoKSA9PiB7XG4gICAgZGVwbG95ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRDb3JkcyA9ICgpID0+IGNvcmQ7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlLFxuICAgIGhpdCxcbiAgICBnZXRIaXRzLFxuICAgIGlzU3VuayxcbiAgICBnZXRMZW5ndGgsXG4gICAgZGVwbG95LFxuICAgIGRlcGxveWVkLFxuICAgIGlzRGVwbG95ZWQsXG4gICAgY291bGROb3REZXBsb3ksXG4gICAgZ2V0Q29yZHMsXG4gICAgc2V0Q29yZHMsXG4gICAgY29yZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuY29uc3QgZ2FtZSA9IEdhbWUoKTtcbmdhbWUuc3RhcnRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=