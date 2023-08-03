// eventEmitter.ts
type EventListener<T> = (data: T) => void;

class EventEmitter<T> {
  private events: { [event: string]: EventListener<T>[] } = {};

  on(event: string, listener: EventListener<T>) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event: string, data: T) {
    const listeners = this.events[event];
    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }
}

export default EventEmitter;
