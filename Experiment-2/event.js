const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("response", (name, id) => {
    console.log("Hello", name);
});

emitter.on("response", (name, id) => {
    console.log("Your ID is", id);
});


emitter.emit("response", "Anurag", 151);