(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


//import 'eventEmitter';

"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = (function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = new Map();
  }

  //label:  identifies the type of notifications the listener wants to receive
  //callback: the callback function we should invoke for the listener when we emit that event. Puede ser cualquier cosa

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(label, callback) {
      //addListener
      this.listeners.has(label) || this.listeners.set(label, []);
      this.listeners.get(label).push(callback);
    }
  }, {
    key: "off",
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
    key: "emit",
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
})(EventEmitter);

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

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
}

//IMPLEMENTATION
;

var logger = new Logger();

var titanic = new Movie("Titanic", 1997, 194);
var leonardo = new Actor("Leonardo DiCaprio", 42);

var otherCast = [new Actor('Kate Winslet', 41), new Actor('Bill Zane', 51)];

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

batman.addCast(leonardo);
batman.addCast(otherCast);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9EZXYvQk9PVENBTVBHTE9CQU5UL2dsb2JhbnQtdWktc3RhcnR1cC0yMDE3L21hdHRoaWV1LzAyLW9vcC1pbmhlcml0YW5jZS9hc3NldHMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztJQ01NLFlBQVk7QUFFTCxXQUZQLFlBQVksR0FFRjswQkFGVixZQUFZOztBQUdkLFFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztHQUM1Qjs7Ozs7ZUFKRyxZQUFZOztXQVFkLFlBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRTs7QUFDbEIsVUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzNELFVBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMxQzs7O1dBRUUsYUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFOztBQUNuQixVQUFJLFVBQVUsR0FBRyxTQUFiLFVBQVUsQ0FBWSxHQUFHLEVBQUU7QUFDN0IsZUFBTyxPQUFPLEdBQUcsSUFBSSxVQUFVLElBQUksS0FBSyxDQUFDO09BQzFDLENBQUM7O0FBRUYsVUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1VBQ3ZDLEtBQUssWUFBQSxDQUFDOztBQUVSLFVBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7QUFDakMsYUFBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBSztBQUMvQyxpQkFBTyxBQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFB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YyxFQUFFLEVBQUUsQ0FBQyxFQUM3QixJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQzNCLENBQUM7O0FBSUYsSUFBSSxNQUFNLEdBQUc7QUFDWCxPQUFLLEVBQUUsZUFBUyxVQUFVLEVBQUU7QUFDMUIsV0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0dBQ2xFO0FBQ0QsTUFBSSxFQUFFLGNBQVMsVUFBVSxFQUFFO0FBQ3pCLFdBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0dBQ3hEO0NBQ0YsQ0FBQzs7QUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzs7QUFFL0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUFFZixPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRTlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxuXHJcblxyXG4vL2ltcG9ydCAnZXZlbnRFbWl0dGVyJztcclxuXHJcblxyXG5jbGFzcyBFdmVudEVtaXR0ZXIgXHJcbntcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IE1hcCgpO1xyXG4gIH1cclxuXHJcbiAgLy9sYWJlbDogIGlkZW50aWZpZXMgdGhlIHR5cGUgb2Ygbm90aWZpY2F0aW9ucyB0aGUgbGlzdGVuZXIgd2FudHMgdG8gcmVjZWl2ZVxyXG4gIC8vY2FsbGJhY2s6IHRoZSBjYWxsYmFjayBmdW5jdGlvbiB3ZSBzaG91bGQgaW52b2tlIGZvciB0aGUgbGlzdGVuZXIgd2hlbiB3ZSBlbWl0IHRoYXQgZXZlbnQuIFB1ZWRlIHNlciBjdWFscXVpZXIgY29zYVxyXG4gIG9uKGxhYmVsLCBjYWxsYmFjaykgeyAvL2FkZExpc3RlbmVyXHJcbiAgICB0aGlzLmxpc3RlbmVycy5oYXMobGFiZWwpIHx8IHRoaXMubGlzdGVuZXJzLnNldChsYWJlbCwgW10pO1xyXG4gICAgdGhpcy5saXN0ZW5lcnMuZ2V0KGxhYmVsKS5wdXNoKGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIG9mZihsYWJlbCwgY2FsbGJhY2spIHsgLy9yZW1vdmVMaXN0ZW5lclxyXG4gICAgbGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmdldChsYWJlbCksXHJcbiAgICAgIGluZGV4O1xyXG5cclxuICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzLmxlbmd0aCkge1xyXG4gICAgICBpbmRleCA9IGxpc3RlbmVycy5yZWR1Y2UoKGksIGxpc3RlbmVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoaXNGdW5jdGlvbihsaXN0ZW5lcikgJiYgbGlzdGVuZXIgPT09IGNhbGxiYWNrKSA/XHJcbiAgICAgICAgICBpID0gaW5kZXggOlxyXG4gICAgICAgICAgaTtcclxuICAgICAgfSwgLTEpO1xyXG5cclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQobGFiZWwsIGxpc3RlbmVycyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGVtaXQobGFiZWwsIC4uLmFyZ3MpIHtcclxuICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5nZXQobGFiZWwpO1xyXG4gICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnMubGVuZ3RoKSB7XHJcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgIGxpc3RlbmVyKC4uLmFyZ3MpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBNb3ZpZSBleHRlbmRzIEV2ZW50RW1pdHRlclxyXG57XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIHllYXIsIGR1cmF0aW9uKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy55ZWFyID0geWVhcjtcclxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICB9XHJcblxyXG4gIHBsYXkoKSB7XHJcbiAgICB0aGlzLmVtaXQoXCJwbGF5XCIsIFwiUGxheVwiKTtcclxuICB9XHJcbiAgcGF1c2UoKSB7XHJcbiAgICB0aGlzLmVtaXQoXCJwYXVzZVwiLCBcIlBhdXNlXCIpO1xyXG4gIH1cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVtaXQoXCJyZXN1bWVcIiwgXCJSZXN1bWVcIik7XHJcbiAgfVxyXG5cclxuICBhZGRDYXN0KGFjdG9yKSB7XHJcbiAgICBsZXQgbWFwID0gbmV3IE1hcCgpO1xyXG4gICAgbGV0IGZ1bmNBY3RvciA9IGFjdG9yO1xyXG4gICAgbWFwLnNldChmdW5jQWN0b3IsIGFjdG9yKTtcclxuICAgIGNvbnNvbGUubG9nKG1hcC5nZXQoZnVuY0FjdG9yKSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNsYXNzIExvZ2dlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG4gIGxvZyhpbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBcIiArIGluZm8gKyBcIiBldmVudCBoYXMgYmVlbiBlbWl0dGVkLlwiKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgQWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFnZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vSU1QTEVNRU5UQVRJT05cclxubGV0IGxvZ2dlciA9IG5ldyBMb2dnZXIoKTtcclxuXHJcbmxldCB0aXRhbmljID0gbmV3IE1vdmllKFwiVGl0YW5pY1wiLCAxOTk3LCAxOTQpO1xyXG5sZXQgbGVvbmFyZG8gPSBuZXcgQWN0b3IoXCJMZW9uYXJkbyBEaUNhcHJpb1wiLCA0Mik7XHJcblxyXG5sZXQgb3RoZXJDYXN0ID0gW1xyXG4gIG5ldyBBY3RvcignS2F0ZSBXaW5zbGV0JywgNDEpLFxyXG4gIG5ldyBBY3RvcignQmlsbCBaYW5lJywgNTEpLFxyXG5dO1xyXG5cclxuXHJcblxyXG5sZXQgc29jaWFsID0ge1xyXG4gIHNoYXJlOiBmdW5jdGlvbihmcmllbmROYW1lKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNoYXJlIFwiICsgdGhpcy50aXRsZSArIFwiIHdpdGggXCIgKyBmcmllbmROYW1lICsgXCIuXCIpO1xyXG4gIH0sXHJcbiAgbGlrZTogZnVuY3Rpb24oZnJpZW5kTmFtZSkge1xyXG4gICAgY29uc29sZS5sb2coZnJpZW5kTmFtZSArIFwiIGxpa2VzIFwiICsgdGhpcy50aXRsZSArIFwiLlwiKTtcclxuICB9XHJcbn07XHJcblxyXG5PYmplY3QuYXNzaWduKHRpdGFuaWMsIHNvY2lhbCk7XHJcblxyXG50aXRhbmljLm9uKFwicGxheVwiLCBsb2dnZXIubG9nKTtcclxudGl0YW5pYy5wbGF5KCk7XHJcblxyXG50aXRhbmljLnNoYXJlKFwiQmFycmFjayBPYmFtYVwiKTtcclxudGl0YW5pYy5saWtlKFwiQmFycmFjayBPYmFtYVwiKTtcclxuXHJcbmJhdG1hbi5hZGRDYXN0KGxlb25hcmRvKTtcclxuYmF0bWFuLmFkZENhc3Qob3RoZXJDYXN0KTtcclxuIl19
