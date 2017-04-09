window.onload = function(){
  testEx4();
  testEx5();
  testEx6();
  testEx8();
}


//Exercise 3
/**
 * Determines if an object is a function
 * 
 * @return {Boolean}
 */
let isFunction = function(obj) {  
    return typeof obj == 'function' || false;
  };


/**
 * The EventEmitter class has the methods for subscribing (on()), deleting (off()) and emitting (emit()) events. 
 */
class EventEmitter  {

  constructor() {
    this.listeners = new Map();
  }

  on(label, callback) { 
    this.listeners.has(label) || this.listeners.set(label, []);
    this.listeners.get(label).push(callback);
  }

  off(label, callback) {
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


  emit(label) {  
    let listeners = this.listeners.get(label);

    if (listeners && listeners.length) {
        listeners.forEach((listener) => {
            listener(label); 
        });
        return true;
    }
    return false;

  }
}

//Exercise 4


class Movie extends EventEmitter{
 
/**
 * 
 * Suscribes the movie to the pururu and lightOff functions for the play event. 
 * Creates an empty array cast to store actors
 * Creates a boolean attribute playing to check if the movie is playing or paused. 
 *
 * @param  {String} title
 * @param  {Number} year
 * @param  {Number} duration
 */
  constructor(title, year, duration){
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.on('play', pururu);
    this.on("play", lightOff);  
    this.playing = false;
    this.cast = new Array();
  }


  /**
   * Publishes the play event, changes the status of the playing attribute and logs information to the console
   */
  play(){    
    this.emit("play");
    console.log(this.title + " playing.");
    this.playing = true;
  }

/**
 *  Checks the status of the playing attribute, to either
 *  publish the pause event, change the status of the playing attribute and log information to the console;
 *  or just log information to the console
 */
  pause(){
    if (this.playing) {
      console.log(this.title + ' paused');
      this.emit("pause");
      this.playing = false;
    }
    else {
      console.log(this.title + ' already paused!');
    }
    
  }

/**
 *  Checks the status of the playing attribute, to either
 *  publish the resume event, change the status of the playing attribute and log information to the console;
 *  or just log information to the console
 */

  resume(){
    if (!this.playing) {
      console.log(this.title + ' resumed');
      this.emit("resume");
      this.playing = true;

    }
    else {
      console.log(this.title + ' already playing!');
    }    
  }  

/**
 * Adds actor(s) to the cast array of the movie
 * @param {Actor} cast or
 * @param {Array} cast
 */
  addCast(cast){
    if (Array.isArray(cast)){
      cast.forEach((actor) =>  {
        this.cast.push(actor); 
      });
    }
    else{
      this.cast.push(cast); 
    }

  }

  //adds array as an element 
  addCast2(cast){
    this.cast.push(cast);
  }

}


let lightOff = function lightOff(){
    console.log("Luz apagada");
  }


let lightOn = function lightOn(){
    console.log("Luz prendida");
  }

let pururu = function pururu(){
  console.log("Pururu listo");
}

let testEx4 = function testEx4(){
  console.log("Test exercise 4")
  Sherlock = new Movie('Sherlock', 2012, 120);    //global, to use it in other test cases
  Sherlock.play();
  Sherlock.on("pause", lightOn);
  Sherlock.on("resume", lightOff);
  Sherlock.pause();
  Sherlock.resume();

}

//Exercise 5
class Logger {
  log(info){
    console.log(info + " event emited");  
  }
}

let testEx5 = function testEx5(){
  console.log("Test exercise 5")  
  let logger = new Logger();
  Sherlock.on("play", logger.log);     
  Sherlock.on("pause", logger.log); 
  Sherlock.on("resume", logger.log); 
  Sherlock.play();
  Sherlock.pause();
  Sherlock.pause();
  Sherlock.resume();
  Sherlock.resume();
}

//Exercise 6
/**
 * Object with two functions to share or like a movie object. 
 * @type {Object}
 * 
 */
let Social = {  

  share: function(friendName){
    console.log(`${friendName} shares ${this.title}`);
  },

  like: function(friendName){
    console.log(`${friendName} likes ${this.title}`);
  }
}

let testEx6 = function testEx6(){
  console.log("Test exercise 6")
  iceAge = new Movie('Ice Age', 2008, 90);   //global, to use it in other test cases
  iceAge.play();
  Object.assign(iceAge, Social);
  iceAge.like("Ana");
  iceAge.share("Pedro");

}


//Exercise 7

class Actor {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

}

//test Exercise 8

let testEx8 = function testEx8(){
  console.log("Test exercise 8")
  let arnold = new Actor('Arnold Schwarzenegger', 50);
  let will = new Actor('Will Smith', 52);
  let otherCast = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
  ];
  let moreCast = [
    new Actor('Bruce Willis', 62),
    new Actor('Jason Statham', 49)
  ];

  iceAge.addCast(arnold);
  console.log(iceAge.cast);

  iceAge.addCast(otherCast);
  console.log(iceAge.cast);

  iceAge.addCast2(will);
  console.log(iceAge.cast);

  iceAge.addCast2(moreCast);
  console.log(iceAge.cast);

}


