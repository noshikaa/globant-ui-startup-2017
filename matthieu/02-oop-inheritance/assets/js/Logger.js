class Logger {
  constructor() {}
  log(info) {
    console.log("The " + info + " event has been emitted.");
  }
}

module.exports = Logger;