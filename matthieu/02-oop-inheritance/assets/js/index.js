


//import 'eventEmitter';


class EventEmitter 
{
  constructor() {
    this.listeners = new Map();
  }

  //label:  identifies the type of notifications the listener wants to receive
  //callback: the callback function we should invoke for the listener when we emit that event. Puede ser cualquier cosa
  on(label, callback) { //addListener
    this.listeners.has(label) || this.listeners.set(label, []);
    this.listeners.get(label).push(callback);
  }

  off(label, callback) { //removeListener
    let isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };

    let listeners = this.listeners.get(label),
      index;

    if (listeners && listeners.length) {
      index = listeners.reduce((i, listener, index) => {
        return (isFunction(listener) && listener === callback) ?
          i = index :
          i;
      }, -1);

      if (index > -1) {
        listeners.splice(index, 1);
        this.listeners.set(label, listeners);
        return true;
      }
    }
    return false;
  }

  emit(label, ...args) {
    let listeners = this.listeners.get(label);
    if (listeners && listeners.length) {
      listeners.forEach((listener) => {
        listener(...args);
      });
      return true;
    }
    return false;
  }
}




class Movie extends EventEmitter
{
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  play() {
    this.emit("play", "Play");
  }
  pause() {
    this.emit("pause", "Pause");
  }
  resume() {
    this.emit("resume", "Resume");
  }

  addCast(actor) {
    let map = new Map();
    let funcActor = actor;
    map.set(funcActor, actor);
    console.log(map.get(funcActor));
  }
}



class Logger {
  constructor() {}
  log(info) {
    console.log("The " + info + " event has been emitted.");
  }
}



class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}





//IMPLEMENTATION
let logger = new Logger();

let titanic = new Movie("Titanic", 1997, 194);
let leonardo = new Actor("Leonardo DiCaprio", 42);

let otherCast = [
  new Actor('Kate Winslet', 41),
  new Actor('Bill Zane', 51),
];



let social = {
  share: function(friendName) {
    console.log("Share " + this.title + " with " + friendName + ".");
  },
  like: function(friendName) {
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
