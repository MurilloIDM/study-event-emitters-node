export function processExit() {
  process.on("exit", () => {
    console.log("[step 01] exit module...");
  });

  process.on("beforeExit", () => {
    console.log("[step 00] before exit module...");
  });

  process.emit("beforeExit", 0);
  process.exit();
}