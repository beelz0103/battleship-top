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
    gameDom.addMoveListeners(currentPlayer, moveShip);
  };

  const startGame = () => {
    gameDom.Narrator(`${currentPlayer.player}'s move`);
    gameDom.addAttackListeners(currentOpponent, getMove);
    gameDom.removeMoveListeners(currentPlayer, moveShip);
  };

  const play = () => {
    setUpGame();
    gameDom.Narrator("Move/Rotate Ships");
    gameDom.enableStartButton(startGame);
  };

  const moveFune = (shipType) => {
    const revertStateArray = [];
    const sqDivs = document.querySelectorAll(`#player div`);
    const ship = currentPlayer.board.allShips.find(
      (shp) => shp.type === shipType
    );
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
      gameDom.addMoveListeners(currentPlayer, moveShip);

      gameDom.showPlayerShips(currentPlayer);
    };

    sqDivs.forEach((value) => {
      value.addEventListener("click", blah);
    });
  };

  const moveShipHelper = (cord) => {
    gameDom.removeMoveListeners(currentPlayer, moveShip);
    const shipType = currentPlayer.board.gameBoard[cord - 1];
    if ((0,_helper__WEBPACK_IMPORTED_MODULE_1__.isShip)(shipType)) {
      moveFune(shipType);
    } else {
      console.log("this was not a ship");
      gameDom.addMoveListeners(currentPlayer, moveShip);
    }
  };

  const moveShip = (e) => {
    moveShipHelper(parseInt(e.target.id));
  };

  const changeTurn = () => {
    const temp = currentPlayer;
    currentPlayer = currentOpponent;
    currentOpponent = temp;
    gameDom.Narrator(`${currentPlayer.player}'s move`);
    if (currentPlayer.player !== "player") {
      playGame();
    }
    gameDom.toggleClick(currentPlayer, currentOpponent);
  };

  const getMove = (event) => {
    const cord = parseInt(event.target.id, 10);
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
    gameDom.disableHitCell(currentOpponent);
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
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


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
    const gridCells = document.querySelectorAll(`#${opponent.player} div`);
    opponent.board.gameBoard.forEach((value, index) => {
      if (value === "h" || value === "water") {
        gridCells[index].style.pointerEvents = "none";
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

  const Narrator = (message) => {
    const narrator = document.querySelector(".narrator");
    narrator.textContent = message;
    console.log(message);
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
game.play();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3RFcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRVM7QUFDTTtBQUNWO0FBQ0E7O0FBRTFCLGFBQWEsaURBQUk7QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9nYW1lZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3AvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRvcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXJyYXRvciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbmJ1dHRvbiB7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc3F1YXJlRGl2IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBpbmhlcml0O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XFxufVxcblxcbi53YXRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXJyYXRvciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbmJ1dHRvbiB7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc3F1YXJlRGl2IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBpbmhlcml0O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XFxufVxcblxcbi53YXRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBpc1NoaXAgfSBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCBHYW1lRG9tIGZyb20gXCIuL2dhbWVkb21cIjtcblxuY29uc3QgZ2FtZURvbSA9IEdhbWVEb20oKTtcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgbGV0IGN1cnJlbnRQbGF5ZXI7XG4gIGxldCBjdXJyZW50T3Bwb25lbnQ7XG5cbiAgY29uc3Qgc2V0VXBHYW1lID0gKCkgPT4ge1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIik7XG4gICAgY3VycmVudE9wcG9uZW50ID0gUGxheWVyKFwiY29tcHV0ZXJcIik7XG4gICAgZ2FtZURvbS5yZW5kZXJCb2FyZChjdXJyZW50UGxheWVyKTtcbiAgICBnYW1lRG9tLnNob3dQbGF5ZXJTaGlwcyhjdXJyZW50UGxheWVyKTtcbiAgICBnYW1lRG9tLnJlbmRlckJvYXJkKGN1cnJlbnRPcHBvbmVudCk7XG4gICAgZ2FtZURvbS5hZGRNb3ZlTGlzdGVuZXJzKGN1cnJlbnRQbGF5ZXIsIG1vdmVTaGlwKTtcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgZ2FtZURvbS5OYXJyYXRvcihgJHtjdXJyZW50UGxheWVyLnBsYXllcn0ncyBtb3ZlYCk7XG4gICAgZ2FtZURvbS5hZGRBdHRhY2tMaXN0ZW5lcnMoY3VycmVudE9wcG9uZW50LCBnZXRNb3ZlKTtcbiAgICBnYW1lRG9tLnJlbW92ZU1vdmVMaXN0ZW5lcnMoY3VycmVudFBsYXllciwgbW92ZVNoaXApO1xuICB9O1xuXG4gIGNvbnN0IHBsYXkgPSAoKSA9PiB7XG4gICAgc2V0VXBHYW1lKCk7XG4gICAgZ2FtZURvbS5OYXJyYXRvcihcIk1vdmUvUm90YXRlIFNoaXBzXCIpO1xuICAgIGdhbWVEb20uZW5hYmxlU3RhcnRCdXR0b24oc3RhcnRHYW1lKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlRnVuZSA9IChzaGlwVHlwZSkgPT4ge1xuICAgIGNvbnN0IHJldmVydFN0YXRlQXJyYXkgPSBbXTtcbiAgICBjb25zdCBzcURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjcGxheWVyIGRpdmApO1xuICAgIGNvbnN0IHNoaXAgPSBjdXJyZW50UGxheWVyLmJvYXJkLmFsbFNoaXBzLmZpbmQoXG4gICAgICAoc2hwKSA9PiBzaHAudHlwZSA9PT0gc2hpcFR5cGVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBJbmRleCA9IHNoaXAuZ2V0Q29yZHMoKS5tYXAoKHZhbHVlKSA9PiB2YWx1ZSAtIDEpO1xuICAgIGxldCBwb3NpdGlvbjtcbiAgICBjb25zb2xlLmxvZyhzaGlwSW5kZXgpO1xuICAgIGlmIChzaGlwSW5kZXhbMV0gLSBzaGlwSW5kZXhbMF0gPT09IDEpIHtcbiAgICAgIHBvc2l0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgfSBlbHNlIGlmIChzaGlwSW5kZXhbMV0gLSBzaGlwSW5kZXhbMF0gPT09IDEwKSB7XG4gICAgICBwb3NpdGlvbiA9IFwidmVydGljYWxcIjtcbiAgICB9XG4gICAgc2hpcEluZGV4LmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHNxRGl2c1t2YWx1ZV0udGV4dENvbnRlbnQgPSBcIvCfl5hcIjtcbiAgICAgICAgcmV2ZXJ0U3RhdGVBcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHNxRGl2c1t2YWx1ZV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjOWY1ZjgwXCI7XG4gICAgICByZXZlcnRTdGF0ZUFycmF5LnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IGJsYWggPSAoZSkgPT4ge1xuICAgICAgY3VycmVudFBsYXllci5ib2FyZC5tb3ZlU2hpcChzaGlwLCBwYXJzZUludChlLnRhcmdldC5pZCksIHBvc2l0aW9uKTtcbiAgICAgIHNxRGl2cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICB2YWx1ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYmxhaCk7XG4gICAgICB9KTtcbiAgICAgIHJldmVydFN0YXRlQXJyYXkuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgc3FEaXZzW3ZhbHVlXS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHNxRGl2c1t2YWx1ZV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbiAgICAgIH0pO1xuICAgICAgZ2FtZURvbS5hZGRNb3ZlTGlzdGVuZXJzKGN1cnJlbnRQbGF5ZXIsIG1vdmVTaGlwKTtcblxuICAgICAgZ2FtZURvbS5zaG93UGxheWVyU2hpcHMoY3VycmVudFBsYXllcik7XG4gICAgfTtcblxuICAgIHNxRGl2cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJsYWgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVTaGlwSGVscGVyID0gKGNvcmQpID0+IHtcbiAgICBnYW1lRG9tLnJlbW92ZU1vdmVMaXN0ZW5lcnMoY3VycmVudFBsYXllciwgbW92ZVNoaXApO1xuICAgIGNvbnN0IHNoaXBUeXBlID0gY3VycmVudFBsYXllci5ib2FyZC5nYW1lQm9hcmRbY29yZCAtIDFdO1xuICAgIGlmIChpc1NoaXAoc2hpcFR5cGUpKSB7XG4gICAgICBtb3ZlRnVuZShzaGlwVHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcyB3YXMgbm90IGEgc2hpcFwiKTtcbiAgICAgIGdhbWVEb20uYWRkTW92ZUxpc3RlbmVycyhjdXJyZW50UGxheWVyLCBtb3ZlU2hpcCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vdmVTaGlwID0gKGUpID0+IHtcbiAgICBtb3ZlU2hpcEhlbHBlcihwYXJzZUludChlLnRhcmdldC5pZCkpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVR1cm4gPSAoKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IGN1cnJlbnRQbGF5ZXI7XG4gICAgY3VycmVudFBsYXllciA9IGN1cnJlbnRPcHBvbmVudDtcbiAgICBjdXJyZW50T3Bwb25lbnQgPSB0ZW1wO1xuICAgIGdhbWVEb20uTmFycmF0b3IoYCR7Y3VycmVudFBsYXllci5wbGF5ZXJ9J3MgbW92ZWApO1xuICAgIGlmIChjdXJyZW50UGxheWVyLnBsYXllciAhPT0gXCJwbGF5ZXJcIikge1xuICAgICAgcGxheUdhbWUoKTtcbiAgICB9XG4gICAgZ2FtZURvbS50b2dnbGVDbGljayhjdXJyZW50UGxheWVyLCBjdXJyZW50T3Bwb25lbnQpO1xuICB9O1xuXG4gIGNvbnN0IGdldE1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjb3JkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkLCAxMCk7XG4gICAgcGxheUdhbWUoY29yZCk7XG4gIH07XG5cbiAgY29uc3QgcGxheUdhbWUgPSAoY29yZCA9IG51bGwpID0+IHtcbiAgICBpZiAoY3VycmVudFBsYXllci5wbGF5ZXIgPT09IFwicGxheWVyXCIpIHtcbiAgICAgIHBsYXllckxvZ2ljKGNvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wdXRlckxvZ2ljKGNvcmQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb25jbHVkZUdhbWUgPSAoKSA9PiB7XG4gICAgZ2FtZURvbS5kaXNhYmxlQWxsUG9pbnRlckV2ZW50cygpO1xuICAgIGNvbnNvbGUubG9nKFwiR2FtZSBPdmVyXCIsIGN1cnJlbnRQbGF5ZXIsIFwiV09OXCIpO1xuICB9O1xuXG4gIGNvbnN0IHBsYXllckxvZ2ljID0gKGNvcmQpID0+IHtcbiAgICBjb25zdCBoaXRUYXJnZXQgPSBjdXJyZW50UGxheWVyLmF0dGFjayhjdXJyZW50T3Bwb25lbnQsIGNvcmQpO1xuICAgIGdhbWVEb20udXBkYXRlQm9hcmQoY3VycmVudE9wcG9uZW50KTtcbiAgICBnYW1lRG9tLmRpc2FibGVIaXRDZWxsKGN1cnJlbnRPcHBvbmVudCk7XG4gICAgaWYgKGN1cnJlbnRPcHBvbmVudC5ib2FyZC5nZXRMb3NlKCkpIHtcbiAgICAgIGNvbmNsdWRlR2FtZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzU2hpcChoaXRUYXJnZXQpKSB7XG4gICAgICBjaGFuZ2VUdXJuKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyTG9naWMgPSAoY29yZCkgPT4ge1xuICAgIGNvbnN0IGhpdFRhcmdldCA9IGN1cnJlbnRQbGF5ZXIuYXR0YWNrKGN1cnJlbnRPcHBvbmVudCwgY29yZCk7XG4gICAgZ2FtZURvbS51cGRhdGVCb2FyZChjdXJyZW50T3Bwb25lbnQpO1xuICAgIGlmICh3aW5uZXIoKSA9PT0gY3VycmVudFBsYXllcikge1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFBsYXllciwgXCJXT05OTk5OTk5OXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzU2hpcChoaXRUYXJnZXQpKSB7XG4gICAgICBjaGFuZ2VUdXJuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXlHYW1lKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdhbWVPdmVyID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50T3Bwb25lbnQuYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHdpbm5lciA9ICgpID0+IHtcbiAgICBpZiAoZ2FtZU92ZXIoKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHNldFVwR2FtZSwgcGxheSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7XG4gIGdldFN1cnJvdW5kaW5nSW5kaWNlcyxcbiAgbGFzdERpZ2l0LFxuICByb3VuZFVwTmVhcmVzdDEwLFxuICBpc1NoaXAsXG4gIGluY3JlbWVudCxcbiAgZ2V0RGlhZ29uYWxDb3Jkcyxcbn0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gW107XG4gIGNvbnN0IGhpdENvcmRzID0gW107XG4gIGxldCBsb3NlID0gZmFsc2U7XG4gIGNvbnN0IGdldExvc2UgPSAoKSA9PiBsb3NlO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDA7IGkgKz0gMSkge1xuICAgIGdhbWVCb2FyZC5wdXNoKGkpO1xuICB9XG5cbiAgY29uc3QgY2FycmllciA9IFNoaXAoXCJDVlwiKTtcbiAgY29uc3QgYmF0dGxlU2hpcCA9IFNoaXAoXCJCQlwiKTtcbiAgY29uc3QgY3J1aXNlciA9IFNoaXAoXCJDQVwiKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gU2hpcChcIlNTXCIpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKFwiRERcIik7XG4gIGNvbnN0IGFsbFNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZVNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcblxuICBjb25zdCBpc09mZkJvYXJkID0gKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pID0+IHtcbiAgICBpZiAoXG4gICAgICAocG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmXG4gICAgICAgIHN0YXJ0Q29yZCArIHNoaXAuZ2V0TGVuZ3RoKCkgLSAxID4gcm91bmRVcE5lYXJlc3QxMChzdGFydENvcmQpKSB8fFxuICAgICAgKHBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIgJiZcbiAgICAgICAgc3RhcnRDb3JkICsgc2hpcC5nZXRMZW5ndGgoKSAqIDEwID4gMTAwICsgbGFzdERpZ2l0KHN0YXJ0Q29yZCkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIHJldHVybnMgdHJ1ZSBpZiBhIHN1cnJvdW5kaW5nIGNvcmRpbmF0ZSBpcyBhIHNoaXAgY29yZGluYXRlXG4gIGNvbnN0IGlzQWRqYWNlbnRUb1NoaXAgPSAoY29yZCkgPT4ge1xuICAgIGNvbnN0IHN1cnJvdW5kaW5nSW5kaWNlcyA9IGdldFN1cnJvdW5kaW5nSW5kaWNlcyhjb3JkIC0gMSk7XG4gICAgcmV0dXJuIHN1cnJvdW5kaW5nSW5kaWNlcy5zb21lKChpbmRleCkgPT4gaXNTaGlwKGdhbWVCb2FyZFtpbmRleF0pKTtcbiAgfTtcblxuICBjb25zdCBpc092ZXJsYXBwaW5nV2l0aFNoaXAgPSAoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0ZXBVcFZhbHVlID0gaW5jcmVtZW50KHBvc2l0aW9uKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSBzdGFydENvcmQ7XG4gICAgd2hpbGUgKGkgPCBzaGlwLmdldExlbmd0aCgpKSB7XG4gICAgICBpZiAoaXNBZGphY2VudFRvU2hpcChqKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGkgKz0gMTtcbiAgICAgIGogKz0gc3RlcFVwVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjYW5QbGFjZVNoaXAgPSAoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikgPT4ge1xuICAgIGlmIChpc09mZkJvYXJkKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc092ZXJsYXBwaW5nV2l0aFNoaXAoc2hpcCwgc3RhcnRDb3JkLCBwb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHN0YXJ0Q29yZCwgcG9zaXRpb24pID0+IHtcbiAgICBpZiAoIWNhblBsYWNlU2hpcChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSkge1xuICAgICAgc2hpcC5jb3VsZE5vdERlcGxveSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHNoaXBDb3JkcyA9IFtdO1xuICAgIGNvbnN0IHN0ZXBVcFZhbHVlID0gaW5jcmVtZW50KHBvc2l0aW9uKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSBzdGFydENvcmQgLSAxO1xuICAgIHdoaWxlIChpIDwgc2hpcC5nZXRMZW5ndGgoKSkge1xuICAgICAgZ2FtZUJvYXJkW2pdID0gc2hpcC50eXBlO1xuICAgICAgc2hpcENvcmRzLnB1c2goaiArIDEpO1xuICAgICAgaSArPSAxO1xuICAgICAgaiArPSBzdGVwVXBWYWx1ZTtcbiAgICB9XG4gICAgc2hpcC5kZXBsb3koKTtcbiAgICBzaGlwLnNldENvcmRzKHNoaXBDb3Jkcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcEZyb21Cb2FyZChzaGlwQ29yZHMsIHNoaXApIHtcbiAgICBzaGlwLnNldENvcmRzKG51bGwpO1xuICAgIHNoaXBDb3Jkcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgZ2FtZUJvYXJkW3ZhbHVlIC0gMV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVucmVtb3ZlU2hpcEZyb21Cb2FyZChzaGlwQ29yZHMsIHNoaXApIHtcbiAgICBzaGlwLnNldENvcmRzKHNoaXBDb3Jkcyk7XG4gICAgc2hpcENvcmRzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBnYW1lQm9hcmRbdmFsdWUgLSAxXSA9IHNoaXAudHlwZTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZVBvc2l0aW9uID0gKHN0YXJ0Q29yZCwgcHJlTW92ZVN0YXJ0Q29yZCwgcG9zaXRpb24pID0+IHtcbiAgICBpZiAoc3RhcnRDb3JkID09PSBwcmVNb3ZlU3RhcnRDb3JkKSB7XG4gICAgICByZXR1cm4gcG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gICAgfVxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcCA9IChzaGlwLCBzdGFydENvcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgcHJlTW92ZUNvcmRzID0gc2hpcC5nZXRDb3JkcygpO1xuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gdG9nZ2xlUG9zaXRpb24oc3RhcnRDb3JkLCBwcmVNb3ZlQ29yZHNbMF0sIHBvc2l0aW9uKTtcbiAgICByZW1vdmVTaGlwRnJvbUJvYXJkKHByZU1vdmVDb3Jkcywgc2hpcCk7XG4gICAgY29uc3QgaXNTaGlwTW92ZWQgPSBwbGFjZVNoaXAoc2hpcCwgc3RhcnRDb3JkLCBuZXdQb3NpdGlvbik7XG4gICAgaWYgKGlzU2hpcE1vdmVkID09PSBmYWxzZSkge1xuICAgICAgdW5yZW1vdmVTaGlwRnJvbUJvYXJkKHByZU1vdmVDb3Jkcywgc2hpcCk7XG4gICAgfVxuICAgIHJldHVybiBpc1NoaXBNb3ZlZDtcbiAgfTtcblxuICBjb25zdCBoaXREaWFnb25hbCA9IChjb3JkKSA9PiB7XG4gICAgY29uc3QgcG9zc2libGVDb3JkcyA9IGdldERpYWdvbmFsQ29yZHMoY29yZCAtIDEpO1xuICAgIHBvc3NpYmxlQ29yZHMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGdhbWVCb2FyZFt2YWx1ZV0gPSBcIndhdGVyXCI7XG4gICAgICBpZiAoIWhpdENvcmRzLmluY2x1ZGVzKHZhbHVlICsgMSkpIHtcbiAgICAgICAgaGl0Q29yZHMucHVzaCh2YWx1ZSArIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwb3NzaWJsZUNvcmRzLm1hcCgodmFsdWUpID0+IHZhbHVlICsgMSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0QWxsQWRqYWNlbnRDb3JkcyhzaGlwKSB7XG4gICAgY29uc3Qgc2hpcENvcmRzID0gc2hpcC5nZXRDb3JkcygpO1xuICAgIGNvbnN0IGFkamFjZW50Q29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb3Jkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc3Vycm91bmRpbmdJbmRpY2VzID0gZ2V0U3Vycm91bmRpbmdJbmRpY2VzKHNoaXBDb3Jkc1tpXSAtIDEpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdXJyb3VuZGluZ0luZGljZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgYWRqQ29yZCA9IHN1cnJvdW5kaW5nSW5kaWNlc1tqXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFhZGphY2VudENvcmRzLmluY2x1ZGVzKGFkakNvcmQpICYmXG4gICAgICAgICAgIWhpdENvcmRzLmluY2x1ZGVzKGFkakNvcmQgKyAxKVxuICAgICAgICApIHtcbiAgICAgICAgICBhZGphY2VudENvcmRzLnB1c2goYWRqQ29yZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFkamFjZW50Q29yZHMubWFwKCh2YWx1ZSkgPT4gdmFsdWUgKyAxKTtcbiAgfVxuXG4gIGNvbnN0IGhpdFNoaXBBZGphY2VudCA9IChzaGlwKSA9PiB7XG4gICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcmVtYWluaW5nQ29yZHMgPSBnZXRBbGxBZGphY2VudENvcmRzKHNoaXApO1xuICAgIHJlbWFpbmluZ0NvcmRzLmZvckVhY2goKGNvcmQpID0+IHtcbiAgICAgIGdhbWVCb2FyZFtjb3JkIC0gMV0gPSBcIndhdGVyXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlbWFpbmluZ0NvcmRzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNoaXAoaGl0VGFyZ2V0LCBjb3JkKSB7XG4gICAgY29uc3QgdGFyZ2V0U2hpcCA9IGFsbFNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAudHlwZSA9PT0gaGl0VGFyZ2V0KTtcbiAgICB0YXJnZXRTaGlwLmhpdCgpO1xuICAgIGhpdERpYWdvbmFsKGNvcmQpO1xuICAgIGhpdFNoaXBBZGphY2VudCh0YXJnZXRTaGlwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFja1NoaXAoY29yZCkge1xuICAgIGhpdENvcmRzLnB1c2goY29yZCk7XG4gICAgY29uc3QgaGl0VGFyZ2V0ID0gZ2FtZUJvYXJkW2NvcmQgLSAxXTtcbiAgICBnYW1lQm9hcmRbY29yZCAtIDFdID0gXCJoXCI7XG4gICAgdXBkYXRlU2hpcChoaXRUYXJnZXQsIGNvcmQpO1xuICAgIGFsbFN1bmsoKTtcbiAgICByZXR1cm4gaGl0VGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNrV2F0ZXIoY29yZCkge1xuICAgIGhpdENvcmRzLnB1c2goY29yZCk7XG4gICAgY29uc3QgaGl0VGFyZ2V0ID0gZ2FtZUJvYXJkW2NvcmQgLSAxXTtcbiAgICBnYW1lQm9hcmRbY29yZCAtIDFdID0gXCJ3YXRlclwiO1xuICAgIHJldHVybiBoaXRUYXJnZXQ7XG4gIH1cblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGNvcmQpID0+IHtcbiAgICBsZXQgaGl0VGFyZ2V0O1xuICAgIGlmIChoaXRDb3Jkcy5pbmNsdWRlcyhjb3JkKSkge1xuICAgICAgaGl0VGFyZ2V0ID0gXCJoXCI7XG4gICAgfSBlbHNlIGlmIChpc1NoaXAoZ2FtZUJvYXJkW2NvcmQgLSAxXSkpIHtcbiAgICAgIGhpdFRhcmdldCA9IGF0dGFja1NoaXAoY29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpdFRhcmdldCA9IGF0dGFja1dhdGVyKGNvcmQpO1xuICAgIH1cbiAgICByZXR1cm4gaGl0VGFyZ2V0O1xuICB9O1xuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGFsbFNoaXBzW2ldLmlzRGVwbG95ZWQoKSAmJiBhbGxTaGlwc1tpXS5pc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBsb3NlID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdhbWVCb2FyZCxcbiAgICBhbGxTaGlwcyxcbiAgICBoaXRDb3JkcyxcbiAgICBwbGFjZVNoaXAsXG4gICAgbW92ZVNoaXAsXG4gICAgaXNBZGphY2VudFRvU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGhpdERpYWdvbmFsLFxuICAgIGhpdFNoaXBBZGphY2VudCxcbiAgICBhbGxTdW5rLFxuICAgIGdldExvc2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmQ7XG4iLCJpbXBvcnQgeyBpc1NoaXAgfSBmcm9tIFwiLi9oZWxwZXJcIjtcblxuY29uc3QgR2FtZURvbSA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlRGl2ID0gKGlkLCBjbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IHBvcHVsYXRlQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzcXVhcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlRGl2LmlkID0gaSArIDE7XG4gICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0LmFkZChcInNxdWFyZURpdlwiKTtcbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZURpdik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckJvYXJkID0gKFBsYXllcikgPT4ge1xuICAgIGNvbnN0IHsgcGxheWVyIH0gPSBQbGF5ZXI7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHN1YkNvbnRhaW5lciA9IGNyZWF0ZURpdihgJHtwbGF5ZXJ9LXN1Yi1jb250YWluZXJgLCBcInN1Yi1jb250YWluZXJcIik7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVEaXYocGxheWVyLCBcImJvYXJkXCIpO1xuICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBjcmVhdGVEaXYoYCR7cGxheWVyfS1zaGlwc2AsIFwiYm9hcmRcIik7XG4gICAgcG9wdWxhdGVCb2FyZChib2FyZCk7XG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJDb250YWluZXIpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUJnQ29sb3IgPSAodGFyZ2V0LCBjb2xvcikgPT4ge1xuICAgIHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgfTtcblxuICBjb25zdCBzaG93UGxheWVyU2hpcHMgPSAoUGxheWVyKSA9PiB7XG4gICAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7UGxheWVyLnBsYXllcn0gZGl2YCk7XG4gICAgY29uc3QgcGxhY2VDb3JkID0gKGNvcmQpID0+IGNoYW5nZUJnQ29sb3IoZ3JpZENlbGxzW2NvcmQgLSAxXSwgXCIjODM5Yjk3XCIpO1xuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwKSA9PiBzaGlwLmdldENvcmRzKCkuZm9yRWFjaChwbGFjZUNvcmQpO1xuICAgIFBsYXllci5ib2FyZC5hbGxTaGlwcy5mb3JFYWNoKHBsYWNlU2hpcCk7XG4gIH07XG5cbiAgY29uc3QgYWRkQXR0YWNrTGlzdGVuZXJzID0gKG9wcG9uZW50LCBnZXRNb3ZlKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtvcHBvbmVudC5wbGF5ZXJ9IGRpdmApO1xuICAgIGJvYXJkLmZvckVhY2goKGNlbGwpID0+IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldE1vdmUpKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVDbGljayA9IChwbGF5ZXIsIG9wcG9uZW50KSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheWVyLnBsYXllcikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wcG9uZW50LnBsYXllcikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVIaXRDZWxsID0gKG9wcG9uZW50KSA9PiB7XG4gICAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7b3Bwb25lbnQucGxheWVyfSBkaXZgKTtcbiAgICBvcHBvbmVudC5ib2FyZC5nYW1lQm9hcmQuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09IFwiaFwiIHx8IHZhbHVlID09PSBcIndhdGVyXCIpIHtcbiAgICAgICAgZ3JpZENlbGxzW2luZGV4XS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQm9hcmQgPSAob3Bwb25lbnQpID0+IHtcbiAgICBjb25zdCBzcXVhcmVEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7b3Bwb25lbnQucGxheWVyfSBkaXZgKTtcbiAgICBvcHBvbmVudC5ib2FyZC5nYW1lQm9hcmQuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09IFwiaFwiKSB7XG4gICAgICAgIHNxdWFyZURpdnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICBzcXVhcmVEaXZzW2luZGV4XS50ZXh0Q29udGVudCA9IFwiaFwiO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJ3YXRlclwiKSB7XG4gICAgICAgIHNxdWFyZURpdnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJ3YXRlclwiKTtcbiAgICAgICAgc3F1YXJlRGl2c1tpbmRleF0udGV4dENvbnRlbnQgPSBcIndcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNhYmxlQWxsUG9pbnRlckV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVEaXZcIik7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgTmFycmF0b3IgPSAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IG5hcnJhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXJyYXRvclwiKTtcbiAgICBuYXJyYXRvci50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTW92ZUxpc3RlbmVycyA9IChQbGF5ZXIsIG1vdmVTaGlwKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtQbGF5ZXIucGxheWVyfSBkaXZgKTtcbiAgICBib2FyZC5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb3ZlU2hpcCkpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZU1vdmVMaXN0ZW5lcnMgPSAoUGxheWVyLCBtb3ZlU2hpcCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7UGxheWVyLnBsYXllcn0gZGl2YCk7XG4gICAgYm9hcmQuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW92ZVNoaXApKTtcbiAgfTtcblxuICBjb25zdCBlbmFibGVTdGFydEJ1dHRvbiA9IChzdGFydEdhbWUpID0+IHtcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnRHYW1lXCIpO1xuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgTmFycmF0b3IsXG4gICAgZGlzYWJsZUFsbFBvaW50ZXJFdmVudHMsXG4gICAgdG9nZ2xlQ2xpY2ssXG4gICAgcmVuZGVyQm9hcmQsXG4gICAgYWRkQXR0YWNrTGlzdGVuZXJzLFxuICAgIGRpc2FibGVIaXRDZWxsLFxuICAgIHVwZGF0ZUJvYXJkLFxuICAgIHNob3dQbGF5ZXJTaGlwcyxcbiAgICBhZGRNb3ZlTGlzdGVuZXJzLFxuICAgIHJlbW92ZU1vdmVMaXN0ZW5lcnMsXG4gICAgZW5hYmxlU3RhcnRCdXR0b24sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lRG9tO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFN1cnJvdW5kaW5nSW5kaWNlcyhpKSB7XG4gIGNvbnN0IGxlZnRDb2x1bW4gPSBbMTAsIDIwLCAzMCwgNDAsIDUwLCA2MCwgNzAsIDgwXTtcbiAgY29uc3QgcmlnaHRDb2x1bW4gPSBbMTksIDI5LCAzOSwgNDksIDU5LCA2OSwgNzksIDg5XTtcblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGkgPT09IDA6XG4gICAgICByZXR1cm4gW2ksIGkgKyAxLCBpICsgMTAsIGkgKyAxMV07XG5cbiAgICBjYXNlIGkgPT09IDk6XG4gICAgICByZXR1cm4gW2ksIGkgLSAxLCBpICsgOSwgaSArIDEwXTtcblxuICAgIGNhc2UgaSA9PT0gOTA6XG4gICAgICByZXR1cm4gW2ksIGkgLSAxMCwgaSArIDEsIGkgLSA5XTtcblxuICAgIGNhc2UgaSA9PT0gOTk6XG4gICAgICByZXR1cm4gW2ksIGkgLSAxLCBpIC0gMTAsIGkgLSAxMV07XG5cbiAgICBjYXNlIGkgPiAwICYmIGkgPCA5OlxuICAgICAgcmV0dXJuIFtpLCBpICsgMSwgaSArIDEwLCBpICsgMTEsIGkgKyA5LCBpIC0gMV07XG5cbiAgICBjYXNlIGkgPiA5MCAmJiBpIDwgOTk6XG4gICAgICByZXR1cm4gW2ksIGkgLSAxMSwgaSAtIDEwLCBpIC0gOSwgaSArIDEsIGkgLSAxXTtcblxuICAgIGNhc2UgbGVmdENvbHVtbi5pbmNsdWRlcyhpKTpcbiAgICAgIHJldHVybiBbaSwgaSAtIDEwLCBpIC0gOSwgaSArIDEsIGkgKyAxMCwgaSArIDExXTtcblxuICAgIGNhc2UgcmlnaHRDb2x1bW4uaW5jbHVkZXMoaSk6XG4gICAgICByZXR1cm4gW2ksIGkgLSAxMSwgaSAtIDEwLCBpIC0gMSwgaSArIDksIGkgKyAxMF07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtpLCBpICsgMSwgaSAtIDEsIGkgKyAxMCwgaSAtIDEwLCBpICsgMTEsIGkgLSAxMSwgaSAtIDksIGkgKyA5XTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlhZ29uYWxDb3JkcyhpKSB7XG4gIGNvbnN0IGxlZnRDb2x1bW4gPSBbMTAsIDIwLCAzMCwgNDAsIDUwLCA2MCwgNzAsIDgwXTtcbiAgY29uc3QgcmlnaHRDb2x1bW4gPSBbMTksIDI5LCAzOSwgNDksIDU5LCA2OSwgNzksIDg5XTtcblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGkgPT09IDA6XG4gICAgICByZXR1cm4gW2kgKyAxMV07XG5cbiAgICBjYXNlIGkgPT09IDk6XG4gICAgICByZXR1cm4gW2kgKyA5XTtcblxuICAgIGNhc2UgaSA9PT0gOTA6XG4gICAgICByZXR1cm4gW2kgLSA5XTtcblxuICAgIGNhc2UgaSA9PT0gOTk6XG4gICAgICByZXR1cm4gW2kgLSAxMV07XG5cbiAgICBjYXNlIGkgPiAwICYmIGkgPCA5OlxuICAgICAgcmV0dXJuIFtpICsgMTEsIGkgKyA5XTtcblxuICAgIGNhc2UgaSA+IDkwICYmIGkgPCA5OTpcbiAgICAgIHJldHVybiBbaSAtIDExLCBpIC0gOV07XG5cbiAgICBjYXNlIGxlZnRDb2x1bW4uaW5jbHVkZXMoaSk6XG4gICAgICByZXR1cm4gW2kgLSA5LCBpICsgMTFdO1xuXG4gICAgY2FzZSByaWdodENvbHVtbi5pbmNsdWRlcyhpKTpcbiAgICAgIHJldHVybiBbaSAtIDExLCBpICsgOV07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtpICsgMTEsIGkgLSAxMSwgaSAtIDksIGkgKyA5XTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmRVcE5lYXJlc3QxMChudW0pIHtcbiAgcmV0dXJuIE1hdGguY2VpbChudW0gLyAxMCkgKiAxMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3REaWdpdChudW0pIHtcbiAgaWYgKG51bSAlIDEwID09PSAwKSB7XG4gICAgcmV0dXJuIDEwO1xuICB9XG4gIHJldHVybiBudW0gJSAxMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2hpcCh2YWx1ZSkge1xuICBjb25zdCBzeW1ib2xzID0gW1wiQ1ZcIiwgXCJCQlwiLCBcIkNBXCIsIFwiU1NcIiwgXCJERFwiXTtcbiAgaWYgKHN5bWJvbHMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50KHBvc2l0aW9uKSB7XG4gIGlmIChwb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAocG9zaXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgIHJldHVybiAxMDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RydWN0dXJlZENsb25lKGFycmF5KSB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAocGxheWVyKSA9PiB7XG4gIGxldCB0dXJuO1xuICBjb25zdCBoaXRDb3JkcyA9IFtdO1xuICBjb25zdCBib2FyZCA9IEdhbWVCb2FyZCgpO1xuXG4gIGlmIChwbGF5ZXIgPT09IFwicGxheWVyXCIpIHtcbiAgICB0dXJuID0gdHJ1ZTtcbiAgICBjb25zdCBjYXJyaWVyID0gYm9hcmQuYWxsU2hpcHNbMF07XG4gICAgY29uc3QgYmF0dGxlU2hpcCA9IGJvYXJkLmFsbFNoaXBzWzFdO1xuICAgIGNvbnN0IGNydWlzZXIgPSBib2FyZC5hbGxTaGlwc1syXTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBib2FyZC5hbGxTaGlwc1szXTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBib2FyZC5hbGxTaGlwc1s0XTtcbiAgICBib2FyZC5wbGFjZVNoaXAoY2FycmllciwgMTUsIFwiaG9yaXpvbnRhbFwiKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoYmF0dGxlU2hpcCwgNTUsIFwiaG9yaXpvbnRhbFwiKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoY3J1aXNlciwgMTMsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSwgNzIsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llciwgODUsIFwidmVydGljYWxcIik7XG4gIH0gZWxzZSB7XG4gICAgdHVybiA9IGZhbHNlO1xuICAgIGNvbnN0IGNhcnJpZXIgPSBib2FyZC5hbGxTaGlwc1swXTtcbiAgICBjb25zdCBiYXR0bGVTaGlwID0gYm9hcmQuYWxsU2hpcHNbMV07XG4gICAgY29uc3QgY3J1aXNlciA9IGJvYXJkLmFsbFNoaXBzWzJdO1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IGJvYXJkLmFsbFNoaXBzWzNdO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IGJvYXJkLmFsbFNoaXBzWzRdO1xuICAgIGJvYXJkLnBsYWNlU2hpcChjYXJyaWVyLCAxLCBcInZlcnRpY2FsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChiYXR0bGVTaGlwLCAzLCBcInZlcnRpY2FsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChjcnVpc2VyLCA1LCBcInZlcnRpY2FsXCIpO1xuICAgIGJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmUsIDcsIFwidmVydGljYWxcIik7XG4gICAgYm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llciwgOSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgfVxuXG4gIGNvbnN0IGdldFR1cm4gPSAoKSA9PiB0dXJuO1xuXG4gIGNvbnN0IGNoYW5nZVR1cm4gPSAoKSA9PiB7XG4gICAgdHVybiA9ICF0dXJuO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW5pbXVtLCBtYXhpbXVtKSB7XG4gICAgY29uc3QgbWluID0gTWF0aC5jZWlsKG1pbmltdW0pO1xuICAgIGNvbnN0IG1heCA9IE1hdGguZmxvb3IobWF4aW11bSk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbiAgfVxuXG4gIGNvbnN0IHBvc3NpYmxlTW92ZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IDEwMTsgaSsrKSB7XG4gICAgcG9zc2libGVNb3ZlLnB1c2goaSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVJdGVtT25jZShhcnIsIHZhbHVlKSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgY29uc3QgbnVtYmVyT2ZUdXJucyA9IDA7XG4gIGNvbnN0IGdldFRydW5zID0gKCkgPT4gbnVtYmVyT2ZUdXJucztcblxuICBmdW5jdGlvbiBwbGF5ZXJBdHRhY2tzKG9wcG9uZW50LCBjb3JkKSB7XG4gICAgY29uc3QgaGl0Q29yZCA9IG9wcG9uZW50LmJvYXJkLnJlY2lldmVBdHRhY2soY29yZCk7XG4gICAgcmV0dXJuIGhpdENvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSYW5kb20oYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVNb3ZlLmxlbmd0aCldO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2tzKG9wcG9uZW50KSB7XG4gICAgY29uc3QgY29yZCA9IGdldFJhbmRvbShwb3NzaWJsZU1vdmUpO1xuICAgIGNvbnN0IGhpdENvcmQgPSBvcHBvbmVudC5ib2FyZC5yZWNpZXZlQXR0YWNrKGNvcmQpO1xuICAgIG9wcG9uZW50LmJvYXJkLmhpdENvcmRzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICByZW1vdmVJdGVtT25jZShwb3NzaWJsZU1vdmUsIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaGl0Q29yZDtcbiAgfVxuXG4gIGNvbnN0IGF0dGFjayA9IChvcHBvbmVudCwgY29yZCA9IG51bGwpID0+IHtcbiAgICBsZXQgaGl0Q29yZDtcbiAgICBpZiAocGxheWVyID09PSBcInBsYXllclwiKSB7XG4gICAgICBoaXRDb3JkID0gcGxheWVyQXR0YWNrcyhvcHBvbmVudCwgY29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpdENvcmQgPSBjb21wdXRlckF0dGFja3Mob3Bwb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gaGl0Q29yZDtcbiAgfTtcblxuICByZXR1cm4geyBnZXRUdXJuLCBjaGFuZ2VUdXJuLCBhdHRhY2ssIGJvYXJkLCBwbGF5ZXIsIGhpdENvcmRzLCBnZXRUcnVucyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9ICh0eXBlLCBoaXRzID0gMCwgc3VuayA9IGZhbHNlKSA9PiB7XG4gIGxldCBsZW5ndGg7XG4gIGxldCBjb3JkID0gbnVsbDtcbiAgbGV0IGRlcGxveWVkID0gZmFsc2U7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgXCJDVlwiOlxuICAgICAgbGVuZ3RoID0gNTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJCQlwiOlxuICAgICAgbGVuZ3RoID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJDQVwiOlxuICAgICAgbGVuZ3RoID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJTU1wiOlxuICAgICAgbGVuZ3RoID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJERFwiOlxuICAgICAgbGVuZ3RoID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsZW5ndGggPSAwO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBjb25zdCBpc0RlcGxveWVkID0gKCkgPT4gZGVwbG95ZWQ7XG4gIGNvbnN0IHNldENvcmRzID0gKGNvcmRzKSA9PiB7XG4gICAgY29yZCA9IGNvcmRzO1xuICB9O1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBpZiAoaGl0cyA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhpdHMgKz0gMTtcbiAgICBpZiAoaGl0cyA9PT0gbGVuZ3RoKSB7XG4gICAgICBzdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc3VuaztcblxuICBjb25zdCBkZXBsb3kgPSAoKSA9PiB7XG4gICAgZGVwbG95ZWQgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNvdWxkTm90RGVwbG95ID0gKCkgPT4ge1xuICAgIGRlcGxveWVkID0gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29yZHMgPSAoKSA9PiBjb3JkO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZSxcbiAgICBoaXQsXG4gICAgZ2V0SGl0cyxcbiAgICBpc1N1bmssXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGRlcGxveSxcbiAgICBkZXBsb3llZCxcbiAgICBpc0RlcGxveWVkLFxuICAgIGNvdWxkTm90RGVwbG95LFxuICAgIGdldENvcmRzLFxuICAgIHNldENvcmRzLFxuICAgIGNvcmQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmNvbnN0IGdhbWUgPSBHYW1lKCk7XG5nYW1lLnBsYXkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==