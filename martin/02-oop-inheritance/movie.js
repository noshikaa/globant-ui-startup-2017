'use strict';
//custom object for exer 1.
var Movie = {
  title: "Star Wars",
  year: "1977",
  duration: "121 minutes",
  play() {},
  pause() {},
  resume() {}
};
//exer 3.
class EventEmitter {
  constructor() {
    this.events = {}; //this is an object.
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
    if (typeof this.events[event] === 'object') { //check if it is an object.
      this.events[event].forEach(function(i) {
        i.apply();
      })
    } else console.error('uknown event');
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