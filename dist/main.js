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
/* harmony import */ var _gamedom_moveship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamedom_moveship */ "./src/gamedom_moveship.js");





const gameDom = (0,_gamedom__WEBPACK_IMPORTED_MODULE_2__["default"])();
const moveShip = (0,_gamedom_moveship__WEBPACK_IMPORTED_MODULE_3__["default"])(gameDom);

const Game = () => {
  let currentPlayer;
  let currentOpponent;
  let isOver;

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
      setTimeout(executeComputerAttack, 50);
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

  const concludeGame = () => {
    isOver = true;
    gameDom.Narrator(`${currentPlayer.player}'s won`);
    gameDom.disableAllPointerEvents();
    gameDom.enableRestartButton(restartGame);
  };

  const gameOver = () => {
    if (currentOpponent.board.getLose()) concludeGame();
  };

  const updateGameState = () => {
    gameDom.updateBoard(currentOpponent);
    gameDom.disableHitCell(currentOpponent);
    gameOver();
  };

  const executePlayerAttack = (cord) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    updateGameState();
    if (!isOver) advanceGame(hitTarget);
  };

  const executeComputerAttack = (cord = null) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    updateGameState();
    if (!isOver) advanceGame(hitTarget);
  };

  const resetBoardState = () => {
    currentPlayer = null;
    currentOpponent = null;
    isOver = null;
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

/***/ "./src/gamedom_moveship.js":
/*!*********************************!*\
  !*** ./src/gamedom_moveship.js ***!
  \*********************************/
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
    board.placeShip(carrier, 1, "vertical");
    board.placeShip(battleShip, 3, "vertical");
    board.placeShip(cruiser, 5, "vertical");
    board.placeShip(submarine, 7, "vertical");
    board.placeShip(destroyer, 9, "vertical");
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

  for (let i = 1; i < 101; i += 1) {
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
const Ship = (type) => {
  let hits = 0;
  let sunk = false;
  let deployed = false;
  let length = null;
  let cord = null;
  let position = null;

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

  const getLength = () => length;

  const setPosition = () => {
    if (cord === null) position = null;
    else position = cord[1] - cord[0] === 1 ? "horizontal" : "vertical";
  };

  const getPosition = () => position;

  const setCords = (cords) => {
    cord = cords;
    setPosition();
  };

  const getCords = () => cord;

  const isSunk = () => sunk;

  const hit = () => {
    if (isSunk()) return;
    hits += 1;
    if (hits === length) sunk = true;
  };

  const getHits = () => hits;

  const deploy = () => {
    deployed = true;
  };

  const couldNotDeploy = () => {
    deployed = false;
  };

  const isDeployed = () => deployed;

  return {
    type,
    getLength,
    hit,
    getHits,
    getPosition,
    setCords,
    getCords,
    isSunk,
    deploy,
    couldNotDeploy,
    isDeployed,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9nYW1lZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL2dhbWVkb21fbW92ZXNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hcnJhdG9yIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuYnV0dG9uIHtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5zcXVhcmVEaXYge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGluaGVyaXQ7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hcnJhdG9yIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuYnV0dG9uIHtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5zcXVhcmVEaXYge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGluaGVyaXQ7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IGlzU2hpcCB9IGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IEdhbWVEb20gZnJvbSBcIi4vZ2FtZWRvbVwiO1xuaW1wb3J0IE1vdmVTaGlwIGZyb20gXCIuL2dhbWVkb21fbW92ZXNoaXBcIjtcblxuY29uc3QgZ2FtZURvbSA9IEdhbWVEb20oKTtcbmNvbnN0IG1vdmVTaGlwID0gTW92ZVNoaXAoZ2FtZURvbSk7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGxldCBjdXJyZW50UGxheWVyO1xuICBsZXQgY3VycmVudE9wcG9uZW50O1xuICBsZXQgaXNPdmVyO1xuXG4gIGNvbnN0IGVuYWJsZVNoaXBNb3ZlbWVudCA9ICgpID0+IHtcbiAgICBtb3ZlU2hpcC5pbml0aWF0ZShjdXJyZW50UGxheWVyKTtcbiAgICBnYW1lRG9tLmFkZE1vdmVMaXN0ZW5lcnMoY3VycmVudFBsYXllciwgbW92ZVNoaXAuc2VsZWN0U2hpcEZvck1vdmVtZW50KTtcbiAgfTtcblxuICBjb25zdCBkaXNhYmxlU2hpcE1vdmVtZW50ID0gKCkgPT4ge1xuICAgIGdhbWVEb20ucmVtb3ZlTW92ZUxpc3RlbmVycyhjdXJyZW50UGxheWVyLCBtb3ZlU2hpcC5zZWxlY3RTaGlwRm9yTW92ZW1lbnQpO1xuICB9O1xuXG4gIGNvbnN0IGVuYWJsZUF0dGFjayA9ICgpID0+IHtcbiAgICBnYW1lRG9tLmFkZEF0dGFja0xpc3RlbmVycyhjdXJyZW50T3Bwb25lbnQsIGdldE1vdmUpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckJvYXJkcyA9ICgpID0+IHtcbiAgICBnYW1lRG9tLnJlbmRlckJvYXJkKGN1cnJlbnRQbGF5ZXIpO1xuICAgIGdhbWVEb20uc2hvd1BsYXllclNoaXBzKGN1cnJlbnRQbGF5ZXIpO1xuICAgIGdhbWVEb20ucmVuZGVyQm9hcmQoY3VycmVudE9wcG9uZW50KTtcbiAgfTtcblxuICBjb25zdCBzZXRVcEdhbWUgPSAoKSA9PiB7XG4gICAgY3VycmVudFBsYXllciA9IFBsYXllcihcInBsYXllclwiKTtcbiAgICBjdXJyZW50T3Bwb25lbnQgPSBQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgICByZW5kZXJCb2FyZHMoKTtcbiAgICBlbmFibGVTaGlwTW92ZW1lbnQoKTtcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgZ2FtZURvbS5OYXJyYXRvcihgJHtjdXJyZW50UGxheWVyLnBsYXllcn0ncyBtb3ZlYCk7XG4gICAgZW5hYmxlQXR0YWNrKCk7XG4gICAgZGlzYWJsZVNoaXBNb3ZlbWVudCgpO1xuICAgIGdhbWVEb20uZGlzYWJsZVN0YXJ0QnV0dG9uKHN0YXJ0R2FtZSk7XG4gIH07XG5cbiAgY29uc3QgcGxheSA9ICgpID0+IHtcbiAgICBzZXRVcEdhbWUoKTtcbiAgICBnYW1lRG9tLk5hcnJhdG9yKFwiTW92ZS9Sb3RhdGUgU2hpcHNcIik7XG4gICAgZ2FtZURvbS5lbmFibGVTdGFydEJ1dHRvbihzdGFydEdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IHJ1bkdhbWVMb29wID0gKGNvcmQgPSBudWxsKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIucGxheWVyID09PSBcInBsYXllclwiKSB7XG4gICAgICBleGVjdXRlUGxheWVyQXR0YWNrKGNvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KGV4ZWN1dGVDb21wdXRlckF0dGFjaywgNTApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2dnbGVUdXJuID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlbXAgPSBjdXJyZW50UGxheWVyO1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50T3Bwb25lbnQ7XG4gICAgY3VycmVudE9wcG9uZW50ID0gdGVtcDtcbiAgICBnYW1lRG9tLk5hcnJhdG9yKGAke2N1cnJlbnRQbGF5ZXIucGxheWVyfSdzIG1vdmVgKTtcbiAgfTtcblxuICBjb25zdCB0dXJuTWFuYWdlciA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFBsYXllci5wbGF5ZXIgIT09IFwicGxheWVyXCIpIHtcbiAgICAgIHJ1bkdhbWVMb29wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdhbWVEb20udG9nZ2xlQ2xpY2soY3VycmVudFBsYXllciwgY3VycmVudE9wcG9uZW50KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWR2YW5jZUdhbWUgPSAoaGl0VGFyZ2V0KSA9PiB7XG4gICAgaWYgKCFpc1NoaXAoaGl0VGFyZ2V0KSkgdG9nZ2xlVHVybigpO1xuICAgIHR1cm5NYW5hZ2VyKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TW92ZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvcmQgPSBwYXJzZUludChldmVudC50YXJnZXQuaWQsIDEwKTtcbiAgICBydW5HYW1lTG9vcChjb3JkKTtcbiAgfTtcblxuICBjb25zdCBjb25jbHVkZUdhbWUgPSAoKSA9PiB7XG4gICAgaXNPdmVyID0gdHJ1ZTtcbiAgICBnYW1lRG9tLk5hcnJhdG9yKGAke2N1cnJlbnRQbGF5ZXIucGxheWVyfSdzIHdvbmApO1xuICAgIGdhbWVEb20uZGlzYWJsZUFsbFBvaW50ZXJFdmVudHMoKTtcbiAgICBnYW1lRG9tLmVuYWJsZVJlc3RhcnRCdXR0b24ocmVzdGFydEdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IGdhbWVPdmVyID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50T3Bwb25lbnQuYm9hcmQuZ2V0TG9zZSgpKSBjb25jbHVkZUdhbWUoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVHYW1lU3RhdGUgPSAoKSA9PiB7XG4gICAgZ2FtZURvbS51cGRhdGVCb2FyZChjdXJyZW50T3Bwb25lbnQpO1xuICAgIGdhbWVEb20uZGlzYWJsZUhpdENlbGwoY3VycmVudE9wcG9uZW50KTtcbiAgICBnYW1lT3ZlcigpO1xuICB9O1xuXG4gIGNvbnN0IGV4ZWN1dGVQbGF5ZXJBdHRhY2sgPSAoY29yZCkgPT4ge1xuICAgIGNvbnN0IGhpdFRhcmdldCA9IGN1cnJlbnRQbGF5ZXIuYXR0YWNrKGN1cnJlbnRPcHBvbmVudCwgY29yZCk7XG4gICAgdXBkYXRlR2FtZVN0YXRlKCk7XG4gICAgaWYgKCFpc092ZXIpIGFkdmFuY2VHYW1lKGhpdFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgZXhlY3V0ZUNvbXB1dGVyQXR0YWNrID0gKGNvcmQgPSBudWxsKSA9PiB7XG4gICAgY29uc3QgaGl0VGFyZ2V0ID0gY3VycmVudFBsYXllci5hdHRhY2soY3VycmVudE9wcG9uZW50LCBjb3JkKTtcbiAgICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgICBpZiAoIWlzT3ZlcikgYWR2YW5jZUdhbWUoaGl0VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCByZXNldEJvYXJkU3RhdGUgPSAoKSA9PiB7XG4gICAgY3VycmVudFBsYXllciA9IG51bGw7XG4gICAgY3VycmVudE9wcG9uZW50ID0gbnVsbDtcbiAgICBpc092ZXIgPSBudWxsO1xuICAgIGdhbWVEb20udW5SZW5kZXJCb2FyZHMoKTtcbiAgfTtcblxuICBjb25zdCByZXN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICByZXNldEJvYXJkU3RhdGUoKTtcbiAgICBwbGF5KCk7XG4gICAgZ2FtZURvbS5kaXNhYmxlUmVzdGFydEJ1dHRvbihyZXN0YXJ0R2FtZSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0VXBHYW1lLCBwbGF5IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHtcbiAgZ2V0U3Vycm91bmRpbmdJbmRpY2VzLFxuICBsYXN0RGlnaXQsXG4gIHJvdW5kVXBOZWFyZXN0MTAsXG4gIGlzU2hpcCxcbiAgaW5jcmVtZW50LFxuICBnZXREaWFnb25hbENvcmRzLFxufSBmcm9tIFwiLi9oZWxwZXJcIjtcblxuY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBnYW1lQm9hcmQgPSBbXTtcbiAgY29uc3QgaGl0Q29yZHMgPSBbXTtcbiAgbGV0IGxvc2UgPSBmYWxzZTtcbiAgY29uc3QgZ2V0TG9zZSA9ICgpID0+IGxvc2U7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSArPSAxKSB7XG4gICAgZ2FtZUJvYXJkLnB1c2goaSk7XG4gIH1cblxuICBjb25zdCBjYXJyaWVyID0gU2hpcChcIkNWXCIpO1xuICBjb25zdCBiYXR0bGVTaGlwID0gU2hpcChcIkJCXCIpO1xuICBjb25zdCBjcnVpc2VyID0gU2hpcChcIkNBXCIpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKFwiU1NcIik7XG4gIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoXCJERFwiKTtcbiAgY29uc3QgYWxsU2hpcHMgPSBbY2FycmllciwgYmF0dGxlU2hpcCwgY3J1aXNlciwgc3VibWFyaW5lLCBkZXN0cm95ZXJdO1xuXG4gIGNvbnN0IGlzT2ZmQm9hcmQgPSAoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikgPT4ge1xuICAgIGlmIChcbiAgICAgIChwb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgJiZcbiAgICAgICAgc3RhcnRDb3JkICsgc2hpcC5nZXRMZW5ndGgoKSAtIDEgPiByb3VuZFVwTmVhcmVzdDEwKHN0YXJ0Q29yZCkpIHx8XG4gICAgICAocG9zaXRpb24gPT09IFwidmVydGljYWxcIiAmJlxuICAgICAgICBzdGFydENvcmQgKyBzaGlwLmdldExlbmd0aCgpICogMTAgPiAxMDAgKyBsYXN0RGlnaXQoc3RhcnRDb3JkKSlcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gcmV0dXJucyB0cnVlIGlmIGEgc3Vycm91bmRpbmcgY29yZGluYXRlIGlzIGEgc2hpcCBjb3JkaW5hdGVcbiAgY29uc3QgaXNBZGphY2VudFRvU2hpcCA9IChjb3JkKSA9PiB7XG4gICAgY29uc3Qgc3Vycm91bmRpbmdJbmRpY2VzID0gZ2V0U3Vycm91bmRpbmdJbmRpY2VzKGNvcmQgLSAxKTtcbiAgICByZXR1cm4gc3Vycm91bmRpbmdJbmRpY2VzLnNvbWUoKGluZGV4KSA9PiBpc1NoaXAoZ2FtZUJvYXJkW2luZGV4XSkpO1xuICB9O1xuXG4gIGNvbnN0IGlzT3ZlcmxhcHBpbmdXaXRoU2hpcCA9IChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3RlcFVwVmFsdWUgPSBpbmNyZW1lbnQocG9zaXRpb24pO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IHN0YXJ0Q29yZDtcbiAgICB3aGlsZSAoaSA8IHNoaXAuZ2V0TGVuZ3RoKCkpIHtcbiAgICAgIGlmIChpc0FkamFjZW50VG9TaGlwKGopKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaSArPSAxO1xuICAgICAgaiArPSBzdGVwVXBWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNhblBsYWNlU2hpcCA9IChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKGlzT2ZmQm9hcmQoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzT3ZlcmxhcHBpbmdXaXRoU2hpcChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikgPT4ge1xuICAgIGlmICghY2FuUGxhY2VTaGlwKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pKSB7XG4gICAgICBzaGlwLmNvdWxkTm90RGVwbG95KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcENvcmRzID0gW107XG4gICAgY29uc3Qgc3RlcFVwVmFsdWUgPSBpbmNyZW1lbnQocG9zaXRpb24pO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IHN0YXJ0Q29yZCAtIDE7XG4gICAgd2hpbGUgKGkgPCBzaGlwLmdldExlbmd0aCgpKSB7XG4gICAgICBnYW1lQm9hcmRbal0gPSBzaGlwLnR5cGU7XG4gICAgICBzaGlwQ29yZHMucHVzaChqICsgMSk7XG4gICAgICBpICs9IDE7XG4gICAgICBqICs9IHN0ZXBVcFZhbHVlO1xuICAgIH1cbiAgICBzaGlwLmRlcGxveSgpO1xuICAgIHNoaXAuc2V0Q29yZHMoc2hpcENvcmRzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiByZW1vdmVTaGlwRnJvbUJvYXJkKHNoaXBDb3Jkcywgc2hpcCkge1xuICAgIHNoaXAuc2V0Q29yZHMobnVsbCk7XG4gICAgc2hpcENvcmRzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBnYW1lQm9hcmRbdmFsdWUgLSAxXSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5yZW1vdmVTaGlwRnJvbUJvYXJkKHNoaXBDb3Jkcywgc2hpcCkge1xuICAgIHNoaXAuc2V0Q29yZHMoc2hpcENvcmRzKTtcbiAgICBzaGlwQ29yZHMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGdhbWVCb2FyZFt2YWx1ZSAtIDFdID0gc2hpcC50eXBlO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgdG9nZ2xlUG9zaXRpb24gPSAoc3RhcnRDb3JkLCBwcmVNb3ZlU3RhcnRDb3JkLCBwb3NpdGlvbikgPT4ge1xuICAgIGlmIChzdGFydENvcmQgPT09IHByZU1vdmVTdGFydENvcmQpIHtcbiAgICAgIHJldHVybiBwb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICB9XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVTaGlwID0gKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBwcmVNb3ZlQ29yZHMgPSBzaGlwLmdldENvcmRzKCk7XG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSB0b2dnbGVQb3NpdGlvbihzdGFydENvcmQsIHByZU1vdmVDb3Jkc1swXSwgcG9zaXRpb24pO1xuICAgIHJlbW92ZVNoaXBGcm9tQm9hcmQocHJlTW92ZUNvcmRzLCBzaGlwKTtcbiAgICBjb25zdCBpc1NoaXBNb3ZlZCA9IHBsYWNlU2hpcChzaGlwLCBzdGFydENvcmQsIG5ld1Bvc2l0aW9uKTtcbiAgICBpZiAoaXNTaGlwTW92ZWQgPT09IGZhbHNlKSB7XG4gICAgICB1bnJlbW92ZVNoaXBGcm9tQm9hcmQocHJlTW92ZUNvcmRzLCBzaGlwKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzU2hpcE1vdmVkO1xuICB9O1xuXG4gIGNvbnN0IGhpdERpYWdvbmFsID0gKGNvcmQpID0+IHtcbiAgICBjb25zdCBwb3NzaWJsZUNvcmRzID0gZ2V0RGlhZ29uYWxDb3Jkcyhjb3JkIC0gMSk7XG4gICAgcG9zc2libGVDb3Jkcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgZ2FtZUJvYXJkW3ZhbHVlXSA9IFwid2F0ZXJcIjtcbiAgICAgIGlmICghaGl0Q29yZHMuaW5jbHVkZXModmFsdWUgKyAxKSkge1xuICAgICAgICBoaXRDb3Jkcy5wdXNoKHZhbHVlICsgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29yZHMubWFwKCh2YWx1ZSkgPT4gdmFsdWUgKyAxKTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRBbGxBZGphY2VudENvcmRzKHNoaXApIHtcbiAgICBjb25zdCBzaGlwQ29yZHMgPSBzaGlwLmdldENvcmRzKCk7XG4gICAgY29uc3QgYWRqYWNlbnRDb3JkcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvcmRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzdXJyb3VuZGluZ0luZGljZXMgPSBnZXRTdXJyb3VuZGluZ0luZGljZXMoc2hpcENvcmRzW2ldIC0gMSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1cnJvdW5kaW5nSW5kaWNlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBhZGpDb3JkID0gc3Vycm91bmRpbmdJbmRpY2VzW2pdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWFkamFjZW50Q29yZHMuaW5jbHVkZXMoYWRqQ29yZCkgJiZcbiAgICAgICAgICAhaGl0Q29yZHMuaW5jbHVkZXMoYWRqQ29yZCArIDEpXG4gICAgICAgICkge1xuICAgICAgICAgIGFkamFjZW50Q29yZHMucHVzaChhZGpDb3JkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWRqYWNlbnRDb3Jkcy5tYXAoKHZhbHVlKSA9PiB2YWx1ZSArIDEpO1xuICB9XG5cbiAgY29uc3QgaGl0U2hpcEFkamFjZW50ID0gKHNoaXApID0+IHtcbiAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCByZW1haW5pbmdDb3JkcyA9IGdldEFsbEFkamFjZW50Q29yZHMoc2hpcCk7XG4gICAgcmVtYWluaW5nQ29yZHMuZm9yRWFjaCgoY29yZCkgPT4ge1xuICAgICAgZ2FtZUJvYXJkW2NvcmQgLSAxXSA9IFwid2F0ZXJcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVtYWluaW5nQ29yZHM7XG4gIH07XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2hpcChoaXRUYXJnZXQsIGNvcmQpIHtcbiAgICBjb25zdCB0YXJnZXRTaGlwID0gYWxsU2hpcHMuZmluZCgoc2hpcCkgPT4gc2hpcC50eXBlID09PSBoaXRUYXJnZXQpO1xuICAgIHRhcmdldFNoaXAuaGl0KCk7XG4gICAgaGl0RGlhZ29uYWwoY29yZCk7XG4gICAgaGl0U2hpcEFkamFjZW50KHRhcmdldFNoaXApO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNrU2hpcChjb3JkKSB7XG4gICAgaGl0Q29yZHMucHVzaChjb3JkKTtcbiAgICBjb25zdCBoaXRUYXJnZXQgPSBnYW1lQm9hcmRbY29yZCAtIDFdO1xuICAgIGdhbWVCb2FyZFtjb3JkIC0gMV0gPSBcImhcIjtcbiAgICB1cGRhdGVTaGlwKGhpdFRhcmdldCwgY29yZCk7XG4gICAgYWxsU3VuaygpO1xuICAgIHJldHVybiBoaXRUYXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2tXYXRlcihjb3JkKSB7XG4gICAgaGl0Q29yZHMucHVzaChjb3JkKTtcbiAgICBjb25zdCBoaXRUYXJnZXQgPSBnYW1lQm9hcmRbY29yZCAtIDFdO1xuICAgIGdhbWVCb2FyZFtjb3JkIC0gMV0gPSBcIndhdGVyXCI7XG4gICAgcmV0dXJuIGhpdFRhcmdldDtcbiAgfVxuXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoY29yZCkgPT4ge1xuICAgIGxldCBoaXRUYXJnZXQ7XG4gICAgaWYgKGhpdENvcmRzLmluY2x1ZGVzKGNvcmQpKSB7XG4gICAgICBoaXRUYXJnZXQgPSBcImhcIjtcbiAgICB9IGVsc2UgaWYgKGlzU2hpcChnYW1lQm9hcmRbY29yZCAtIDFdKSkge1xuICAgICAgaGl0VGFyZ2V0ID0gYXR0YWNrU2hpcChjb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGl0VGFyZ2V0ID0gYXR0YWNrV2F0ZXIoY29yZCk7XG4gICAgfVxuICAgIHJldHVybiBoaXRUYXJnZXQ7XG4gIH07XG5cbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoYWxsU2hpcHNbaV0uaXNEZXBsb3llZCgpICYmIGFsbFNoaXBzW2ldLmlzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGxvc2UgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2FtZUJvYXJkLFxuICAgIGFsbFNoaXBzLFxuICAgIGhpdENvcmRzLFxuICAgIHBsYWNlU2hpcCxcbiAgICBtb3ZlU2hpcCxcbiAgICBpc0FkamFjZW50VG9TaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgaGl0RGlhZ29uYWwsXG4gICAgaGl0U2hpcEFkamFjZW50LFxuICAgIGFsbFN1bmssXG4gICAgZ2V0TG9zZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcbiIsImNvbnN0IEdhbWVEb20gPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZURpdiA9IChpZCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBjb25zdCBwb3B1bGF0ZUJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc3F1YXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZURpdi5pZCA9IGkgKyAxO1xuICAgICAgc3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVEaXZcIik7XG4gICAgICBib2FyZC5hcHBlbmRDaGlsZChzcXVhcmVEaXYpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJCb2FyZCA9IChQbGF5ZXIpID0+IHtcbiAgICBjb25zdCB7IHBsYXllciB9ID0gUGxheWVyO1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBzdWJDb250YWluZXIgPSBjcmVhdGVEaXYoYCR7cGxheWVyfS1zdWItY29udGFpbmVyYCwgXCJzdWItY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlRGl2KHBsYXllciwgXCJib2FyZFwiKTtcbiAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gY3JlYXRlRGl2KGAke3BsYXllcn0tc2hpcHNgLCBcImJvYXJkXCIpO1xuICAgIHBvcHVsYXRlQm9hcmQoYm9hcmQpO1xuICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQ29udGFpbmVyKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VCZ0NvbG9yID0gKHRhcmdldCwgY29sb3IpID0+IHtcbiAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1BsYXllclNoaXBzID0gKFBsYXllcikgPT4ge1xuICAgIGNvbnN0IGdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke1BsYXllci5wbGF5ZXJ9IGRpdmApO1xuICAgIGNvbnN0IHBsYWNlQ29yZCA9IChjb3JkKSA9PiBjaGFuZ2VCZ0NvbG9yKGdyaWRDZWxsc1tjb3JkIC0gMV0sIFwiIzgzOWI5N1wiKTtcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCkgPT4gc2hpcC5nZXRDb3JkcygpLmZvckVhY2gocGxhY2VDb3JkKTtcbiAgICBQbGF5ZXIuYm9hcmQuYWxsU2hpcHMuZm9yRWFjaChwbGFjZVNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGFkZEF0dGFja0xpc3RlbmVycyA9IChvcHBvbmVudCwgZ2V0TW92ZSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7b3Bwb25lbnQucGxheWVyfSBkaXZgKTtcbiAgICBib2FyZC5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRNb3ZlKSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQ2xpY2sgPSAocGxheWVyLCBvcHBvbmVudCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBsYXllci5wbGF5ZXIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHBvbmVudC5wbGF5ZXIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgfTtcblxuICBjb25zdCBkaXNhYmxlSGl0Q2VsbCA9IChvcHBvbmVudCkgPT4ge1xuICAgIGlmIChvcHBvbmVudC5wbGF5ZXIgPT09IFwicGxheWVyXCIpIHJldHVybjtcbiAgICBjb25zdCBncmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtvcHBvbmVudC5wbGF5ZXJ9IGRpdmApO1xuICAgIGdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBpZiAoY2VsbC50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICBkaXNhYmxlUG9pbnRlckV2ZW50KGNlbGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUJvYXJkID0gKG9wcG9uZW50KSA9PiB7XG4gICAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7b3Bwb25lbnQucGxheWVyfSBkaXZgKTtcbiAgICBvcHBvbmVudC5ib2FyZC5nYW1lQm9hcmQuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09IFwiaFwiKSB7XG4gICAgICAgIGdyaWRDZWxsc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgIGdyaWRDZWxsc1tpbmRleF0udGV4dENvbnRlbnQgPSBcImhcIjtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwid2F0ZXJcIikge1xuICAgICAgICBncmlkQ2VsbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJ3YXRlclwiKTtcbiAgICAgICAgZ3JpZENlbGxzW2luZGV4XS50ZXh0Q29udGVudCA9IFwid1wiO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVQb2ludGVyRXZlbnQgPSAoY2VsbCkgPT4ge1xuICAgIGNlbGwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVBbGxQb2ludGVyRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlRGl2XCIpO1xuICAgIGdyaWRDZWxscy5mb3JFYWNoKGRpc2FibGVQb2ludGVyRXZlbnQpO1xuICB9O1xuXG4gIGNvbnN0IE5hcnJhdG9yID0gKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBuYXJyYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFycmF0b3JcIik7XG4gICAgbmFycmF0b3IudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICB9O1xuXG4gIGNvbnN0IGFkZE1vdmVMaXN0ZW5lcnMgPSAoUGxheWVyLCBtb3ZlU2hpcCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7UGxheWVyLnBsYXllcn0gZGl2YCk7XG4gICAgYm9hcmQuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW92ZVNoaXApKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVNb3ZlTGlzdGVuZXJzID0gKFBsYXllciwgbW92ZVNoaXApID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke1BsYXllci5wbGF5ZXJ9IGRpdmApO1xuICAgIGJvYXJkLmZvckVhY2goKGNlbGwpID0+IGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1vdmVTaGlwKSk7XG4gIH07XG5cbiAgY29uc3QgZW5hYmxlU3RhcnRCdXR0b24gPSAoc3RhcnRHYW1lKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0R2FtZVwiKTtcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKTtcbiAgfTtcblxuICBjb25zdCBkaXNhYmxlU3RhcnRCdXR0b24gPSAoc3RhcnRHYW1lKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0R2FtZVwiKTtcbiAgICBzdGFydEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKTtcbiAgfTtcblxuICBjb25zdCBlbmFibGVSZXN0YXJ0QnV0dG9uID0gKHJlc3RhcnRHYW1lKSA9PiB7XG4gICAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdGFydEdhbWVcIik7XG4gICAgcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzdGFydEdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVSZXN0YXJ0QnV0dG9uID0gKHJlc3RhcnRHYW1lKSA9PiB7XG4gICAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdGFydEdhbWVcIik7XG4gICAgcmVzdGFydEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzdGFydEdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IGVuYWJsZUV2ZW50ID0gKHRhcmdldCwgZikgPT4ge1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZik7XG4gIH07XG5cbiAgY29uc3QgZGlzYWJsZUV2ZW50ID0gKHRhcmdldCwgZikgPT4ge1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZik7XG4gIH07XG5cbiAgY29uc3QgdW5SZW5kZXJCb2FyZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtY29udGFpbmVyXCIpO1xuICAgIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgTmFycmF0b3IsXG4gICAgZGlzYWJsZUFsbFBvaW50ZXJFdmVudHMsXG4gICAgdG9nZ2xlQ2xpY2ssXG4gICAgcmVuZGVyQm9hcmQsXG4gICAgYWRkQXR0YWNrTGlzdGVuZXJzLFxuICAgIGRpc2FibGVIaXRDZWxsLFxuICAgIHVwZGF0ZUJvYXJkLFxuICAgIHNob3dQbGF5ZXJTaGlwcyxcbiAgICBhZGRNb3ZlTGlzdGVuZXJzLFxuICAgIHJlbW92ZU1vdmVMaXN0ZW5lcnMsXG4gICAgZW5hYmxlU3RhcnRCdXR0b24sXG4gICAgZGlzYWJsZVN0YXJ0QnV0dG9uLFxuICAgIGVuYWJsZVJlc3RhcnRCdXR0b24sXG4gICAgZGlzYWJsZVJlc3RhcnRCdXR0b24sXG4gICAgdW5SZW5kZXJCb2FyZHMsXG4gICAgY2hhbmdlQmdDb2xvcixcbiAgICBlbmFibGVFdmVudCxcbiAgICBkaXNhYmxlRXZlbnQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lRG9tO1xuIiwiY29uc3QgTW92ZVNoaXAgPSAoZ2FtZURvbSkgPT4ge1xuICBsZXQgY3VycmVudFBsYXllcjtcbiAgbGV0IGdyaWRDZWxscztcbiAgbGV0IHNoaXA7XG4gIGxldCBzaGlwSW5kZXg7XG5cbiAgY29uc3QgaW5pdGlhdGUgPSAoUGxheWVyKSA9PiB7XG4gICAgY3VycmVudFBsYXllciA9IFBsYXllcjtcbiAgICBncmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjcGxheWVyIGRpdmApO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBJbmRleCA9ICgpID0+IHNoaXAuZ2V0Q29yZHMoKS5tYXAoKHZhbHVlKSA9PiB2YWx1ZSAtIDEpO1xuXG4gIGNvbnN0IGhpZ2xpZ2h0U2VsZWN0ZWRTaGlwID0gKCkgPT4ge1xuICAgIGdyaWRDZWxsc1tzaGlwSW5kZXhbMF1dLnRleHRDb250ZW50ID0gXCLwn5eYXCI7XG4gICAgc2hpcEluZGV4LmZvckVhY2goKGkpID0+IGdhbWVEb20uY2hhbmdlQmdDb2xvcihncmlkQ2VsbHNbaV0sIFwiIzlmNWY4MFwiKSk7XG4gIH07XG5cbiAgY29uc3QgcmV2ZXJ0Qm9hcmRTdGF0ZSA9ICgpID0+IHtcbiAgICBncmlkQ2VsbHNbc2hpcEluZGV4WzBdXS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgc2hpcEluZGV4LmZvckVhY2goKGkpID0+IGdhbWVEb20uY2hhbmdlQmdDb2xvcihncmlkQ2VsbHNbaV0sIFwiXCIpKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlQ3VycmVudFBsYXllclNoaXAgPSAoY29yZCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gc2hpcC5nZXRQb3NpdGlvbigpO1xuICAgIGN1cnJlbnRQbGF5ZXIuYm9hcmQubW92ZVNoaXAoc2hpcCwgY29yZCwgcG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcEF0Q2VsbCA9IChlKSA9PiB7XG4gICAgbW92ZUN1cnJlbnRQbGF5ZXJTaGlwKHBhcnNlSW50KGUudGFyZ2V0LmlkKSk7XG4gICAgcmV2ZXJ0Qm9hcmRTdGF0ZSgpO1xuICAgIHVwZGF0ZUFmdGVyU2hpcE1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcCA9ICgpID0+IHtcbiAgICBoaWdsaWdodFNlbGVjdGVkU2hpcCgpO1xuICAgIGFkZFJlbG9jYXRlTGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQWZ0ZXJTaGlwTW92ZSA9ICgpID0+IHtcbiAgICByZXZlcnRCb2FyZFN0YXRlKCk7XG4gICAgcmVtb3ZlUmVsb2NhdGVMaXN0ZW5lcnMoKTtcbiAgICBnYW1lRG9tLmFkZE1vdmVMaXN0ZW5lcnMoY3VycmVudFBsYXllciwgc2VsZWN0U2hpcEZvck1vdmVtZW50KTtcbiAgICBnYW1lRG9tLnNob3dQbGF5ZXJTaGlwcyhjdXJyZW50UGxheWVyKTtcbiAgfTtcblxuICBjb25zdCBhZGRSZWxvY2F0ZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBncmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYWNlU2hpcEF0Q2VsbClcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVJlbG9jYXRlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxhY2VTaGlwQXRDZWxsKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcEF0Q29yZCA9IChjb3JkKSA9PiB7XG4gICAgY29uc3QgeyBhbGxTaGlwcyB9ID0gY3VycmVudFBsYXllci5ib2FyZDtcbiAgICByZXR1cm4gYWxsU2hpcHMuZmluZCgoc2hpcCkgPT4gc2hpcC5nZXRDb3JkcygpLmluY2x1ZGVzKGNvcmQpKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlSWZEZWZpbmVkID0gKCkgPT4ge1xuICAgIGlmIChzaGlwKSB7XG4gICAgICBzaGlwSW5kZXggPSBnZXRTaGlwSW5kZXgoKTtcbiAgICAgIGdhbWVEb20ucmVtb3ZlTW92ZUxpc3RlbmVycyhjdXJyZW50UGxheWVyLCBzZWxlY3RTaGlwRm9yTW92ZW1lbnQpO1xuICAgICAgbW92ZVNoaXAoc2hpcCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vdmVTZWxlY3RlZFNoaXAgPSAoY29yZCkgPT4ge1xuICAgIHNoaXAgPSBnZXRTaGlwQXRDb3JkKGNvcmQpO1xuICAgIG1vdmVJZkRlZmluZWQoKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RTaGlwRm9yTW92ZW1lbnQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGNvcmQgPSBwYXJzZUludChlLnRhcmdldC5pZCwgMTApO1xuICAgIG1vdmVTZWxlY3RlZFNoaXAoY29yZCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2VsZWN0U2hpcEZvck1vdmVtZW50LCBpbml0aWF0ZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92ZVNoaXA7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3Vycm91bmRpbmdJbmRpY2VzKGkpIHtcbiAgY29uc3QgbGVmdENvbHVtbiA9IFsxMCwgMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODBdO1xuICBjb25zdCByaWdodENvbHVtbiA9IFsxOSwgMjksIDM5LCA0OSwgNTksIDY5LCA3OSwgODldO1xuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaSA9PT0gMDpcbiAgICAgIHJldHVybiBbaSwgaSArIDEsIGkgKyAxMCwgaSArIDExXTtcblxuICAgIGNhc2UgaSA9PT0gOTpcbiAgICAgIHJldHVybiBbaSwgaSAtIDEsIGkgKyA5LCBpICsgMTBdO1xuXG4gICAgY2FzZSBpID09PSA5MDpcbiAgICAgIHJldHVybiBbaSwgaSAtIDEwLCBpICsgMSwgaSAtIDldO1xuXG4gICAgY2FzZSBpID09PSA5OTpcbiAgICAgIHJldHVybiBbaSwgaSAtIDEsIGkgLSAxMCwgaSAtIDExXTtcblxuICAgIGNhc2UgaSA+IDAgJiYgaSA8IDk6XG4gICAgICByZXR1cm4gW2ksIGkgKyAxLCBpICsgMTAsIGkgKyAxMSwgaSArIDksIGkgLSAxXTtcblxuICAgIGNhc2UgaSA+IDkwICYmIGkgPCA5OTpcbiAgICAgIHJldHVybiBbaSwgaSAtIDExLCBpIC0gMTAsIGkgLSA5LCBpICsgMSwgaSAtIDFdO1xuXG4gICAgY2FzZSBsZWZ0Q29sdW1uLmluY2x1ZGVzKGkpOlxuICAgICAgcmV0dXJuIFtpLCBpIC0gMTAsIGkgLSA5LCBpICsgMSwgaSArIDEwLCBpICsgMTFdO1xuXG4gICAgY2FzZSByaWdodENvbHVtbi5pbmNsdWRlcyhpKTpcbiAgICAgIHJldHVybiBbaSwgaSAtIDExLCBpIC0gMTAsIGkgLSAxLCBpICsgOSwgaSArIDEwXTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW2ksIGkgKyAxLCBpIC0gMSwgaSArIDEwLCBpIC0gMTAsIGkgKyAxMSwgaSAtIDExLCBpIC0gOSwgaSArIDldO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaWFnb25hbENvcmRzKGkpIHtcbiAgY29uc3QgbGVmdENvbHVtbiA9IFsxMCwgMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODBdO1xuICBjb25zdCByaWdodENvbHVtbiA9IFsxOSwgMjksIDM5LCA0OSwgNTksIDY5LCA3OSwgODldO1xuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaSA9PT0gMDpcbiAgICAgIHJldHVybiBbaSArIDExXTtcblxuICAgIGNhc2UgaSA9PT0gOTpcbiAgICAgIHJldHVybiBbaSArIDldO1xuXG4gICAgY2FzZSBpID09PSA5MDpcbiAgICAgIHJldHVybiBbaSAtIDldO1xuXG4gICAgY2FzZSBpID09PSA5OTpcbiAgICAgIHJldHVybiBbaSAtIDExXTtcblxuICAgIGNhc2UgaSA+IDAgJiYgaSA8IDk6XG4gICAgICByZXR1cm4gW2kgKyAxMSwgaSArIDldO1xuXG4gICAgY2FzZSBpID4gOTAgJiYgaSA8IDk5OlxuICAgICAgcmV0dXJuIFtpIC0gMTEsIGkgLSA5XTtcblxuICAgIGNhc2UgbGVmdENvbHVtbi5pbmNsdWRlcyhpKTpcbiAgICAgIHJldHVybiBbaSAtIDksIGkgKyAxMV07XG5cbiAgICBjYXNlIHJpZ2h0Q29sdW1uLmluY2x1ZGVzKGkpOlxuICAgICAgcmV0dXJuIFtpIC0gMTEsIGkgKyA5XTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW2kgKyAxMSwgaSAtIDExLCBpIC0gOSwgaSArIDldO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZFVwTmVhcmVzdDEwKG51bSkge1xuICByZXR1cm4gTWF0aC5jZWlsKG51bSAvIDEwKSAqIDEwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdERpZ2l0KG51bSkge1xuICBpZiAobnVtICUgMTAgPT09IDApIHtcbiAgICByZXR1cm4gMTA7XG4gIH1cbiAgcmV0dXJuIG51bSAlIDEwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTaGlwKHZhbHVlKSB7XG4gIGNvbnN0IHN5bWJvbHMgPSBbXCJDVlwiLCBcIkJCXCIsIFwiQ0FcIiwgXCJTU1wiLCBcIkREXCJdO1xuICBpZiAoc3ltYm9scy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnQocG9zaXRpb24pIHtcbiAgaWYgKHBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmIChwb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgcmV0dXJuIDEwO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJ1Y3R1cmVkQ2xvbmUoYXJyYXkpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbn1cbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IFBsYXllciA9IChwbGF5ZXIpID0+IHtcbiAgbGV0IHR1cm47XG4gIGNvbnN0IGhpdENvcmRzID0gW107XG4gIGNvbnN0IGJvYXJkID0gR2FtZUJvYXJkKCk7XG5cbiAgaWYgKHBsYXllciA9PT0gXCJwbGF5ZXJcIikge1xuICAgIHR1cm4gPSB0cnVlO1xuICAgIGNvbnN0IGNhcnJpZXIgPSBib2FyZC5hbGxTaGlwc1swXTtcbiAgICBjb25zdCBiYXR0bGVTaGlwID0gYm9hcmQuYWxsU2hpcHNbMV07XG4gICAgY29uc3QgY3J1aXNlciA9IGJvYXJkLmFsbFNoaXBzWzJdO1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IGJvYXJkLmFsbFNoaXBzWzNdO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IGJvYXJkLmFsbFNoaXBzWzRdO1xuICAgIGJvYXJkLnBsYWNlU2hpcChjYXJyaWVyLCAxLCBcInZlcnRpY2FsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChiYXR0bGVTaGlwLCAzLCBcInZlcnRpY2FsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChjcnVpc2VyLCA1LCBcInZlcnRpY2FsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmUsIDcsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llciwgOSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgfSBlbHNlIHtcbiAgICB0dXJuID0gZmFsc2U7XG4gICAgY29uc3QgY2FycmllciA9IGJvYXJkLmFsbFNoaXBzWzBdO1xuICAgIGNvbnN0IGJhdHRsZVNoaXAgPSBib2FyZC5hbGxTaGlwc1sxXTtcbiAgICBjb25zdCBjcnVpc2VyID0gYm9hcmQuYWxsU2hpcHNbMl07XG4gICAgY29uc3Qgc3VibWFyaW5lID0gYm9hcmQuYWxsU2hpcHNbM107XG4gICAgY29uc3QgZGVzdHJveWVyID0gYm9hcmQuYWxsU2hpcHNbNF07XG4gICAgYm9hcmQucGxhY2VTaGlwKGNhcnJpZXIsIDEsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGJhdHRsZVNoaXAsIDMsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGNydWlzZXIsIDUsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSwgNywgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCA5LCBcInZlcnRpY2FsXCIpO1xuICB9XG5cbiAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHR1cm47XG5cbiAgY29uc3QgY2hhbmdlVHVybiA9ICgpID0+IHtcbiAgICB0dXJuID0gIXR1cm47XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbmltdW0sIG1heGltdW0pIHtcbiAgICBjb25zdCBtaW4gPSBNYXRoLmNlaWwobWluaW11bSk7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5mbG9vcihtYXhpbXVtKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICB9XG5cbiAgY29uc3QgcG9zc2libGVNb3ZlID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDE7IGkgKz0gMSkge1xuICAgIHBvc3NpYmxlTW92ZS5wdXNoKGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSXRlbU9uY2UoYXJyLCB2YWx1ZSkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGNvbnN0IG51bWJlck9mVHVybnMgPSAwO1xuICBjb25zdCBnZXRUcnVucyA9ICgpID0+IG51bWJlck9mVHVybnM7XG5cbiAgZnVuY3Rpb24gcGxheWVyQXR0YWNrcyhvcHBvbmVudCwgY29yZCkge1xuICAgIGNvbnN0IGhpdENvcmQgPSBvcHBvbmVudC5ib2FyZC5yZWNpZXZlQXR0YWNrKGNvcmQpO1xuICAgIHJldHVybiBoaXRDb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlTW92ZS5sZW5ndGgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrcyhvcHBvbmVudCkge1xuICAgIGNvbnN0IGNvcmQgPSBnZXRSYW5kb20ocG9zc2libGVNb3ZlKTtcbiAgICBjb25zdCBoaXRDb3JkID0gb3Bwb25lbnQuYm9hcmQucmVjaWV2ZUF0dGFjayhjb3JkKTtcbiAgICBvcHBvbmVudC5ib2FyZC5oaXRDb3Jkcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgcmVtb3ZlSXRlbU9uY2UocG9zc2libGVNb3ZlLCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpdENvcmQ7XG4gIH1cblxuICBjb25zdCBhdHRhY2sgPSAob3Bwb25lbnQsIGNvcmQgPSBudWxsKSA9PiB7XG4gICAgbGV0IGhpdENvcmQ7XG4gICAgaWYgKHBsYXllciA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgaGl0Q29yZCA9IHBsYXllckF0dGFja3Mob3Bwb25lbnQsIGNvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXRDb3JkID0gY29tcHV0ZXJBdHRhY2tzKG9wcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGhpdENvcmQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0VHVybiwgY2hhbmdlVHVybiwgYXR0YWNrLCBib2FyZCwgcGxheWVyLCBoaXRDb3JkcywgZ2V0VHJ1bnMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAodHlwZSkgPT4ge1xuICBsZXQgaGl0cyA9IDA7XG4gIGxldCBzdW5rID0gZmFsc2U7XG4gIGxldCBkZXBsb3llZCA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0gbnVsbDtcbiAgbGV0IGNvcmQgPSBudWxsO1xuICBsZXQgcG9zaXRpb24gPSBudWxsO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgXCJDVlwiOlxuICAgICAgbGVuZ3RoID0gNTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJCQlwiOlxuICAgICAgbGVuZ3RoID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJDQVwiOlxuICAgICAgbGVuZ3RoID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJTU1wiOlxuICAgICAgbGVuZ3RoID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJERFwiOlxuICAgICAgbGVuZ3RoID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsZW5ndGggPSAwO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG5cbiAgY29uc3Qgc2V0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKGNvcmQgPT09IG51bGwpIHBvc2l0aW9uID0gbnVsbDtcbiAgICBlbHNlIHBvc2l0aW9uID0gY29yZFsxXSAtIGNvcmRbMF0gPT09IDEgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcbiAgfTtcblxuICBjb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IHBvc2l0aW9uO1xuXG4gIGNvbnN0IHNldENvcmRzID0gKGNvcmRzKSA9PiB7XG4gICAgY29yZCA9IGNvcmRzO1xuICAgIHNldFBvc2l0aW9uKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29yZHMgPSAoKSA9PiBjb3JkO1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHN1bms7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGlmIChpc1N1bmsoKSkgcmV0dXJuO1xuICAgIGhpdHMgKz0gMTtcbiAgICBpZiAoaGl0cyA9PT0gbGVuZ3RoKSBzdW5rID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcblxuICBjb25zdCBkZXBsb3kgPSAoKSA9PiB7XG4gICAgZGVwbG95ZWQgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNvdWxkTm90RGVwbG95ID0gKCkgPT4ge1xuICAgIGRlcGxveWVkID0gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaXNEZXBsb3llZCA9ICgpID0+IGRlcGxveWVkO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZSxcbiAgICBnZXRMZW5ndGgsXG4gICAgaGl0LFxuICAgIGdldEhpdHMsXG4gICAgZ2V0UG9zaXRpb24sXG4gICAgc2V0Q29yZHMsXG4gICAgZ2V0Q29yZHMsXG4gICAgaXNTdW5rLFxuICAgIGRlcGxveSxcbiAgICBjb3VsZE5vdERlcGxveSxcbiAgICBpc0RlcGxveWVkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBnYW1lID0gR2FtZSgpO1xuZ2FtZS5wbGF5KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=