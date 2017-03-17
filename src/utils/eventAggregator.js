class EventAggregator {
  static instances = {};

  constructor() {
    this.events = {};
  }

  on(event, fn) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    const index = this.events[event].length;
    this.events[event].push(fn);

    return ({
      off: () => {
        this.events[event].splice(index, 1);
      }
    });
  }

  off(fns) {
    if (Array.isArray(fns)) {
      fns.forEach(fn => fn.off());
    }
  }

  emit(event, data) {
    const fns = this.events[event];
    if (Array.isArray(fns)) {
      fns.forEach(fn => {
        if (typeof fn === "function") {
          fn(data);
        }
      });
    }
    return EventAggregator;
  }

  static on(event, fn) {
    return EventAggregator.instance().on(event, fn);
  }

  static emit(event, data) {
    return EventAggregator.instance().emit(event, data);
  }

  static off(fns) {
    return EventAggregator.instance().off(fns);
  }

  static instance(type = "default") {
    if (!EventAggregator.instances[type]) {
      EventAggregator.instances[type] = new EventAggregator();
    }
    return EventAggregator.instances[type];
  }
}

export default EventAggregator;