const express = require("express");
const { colours } = require("nodemon/lib/config/defaults");
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

let ar = [12,25,35,78,18,35,15,3];
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



// console.log("arrsort", arSort);
// console.log("uniqArr", uniqArr);
// console.log("dupliArr", dupliArr);


// array sorting
for (let j = 0; j < ar.length; j++) {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i-1]>ar[i]) {
            var tmp = ar[i-1]
            ar[i-1] = ar[i]
            ar[i] = tmp
        }    
    }
}

console.log(ar, "sorted array");


// callback functions
function x(y) {
    console.log("x is executing")
    y();
}

x(function y(){
    console.log("y is executing");
})


app.listen(3000, console.log("server working at 3000"));
