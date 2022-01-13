const express = require("express");
const app = express();


// event emitter
/*
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
*/

var f = function(req, res) {
    console.log("function");
    return "hiii"
}

(async () => {
  let response = await f();
  let user = await response.json();
  console.log(user, "user");
});

app.listen(3000, console.log("server working at 3000"));
