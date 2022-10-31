import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("eventOne", () => {
  console.log("Meu primeiro evento");
});

function eventExec(...args: any[]) {
  console.log("Meu primeiro evento - listener -> " + args);
}

eventEmitter.addListener("eventOne", eventExec);

eventEmitter.removeAllListeners("eventOne");


eventEmitter.emit("eventOne", "arg", "arg2");