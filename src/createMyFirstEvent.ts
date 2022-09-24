import { EventEmitter } from "events";

export function createMyFirstEvent() {
  // 1 - Criando uma instância
  const eventEmitter = new EventEmitter();

  // 2 - Adicionando e ouvindo um evento
  eventEmitter.on("myEvent", () => {
    console.log("[step 1] Execute myEvent...");
  });

  eventEmitter.emit("myEvent");
}