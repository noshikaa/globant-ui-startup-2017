'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    _createClass(EventEmitter, [{
        key: 'emit',
        value: function emit(event) {
            if (this.events[event]) {
                /* it runs in all the events called as event */
                this.events[event].forEach(function (i) {
                    i.call(this, event);
                });
            } else {
                console.error('Evento desconocido');
            }
        }
    }, {
        key: 'on',
        value: function on(event, callback) {
            if (this.events[event] === undefined) {
                this.events[event] = [];
            }
            this.events[event].push(callback);
        }
    }, {
        key: 'off',
        value: function off(event, callback) {
            this.events[event];
            if (this.events[event] === undefined) {
                console.error('Evento desconocido');
            } else {
                this.events[event] = this.events[event].filter(function (item) {
                    return item !== callback;
                });
            }
        }
    }]);

    return EventEmitter;
}();

var Movie = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        _this.title = title;
        _this.year = year;
        _this.duration = duration;
        Object.assign(_this, Social);
        _this.cast = [];
        return _this;
    }

    _createClass(Movie, [{
        key: 'addCast',
        value: function addCast(input) {
            if (input.constructor === Array) {
                this.cast.push.apply(this.cast, input);
            } else {
                this.cast.push(input);
            }
        }
    }, {
        key: 'play',
        value: function play() {
            this.emit("play");
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.emit("pause");
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.emit("resume");
        }
    }]);

    return Movie;
}(EventEmitter);

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: 'log',
        value: function log(info) {
            console.log("The " + info + " event is playing");
        }
    }]);

    return Logger;
}();

var Social = {
    share: function share(friendName) {
        console.log("Share " + this.title + " name with " + friendName);
    },
    like: function like(friendName) {
        console.log("Like " + this.title + " name with " + friendName);
    }
};

var Actor = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};