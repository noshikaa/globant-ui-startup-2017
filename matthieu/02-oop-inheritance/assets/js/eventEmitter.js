

class EventEmitter 
{
  constructor() {
    this.listeners = new Map();  //listeners array
  }

  //label:  identifies the type of notifications the listener wants to receive
  //callback: the callback function we should invoke for the listener when we emit that event. Puede ser cualquier cosa
  on(label, callback) { //addListener
    this.listeners.has(label) || this.listeners.set(label, []);
    this.listeners.get(label).push(callback);
  }

  off(label, callback) { //removeListener
    let isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };

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

  //emit method
  //1rst parameter is the event id we receive
  //2nd parameter is the information about event that we show 
  emit(label, ...args) {
    let listeners = this.listeners.get(label);  //we get all listeners events that correspond to the event id we received
    if (listeners && listeners.length) {
      listeners.forEach((listener) => {  //anonym function, we call the function asociated with this event
        listener(...args);
      });
      return true;
    }
    return false;
  }
}


module.exports = EventEmitter;