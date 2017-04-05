window.addEventListener("load", function () {
    dothings();
    tryEventEmitter();
})
class Movie {
    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    play() {
        console.log("You play the Movie")
    }
    pause() {
        console.log("You Pause the Movie")
    }
    resume() {
        console.log("You resume the Movie")
    }
    tostring() {
        let str = "\nThe movie is: " + this.title + "\nThe year is: " + this.year + "\nThe duration is: " + this.duration + " minutes";
        return str
    }

}
function dothings() {
    var movie1 = new Movie("Toy Story", 1992, 180);
    var movie2 = new Movie("The Shining", 1980, 120);
    var movie3 = new Movie("Harry Potter", 2004, 140);
    movie1.play();
    movie2.pause();
    movie3.resume();
    console.log(movie1.tostring());
    console.log(movie2.tostring());
    console.log(movie3.tostring());
}
function error(message, ...args) {
    console.error.apply(console, [message].concat(args))
    console.trace()
}

class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(event, listener) {
        if (typeof listener != "function") {
            throw new TypeError()
        }
        var listeners = this.events[event] || (this.events[event] = [])
        if (listeners.indexOf(listener) != -1) {
            console.log("The listener is already subscribed ");
        }
        this.events[event].push(listener);
    }

    off(event, listener) {
        if (typeof listener != "function") {
            throw new TypeError()
        }
        var listeners = this.events[event]
        if (!listeners || !listeners.length) {
            console.log("The event array is empty");
            return false;
        }
        var indexOfListener = listeners.indexOf(listener)
        if (indexOfListener == -1) {
            console.log("The listener is not subscribed already");
            return false;
        }
        this.events[event].splice(indexOfListener, 1)
        return true;
    }


    emit(event, ...args) {
        let listeners = this.events[event];
        if (!listeners || !listeners.length) {
            console.log("The event array is empty");
            return false;
        }
        listeners.forEach((listener) => {
            listener(...args);
        });
        return true;
    }

    once(event, listener) {
        var eventsInstance = this
        function onceCallback() {
            eventsInstance.off(event, onceCallback)
            listener.apply(null, arguments)
        }
        this.on(event, onceCallback)
    }
}

function tryEventEmitter() {
    var emitter = new EventEmitter();
    var list1 = function (name) {
        console.log('Hello, ' + name + '!');
    };
    let list2 = function (name) {
        console.log('World, ' + name + '!');
    };
    emitter.on('TheEvent', list1);
    emitter.on('TheEvent', list2);
    emitter.emit('TheEvent', "Test");
}

