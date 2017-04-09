
//Ex 3
let isFunction = function(obj) {  
    return typeof obj == 'function' || false;
  };

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

//ex 4
class Movie extends EventEmitter{
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

  play(){    
    this.emit("play");
    console.log(this.title + " playing.");
    this.playing = true;
  }

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

  //recursive
  addCast2(cast){
    if (Array.isArray(cast)){
      cast.forEach((actor) => {
        this.addCast(actor)
      });
    }
    else{
      this.cast.push(cast);      
    }
  }

  //adds array as an element 
  addCast3(cast){
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

let Sherlock = new Movie('Sherlock', 2012, 120);
//Sherlock.play();
Sherlock.on("pause", lightOn);
Sherlock.on("resume", lightOff);
//Sherlock.pause();
//Sherlock.resume();

//Ex 5
class Logger {
  log(info){
    console.log(info + " event emited");  
  }
}

let logger = new Logger();
/*Sherlock.on("play", logger.log);     
Sherlock.on("pause", logger.log); 
Sherlock.on("resume", logger.log); 
Sherlock.play();
Sherlock.pause();
Sherlock.pause();
Sherlock.resume();
Sherlock.resume();*/

let iceAge = new Movie('Ice Age', 2008, 90);
iceAge.play();


//Ex 6

let Social = {  

  share: function(friendName){
    console.log(`${friendName} shares ${this.title}`);
  },

  like: function(friendName){
    console.log(`${friendName} likes ${this.title}`);
  }
}

Object.assign(iceAge, Social);
iceAge.like("Ana");
iceAge.share("Pedro");

//Ex 7

class Actor {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

}

//test Ex 8
let arnold = new Actor('Arnold Schwarzenegger', 50);
let will = new Actor('Will Smith', 52);
let otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
];

iceAge.addCast(arnold);
//console.log(iceAge.cast);

iceAge.addCast3(otherCast);
console.log(iceAge.cast);

iceAge.addCast2(will);
console.log(iceAge.cast);

