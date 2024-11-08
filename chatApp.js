import EventEmitter from "events";
const myEmitter = new EventEmitter();
export function sendMessage(username, message, emitter) {
  emitter.emit("message", { username, message });
}

myEmitter.on("message", ({ username, message }) => {
  console.log(`${username}: ${message}`);
});

sendMessage("Вася", "Привет!", myEmitter);
sendMessage("Баламут", "Здрасте! Кто хочет со мной в клуб?", myEmitter);
sendMessage("Кабан", "Я в берлоге.", myEmitter);
