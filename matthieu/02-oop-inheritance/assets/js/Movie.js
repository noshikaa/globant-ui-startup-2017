import EventEmitter from './EventEmitter';

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

module.exports = Movie;