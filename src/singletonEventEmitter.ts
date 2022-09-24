import EventEmitter from "events";

export class EventEmitterSingleton {
  private static instance: EventEmitter;

  public static getInstance(): EventEmitter {
    if (!this.instance) {
      this.instance = new EventEmitter;
    }

    return this.instance;
  }
}