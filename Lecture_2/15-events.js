// Event Driven Code
const EventEmitter = require("events");
const requester = new EventEmitter();

requester.on("request", (name, age) => {
    console.log("First request completed" + " " + name + " " + age)
});

requester.on("request", (name) => {
    console.log("Second request completed")
});

requester.on("demon", () => {
    console.log("Second request completed")
});

requester.emit("request", "Serik", 29);