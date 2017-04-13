import Logger from "./Logger.js";
import Actor from "./Actor.js";
import Movie from "./Movie.js";

window.onload = function(){
  testEx4();
  testEx5();
  testEx6();
  testEx8();
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

}


