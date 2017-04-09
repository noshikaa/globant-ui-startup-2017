
//we import our diferent classes
import EventEmitter from './EventEmitter';
import Movie from './Movie';
import Logger from './Logger';
import Actor from './Actor';





//we instanciate our Logger class
let logger = new Logger();

//we create a movie and an actor 
let titanic = new Movie("Titanic", 1997, 194);
let leonardo = new Actor("Leonardo DiCaprio", 42);

//we create an object that we use later, on the Movie method addCast()
let otherCast = [
  new Actor('Kate Winslet', 41),
  new Actor('Bill Zane', 51),
];
titanic.addCast(leonardo);
titanic.addCast(otherCast);

//we create this object, that have 2 functions
//share() ->  show on console current object title variable (will be a movie object here)
//like() -> similar than share() function
let social = {
  share: function(friendName) {
    console.log("Share " + this.title + " with " + friendName + ".");
  },
  like: function(friendName) {
    console.log(friendName + " likes " + this.title + ".");
  }
};

//the instance of Movie titanic, is assigned the 2 functions in social object
Object.assign(titanic, social);

//titanic is assigned a new event, "play" is the id of event, and logger.log is the callback function used for this event if called
titanic.on("play", logger.log);
titanic.play();  //we run titanic play() method that call play event

//we use share and like methods that were assigned to titanic before
titanic.share("Barrack Obama");
titanic.like("Barrack Obama");


