

import EventEmitter from './EventEmitter';
import Movie from './Movie';
import Logger from './Logger';
import Actor from './Actor';





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

titanic.addCast(leonardo);
titanic.addCast(otherCast);
