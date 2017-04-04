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
    this.events = {}; //can use _events instead of events to indicate that it should 
    //be trated as a private property.
  }
  this.on(event, callback) { //the 'event' parameter is neccesary? i think yes because
    //every time the event is called, it will trigger the exact same callback(listener).
    console.log("an event ocurred");
    callback && callback(); //if callback exists(the && return TRUE), run it.
  }
  this.emit(event) {

  }
  this.off(event, method) { //we pass the event and the method to remove from.
    //search every event until match, and delete it. 
    for ( in event) {

    }
  }
}

/*
class Movie {
  constructor(title, year, duration) {
    this.title = title
    this.year = year
    this.duration = duration
  }
  play() {

  }
  pause() {

  }
  resume() {

  }
}*/