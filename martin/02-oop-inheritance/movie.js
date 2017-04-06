'use strict';
//exer 3.
class EventEmitter {
  constructor() {
    this.events = {} //this is an object.
      //can use '_events' instead of 'events' to indicate that it should 
      //be trated as a private property.
  }
  on(event, callback) {
    //check if the event do not exists as an object.
    if (typeof this.events[event] !== 'object') { // 'this.events[event] === undefined' are the same.
      this.events[event] = []; //this is an empty array;
      console.log("an event has been pushed"); //this is just to SEE the advance in console.
    }
    this.events[event].push(callback); //introduce the callback into the array
  }
  emit(event) {
    if (this.events[event]) { //check if it exists.
      console.log(typeof this.events[event]);
      this.events[event].forEach(function(element) {
        element.call();
      })
    } else console.error("uknown event(call .on first)");
    //when a method is executed, emmit it. Example: Movie.play(); <= call emit;
  }
  off(event, callback) { //we pass the event and the function/method to remove from the events array.
    if (typeof this.events[event] === 'object') { //check if the event exists.
      //search every event in the array until match, and remember the key location. 
      let key = -1;
      let i = 0;
      let length = this.events[event].length;
      let found = false;

      while (i < length && !found) {
        if (this.events[event][i] === callback) {
          key = i;
          found = true;
        }
        i++;
      }
      //having the location in the array, remove the callback.
      if (key > -1) this.events[event].splice(key, 1);
      else console.error("the 'callback' cannot be found");
    }
  }
}
//exer4
class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super()
    this.title = title
    this.year = year
    this.duration = duration
    this.actors = []
  }
  play() {
    this.emit("play");
  }
  pause() {
    this.emit("pause");
  }
  resume() {
    this.emit("resume");
  }
  addCast(actor_name) {
    if (actor_name instanceof Array) { //is an array
      for (let i = 0; i < actor_name.length; i++) {
        this.actors.push(actor_name[i]);
      }
    } else if (typeof actor_name === 'object') { //is an object
      this.actors.push(actor_name);
    } else console.error("the argument is not and object or an array");
  }
}
//exer5
class Logger {
  constructor() {}
  log() {
    console.log("The event has been emmited");
  }
}
//exer6
//Object Literal
const Social = {
  share(friendName) {
    let output = `${friendName} share ${this.title}`;
    console.log(output);
  },
  like(friendName) {
    let output = `${friendName} like ${this.title}`;
    console.log(output);
  }
};
//exer 6 test
let starWars = new Movie("Star Wars", 1977, 121);
Object.assign(starWars, Social);
starWars.like("Martin");
starWars.share("Ernesto");

//exer7
class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
//exer 7 test
let arnold = new Actor("Arnold Schwarzenegger", 69);
let sylvester = new Actor("Sylvester Stallone", 70);
let jack = new Actor("Jack Nicholson", 79);

//exer 8 test
let terminator = new Movie('Terminator I', 1985, 60);
let arnold = new Actor('Arnold Schwarzenegger', 50);
let otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
];
terminator.addCast(arnold);
terminator.addCast(otherCast);