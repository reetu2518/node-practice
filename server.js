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

let arr = Array.from(Array(100+1).keys()).slice();
// console.log("Array", arr);

let ar = [12,25,35,78,15,35,15,35];
let arSort = ar.sort();
let uniqArr = []
let dupliArr = []
// index of return position in first occure of value in string
for (let index = 0; index < ar.length; index++) {
    if (uniqArr.indexOf(ar[index]) === -1) {
        uniqArr.push(ar[index])
    } else {
        dupliArr.push(ar[index])
    }
}

console.log("arrsort", arSort);
console.log("uniqArr", uniqArr);
console.log("dupliArr", dupliArr);

for (let i = 0; i < ar.length; i++) {
    element = ar[i];
    
}



app.listen(3000, console.log("server working at 3000"));
