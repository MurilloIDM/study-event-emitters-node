import { EventEmitter } from "events";
import { EventEmitterSingleton } from "./singletonEventEmitter";

export function instanceEventEmitterWithoutSingleton() {
  const eventEmitter = new EventEmitter();
  const eventEmitterCopy = new EventEmitter();

  eventEmitter.on("myEvent", () => {
    console.log("[step 2] Run my event without singleton...");
  });

  eventEmitterCopy.emit("myEvent");
}

export function instanceEventEmitterWithSingleton() {
  const eventEmitter = EventEmitterSingleton.getInstance();
  const eventEmitterCopy = EventEmitterSingleton.getInstance();

  eventEmitter.on("myEventWithSingleton", () => {
    console.log("[step 3] Run my event with singleton...");
  });

  eventEmitterCopy.emit("myEventWithSingleton");
}