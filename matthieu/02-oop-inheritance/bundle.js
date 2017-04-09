(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};

module.exports = Actor;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventEmitter = (function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = new Map();
  }

  //label:  identifies the type of notifications the listener wants to receive
  //callback: the callback function we should invoke for the listener when we emit that event. Puede ser cualquier cosa

  _createClass(EventEmitter, [{
    key: 'on',
    value: function on(label, callback) {
      //addListener
      this.listeners.has(label) || this.listeners.set(label, []);
      this.listeners.get(label).push(callback);
    }
  }, {
    key: 'off',
    value: function off(label, callback) {
      //removeListener
      var isFunction = function isFunction(obj) {
        return typeof obj == 'function' || false;
      };

      var listeners = this.listeners.get(label),
          index = undefined;

      if (listeners && listeners.length) {
        index = listeners.reduce(function (i, listener, index) {
          return isFunction(listener) && listener === callback ? i = index : i;
        }, -1);

        if (index > -1) {
          listeners.splice(index, 1);
          this.listeners.set(label, listeners);
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'emit',
    value: function emit(label) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this.listeners.get(label);
      if (listeners && listeners.length) {
        listeners.forEach(function (listener) {
          listener.apply(undefined, args);
        });
        return true;
      }
      return false;
    }
  }]);

  return EventEmitter;
})();

module.exports = EventEmitter;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = (function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log("The " + info + " event has been emitted.");
    }
  }]);

  return Logger;
})();

module.exports = Logger;

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _EventEmitter2 = require('./EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var Movie = (function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, year, duration) {
    _classCallCheck(this, Movie);

    _get(Object.getPrototypeOf(Movie.prototype), "constructor", this).call(this);
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  _createClass(Movie, [{
    key: "play",
    value: function play() {
      this.emit("play", "Play");
    }
  }, {
    key: "pause",
    value: function pause() {
      this.emit("pause", "Pause");
    }
  }, {
    key: "resume",
    value: function resume() {
      this.emit("resume", "Resume");
    }
  }, {
    key: "addCast",
    value: function addCast(actor) {
      var map = new Map();
      var funcActor = actor;
      map.set(funcActor, actor);
      console.log(map.get(funcActor));
    }
  }]);

  return Movie;
})(_EventEmitter3["default"]);

module.exports = Movie;

},{"./EventEmitter":2}],5:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventEmitter = require('./EventEmitter');

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _Movie = require('./Movie');

var _Movie2 = _interopRequireDefault(_Movie);

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _Actor = require('./Actor');

var _Actor2 = _interopRequireDefault(_Actor);

//IMPLEMENTATION
var logger = new _Logger2['default']();

var titanic = new _Movie2['default']("Titanic", 1997, 194);
var leonardo = new _Actor2['default']("Leonardo DiCaprio", 42);

var otherCast = [new _Actor2['default']('Kate Winslet', 41), new _Actor2['default']('Bill Zane', 51)];

var social = {
  share: function share(friendName) {
    console.log("Share " + this.title + " with " + friendName + ".");
  },
  like: function like(friendName) {
    console.log(friendName + " likes " + this.title + ".");
  }
};

Object.assign(titanic, social);

titanic.on("play", logger.log);
titanic.play();

titanic.share("Barrack Obama");
titanic.like("Barrack Obama");

titanic.addCast(leonardo);
titanic.addCast(otherCast);

},{"./Actor":1,"./EventEmitter":2,"./Logger":3,"./Movie":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9EZXYvQk9PVENBTVBHTE9CQU5UL2dsb2JhbnQtdWktc3RhcnR1cC0yMDE3L21hdHRoaWV1LzAyLW9vcC1pbmhlcml0YW5jZS9hc3NldHMvanMvQWN0b3IuanMiLCJEOi9EZXYvQk9PVENBTVBHTE9CQU5UL2dsb2JhbnQtdWktc3RhcnR1cC0yMDE3L21hdHRoaWV1LzAyLW9vcC1pbmhlcml0YW5jZS9hc3NldHMvanMvRXZlbnRFbWl0dGVyLmpzIiwiRDovRGV2L0JPT1RDQU1QR0xPQkFOVC9nbG9iYW50LXVpLXN0YXJ0dXAtMjAxNy9tYXR0aGlldS8wMi1vb3AtaW5oZXJpdGFuY2UvYXNzZXRzL2pzL0xvZ2dlci5qcyIsIkQ6L0Rldi9CT09UQ0FNUEdMT0JBTlQvZ2xvYmFudC11aS1zdGFydHVwLTIwMTcvbWF0dGhpZXUvMDItb29wLWluaGVyaXRhbmNlL2Fzc2V0cy9qcy9Nb3ZpZS5qcyIsIkQ6L0Rldi9CT09UQ0FNUEdMT0JBTlQvZ2xvYmFudC11aS1zdGFydHVwLTIwMTcvbWF0dGhpZXUvMDItb29wLWluaGVyaXRhbmNlL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7SUNDTSxLQUFLLEdBQ0UsU0FEUCxLQUFLLENBQ0csSUFBSSxFQUFFLEdBQUcsRUFBRTt3QkFEbkIsS0FBSzs7QUFFUCxNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztDQUNoQjs7QUFHSCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7O0lDTmpCLFlBQVk7QUFFTCxXQUZQLFlBQVksR0FFRjswQkFGVixZQUFZOztBQUdkLFFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztHQUM1Qjs7Ozs7ZUFKRyxZQUFZOztXQVFkLFlBQUMsS0FBSyxFQUFFLFFB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LENBQUMsQ0FBQztHQUN4RDtDQUNGLENBQUM7O0FBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRS9CLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBRWYsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDOztBQUU5QixPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFCLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcbmNsYXNzIEFjdG9yIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBhZ2UpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmFnZSA9IGFnZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQWN0b3I7IiwiXHJcblxyXG5jbGFzcyBFdmVudEVtaXR0ZXIgXHJcbntcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IE1hcCgpO1xyXG4gIH1cclxuXHJcbiAgLy9sYWJlbDogIGlkZW50aWZpZXMgdGhlIHR5cGUgb2Ygbm90aWZpY2F0aW9ucyB0aGUgbGlzdGVuZXIgd2FudHMgdG8gcmVjZWl2ZVxyXG4gIC8vY2FsbGJhY2s6IHRoZSBjYWxsYmFjayBmdW5jdGlvbiB3ZSBzaG91bGQgaW52b2tlIGZvciB0aGUgbGlzdGVuZXIgd2hlbiB3ZSBlbWl0IHRoYXQgZXZlbnQuIFB1ZWRlIHNlciBjdWFscXVpZXIgY29zYVxyXG4gIG9uKGxhYmVsLCBjYWxsYmFjaykgeyAvL2FkZExpc3RlbmVyXHJcbiAgICB0aGlzLmxpc3RlbmVycy5oYXMobGFiZWwpIHx8IHRoaXMubGlzdGVuZXJzLnNldChsYWJlbCwgW10pO1xyXG4gICAgdGhpcy5saXN0ZW5lcnMuZ2V0KGxhYmVsKS5wdXNoKGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIG9mZihsYWJlbCwgY2FsbGJhY2spIHsgLy9yZW1vdmVMaXN0ZW5lclxyXG4gICAgbGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmdldChsYWJlbCksXHJcbiAgICAgIGluZGV4O1xyXG5cclxuICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzLmxlbmd0aCkge1xyXG4gICAgICBpbmRleCA9IGxpc3RlbmVycy5yZWR1Y2UoKGksIGxpc3RlbmVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoaXNGdW5jdGlvbihsaXN0ZW5lcikgJiYgbGlzdGVuZXIgPT09IGNhbGxiYWNrKSA/XHJcbiAgICAgICAgICBpID0gaW5kZXggOlxyXG4gICAgICAgICAgaTtcclxuICAgICAgfSwgLTEpO1xyXG5cclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQobGFiZWwsIGxpc3RlbmVycyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGVtaXQobGFiZWwsIC4uLmFyZ3MpIHtcclxuICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5nZXQobGFiZWwpO1xyXG4gICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnMubGVuZ3RoKSB7XHJcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgIGxpc3RlbmVyKC4uLmFyZ3MpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7IiwiY2xhc3MgTG9nZ2VyIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgbG9nKGluZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVGhlIFwiICsgaW5mbyArIFwiIGV2ZW50IGhhcyBiZWVuIGVtaXR0ZWQuXCIpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMb2dnZXI7IiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL0V2ZW50RW1pdHRlcic7XHJcblxyXG5jbGFzcyBNb3ZpZSBleHRlbmRzIEV2ZW50RW1pdHRlclxyXG57XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIHllYXIsIGR1cmF0aW9uKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy55ZWFyID0geWVhcjtcclxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICB9XHJcblxyXG4gIHBsYXkoKSB7XHJcbiAgICB0aGlzLmVtaXQoXCJwbGF5XCIsIFwiUGxheVwiKTtcclxuICB9XHJcbiAgcGF1c2UoKSB7XHJcbiAgICB0aGlzLmVtaXQoXCJwYXVzZVwiLCBcIlBhdXNlXCIpO1xyXG4gIH1cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVtaXQoXCJyZXN1bWVcIiwgXCJSZXN1bWVcIik7XHJcbiAgfVxyXG5cclxuICBhZGRDYXN0KGFjdG9yKSB7XHJcbiAgICBsZXQgbWFwID0gbmV3IE1hcCgpO1xyXG4gICAgbGV0IGZ1bmNBY3RvciA9IGFjdG9yO1xyXG4gICAgbWFwLnNldChmdW5jQWN0b3IsIGFjdG9yKTtcclxuICAgIGNvbnNvbGUubG9nKG1hcC5nZXQoZnVuY0FjdG9yKSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1vdmllOyIsIlxyXG5cclxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL0V2ZW50RW1pdHRlcic7XHJcbmltcG9ydCBNb3ZpZSBmcm9tICcuL01vdmllJztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XHJcbmltcG9ydCBBY3RvciBmcm9tICcuL0FjdG9yJztcclxuXHJcblxyXG5cclxuXHJcblxyXG4vL0lNUExFTUVOVEFUSU9OXHJcbmxldCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XHJcblxyXG5sZXQgdGl0YW5pYyA9IG5ldyBNb3ZpZShcIlRpdGFuaWNcIiwgMTk5NywgMTk0KTtcclxubGV0IGxlb25hcmRvID0gbmV3IEFjdG9yKFwiTGVvbmFyZG8gRGlDYXByaW9cIiwgNDIpO1xyXG5cclxubGV0IG90aGVyQ2FzdCA9IFtcclxuICBuZXcgQWN0b3IoJ0thdGUgV2luc2xldCcsIDQxKSxcclxuICBuZXcgQWN0b3IoJ0JpbGwgWmFuZScsIDUxKSxcclxuXTtcclxuXHJcblxyXG5cclxubGV0IHNvY2lhbCA9IHtcclxuICBzaGFyZTogZnVuY3Rpb24oZnJpZW5kTmFtZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJTaGFyZSBcIiArIHRoaXMudGl0bGUgKyBcIiB3aXRoIFwiICsgZnJpZW5kTmFtZSArIFwiLlwiKTtcclxuICB9LFxyXG4gIGxpa2U6IGZ1bmN0aW9uKGZyaWVuZE5hbWUpIHtcclxuICAgIGNvbnNvbGUubG9nKGZyaWVuZE5hbWUgKyBcIiBsaWtlcyBcIiArIHRoaXMudGl0bGUgKyBcIi5cIik7XHJcbiAgfVxyXG59O1xyXG5cclxuT2JqZWN0LmFzc2lnbih0aXRhbmljLCBzb2NpYWwpO1xyXG5cclxudGl0YW5pYy5vbihcInBsYXlcIiwgbG9nZ2VyLmxvZyk7XHJcbnRpdGFuaWMucGxheSgpO1xyXG5cclxudGl0YW5pYy5zaGFyZShcIkJhcnJhY2sgT2JhbWFcIik7XHJcbnRpdGFuaWMubGlrZShcIkJhcnJhY2sgT2JhbWFcIik7XHJcblxyXG50aXRhbmljLmFkZENhc3QobGVvbmFyZG8pO1xyXG50aXRhbmljLmFkZENhc3Qob3RoZXJDYXN0KTtcclxuIl19
