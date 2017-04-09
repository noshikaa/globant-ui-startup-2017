//Logger class
//method log(info)  show that an event passed as info parameter has been emited on console

class Logger {
  constructor() {}
  log(info) {
    console.log("The " + info + " event has been emitted.");
  }
}

module.exports = Logger;