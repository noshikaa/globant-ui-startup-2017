(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

//Actor class

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

    this.listeners = new Map(); //listeners array
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

    //emit method
    //1rst parameter is the event id we receive
    //2nd parameter is the information about event that we show
  }, {
    key: 'emit',
    value: function emit(label) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this.listeners.get(label); //we get all listeners events that correspond to the event id we received
      if (listeners && listeners.length) {
        listeners.forEach(function (listener) {
          //anonym function, we call the function asociated with this event
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
//Logger class
//method log(info)  show that an event passed as info parameter has been emited on console

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

//Movie class
// play,pause,resume methods emits corresponding events, 1rst parameter is event id, 2nd parameter is information that we want to show about event

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

//we import our diferent classes
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Movie = require('./Movie');

var _Movie2 = _interopRequireDefault(_Movie);

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _Actor = require('./Actor');

var _Actor2 = _interopRequireDefault(_Actor);

//we instanciate our Logger class
var logger = new _Logger2['default']();

//we create a movie and an actor
var titanic = new _Movie2['default']("Titanic", 1997, 194);
var leonardo = new _Actor2['default']("Leonardo DiCaprio", 42);

//we create an object that we use later, on the Movie method addCast()
var otherCast = [new _Actor2['default']('Kate Winslet', 41), new _Actor2['default']('Bill Zane', 51)];
titanic.addCast(leonardo);
titanic.addCast(otherCast);

//we create this object, that have 2 functions
//share() ->  show on console current object title variable (will be a movie object here)
//like() -> similar than share() function
var social = {
  share: function share(friendName) {
    console.log("Share " + this.title + " with " + friendName + ".");
  },
  like: function like(friendName) {
    console.log(friendName + " likes " + this.title + ".");
  }
};

//the instance of Movie titanic, is assigned the 2 functions in social object
Object.assign(titanic, social);

//titanic is assigned a new event, "play" is the id of event, and logger.log is the callback function used for this event if called
titanic.on("play", logger.log);
titanic.play(); //we run titanic play() method that call play event

//we use share and like methods that were assigned to titanic before
titanic.share("Barrack Obama");
titanic.like("Barrack Obama");

},{"./Actor":1,"./Logger":3,"./Movie":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9EZXYvQk9PVENBTVBHTE9CQU5UL2dsb2JhbnQtdWktc3RhcnR1cC0yMDE3L21hdHRoaWV1LzAyLW9vcC1pbmhlcml0YW5jZS9hc3NldHMvanMvQWN0b3IuanMiLCJEOi9EZXYvQk9PVENBTVBHTE9CQU5UL2dsb2JhbnQtdWktc3RhcnR1cC0yMDE3L21hdHRoaWV1LzAyLW9vcC1pbmhlcml0YW5jZS9hc3NldHMvanMvRXZlbnRFbWl0dGVyLmpzIiwiRDovRGV2L0JPT1RDQU1QR0xPQkFOVC9nbG9iYW50LXVpLXN0YXJ0dXAtMjAxNy9tYXR0aGlldS8wMi1vb3AtaW5oZXJpdGFuY2UvYXNzZXRzL2pzL0xvZ2dlci5qcyIsIkQ6L0Rldi9CT09UQ0FNUEdMT0JBTlQvZ2xvYmFudC11aS1zdGFydHVwLTIwMTcvbWF0dGhpZXUvMDItb29wLWluaGVyaXRhbmNlL2Fzc2V0cy9qcy9Nb3ZpZS5qcyIsIkQ6L0Rldi9CT09UQ0FNUEdMT0JBTlQvZ2xvYmFudC11aS1zdGFydHVwLTIwMTcvbWF0dGhpZXUvMDItb29wLWluaGVyaXRhbmNlL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7SUNHTSxLQUFLLEdBQ0UsU0FEUCxLQUFLLENBQ0csSUFBSSxFQUFFLEdBQUcsRUFBRTt3QkFEbkIsS0FBSzs7QUFFUCxNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztDQUNoQjs7QUFHSCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7O0lDUmpCLFlBQVk7QUFFTCxXQUZQLFlBQVksR0FFRjswQkFGVixZQUFZOztBQUdkLFFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztHQUM1Qjs7Ozs7ZUFKRyxZQUFZOztXQVFkLFlBQUMsS0FBSyxFQUFF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LGNBQVMsVUFBVSxFQUFFO0FBQ3pCLFdBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0dBQ3hEO0NBQ0YsQ0FBQzs7O0FBR0YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7OztBQUcvQixPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDOzs7QUFHZixPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcbi8vQWN0b3IgY2xhc3NcclxuXHJcbmNsYXNzIEFjdG9yIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBhZ2UpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmFnZSA9IGFnZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQWN0b3I7IiwiXHJcblxyXG5jbGFzcyBFdmVudEVtaXR0ZXIgXHJcbntcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IE1hcCgpOyAgLy9saXN0ZW5lcnMgYXJyYXlcclxuICB9XHJcblxyXG4gIC8vbGFiZWw6ICBpZGVudGlmaWVzIHRoZSB0eXBlIG9mIG5vdGlmaWNhdGlvbnMgdGhlIGxpc3RlbmVyIHdhbnRzIHRvIHJlY2VpdmVcclxuICAvL2NhbGxiYWNrOiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gd2Ugc2hvdWxkIGludm9rZSBmb3IgdGhlIGxpc3RlbmVyIHdoZW4gd2UgZW1pdCB0aGF0IGV2ZW50LiBQdWVkZSBzZXIgY3VhbHF1aWVyIGNvc2FcclxuICBvbihsYWJlbCwgY2FsbGJhY2spIHsgLy9hZGRMaXN0ZW5lclxyXG4gICAgdGhpcy5saXN0ZW5lcnMuaGFzKGxhYmVsKSB8fCB0aGlzLmxpc3RlbmVycy5zZXQobGFiZWwsIFtdKTtcclxuICAgIHRoaXMubGlzdGVuZXJzLmdldChsYWJlbCkucHVzaChjYWxsYmFjayk7XHJcbiAgfVxyXG5cclxuICBvZmYobGFiZWwsIGNhbGxiYWNrKSB7IC8vcmVtb3ZlTGlzdGVuZXJcclxuICAgIGxldCBpc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5nZXQobGFiZWwpLFxyXG4gICAgICBpbmRleDtcclxuXHJcbiAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVycy5sZW5ndGgpIHtcclxuICAgICAgaW5kZXggPSBsaXN0ZW5lcnMucmVkdWNlKChpLCBsaXN0ZW5lciwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKGlzRnVuY3Rpb24obGlzdGVuZXIpICYmIGxpc3RlbmVyID09PSBjYWxsYmFjaykgP1xyXG4gICAgICAgICAgaSA9IGluZGV4IDpcclxuICAgICAgICAgIGk7XHJcbiAgICAgIH0sIC0xKTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KGxhYmVsLCBsaXN0ZW5lcnMpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvL2VtaXQgbWV0aG9kXHJcbiAgLy8xcnN0IHBhcmFtZXRlciBpcyB0aGUgZXZlbnQgaWQgd2UgcmVjZWl2ZVxyXG4gIC8vMm5kIHBhcmFtZXRlciBpcyB0aGUgaW5mb3JtYXRpb24gYWJvdXQgZXZlbnQgdGhhdCB3ZSBzaG93IFxyXG4gIGVtaXQobGFiZWwsIC4uLmFyZ3MpIHtcclxuICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5nZXQobGFiZWwpOyAgLy93ZSBnZXQgYWxsIGxpc3RlbmVycyBldmVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHRoZSBldmVudCBpZCB3ZSByZWNlaXZlZFxyXG4gICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnMubGVuZ3RoKSB7XHJcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4geyAgLy9hbm9ueW0gZnVuY3Rpb24sIHdlIGNhbGwgdGhlIGZ1bmN0aW9uIGFzb2NpYXRlZCB3aXRoIHRoaXMgZXZlbnRcclxuICAgICAgICBsaXN0ZW5lciguLi5hcmdzKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyOyIsIi8vTG9nZ2VyIGNsYXNzXHJcbi8vbWV0aG9kIGxvZyhpbmZvKSAgc2hvdyB0aGF0IGFuIGV2ZW50IHBhc3NlZCBhcyBpbmZvIHBhcmFtZXRlciBoYXMgYmVlbiBlbWl0ZWQgb24gY29uc29sZVxyXG5cclxuY2xhc3MgTG9nZ2VyIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgbG9nKGluZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVGhlIFwiICsgaW5mbyArIFwiIGV2ZW50IGhhcyBiZWVuIGVtaXR0ZWQuXCIpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMb2dnZXI7IiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL0V2ZW50RW1pdHRlcic7XHJcblxyXG4vL01vdmllIGNsYXNzXHJcbi8vIHBsYXkscGF1c2UscmVzdW1lIG1ldGhvZHMgZW1pdHMgY29ycmVzcG9uZGluZyBldmVudHMsIDFyc3QgcGFyYW1ldGVyIGlzIGV2ZW50IGlkLCAybmQgcGFyYW1ldGVyIGlzIGluZm9ybWF0aW9uIHRoYXQgd2Ugd2FudCB0byBzaG93IGFib3V0IGV2ZW50XHJcblxyXG5jbGFzcyBNb3ZpZSBleHRlbmRzIEV2ZW50RW1pdHRlclxyXG57XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIHllYXIsIGR1cmF0aW9uKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy55ZWFyID0geWVhcjtcclxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICB9XHJcblxyXG4gIHBsYXkoKSB7XHJcbiAgICB0aGlzLmVtaXQoXCJwbGF5XCIsIFwiUGxheVwiKTtcclxuICB9XHJcbiAgcGF1c2UoKSB7XHJcbiAgICB0aGlzLmVtaXQoXCJwYXVzZVwiLCBcIlBhdXNlXCIpO1xyXG4gIH1cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVtaXQoXCJyZXN1bWVcIiwgXCJSZXN1bWVcIik7XHJcbiAgfVxyXG5cclxuICBhZGRDYXN0KGFjdG9yKSB7XHJcbiAgICBsZXQgbWFwID0gbmV3IE1hcCgpO1xyXG4gICAgbGV0IGZ1bmNBY3RvciA9IGFjdG9yO1xyXG4gICAgbWFwLnNldChmdW5jQWN0b3IsIGFjdG9yKTtcclxuICAgIGNvbnNvbGUubG9nKG1hcC5nZXQoZnVuY0FjdG9yKSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1vdmllOyIsIlxyXG4vL3dlIGltcG9ydCBvdXIgZGlmZXJlbnQgY2xhc3Nlc1xyXG5pbXBvcnQgTW92aWUgZnJvbSAnLi9Nb3ZpZSc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInO1xyXG5pbXBvcnQgQWN0b3IgZnJvbSAnLi9BY3Rvcic7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy93ZSBpbnN0YW5jaWF0ZSBvdXIgTG9nZ2VyIGNsYXNzXHJcbmxldCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XHJcblxyXG4vL3dlIGNyZWF0ZSBhIG1vdmllIGFuZCBhbiBhY3RvciBcclxubGV0IHRpdGFuaWMgPSBuZXcgTW92aWUoXCJUaXRhbmljXCIsIDE5OTcsIDE5NCk7XHJcbmxldCBsZW9uYXJkbyA9IG5ldyBBY3RvcihcIkxlb25hcmRvIERpQ2FwcmlvXCIsIDQyKTtcclxuXHJcbi8vd2UgY3JlYXRlIGFuIG9iamVjdCB0aGF0IHdlIHVzZSBsYXRlciwgb24gdGhlIE1vdmllIG1ldGhvZCBhZGRDYXN0KClcclxubGV0IG90aGVyQ2FzdCA9IFtcclxuICBuZXcgQWN0b3IoJ0thdGUgV2luc2xldCcsIDQxKSxcclxuICBuZXcgQWN0b3IoJ0JpbGwgWmFuZScsIDUxKSxcclxuXTtcclxudGl0YW5pYy5hZGRDYXN0KGxlb25hcmRvKTtcclxudGl0YW5pYy5hZGRDYXN0KG90aGVyQ2FzdCk7XHJcblxyXG4vL3dlIGNyZWF0ZSB0aGlzIG9iamVjdCwgdGhhdCBoYXZlIDIgZnVuY3Rpb25zXHJcbi8vc2hhcmUoKSAtPiAgc2hvdyBvbiBjb25zb2xlIGN1cnJlbnQgb2JqZWN0IHRpdGxlIHZhcmlhYmxlICh3aWxsIGJlIGEgbW92aWUgb2JqZWN0IGhlcmUpXHJcbi8vbGlrZSgpIC0+IHNpbWlsYXIgdGhhbiBzaGFyZSgpIGZ1bmN0aW9uXHJcbmxldCBzb2NpYWwgPSB7XHJcbiAgc2hhcmU6IGZ1bmN0aW9uKGZyaWVuZE5hbWUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2hhcmUgXCIgKyB0aGlzLnRpdGxlICsgXCIgd2l0aCBcIiArIGZyaWVuZE5hbWUgKyBcIi5cIik7XHJcbiAgfSxcclxuICBsaWtlOiBmdW5jdGlvbihmcmllbmROYW1lKSB7XHJcbiAgICBjb25zb2xlLmxvZyhmcmllbmROYW1lICsgXCIgbGlrZXMgXCIgKyB0aGlzLnRpdGxlICsgXCIuXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vdGhlIGluc3RhbmNlIG9mIE1vdmllIHRpdGFuaWMsIGlzIGFzc2lnbmVkIHRoZSAyIGZ1bmN0aW9ucyBpbiBzb2NpYWwgb2JqZWN0XHJcbk9iamVjdC5hc3NpZ24odGl0YW5pYywgc29jaWFsKTtcclxuXHJcbi8vdGl0YW5pYyBpcyBhc3NpZ25lZCBhIG5ldyBldmVudCwgXCJwbGF5XCIgaXMgdGhlIGlkIG9mIGV2ZW50LCBhbmQgbG9nZ2VyLmxvZyBpcyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdXNlZCBmb3IgdGhpcyBldmVudCBpZiBjYWxsZWRcclxudGl0YW5pYy5vbihcInBsYXlcIiwgbG9nZ2VyLmxvZyk7XHJcbnRpdGFuaWMucGxheSgpOyAgLy93ZSBydW4gdGl0YW5pYyBwbGF5KCkgbWV0aG9kIHRoYXQgY2FsbCBwbGF5IGV2ZW50XHJcblxyXG4vL3dlIHVzZSBzaGFyZSBhbmQgbGlrZSBtZXRob2RzIHRoYXQgd2VyZSBhc3NpZ25lZCB0byB0aXRhbmljIGJlZm9yZVxyXG50aXRhbmljLnNoYXJlKFwiQmFycmFjayBPYmFtYVwiKTtcclxudGl0YW5pYy5saWtlKFwiQmFycmFjayBPYmFtYVwiKTtcclxuXHJcblxyXG4iXX0=
