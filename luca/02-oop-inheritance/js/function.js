
/* Class EventEmiter is used to store callbacks the later will be 
 * used with emit
 */
class EventEmitter {
    constructor() {
        this.events = {};
    }

    /*
    * Emit the callback's associated with the event.
    * input: event
    */
    emit(event) {
        if (this.events[event]) {
            /* it runs in all the events called as event */
            this.events[event].forEach(function(i){
                i.call(this, event);
            })
        } else {
            console.error('Evento desconocido');
        }
    }

    /*
    * Stores the event with the callback in events.
    * input: event, callback
    */
    on(event, callback) {              
        if (this.events[event] === undefined) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    /*
    * Takes out the callback associated with the callback.
    * input: event, callback
    */
    off(event, callback) {
        this.events[event];
        if(this.events[event] === undefined) {
            console.error('Evento desconocido');
        } else {
            this.events[event] = this.events[event].filter(item => item !== callback);
        }
    }
}


/*
* Class Movie, extends from EventEmitter and Social.
* input: title, year, duration
*/
class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        Object.assign(this, Social);
        this.cast = [];
    }

    /*
    * Add's an object Actor or array of object's Actors.
    * input: newCast
    */
    addCast(newCast) {
        if (newCast.constructor === Array) {
            this.cast.push.apply(this.cast, newCast);
        } else {
            this.cast.push(newCast);
        }
    }

    /*
    * Publish (or Emits) the play event.
    */
    play() {
        this.emit("play");
    }

    /*
    * Publish (or Emits) the pause event.
    */
    pause() {
        this.emit("pause");
    }

    /*
    * Publish (or Emits) the resume event.
    */
    resume() {
        this.emit("resume");
    }
}

/*
* Class Logger
*/
class Logger {

    /*
    * Shows the info in the console.
    * input: info
    */
    log(info) {
        console.log("The " + info + " event is playing");
    }
}

/*
* Class Social
*/
let Social = {

    /*
    * Shows the friendName in the console.
    * input: friendName
    */
    share(friendName) {
        console.log("Share " + this.title + " name with " + friendName);
    },

    /*
    * Shows the friendName in the console.
    * input: friendName
    */
    like(friendName) {
        console.log("Like " + this.title + " name with " + friendName);
    }
}

/*
* Class Actor
* input: name, age
*/
class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

