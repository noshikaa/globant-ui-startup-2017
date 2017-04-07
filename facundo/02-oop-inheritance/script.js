window.addEventListener("load", function () {
    //tryMovie();
    //tryEventEmitter();
    //tryTogether();
    //trySocial();
    tryActors();
})
/**
 * 
 * 
 * @class EventEmitter
 * A class that implements an Observer Pattern, it Subscribes, emits, and unsubscribes
 * from events.
 */
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
/**
 * 
 * 
 * @class Movie
 * @extends {EventEmitter}
 * A Class that extends event emitter, it has the Clasic Movie attributes, and emits an event
 * when play, resume and pause
 */
class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }

    play() {
        this.emit("play", "The 'play' event has been emitted")
    }
    pause() {
        this.emit("pause", "The 'Pause' event has been emitted")
    }
    resume() {
        this.emit("resume", "The 'Resume' event has been emitted")
    }
    
    addCast(actors) {
        if (Array.isArray(actors)) {
            for (let i = 0; i < actors.length; i++) {
                if (actors[i] instanceof Actor) {
                    this.cast.push(actors[i]);
                }
            }
        }
        else {
            if (actors instanceof Actor) {
                this.cast.push(actors);
            }
        }
    }
    castToString(){
        let str = "Cast: ";
        for (let i = 0; i < this.cast.length; i++) {
            str +=  `\n\tName: ${this.cast[i].name}, Age: ${this.cast[i].age}` }
            return str
    }
    tostring() {
        let str = "\nMovie title: " + this.title + "\nPremiere Year: " + this.year + "\nDuration: " + this.duration + " minutes\n"+this.castToString();
        return str
    }
}
/**
 * 
 * 
 * @class Logger
 * Class for exercise 6 it just log something in the console
 */
class Logger {
    log(info) {
        console.log(info);
    }
}
class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

/**
 * The Folowwing functions are Tests for the classes implemented previously.
 * 
 */
function tryMovie() {
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

function tryTogether() {
    let terminator = new Movie('Terminator', 1984, 90);
    let logger = new Logger();
    terminator.on('resume', logger.log);
    terminator.resume();
}
function trySocial() {
    let Social = {
        age: 30,
        share: function (friendName) {
            let output = `Share ${this.title} with ${friendName}`;
            console.log(output);
        },
        like: function (friendName) {
            let output = `${friendName} likes ${this.title}`;
            console.log(output);
        }
    };
    let movie = new Movie("The Shining", 1980, 120);
    Object.assign(movie, Social);
    movie.share('Jorge');
    movie.like('Pedro')
}
function tryActors(){
    let terminator = new Movie('Terminator I', 1985, 60);
    let arnold = new Actor('Arnold Schwarzenegger', 50);
    let otherCast = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
    ];

    terminator.addCast(arnold);
    terminator.addCast(otherCast);
    console.log(terminator.tostring())
}


