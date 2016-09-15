/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _car = __webpack_require__(1);
	
	var _car2 = _interopRequireDefault(_car);
	
	var _board = __webpack_require__(2);
	
	var _board2 = _interopRequireDefault(_board);
	
	var _view = __webpack_require__(3);
	
	var _view2 = _interopRequireDefault(_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(function () {
	  var $container = $('#rush-hour');
	  var easyCars = function easyCars() {
	    return [new _car2.default(2, "red", [2, 1], "right"), new _car2.default(3, "yellow", [2, 3], "down"), new _car2.default(2, "green", [5, 1], "down"), new _car2.default(2, "orange", [5, 3], "right"), new _car2.default(2, "blue", [5, 5], "right")];
	  };
	
	  var mediumCars = function mediumCars() {
	    return [new _car2.default(2, "red", [2, 3], "right"), new _car2.default(3, "yellow", [3, 4], "down"), new _car2.default(2, "green", [2, 1], "down"), new _car2.default(2, "orange", [5, 3], "down"), new _car2.default(2, "blue", [4, 5], "right"), new _car2.default(2, "purple", [5, 5], "right")];
	  };
	
	  var hardCars = function hardCars() {
	    return [new _car2.default(2, "red", [2, 1], "right"), new _car2.default(3, "yellow", [3, 2], "down"), new _car2.default(2, "green", [3, 4], "right"), new _car2.default(2, "orange", [5, 4], "down"), new _car2.default(3, "blue", [4, 2], "right"), new _car2.default(3, "purple", [5, 5], "down")];
	  };
	
	  var cars = easyCars;
	
	  var x = 0;
	  window.intervalId = setInterval(function () {
	    x += 1;
	    $('body').css('background-position', x + 'px 0');
	  }, 10);
	
	  $('.easy-button').click(function () {
	    $container.empty();
	    $(".win-phrase").removeClass("show");
	    $(".current-level").removeClass("current-level");
	    $(".easy-button").addClass("current-level");
	    setUpGame(easyCars(), $container);
	    cars = easyCars;
	  });
	
	  $('.medium-button').click(function () {
	    $container.empty();
	    $(".win-phrase").removeClass("show");
	    $(".current-level").removeClass("current-level");
	    $(".medium-button").addClass("current-level");
	    setUpGame(mediumCars(), $container);
	    cars = mediumCars;
	  });
	
	  $('.hard-button').click(function () {
	    $container.empty();
	    $(".win-phrase").removeClass("show");
	    $(".current-level").removeClass("current-level");
	    $(".hard-button").addClass("current-level");
	    setUpGame(hardCars(), $container);
	    cars = hardCars;
	  });
	
	  $('.reset-button').click(function () {
	    $container.empty();
	    $(".win-phrase").removeClass("show");
	    setUpGame(cars(), $container);
	  });
	
	  $('.scroll-button').click(function () {
	    clearInterval(window.intervalId);
	  });
	
	  setUpGame(easyCars(), $container);
	  $(".current-level").removeClass("current-level");
	  $(".easy-button").addClass("current-level");
	});
	
	var setUpGame = function setUpGame(cars, container) {
	  var board = new _board2.default(cars);
	  var view = new _view2.default(board, container);
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Car = function () {
	  function Car(length, color, startPos, orientation) {
	    _classCallCheck(this, Car);
	
	    this.length = length;
	    this.color = color;
	    this.startPos = startPos;
	    this.orientation = orientation;
	    this.segments = [startPos];
	    this.setUpBody();
	  }
	
	  _createClass(Car, [{
	    key: "directionTranslate",
	    value: function directionTranslate(dir) {
	      var code = void 0;
	      if (dir) {
	        code = dir;
	      } else {
	        code = this.orientation;
	      }
	      var pos = void 0;
	      switch (code) {
	        case "down":
	          pos = [1, 0];
	          break;
	        case "right":
	          pos = [0, 1];
	          break;
	        case "up":
	          pos = [-1, 0];
	          break;
	        case "left":
	          pos = [0, -1];
	      }
	      return pos;
	    }
	  }, {
	    key: "setUpBody",
	    value: function setUpBody() {
	      var oppositeOrientation = [this.directionTranslate()[0] * -1, this.directionTranslate()[1] * -1];
	      for (var i = 0; i < this.length - 1; i++) {
	        var bodyPart = [this.segments[i][0] + oppositeOrientation[0], this.segments[i][1] + oppositeOrientation[1]];
	        this.segments.push(bodyPart);
	      }
	    }
	  }, {
	    key: "move",
	    value: function move(direction) {
	      var dir = this.directionTranslate(direction);
	      var oldHead = void 0,
	          newHead = void 0;
	
	      if (direction === this.orientation) {
	        oldHead = this.segments[0];
	        newHead = [oldHead[0] + dir[0], oldHead[1] + dir[1]];
	        if (this.color !== "red" && (newHead[0] > 5 || newHead[1] > 5)) {
	          // alert("out of bounds!");
	          return;
	        }
	        if (!$('li').eq(newHead[0] * 6 + newHead[1]).hasClass("car")) {
	          this.segments.unshift(newHead);
	          this.segments.pop();
	          window.moveCount += 1;
	        }
	      } else if (dir[0] === this.directionTranslate()[0] * -1 && dir[1] === this.directionTranslate()[1] * -1) {
	        oldHead = this.segments[this.length - 1];
	        newHead = [oldHead[0] + dir[0], oldHead[1] + dir[1]];
	        if (newHead[0] < 0 || newHead[1] < 0) {
	          // alert("out of bounds!");
	          return;
	        }
	        if (!$('li').eq(newHead[0] * 6 + newHead[1]).hasClass("car")) {
	          this.segments.push(newHead);
	          this.segments.shift();
	          window.moveCount += 1;
	        }
	      }
	    }
	  }, {
	    key: "onEdge",
	    value: function onEdge() {
	      if (this.directionTranslate()[0] === 1) {
	        return this.segments[0][0] === 5 || this.segments[this.length - 1][0] === 0;
	      } else if (this.directionTranslate()[1] === 1) {
	        return this.segments[0][1] === 5 || this.segments[this.length - 1][1] === 0;
	      }
	    }
	  }]);
	
	  return Car;
	}();
	
	exports.default = Car;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _car = __webpack_require__(1);
	
	var _car2 = _interopRequireDefault(_car);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = function () {
	  function Board(cars) {
	    _classCallCheck(this, Board);
	
	    this.grid = new Array(6).fill(new Array(6));
	    this.cars = cars;
	    this.selectedCar;
	  }
	
	  _createClass(Board, [{
	    key: "setUpCars",
	    value: function setUpCars() {
	      var _this = this;
	
	      this.cars.forEach(function (car) {
	        car.segments.forEach(function (square) {
	          // $(`li[data-pos=[${square[0]}, ${square[1]}]`).addClass(car.color);
	          var $square = $("li").eq(square[0] * _this.grid.length + square[1]);
	          $square.addClass(car.color);
	          $square.addClass("car");
	          $square.click(function () {
	            $('.selected').removeClass("selected");
	            $("." + car.color).addClass("selected");
	            _this.selectedCar = car;
	          });
	        });
	      });
	    }
	  }, {
	    key: "isWon",
	    value: function isWon() {
	      if (this.cars[0].segments[0][1] === 5) {
	        //if the red car's head is on the right edge
	        return true;
	      }
	      return false;
	    }
	  }]);
	
	  return Board;
	}();
	
	exports.default = Board;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var View = function () {
	  function View(board, $container) {
	    var _this = this;
	
	    _classCallCheck(this, View);
	
	    this.$container = $container;
	    this.board = board;
	    window.moveCount = 0;
	    this.render();
	    $(window).off("keydown");
	    $(window).on("keydown", function (event) {
	      if (_this.board.selectedCar) {
	        if (event.keyCode === 38) {
	          event.preventDefault();
	          _this.board.selectedCar.move("up");
	          _this.render();
	        } else if (event.keyCode === 40) {
	          event.preventDefault();
	          _this.board.selectedCar.move("down");
	          _this.render();
	        } else if (event.keyCode === 37) {
	          event.preventDefault();
	          _this.board.selectedCar.move("left");
	          _this.render();
	        } else if (event.keyCode === 39) {
	          event.preventDefault();
	          _this.board.selectedCar.move("right");
	          _this.render();
	          if (_this.board.selectedCar.color === "red" && _this.board.isWon()) {
	            _this.handleWin();
	          }
	        }
	      }
	    });
	  }
	
	  _createClass(View, [{
	    key: "setUpBoard",
	    value: function setUpBoard() {
	      for (var i = 0; i < this.board.grid.length; i++) {
	        var $row = $("<ul>");
	        for (var j = 0; j < this.board.grid.length; j++) {
	          var $square = $("<li>");
	          $square.data("pos", [i, j]);
	          $row.append($square);
	        }
	        $row.data("row", i);
	        this.$container.append($row);
	      }
	      var $moveCounter = $("<div>Moves: " + window.moveCount + "</div>");
	      $moveCounter.addClass("move-counter");
	      this.$container.append($moveCounter);
	    }
	  }, {
	    key: "handleWin",
	    value: function handleWin() {
	      $(window).off("keydown");
	      $("." + this.board.selectedCar.color).removeClass("selected");
	      $(".win-phrase").addClass("show");
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      this.$container.empty();
	      this.setUpBoard();
	      this.board.setUpCars();
	      if (this.board.selectedCar) {
	        $("." + this.board.selectedCar.color).addClass("selected");
	      }
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map