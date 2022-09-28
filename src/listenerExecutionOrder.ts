import { EventEmitter } from "events";

export function listenerExecutionOrder() {
  const eventEmitter = new EventEmitter();

  eventEmitter.once("myEvent", () => {
    console.log("[step 02] listener execution order...");
  });

  eventEmitter.on("myEvent", () => {
    console.log("[step 01] listener execution order...");
  });

  console.log(eventEmitter.eventNames());
  eventEmitter.emit("myEvent");
  eventEmitter.emit("myEvent");
}