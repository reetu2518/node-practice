const express = require("express")
const events = require("events");
const eventEmitter = new events.EventEmitter();

eventEmitter.on("actionEvent", (a, b) => {
    console.log("event emtiter");
    console.log(a, b);
})

eventEmitter.emit("actionEvent", "a", "b")

const app = express();

app.get("/", (req, res) => {
    console.log("home");
});

app.listen(3000, console.log("server working at 3000"))