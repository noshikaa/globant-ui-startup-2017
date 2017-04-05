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
class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super()
    this.title = title
    this.year = year
    this.duration = duration
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
}
class Logger {
  constructor() {}
  log() {
    console.log("The event has been emmited");
  }
}
//custom object for exer 1.
//Object contructor (basic way). 
/*var movie = new Object();

movie.title = "Star Wars",
  movie.year = "1977",
  movie.duration = "121 minutes",
  movie.play = function() {},
  movie.pause = function() {},
  movie.resume = function() {};*/
//Object Literal (standar prototype always)
/*var Movie = {
  title: "Star Wars",
  year: "1977",
  duration: "121 minutes",
  play() {},
  pause() {},
  resume() {}
};*/
//Native Object Orietation :constructor and standar prototype (can be changed)).
/*var Movie = function(title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.play = function() {};
    this.pause = function() {};
    this.resume = function() {};
  }*/
//declaring 'class' Movie derived from EventEmitter(remains prototype-based,
//still being an object and 'class' it's just sugar).