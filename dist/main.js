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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.narrator {\n  height: 50px;\n  font-size: 32px;\n}\n\nbutton {\n}\n\n.board-container {\n  display: flex;\n}\n\n.board {\n  margin: 20px;\n  height: 300px;\n  width: 300px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.squareDiv {\n  box-sizing: border-box;\n  height: 30px;\n  width: 30px;\n  border: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: inherit;\n}\n\n.ship {\n  background-color: lightpink;\n}\n\n.water {\n  background-color: lightskyblue;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;AACA;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":["body {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.narrator {\n  height: 50px;\n  font-size: 32px;\n}\n\nbutton {\n}\n\n.board-container {\n  display: flex;\n}\n\n.board {\n  margin: 20px;\n  height: 300px;\n  width: 300px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.squareDiv {\n  box-sizing: border-box;\n  height: 30px;\n  width: 30px;\n  border: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: inherit;\n}\n\n.ship {\n  background-color: lightpink;\n}\n\n.water {\n  background-color: lightskyblue;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _gamedom_moveship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamedom_moveship */ "./src/gamedom_moveship");





const gameDom = (0,_gamedom__WEBPACK_IMPORTED_MODULE_2__["default"])();
const moveShip = (0,_gamedom_moveship__WEBPACK_IMPORTED_MODULE_3__["default"])(gameDom);

const Game = () => {
  let currentPlayer;
  let currentOpponent;

  const enableShipMovement = () => {
    moveShip.initiate(currentPlayer);
    gameDom.addMoveListeners(currentPlayer, moveShip.selectShipForMovement);
  };

  const disableShipMovement = () => {
    gameDom.removeMoveListeners(currentPlayer, moveShip.selectShipForMovement);
  };

  const enableAttack = () => {
    gameDom.addAttackListeners(currentOpponent, getMove);
  };

  const renderBoards = () => {
    gameDom.renderBoard(currentPlayer);
    gameDom.showPlayerShips(currentPlayer);
    gameDom.renderBoard(currentOpponent);
  };

  const setUpGame = () => {
    currentPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("player");
    currentOpponent = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("computer");
    renderBoards();
    enableShipMovement();
  };

  const startGame = () => {
    gameDom.Narrator(`${currentPlayer.player}'s move`);
    enableAttack();
    disableShipMovement();
    gameDom.disableStartButton(startGame);
  };

  const play = () => {
    setUpGame();
    gameDom.Narrator("Move/Rotate Ships");
    gameDom.enableStartButton(startGame);
  };

  const runGameLoop = (cord = null) => {
    if (currentPlayer.player === "player") {
      executePlayerAttack(cord);
    } else {
      executeComputerAttack(cord);
    }
  };

  const toggleTurn = () => {
    const temp = currentPlayer;
    currentPlayer = currentOpponent;
    currentOpponent = temp;
    gameDom.Narrator(`${currentPlayer.player}'s move`);
  };

  const turnManager = () => {
    if (currentPlayer.player !== "player") {
      runGameLoop();
    } else {
      gameDom.toggleClick(currentPlayer, currentOpponent);
    }
  };

  const advanceGame = (hitTarget) => {
    if (!(0,_helper__WEBPACK_IMPORTED_MODULE_1__.isShip)(hitTarget)) toggleTurn();
    turnManager();
  };

  const getMove = (event) => {
    const cord = parseInt(event.target.id, 10);
    runGameLoop(cord);
  };

  const onGameOver = () => {
    gameDom.Narrator(`${currentPlayer.player}'s won`);
    gameDom.disableAllPointerEvents();
    gameDom.enableRestartButton(restartGame);
  };

  const concludeGame = () => {
    if (currentOpponent.board.getLose()) {
      onGameOver();
    }
  };

  const updateGameState = () => {
    gameDom.updateBoard(currentOpponent);
    gameDom.disableHitCell(currentOpponent);
    concludeGame();
  };

  const executePlayerAttack = (cord) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    updateGameState();
    advanceGame(hitTarget);
  };

  const executeComputerAttack = (cord = null) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    updateGameState();
    advanceGame(hitTarget);
  };

  const resetBoardState = () => {
    currentPlayer = null;
    currentOpponent = null;
    gameDom.unRenderBoards();
  };

  const restartGame = () => {
    resetBoardState();
    play();
    gameDom.disableRestartButton(restartGame);
  };

  return { setUpGame, play };
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
  const isAdjacentToShip = (cord) => {
    const surroundingIndices = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getSurroundingIndices)(cord - 1);
    return surroundingIndices.some((index) => (0,_helper__WEBPACK_IMPORTED_MODULE_1__.isShip)(gameBoard[index]));
  };

  const isOverlappingWithShip = (ship, startCord, position) => {
    const stepUpValue = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.increment)(position);
    let i = 0;
    let j = startCord;
    while (i < ship.getLength()) {
      if (isAdjacentToShip(j)) {
        return true;
      }
      i += 1;
      j += stepUpValue;
    }
    return false;
  };

  const canPlaceShip = (ship, startCord, position) => {
    if (isOffBoard(ship, startCord, position)) {
      return false;
    }
    if (isOverlappingWithShip(ship, startCord, position)) {
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
    if (isShipMoved === false) {
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
    isAdjacentToShip,
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
const GameDom = () => {
  const createDiv = (id, className) => {
    const div = document.createElement("div");
    div.classList.add(className);
    div.setAttribute("id", id);
    return div;
  };

  const populateBoard = (board) => {
    for (let i = 0; i < 100; i += 1) {
      const squareDiv = document.createElement("div");
      squareDiv.id = i + 1;
      squareDiv.classList.add("squareDiv");
      board.appendChild(squareDiv);
    }
  };

  const renderBoard = (Player) => {
    const { player } = Player;
    const mainContainer = document.querySelector(".board-container");
    const subContainer = createDiv(`${player}-sub-container`, "sub-container");
    const board = createDiv(player, "board");
    const shipContainer = createDiv(`${player}-ships`, "board");
    populateBoard(board);
    subContainer.appendChild(board);
    subContainer.appendChild(shipContainer);
    mainContainer.appendChild(subContainer);
  };

  const changeBgColor = (target, color) => {
    target.style.backgroundColor = color;
  };

  const showPlayerShips = (Player) => {
    const gridCells = document.querySelectorAll(`#${Player.player} div`);
    const placeCord = (cord) => changeBgColor(gridCells[cord - 1], "#839b97");
    const placeShip = (ship) => ship.getCords().forEach(placeCord);
    Player.board.allShips.forEach(placeShip);
  };

  const addAttackListeners = (opponent, getMove) => {
    const board = document.querySelectorAll(`#${opponent.player} div`);
    board.forEach((cell) => cell.addEventListener("click", getMove));
  };

  const toggleClick = (player, opponent) => {
    document.getElementById(player.player).style.pointerEvents = "none";
    document.getElementById(opponent.player).style.pointerEvents = "auto";
  };

  const disableHitCell = (opponent) => {
    if (opponent.player === "player") return;
    const gridCells = document.querySelectorAll(`#${opponent.player} div`);
    gridCells.forEach((cell) => {
      if (cell.textContent !== "") {
        disablePointerEvent(cell);
      }
    });
  };

  const updateBoard = (opponent) => {
    const gridCells = document.querySelectorAll(`#${opponent.player} div`);
    opponent.board.gameBoard.forEach((value, index) => {
      if (value === "h") {
        gridCells[index].classList.add("ship");
        gridCells[index].textContent = "h";
      } else if (value === "water") {
        gridCells[index].classList.add("water");
        gridCells[index].textContent = "w";
      }
    });
  };

  const disablePointerEvent = (cell) => {
    cell.style.pointerEvents = "none";
  };

  const disableAllPointerEvents = () => {
    const gridCells = document.querySelectorAll(".squareDiv");
    gridCells.forEach(disablePointerEvent);
  };

  const Narrator = (message) => {
    const narrator = document.querySelector(".narrator");
    narrator.textContent = message;
  };

  const addMoveListeners = (Player, moveShip) => {
    const board = document.querySelectorAll(`#${Player.player} div`);
    board.forEach((cell) => cell.addEventListener("click", moveShip));
  };

  const removeMoveListeners = (Player, moveShip) => {
    const board = document.querySelectorAll(`#${Player.player} div`);
    board.forEach((cell) => cell.removeEventListener("click", moveShip));
  };

  const enableStartButton = (startGame) => {
    const startButton = document.querySelector("#startGame");
    startButton.addEventListener("click", startGame);
  };

  const disableStartButton = (startGame) => {
    const startButton = document.querySelector("#startGame");
    startButton.removeEventListener("click", startGame);
  };

  const enableRestartButton = (restartGame) => {
    const restartButton = document.querySelector("#restartGame");
    restartButton.addEventListener("click", restartGame);
  };

  const disableRestartButton = (restartGame) => {
    const restartButton = document.querySelector("#restartGame");
    restartButton.removeEventListener("click", restartGame);
  };

  const enableEvent = (target, f) => {
    target.addEventListener("click", f);
  };

  const disableEvent = (target, f) => {
    target.removeEventListener("click", f);
  };

  const unRenderBoards = () => {
    const mainContainer = document.querySelector(".board-container");
    mainContainer.textContent = "";
  };

  return {
    Narrator,
    disableAllPointerEvents,
    toggleClick,
    renderBoard,
    addAttackListeners,
    disableHitCell,
    updateBoard,
    showPlayerShips,
    addMoveListeners,
    removeMoveListeners,
    enableStartButton,
    disableStartButton,
    enableRestartButton,
    disableRestartButton,
    unRenderBoards,
    changeBgColor,
    enableEvent,
    disableEvent,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameDom);


/***/ }),

/***/ "./src/gamedom_moveship":
/*!******************************!*\
  !*** ./src/gamedom_moveship ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const MoveShip = (gameDom) => {
  let currentPlayer;
  let gridCells;
  let ship;
  let shipIndex;

  const initiate = (Player) => {
    currentPlayer = Player;
    gridCells = document.querySelectorAll(`#player div`);
  };

  const getShipIndex = () => ship.getCords().map((value) => value - 1);

  const higlightSelectedShip = () => {
    gridCells[shipIndex[0]].textContent = "🗘";
    shipIndex.forEach((i) => gameDom.changeBgColor(gridCells[i], "#9f5f80"));
  };

  const revertBoardState = () => {
    gridCells[shipIndex[0]].textContent = "";
    shipIndex.forEach((i) => gameDom.changeBgColor(gridCells[i], ""));
  };

  const moveCurrentPlayerShip = (cord) => {
    const position = ship.getPosition();
    currentPlayer.board.moveShip(ship, cord, position);
  };

  const placeShipAtCell = (e) => {
    moveCurrentPlayerShip(parseInt(e.target.id));
    revertBoardState();
    updateAfterShipMove();
  };

  const moveShip = () => {
    higlightSelectedShip();
    addRelocateListeners();
  };

  const updateAfterShipMove = () => {
    revertBoardState();
    removeRelocateListeners();
    gameDom.addMoveListeners(currentPlayer, selectShipForMovement);
    gameDom.showPlayerShips(currentPlayer);
  };

  const addRelocateListeners = () => {
    gridCells.forEach((cell) =>
      cell.addEventListener("click", placeShipAtCell)
    );
  };

  const removeRelocateListeners = () => {
    gridCells.forEach((cell) =>
      cell.removeEventListener("click", placeShipAtCell)
    );
  };

  const getShipAtCord = (cord) => {
    const { allShips } = currentPlayer.board;
    return allShips.find((ship) => ship.getCords().includes(cord));
  };

  const moveIfDefined = () => {
    if (ship) {
      shipIndex = getShipIndex();
      gameDom.removeMoveListeners(currentPlayer, selectShipForMovement);
      moveShip(ship);
    }
  };

  const moveSelectedShip = (cord) => {
    ship = getShipAtCord(cord);
    moveIfDefined();
  };

  const selectShipForMovement = (e) => {
    const cord = parseInt(e.target.id, 10);
    moveSelectedShip(cord);
  };

  return { selectShipForMovement, initiate };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoveShip);


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
    setPosition(cord); // test this later
  };

  let position = null;
  // Write tests for this later
  const setPosition = (cord) => {
    if (cord === null) {
      position = null;
    } else {
      position = cord[1] - cord[0] === 1 ? "horizontal" : "vertical";
    }
  };

  const getPosition = () => position;

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
    getPosition,
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
game.play();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvZ2FtZWRvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9nYW1lZG9tX21vdmVzaGlwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXJyYXRvciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbmJ1dHRvbiB7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc3F1YXJlRGl2IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBpbmhlcml0O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XFxufVxcblxcbi53YXRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXJyYXRvciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbmJ1dHRvbiB7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc3F1YXJlRGl2IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBpbmhlcml0O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XFxufVxcblxcbi53YXRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBpc1NoaXAgfSBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCBHYW1lRG9tIGZyb20gXCIuL2dhbWVkb21cIjtcbmltcG9ydCBNb3ZlU2hpcCBmcm9tIFwiLi9nYW1lZG9tX21vdmVzaGlwXCI7XG5cbmNvbnN0IGdhbWVEb20gPSBHYW1lRG9tKCk7XG5jb25zdCBtb3ZlU2hpcCA9IE1vdmVTaGlwKGdhbWVEb20pO1xuXG5jb25zdCBHYW1lID0gKCkgPT4ge1xuICBsZXQgY3VycmVudFBsYXllcjtcbiAgbGV0IGN1cnJlbnRPcHBvbmVudDtcblxuICBjb25zdCBlbmFibGVTaGlwTW92ZW1lbnQgPSAoKSA9PiB7XG4gICAgbW92ZVNoaXAuaW5pdGlhdGUoY3VycmVudFBsYXllcik7XG4gICAgZ2FtZURvbS5hZGRNb3ZlTGlzdGVuZXJzKGN1cnJlbnRQbGF5ZXIsIG1vdmVTaGlwLnNlbGVjdFNoaXBGb3JNb3ZlbWVudCk7XG4gIH07XG5cbiAgY29uc3QgZGlzYWJsZVNoaXBNb3ZlbWVudCA9ICgpID0+IHtcbiAgICBnYW1lRG9tLnJlbW92ZU1vdmVMaXN0ZW5lcnMoY3VycmVudFBsYXllciwgbW92ZVNoaXAuc2VsZWN0U2hpcEZvck1vdmVtZW50KTtcbiAgfTtcblxuICBjb25zdCBlbmFibGVBdHRhY2sgPSAoKSA9PiB7XG4gICAgZ2FtZURvbS5hZGRBdHRhY2tMaXN0ZW5lcnMoY3VycmVudE9wcG9uZW50LCBnZXRNb3ZlKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJCb2FyZHMgPSAoKSA9PiB7XG4gICAgZ2FtZURvbS5yZW5kZXJCb2FyZChjdXJyZW50UGxheWVyKTtcbiAgICBnYW1lRG9tLnNob3dQbGF5ZXJTaGlwcyhjdXJyZW50UGxheWVyKTtcbiAgICBnYW1lRG9tLnJlbmRlckJvYXJkKGN1cnJlbnRPcHBvbmVudCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0VXBHYW1lID0gKCkgPT4ge1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIik7XG4gICAgY3VycmVudE9wcG9uZW50ID0gUGxheWVyKFwiY29tcHV0ZXJcIik7XG4gICAgcmVuZGVyQm9hcmRzKCk7XG4gICAgZW5hYmxlU2hpcE1vdmVtZW50KCk7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGdhbWVEb20uTmFycmF0b3IoYCR7Y3VycmVudFBsYXllci5wbGF5ZXJ9J3MgbW92ZWApO1xuICAgIGVuYWJsZUF0dGFjaygpO1xuICAgIGRpc2FibGVTaGlwTW92ZW1lbnQoKTtcbiAgICBnYW1lRG9tLmRpc2FibGVTdGFydEJ1dHRvbihzdGFydEdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IHBsYXkgPSAoKSA9PiB7XG4gICAgc2V0VXBHYW1lKCk7XG4gICAgZ2FtZURvbS5OYXJyYXRvcihcIk1vdmUvUm90YXRlIFNoaXBzXCIpO1xuICAgIGdhbWVEb20uZW5hYmxlU3RhcnRCdXR0b24oc3RhcnRHYW1lKTtcbiAgfTtcblxuICBjb25zdCBydW5HYW1lTG9vcCA9IChjb3JkID0gbnVsbCkgPT4ge1xuICAgIGlmIChjdXJyZW50UGxheWVyLnBsYXllciA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgZXhlY3V0ZVBsYXllckF0dGFjayhjb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhlY3V0ZUNvbXB1dGVyQXR0YWNrKGNvcmQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2dnbGVUdXJuID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlbXAgPSBjdXJyZW50UGxheWVyO1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50T3Bwb25lbnQ7XG4gICAgY3VycmVudE9wcG9uZW50ID0gdGVtcDtcbiAgICBnYW1lRG9tLk5hcnJhdG9yKGAke2N1cnJlbnRQbGF5ZXIucGxheWVyfSdzIG1vdmVgKTtcbiAgfTtcblxuICBjb25zdCB0dXJuTWFuYWdlciA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFBsYXllci5wbGF5ZXIgIT09IFwicGxheWVyXCIpIHtcbiAgICAgIHJ1bkdhbWVMb29wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdhbWVEb20udG9nZ2xlQ2xpY2soY3VycmVudFBsYXllciwgY3VycmVudE9wcG9uZW50KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWR2YW5jZUdhbWUgPSAoaGl0VGFyZ2V0KSA9PiB7XG4gICAgaWYgKCFpc1NoaXAoaGl0VGFyZ2V0KSkgdG9nZ2xlVHVybigpO1xuICAgIHR1cm5NYW5hZ2VyKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TW92ZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvcmQgPSBwYXJzZUludChldmVudC50YXJnZXQuaWQsIDEwKTtcbiAgICBydW5HYW1lTG9vcChjb3JkKTtcbiAgfTtcblxuICBjb25zdCBvbkdhbWVPdmVyID0gKCkgPT4ge1xuICAgIGdhbWVEb20uTmFycmF0b3IoYCR7Y3VycmVudFBsYXllci5wbGF5ZXJ9J3Mgd29uYCk7XG4gICAgZ2FtZURvbS5kaXNhYmxlQWxsUG9pbnRlckV2ZW50cygpO1xuICAgIGdhbWVEb20uZW5hYmxlUmVzdGFydEJ1dHRvbihyZXN0YXJ0R2FtZSk7XG4gIH07XG5cbiAgY29uc3QgY29uY2x1ZGVHYW1lID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50T3Bwb25lbnQuYm9hcmQuZ2V0TG9zZSgpKSB7XG4gICAgICBvbkdhbWVPdmVyKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUdhbWVTdGF0ZSA9ICgpID0+IHtcbiAgICBnYW1lRG9tLnVwZGF0ZUJvYXJkKGN1cnJlbnRPcHBvbmVudCk7XG4gICAgZ2FtZURvbS5kaXNhYmxlSGl0Q2VsbChjdXJyZW50T3Bwb25lbnQpO1xuICAgIGNvbmNsdWRlR2FtZSgpO1xuICB9O1xuXG4gIGNvbnN0IGV4ZWN1dGVQbGF5ZXJBdHRhY2sgPSAoY29yZCkgPT4ge1xuICAgIGNvbnN0IGhpdFRhcmdldCA9IGN1cnJlbnRQbGF5ZXIuYXR0YWNrKGN1cnJlbnRPcHBvbmVudCwgY29yZCk7XG4gICAgdXBkYXRlR2FtZVN0YXRlKCk7XG4gICAgYWR2YW5jZUdhbWUoaGl0VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBleGVjdXRlQ29tcHV0ZXJBdHRhY2sgPSAoY29yZCA9IG51bGwpID0+IHtcbiAgICBjb25zdCBoaXRUYXJnZXQgPSBjdXJyZW50UGxheWVyLmF0dGFjayhjdXJyZW50T3Bwb25lbnQsIGNvcmQpO1xuICAgIHVwZGF0ZUdhbWVTdGF0ZSgpO1xuICAgIGFkdmFuY2VHYW1lKGhpdFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRCb2FyZFN0YXRlID0gKCkgPT4ge1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBudWxsO1xuICAgIGN1cnJlbnRPcHBvbmVudCA9IG51bGw7XG4gICAgZ2FtZURvbS51blJlbmRlckJvYXJkcygpO1xuICB9O1xuXG4gIGNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIHJlc2V0Qm9hcmRTdGF0ZSgpO1xuICAgIHBsYXkoKTtcbiAgICBnYW1lRG9tLmRpc2FibGVSZXN0YXJ0QnV0dG9uKHJlc3RhcnRHYW1lKTtcbiAgfTtcblxuICByZXR1cm4geyBzZXRVcEdhbWUsIHBsYXkgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQge1xuICBnZXRTdXJyb3VuZGluZ0luZGljZXMsXG4gIGxhc3REaWdpdCxcbiAgcm91bmRVcE5lYXJlc3QxMCxcbiAgaXNTaGlwLFxuICBpbmNyZW1lbnQsXG4gIGdldERpYWdvbmFsQ29yZHMsXG59IGZyb20gXCIuL2hlbHBlclwiO1xuXG5jb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IFtdO1xuICBjb25zdCBoaXRDb3JkcyA9IFtdO1xuICBsZXQgbG9zZSA9IGZhbHNlO1xuICBjb25zdCBnZXRMb3NlID0gKCkgPT4gbG9zZTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpICs9IDEpIHtcbiAgICBnYW1lQm9hcmQucHVzaChpKTtcbiAgfVxuXG4gIGNvbnN0IGNhcnJpZXIgPSBTaGlwKFwiQ1ZcIik7XG4gIGNvbnN0IGJhdHRsZVNoaXAgPSBTaGlwKFwiQkJcIik7XG4gIGNvbnN0IGNydWlzZXIgPSBTaGlwKFwiQ0FcIik7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoXCJTU1wiKTtcbiAgY29uc3QgZGVzdHJveWVyID0gU2hpcChcIkREXCIpO1xuICBjb25zdCBhbGxTaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVTaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llcl07XG5cbiAgY29uc3QgaXNPZmZCb2FyZCA9IChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKFxuICAgICAgKHBvc2l0aW9uID09PSBcImhvcml6b250YWxcIiAmJlxuICAgICAgICBzdGFydENvcmQgKyBzaGlwLmdldExlbmd0aCgpIC0gMSA+IHJvdW5kVXBOZWFyZXN0MTAoc3RhcnRDb3JkKSkgfHxcbiAgICAgIChwb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmXG4gICAgICAgIHN0YXJ0Q29yZCArIHNoaXAuZ2V0TGVuZ3RoKCkgKiAxMCA+IDEwMCArIGxhc3REaWdpdChzdGFydENvcmQpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyByZXR1cm5zIHRydWUgaWYgYSBzdXJyb3VuZGluZyBjb3JkaW5hdGUgaXMgYSBzaGlwIGNvcmRpbmF0ZVxuICBjb25zdCBpc0FkamFjZW50VG9TaGlwID0gKGNvcmQpID0+IHtcbiAgICBjb25zdCBzdXJyb3VuZGluZ0luZGljZXMgPSBnZXRTdXJyb3VuZGluZ0luZGljZXMoY29yZCAtIDEpO1xuICAgIHJldHVybiBzdXJyb3VuZGluZ0luZGljZXMuc29tZSgoaW5kZXgpID0+IGlzU2hpcChnYW1lQm9hcmRbaW5kZXhdKSk7XG4gIH07XG5cbiAgY29uc3QgaXNPdmVybGFwcGluZ1dpdGhTaGlwID0gKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdGVwVXBWYWx1ZSA9IGluY3JlbWVudChwb3NpdGlvbik7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gc3RhcnRDb3JkO1xuICAgIHdoaWxlIChpIDwgc2hpcC5nZXRMZW5ndGgoKSkge1xuICAgICAgaWYgKGlzQWRqYWNlbnRUb1NoaXAoaikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpICs9IDE7XG4gICAgICBqICs9IHN0ZXBVcFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY2FuUGxhY2VTaGlwID0gKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pID0+IHtcbiAgICBpZiAoaXNPZmZCb2FyZChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNPdmVybGFwcGluZ1dpdGhTaGlwKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKCFjYW5QbGFjZVNoaXAoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikpIHtcbiAgICAgIHNoaXAuY291bGROb3REZXBsb3koKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwQ29yZHMgPSBbXTtcbiAgICBjb25zdCBzdGVwVXBWYWx1ZSA9IGluY3JlbWVudChwb3NpdGlvbik7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gc3RhcnRDb3JkIC0gMTtcbiAgICB3aGlsZSAoaSA8IHNoaXAuZ2V0TGVuZ3RoKCkpIHtcbiAgICAgIGdhbWVCb2FyZFtqXSA9IHNoaXAudHlwZTtcbiAgICAgIHNoaXBDb3Jkcy5wdXNoKGogKyAxKTtcbiAgICAgIGkgKz0gMTtcbiAgICAgIGogKz0gc3RlcFVwVmFsdWU7XG4gICAgfVxuICAgIHNoaXAuZGVwbG95KCk7XG4gICAgc2hpcC5zZXRDb3JkcyhzaGlwQ29yZHMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVNoaXBGcm9tQm9hcmQoc2hpcENvcmRzLCBzaGlwKSB7XG4gICAgc2hpcC5zZXRDb3JkcyhudWxsKTtcbiAgICBzaGlwQ29yZHMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGdhbWVCb2FyZFt2YWx1ZSAtIDFdID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1bnJlbW92ZVNoaXBGcm9tQm9hcmQoc2hpcENvcmRzLCBzaGlwKSB7XG4gICAgc2hpcC5zZXRDb3JkcyhzaGlwQ29yZHMpO1xuICAgIHNoaXBDb3Jkcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgZ2FtZUJvYXJkW3ZhbHVlIC0gMV0gPSBzaGlwLnR5cGU7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB0b2dnbGVQb3NpdGlvbiA9IChzdGFydENvcmQsIHByZU1vdmVTdGFydENvcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKHN0YXJ0Q29yZCA9PT0gcHJlTW92ZVN0YXJ0Q29yZCkge1xuICAgICAgcmV0dXJuIHBvc2l0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgIH1cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgbW92ZVNoaXAgPSAoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHByZU1vdmVDb3JkcyA9IHNoaXAuZ2V0Q29yZHMoKTtcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRvZ2dsZVBvc2l0aW9uKHN0YXJ0Q29yZCwgcHJlTW92ZUNvcmRzWzBdLCBwb3NpdGlvbik7XG4gICAgcmVtb3ZlU2hpcEZyb21Cb2FyZChwcmVNb3ZlQ29yZHMsIHNoaXApO1xuICAgIGNvbnN0IGlzU2hpcE1vdmVkID0gcGxhY2VTaGlwKHNoaXAsIHN0YXJ0Q29yZCwgbmV3UG9zaXRpb24pO1xuICAgIGlmIChpc1NoaXBNb3ZlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHVucmVtb3ZlU2hpcEZyb21Cb2FyZChwcmVNb3ZlQ29yZHMsIHNoaXApO1xuICAgIH1cbiAgICByZXR1cm4gaXNTaGlwTW92ZWQ7XG4gIH07XG5cbiAgY29uc3QgaGl0RGlhZ29uYWwgPSAoY29yZCkgPT4ge1xuICAgIGNvbnN0IHBvc3NpYmxlQ29yZHMgPSBnZXREaWFnb25hbENvcmRzKGNvcmQgLSAxKTtcbiAgICBwb3NzaWJsZUNvcmRzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBnYW1lQm9hcmRbdmFsdWVdID0gXCJ3YXRlclwiO1xuICAgICAgaWYgKCFoaXRDb3Jkcy5pbmNsdWRlcyh2YWx1ZSArIDEpKSB7XG4gICAgICAgIGhpdENvcmRzLnB1c2godmFsdWUgKyAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcG9zc2libGVDb3Jkcy5tYXAoKHZhbHVlKSA9PiB2YWx1ZSArIDEpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEFsbEFkamFjZW50Q29yZHMoc2hpcCkge1xuICAgIGNvbnN0IHNoaXBDb3JkcyA9IHNoaXAuZ2V0Q29yZHMoKTtcbiAgICBjb25zdCBhZGphY2VudENvcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHN1cnJvdW5kaW5nSW5kaWNlcyA9IGdldFN1cnJvdW5kaW5nSW5kaWNlcyhzaGlwQ29yZHNbaV0gLSAxKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3Vycm91bmRpbmdJbmRpY2VzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGFkakNvcmQgPSBzdXJyb3VuZGluZ0luZGljZXNbal07XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhYWRqYWNlbnRDb3Jkcy5pbmNsdWRlcyhhZGpDb3JkKSAmJlxuICAgICAgICAgICFoaXRDb3Jkcy5pbmNsdWRlcyhhZGpDb3JkICsgMSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWRqYWNlbnRDb3Jkcy5wdXNoKGFkakNvcmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhZGphY2VudENvcmRzLm1hcCgodmFsdWUpID0+IHZhbHVlICsgMSk7XG4gIH1cblxuICBjb25zdCBoaXRTaGlwQWRqYWNlbnQgPSAoc2hpcCkgPT4ge1xuICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHJlbWFpbmluZ0NvcmRzID0gZ2V0QWxsQWRqYWNlbnRDb3JkcyhzaGlwKTtcbiAgICByZW1haW5pbmdDb3Jkcy5mb3JFYWNoKChjb3JkKSA9PiB7XG4gICAgICBnYW1lQm9hcmRbY29yZCAtIDFdID0gXCJ3YXRlclwiO1xuICAgIH0pO1xuICAgIHJldHVybiByZW1haW5pbmdDb3JkcztcbiAgfTtcblxuICBmdW5jdGlvbiB1cGRhdGVTaGlwKGhpdFRhcmdldCwgY29yZCkge1xuICAgIGNvbnN0IHRhcmdldFNoaXAgPSBhbGxTaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLnR5cGUgPT09IGhpdFRhcmdldCk7XG4gICAgdGFyZ2V0U2hpcC5oaXQoKTtcbiAgICBoaXREaWFnb25hbChjb3JkKTtcbiAgICBoaXRTaGlwQWRqYWNlbnQodGFyZ2V0U2hpcCk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2tTaGlwKGNvcmQpIHtcbiAgICBoaXRDb3Jkcy5wdXNoKGNvcmQpO1xuICAgIGNvbnN0IGhpdFRhcmdldCA9IGdhbWVCb2FyZFtjb3JkIC0gMV07XG4gICAgZ2FtZUJvYXJkW2NvcmQgLSAxXSA9IFwiaFwiO1xuICAgIHVwZGF0ZVNoaXAoaGl0VGFyZ2V0LCBjb3JkKTtcbiAgICBhbGxTdW5rKCk7XG4gICAgcmV0dXJuIGhpdFRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFja1dhdGVyKGNvcmQpIHtcbiAgICBoaXRDb3Jkcy5wdXNoKGNvcmQpO1xuICAgIGNvbnN0IGhpdFRhcmdldCA9IGdhbWVCb2FyZFtjb3JkIC0gMV07XG4gICAgZ2FtZUJvYXJkW2NvcmQgLSAxXSA9IFwid2F0ZXJcIjtcbiAgICByZXR1cm4gaGl0VGFyZ2V0O1xuICB9XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb3JkKSA9PiB7XG4gICAgbGV0IGhpdFRhcmdldDtcbiAgICBpZiAoaGl0Q29yZHMuaW5jbHVkZXMoY29yZCkpIHtcbiAgICAgIGhpdFRhcmdldCA9IFwiaFwiO1xuICAgIH0gZWxzZSBpZiAoaXNTaGlwKGdhbWVCb2FyZFtjb3JkIC0gMV0pKSB7XG4gICAgICBoaXRUYXJnZXQgPSBhdHRhY2tTaGlwKGNvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXRUYXJnZXQgPSBhdHRhY2tXYXRlcihjb3JkKTtcbiAgICB9XG4gICAgcmV0dXJuIGhpdFRhcmdldDtcbiAgfTtcblxuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhbGxTaGlwc1tpXS5pc0RlcGxveWVkKCkgJiYgYWxsU2hpcHNbaV0uaXNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9zZSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lQm9hcmQsXG4gICAgYWxsU2hpcHMsXG4gICAgaGl0Q29yZHMsXG4gICAgcGxhY2VTaGlwLFxuICAgIG1vdmVTaGlwLFxuICAgIGlzQWRqYWNlbnRUb1NoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBoaXREaWFnb25hbCxcbiAgICBoaXRTaGlwQWRqYWNlbnQsXG4gICAgYWxsU3VuayxcbiAgICBnZXRMb3NlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkO1xuIiwiY29uc3QgR2FtZURvbSA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlRGl2ID0gKGlkLCBjbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IHBvcHVsYXRlQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzcXVhcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlRGl2LmlkID0gaSArIDE7XG4gICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0LmFkZChcInNxdWFyZURpdlwiKTtcbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZURpdik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckJvYXJkID0gKFBsYXllcikgPT4ge1xuICAgIGNvbnN0IHsgcGxheWVyIH0gPSBQbGF5ZXI7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHN1YkNvbnRhaW5lciA9IGNyZWF0ZURpdihgJHtwbGF5ZXJ9LXN1Yi1jb250YWluZXJgLCBcInN1Yi1jb250YWluZXJcIik7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVEaXYocGxheWVyLCBcImJvYXJkXCIpO1xuICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBjcmVhdGVEaXYoYCR7cGxheWVyfS1zaGlwc2AsIFwiYm9hcmRcIik7XG4gICAgcG9wdWxhdGVCb2FyZChib2FyZCk7XG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJDb250YWluZXIpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUJnQ29sb3IgPSAodGFyZ2V0LCBjb2xvcikgPT4ge1xuICAgIHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgfTtcblxuICBjb25zdCBzaG93UGxheWVyU2hpcHMgPSAoUGxheWVyKSA9PiB7XG4gICAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7UGxheWVyLnBsYXllcn0gZGl2YCk7XG4gICAgY29uc3QgcGxhY2VDb3JkID0gKGNvcmQpID0+IGNoYW5nZUJnQ29sb3IoZ3JpZENlbGxzW2NvcmQgLSAxXSwgXCIjODM5Yjk3XCIpO1xuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwKSA9PiBzaGlwLmdldENvcmRzKCkuZm9yRWFjaChwbGFjZUNvcmQpO1xuICAgIFBsYXllci5ib2FyZC5hbGxTaGlwcy5mb3JFYWNoKHBsYWNlU2hpcCk7XG4gIH07XG5cbiAgY29uc3QgYWRkQXR0YWNrTGlzdGVuZXJzID0gKG9wcG9uZW50LCBnZXRNb3ZlKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtvcHBvbmVudC5wbGF5ZXJ9IGRpdmApO1xuICAgIGJvYXJkLmZvckVhY2goKGNlbGwpID0+IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldE1vdmUpKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVDbGljayA9IChwbGF5ZXIsIG9wcG9uZW50KSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheWVyLnBsYXllcikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wcG9uZW50LnBsYXllcikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVIaXRDZWxsID0gKG9wcG9uZW50KSA9PiB7XG4gICAgaWYgKG9wcG9uZW50LnBsYXllciA9PT0gXCJwbGF5ZXJcIikgcmV0dXJuO1xuICAgIGNvbnN0IGdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke29wcG9uZW50LnBsYXllcn0gZGl2YCk7XG4gICAgZ3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmIChjZWxsLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgIGRpc2FibGVQb2ludGVyRXZlbnQoY2VsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQm9hcmQgPSAob3Bwb25lbnQpID0+IHtcbiAgICBjb25zdCBncmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtvcHBvbmVudC5wbGF5ZXJ9IGRpdmApO1xuICAgIG9wcG9uZW50LmJvYXJkLmdhbWVCb2FyZC5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCJoXCIpIHtcbiAgICAgICAgZ3JpZENlbGxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgZ3JpZENlbGxzW2luZGV4XS50ZXh0Q29udGVudCA9IFwiaFwiO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJ3YXRlclwiKSB7XG4gICAgICAgIGdyaWRDZWxsc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcIndhdGVyXCIpO1xuICAgICAgICBncmlkQ2VsbHNbaW5kZXhdLnRleHRDb250ZW50ID0gXCJ3XCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGlzYWJsZVBvaW50ZXJFdmVudCA9IChjZWxsKSA9PiB7XG4gICAgY2VsbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gIH07XG5cbiAgY29uc3QgZGlzYWJsZUFsbFBvaW50ZXJFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVEaXZcIik7XG4gICAgZ3JpZENlbGxzLmZvckVhY2goZGlzYWJsZVBvaW50ZXJFdmVudCk7XG4gIH07XG5cbiAgY29uc3QgTmFycmF0b3IgPSAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IG5hcnJhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXJyYXRvclwiKTtcbiAgICBuYXJyYXRvci50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIH07XG5cbiAgY29uc3QgYWRkTW92ZUxpc3RlbmVycyA9IChQbGF5ZXIsIG1vdmVTaGlwKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtQbGF5ZXIucGxheWVyfSBkaXZgKTtcbiAgICBib2FyZC5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb3ZlU2hpcCkpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZU1vdmVMaXN0ZW5lcnMgPSAoUGxheWVyLCBtb3ZlU2hpcCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7UGxheWVyLnBsYXllcn0gZGl2YCk7XG4gICAgYm9hcmQuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW92ZVNoaXApKTtcbiAgfTtcblxuICBjb25zdCBlbmFibGVTdGFydEJ1dHRvbiA9IChzdGFydEdhbWUpID0+IHtcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnRHYW1lXCIpO1xuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVTdGFydEJ1dHRvbiA9IChzdGFydEdhbWUpID0+IHtcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnRHYW1lXCIpO1xuICAgIHN0YXJ0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IGVuYWJsZVJlc3RhcnRCdXR0b24gPSAocmVzdGFydEdhbWUpID0+IHtcbiAgICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN0YXJ0R2FtZVwiKTtcbiAgICByZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXN0YXJ0R2FtZSk7XG4gIH07XG5cbiAgY29uc3QgZGlzYWJsZVJlc3RhcnRCdXR0b24gPSAocmVzdGFydEdhbWUpID0+IHtcbiAgICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN0YXJ0R2FtZVwiKTtcbiAgICByZXN0YXJ0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXN0YXJ0R2FtZSk7XG4gIH07XG5cbiAgY29uc3QgZW5hYmxlRXZlbnQgPSAodGFyZ2V0LCBmKSA9PiB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmKTtcbiAgfTtcblxuICBjb25zdCBkaXNhYmxlRXZlbnQgPSAodGFyZ2V0LCBmKSA9PiB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmKTtcbiAgfTtcblxuICBjb25zdCB1blJlbmRlckJvYXJkcyA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1jb250YWluZXJcIik7XG4gICAgbWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBOYXJyYXRvcixcbiAgICBkaXNhYmxlQWxsUG9pbnRlckV2ZW50cyxcbiAgICB0b2dnbGVDbGljayxcbiAgICByZW5kZXJCb2FyZCxcbiAgICBhZGRBdHRhY2tMaXN0ZW5lcnMsXG4gICAgZGlzYWJsZUhpdENlbGwsXG4gICAgdXBkYXRlQm9hcmQsXG4gICAgc2hvd1BsYXllclNoaXBzLFxuICAgIGFkZE1vdmVMaXN0ZW5lcnMsXG4gICAgcmVtb3ZlTW92ZUxpc3RlbmVycyxcbiAgICBlbmFibGVTdGFydEJ1dHRvbixcbiAgICBkaXNhYmxlU3RhcnRCdXR0b24sXG4gICAgZW5hYmxlUmVzdGFydEJ1dHRvbixcbiAgICBkaXNhYmxlUmVzdGFydEJ1dHRvbixcbiAgICB1blJlbmRlckJvYXJkcyxcbiAgICBjaGFuZ2VCZ0NvbG9yLFxuICAgIGVuYWJsZUV2ZW50LFxuICAgIGRpc2FibGVFdmVudCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVEb207XG4iLCJjb25zdCBNb3ZlU2hpcCA9IChnYW1lRG9tKSA9PiB7XG4gIGxldCBjdXJyZW50UGxheWVyO1xuICBsZXQgZ3JpZENlbGxzO1xuICBsZXQgc2hpcDtcbiAgbGV0IHNoaXBJbmRleDtcblxuICBjb25zdCBpbml0aWF0ZSA9IChQbGF5ZXIpID0+IHtcbiAgICBjdXJyZW50UGxheWVyID0gUGxheWVyO1xuICAgIGdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCNwbGF5ZXIgZGl2YCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcEluZGV4ID0gKCkgPT4gc2hpcC5nZXRDb3JkcygpLm1hcCgodmFsdWUpID0+IHZhbHVlIC0gMSk7XG5cbiAgY29uc3QgaGlnbGlnaHRTZWxlY3RlZFNoaXAgPSAoKSA9PiB7XG4gICAgZ3JpZENlbGxzW3NoaXBJbmRleFswXV0udGV4dENvbnRlbnQgPSBcIvCfl5hcIjtcbiAgICBzaGlwSW5kZXguZm9yRWFjaCgoaSkgPT4gZ2FtZURvbS5jaGFuZ2VCZ0NvbG9yKGdyaWRDZWxsc1tpXSwgXCIjOWY1ZjgwXCIpKTtcbiAgfTtcblxuICBjb25zdCByZXZlcnRCb2FyZFN0YXRlID0gKCkgPT4ge1xuICAgIGdyaWRDZWxsc1tzaGlwSW5kZXhbMF1dLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBzaGlwSW5kZXguZm9yRWFjaCgoaSkgPT4gZ2FtZURvbS5jaGFuZ2VCZ0NvbG9yKGdyaWRDZWxsc1tpXSwgXCJcIikpO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVDdXJyZW50UGxheWVyU2hpcCA9IChjb3JkKSA9PiB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBzaGlwLmdldFBvc2l0aW9uKCk7XG4gICAgY3VycmVudFBsYXllci5ib2FyZC5tb3ZlU2hpcChzaGlwLCBjb3JkLCBwb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwQXRDZWxsID0gKGUpID0+IHtcbiAgICBtb3ZlQ3VycmVudFBsYXllclNoaXAocGFyc2VJbnQoZS50YXJnZXQuaWQpKTtcbiAgICByZXZlcnRCb2FyZFN0YXRlKCk7XG4gICAgdXBkYXRlQWZ0ZXJTaGlwTW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVTaGlwID0gKCkgPT4ge1xuICAgIGhpZ2xpZ2h0U2VsZWN0ZWRTaGlwKCk7XG4gICAgYWRkUmVsb2NhdGVMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVBZnRlclNoaXBNb3ZlID0gKCkgPT4ge1xuICAgIHJldmVydEJvYXJkU3RhdGUoKTtcbiAgICByZW1vdmVSZWxvY2F0ZUxpc3RlbmVycygpO1xuICAgIGdhbWVEb20uYWRkTW92ZUxpc3RlbmVycyhjdXJyZW50UGxheWVyLCBzZWxlY3RTaGlwRm9yTW92ZW1lbnQpO1xuICAgIGdhbWVEb20uc2hvd1BsYXllclNoaXBzKGN1cnJlbnRQbGF5ZXIpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFJlbG9jYXRlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxhY2VTaGlwQXRDZWxsKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUmVsb2NhdGVMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgZ3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+XG4gICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGFjZVNoaXBBdENlbGwpXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwQXRDb3JkID0gKGNvcmQpID0+IHtcbiAgICBjb25zdCB7IGFsbFNoaXBzIH0gPSBjdXJyZW50UGxheWVyLmJvYXJkO1xuICAgIHJldHVybiBhbGxTaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLmdldENvcmRzKCkuaW5jbHVkZXMoY29yZCkpO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVJZkRlZmluZWQgPSAoKSA9PiB7XG4gICAgaWYgKHNoaXApIHtcbiAgICAgIHNoaXBJbmRleCA9IGdldFNoaXBJbmRleCgpO1xuICAgICAgZ2FtZURvbS5yZW1vdmVNb3ZlTGlzdGVuZXJzKGN1cnJlbnRQbGF5ZXIsIHNlbGVjdFNoaXBGb3JNb3ZlbWVudCk7XG4gICAgICBtb3ZlU2hpcChzaGlwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbW92ZVNlbGVjdGVkU2hpcCA9IChjb3JkKSA9PiB7XG4gICAgc2hpcCA9IGdldFNoaXBBdENvcmQoY29yZCk7XG4gICAgbW92ZUlmRGVmaW5lZCgpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFNoaXBGb3JNb3ZlbWVudCA9IChlKSA9PiB7XG4gICAgY29uc3QgY29yZCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLCAxMCk7XG4gICAgbW92ZVNlbGVjdGVkU2hpcChjb3JkKTtcbiAgfTtcblxuICByZXR1cm4geyBzZWxlY3RTaGlwRm9yTW92ZW1lbnQsIGluaXRpYXRlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZlU2hpcDtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdXJyb3VuZGluZ0luZGljZXMoaSkge1xuICBjb25zdCBsZWZ0Q29sdW1uID0gWzEwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwLCA4MF07XG4gIGNvbnN0IHJpZ2h0Q29sdW1uID0gWzE5LCAyOSwgMzksIDQ5LCA1OSwgNjksIDc5LCA4OV07XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpID09PSAwOlxuICAgICAgcmV0dXJuIFtpLCBpICsgMSwgaSArIDEwLCBpICsgMTFdO1xuXG4gICAgY2FzZSBpID09PSA5OlxuICAgICAgcmV0dXJuIFtpLCBpIC0gMSwgaSArIDksIGkgKyAxMF07XG5cbiAgICBjYXNlIGkgPT09IDkwOlxuICAgICAgcmV0dXJuIFtpLCBpIC0gMTAsIGkgKyAxLCBpIC0gOV07XG5cbiAgICBjYXNlIGkgPT09IDk5OlxuICAgICAgcmV0dXJuIFtpLCBpIC0gMSwgaSAtIDEwLCBpIC0gMTFdO1xuXG4gICAgY2FzZSBpID4gMCAmJiBpIDwgOTpcbiAgICAgIHJldHVybiBbaSwgaSArIDEsIGkgKyAxMCwgaSArIDExLCBpICsgOSwgaSAtIDFdO1xuXG4gICAgY2FzZSBpID4gOTAgJiYgaSA8IDk5OlxuICAgICAgcmV0dXJuIFtpLCBpIC0gMTEsIGkgLSAxMCwgaSAtIDksIGkgKyAxLCBpIC0gMV07XG5cbiAgICBjYXNlIGxlZnRDb2x1bW4uaW5jbHVkZXMoaSk6XG4gICAgICByZXR1cm4gW2ksIGkgLSAxMCwgaSAtIDksIGkgKyAxLCBpICsgMTAsIGkgKyAxMV07XG5cbiAgICBjYXNlIHJpZ2h0Q29sdW1uLmluY2x1ZGVzKGkpOlxuICAgICAgcmV0dXJuIFtpLCBpIC0gMTEsIGkgLSAxMCwgaSAtIDEsIGkgKyA5LCBpICsgMTBdO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbaSwgaSArIDEsIGkgLSAxLCBpICsgMTAsIGkgLSAxMCwgaSArIDExLCBpIC0gMTEsIGkgLSA5LCBpICsgOV07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpYWdvbmFsQ29yZHMoaSkge1xuICBjb25zdCBsZWZ0Q29sdW1uID0gWzEwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwLCA4MF07XG4gIGNvbnN0IHJpZ2h0Q29sdW1uID0gWzE5LCAyOSwgMzksIDQ5LCA1OSwgNjksIDc5LCA4OV07XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpID09PSAwOlxuICAgICAgcmV0dXJuIFtpICsgMTFdO1xuXG4gICAgY2FzZSBpID09PSA5OlxuICAgICAgcmV0dXJuIFtpICsgOV07XG5cbiAgICBjYXNlIGkgPT09IDkwOlxuICAgICAgcmV0dXJuIFtpIC0gOV07XG5cbiAgICBjYXNlIGkgPT09IDk5OlxuICAgICAgcmV0dXJuIFtpIC0gMTFdO1xuXG4gICAgY2FzZSBpID4gMCAmJiBpIDwgOTpcbiAgICAgIHJldHVybiBbaSArIDExLCBpICsgOV07XG5cbiAgICBjYXNlIGkgPiA5MCAmJiBpIDwgOTk6XG4gICAgICByZXR1cm4gW2kgLSAxMSwgaSAtIDldO1xuXG4gICAgY2FzZSBsZWZ0Q29sdW1uLmluY2x1ZGVzKGkpOlxuICAgICAgcmV0dXJuIFtpIC0gOSwgaSArIDExXTtcblxuICAgIGNhc2UgcmlnaHRDb2x1bW4uaW5jbHVkZXMoaSk6XG4gICAgICByZXR1cm4gW2kgLSAxMSwgaSArIDldO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbaSArIDExLCBpIC0gMTEsIGkgLSA5LCBpICsgOV07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kVXBOZWFyZXN0MTAobnVtKSB7XG4gIHJldHVybiBNYXRoLmNlaWwobnVtIC8gMTApICogMTA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0RGlnaXQobnVtKSB7XG4gIGlmIChudW0gJSAxMCA9PT0gMCkge1xuICAgIHJldHVybiAxMDtcbiAgfVxuICByZXR1cm4gbnVtICUgMTA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NoaXAodmFsdWUpIHtcbiAgY29uc3Qgc3ltYm9scyA9IFtcIkNWXCIsIFwiQkJcIiwgXCJDQVwiLCBcIlNTXCIsIFwiRERcIl07XG4gIGlmIChzeW1ib2xzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudChwb3NpdGlvbikge1xuICBpZiAocG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKHBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICByZXR1cm4gMTA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cnVjdHVyZWRDbG9uZShhcnJheSkge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhcnJheSkpO1xufVxuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgUGxheWVyID0gKHBsYXllcikgPT4ge1xuICBsZXQgdHVybjtcbiAgY29uc3QgaGl0Q29yZHMgPSBbXTtcbiAgY29uc3QgYm9hcmQgPSBHYW1lQm9hcmQoKTtcblxuICBpZiAocGxheWVyID09PSBcInBsYXllclwiKSB7XG4gICAgdHVybiA9IHRydWU7XG4gICAgY29uc3QgY2FycmllciA9IGJvYXJkLmFsbFNoaXBzWzBdO1xuICAgIGNvbnN0IGJhdHRsZVNoaXAgPSBib2FyZC5hbGxTaGlwc1sxXTtcbiAgICBjb25zdCBjcnVpc2VyID0gYm9hcmQuYWxsU2hpcHNbMl07XG4gICAgY29uc3Qgc3VibWFyaW5lID0gYm9hcmQuYWxsU2hpcHNbM107XG4gICAgY29uc3QgZGVzdHJveWVyID0gYm9hcmQuYWxsU2hpcHNbNF07XG4gICAgYm9hcmQucGxhY2VTaGlwKGNhcnJpZXIsIDE1LCBcImhvcml6b250YWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGJhdHRsZVNoaXAsIDU1LCBcImhvcml6b250YWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGNydWlzZXIsIDEzLCBcInZlcnRpY2FsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmUsIDcyLCBcInZlcnRpY2FsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIsIDg1LCBcInZlcnRpY2FsXCIpO1xuICB9IGVsc2Uge1xuICAgIHR1cm4gPSBmYWxzZTtcbiAgICBjb25zdCBjYXJyaWVyID0gYm9hcmQuYWxsU2hpcHNbMF07XG4gICAgY29uc3QgYmF0dGxlU2hpcCA9IGJvYXJkLmFsbFNoaXBzWzFdO1xuICAgIGNvbnN0IGNydWlzZXIgPSBib2FyZC5hbGxTaGlwc1syXTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBib2FyZC5hbGxTaGlwc1szXTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBib2FyZC5hbGxTaGlwc1s0XTtcbiAgICBib2FyZC5wbGFjZVNoaXAoY2FycmllciwgMSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoYmF0dGxlU2hpcCwgMywgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoY3J1aXNlciwgNSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLCA3LCBcInZlcnRpY2FsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIsIDksIFwidmVydGljYWxcIik7XG4gIH1cblxuICBjb25zdCBnZXRUdXJuID0gKCkgPT4gdHVybjtcblxuICBjb25zdCBjaGFuZ2VUdXJuID0gKCkgPT4ge1xuICAgIHR1cm4gPSAhdHVybjtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluaW11bSwgbWF4aW11bSkge1xuICAgIGNvbnN0IG1pbiA9IE1hdGguY2VpbChtaW5pbXVtKTtcbiAgICBjb25zdCBtYXggPSBNYXRoLmZsb29yKG1heGltdW0pO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG4gIH1cblxuICBjb25zdCBwb3NzaWJsZU1vdmUgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDE7IGkrKykge1xuICAgIHBvc3NpYmxlTW92ZS5wdXNoKGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSXRlbU9uY2UoYXJyLCB2YWx1ZSkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGNvbnN0IG51bWJlck9mVHVybnMgPSAwO1xuICBjb25zdCBnZXRUcnVucyA9ICgpID0+IG51bWJlck9mVHVybnM7XG5cbiAgZnVuY3Rpb24gcGxheWVyQXR0YWNrcyhvcHBvbmVudCwgY29yZCkge1xuICAgIGNvbnN0IGhpdENvcmQgPSBvcHBvbmVudC5ib2FyZC5yZWNpZXZlQXR0YWNrKGNvcmQpO1xuICAgIHJldHVybiBoaXRDb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlTW92ZS5sZW5ndGgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrcyhvcHBvbmVudCkge1xuICAgIGNvbnN0IGNvcmQgPSBnZXRSYW5kb20ocG9zc2libGVNb3ZlKTtcbiAgICBjb25zdCBoaXRDb3JkID0gb3Bwb25lbnQuYm9hcmQucmVjaWV2ZUF0dGFjayhjb3JkKTtcbiAgICBvcHBvbmVudC5ib2FyZC5oaXRDb3Jkcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgcmVtb3ZlSXRlbU9uY2UocG9zc2libGVNb3ZlLCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpdENvcmQ7XG4gIH1cblxuICBjb25zdCBhdHRhY2sgPSAob3Bwb25lbnQsIGNvcmQgPSBudWxsKSA9PiB7XG4gICAgbGV0IGhpdENvcmQ7XG4gICAgaWYgKHBsYXllciA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgaGl0Q29yZCA9IHBsYXllckF0dGFja3Mob3Bwb25lbnQsIGNvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXRDb3JkID0gY29tcHV0ZXJBdHRhY2tzKG9wcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGhpdENvcmQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0VHVybiwgY2hhbmdlVHVybiwgYXR0YWNrLCBib2FyZCwgcGxheWVyLCBoaXRDb3JkcywgZ2V0VHJ1bnMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAodHlwZSwgaGl0cyA9IDAsIHN1bmsgPSBmYWxzZSkgPT4ge1xuICBsZXQgbGVuZ3RoO1xuICBsZXQgY29yZCA9IG51bGw7XG4gIGxldCBkZXBsb3llZCA9IGZhbHNlO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiQ1ZcIjpcbiAgICAgIGxlbmd0aCA9IDU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQ0FcIjpcbiAgICAgIGxlbmd0aCA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU1NcIjpcbiAgICAgIGxlbmd0aCA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRERcIjpcbiAgICAgIGxlbmd0aCA9IDI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbGVuZ3RoID0gMDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcbiAgY29uc3QgaXNEZXBsb3llZCA9ICgpID0+IGRlcGxveWVkO1xuICBjb25zdCBzZXRDb3JkcyA9IChjb3JkcykgPT4ge1xuICAgIGNvcmQgPSBjb3JkcztcbiAgICBzZXRQb3NpdGlvbihjb3JkKTsgLy8gdGVzdCB0aGlzIGxhdGVyXG4gIH07XG5cbiAgbGV0IHBvc2l0aW9uID0gbnVsbDtcbiAgLy8gV3JpdGUgdGVzdHMgZm9yIHRoaXMgbGF0ZXJcbiAgY29uc3Qgc2V0UG9zaXRpb24gPSAoY29yZCkgPT4ge1xuICAgIGlmIChjb3JkID09PSBudWxsKSB7XG4gICAgICBwb3NpdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc2l0aW9uID0gY29yZFsxXSAtIGNvcmRbMF0gPT09IDEgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiBwb3NpdGlvbjtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaWYgKGhpdHMgPT09IGxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaXRzICs9IDE7XG4gICAgaWYgKGhpdHMgPT09IGxlbmd0aCkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHN1bms7XG5cbiAgY29uc3QgZGVwbG95ID0gKCkgPT4ge1xuICAgIGRlcGxveWVkID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjb3VsZE5vdERlcGxveSA9ICgpID0+IHtcbiAgICBkZXBsb3llZCA9IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdldENvcmRzID0gKCkgPT4gY29yZDtcblxuICByZXR1cm4ge1xuICAgIHR5cGUsXG4gICAgaGl0LFxuICAgIGdldEhpdHMsXG4gICAgaXNTdW5rLFxuICAgIGdldExlbmd0aCxcbiAgICBkZXBsb3ksXG4gICAgZGVwbG95ZWQsXG4gICAgaXNEZXBsb3llZCxcbiAgICBjb3VsZE5vdERlcGxveSxcbiAgICBnZXRDb3JkcyxcbiAgICBzZXRDb3JkcyxcbiAgICBnZXRQb3NpdGlvbixcbiAgICBjb3JkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBnYW1lID0gR2FtZSgpO1xuZ2FtZS5wbGF5KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=