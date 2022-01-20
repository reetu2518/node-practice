setTimeout(function () {
    console.log("timer");
}, 5000)

// callback function example
function x(y) {
    console.log("x is executing");
    y();
}

x(function y() {
  console.log("y is executing");  
})


window.onload=function(){
    function attachEventListner() {
        let count = 1;
        document.getElementById("clickMe").addEventListener("click", function xyz() {
            console.log("button clicked!", count++);
        })
    }
    attachEventListner();
};


// higher order function
function add(x, y) {
    return x + y;
}

// here x is higher order function
// a is callback function 
// clouser example
function x(a) {
    let b = 10;
    function ab() {
        console.log(b);
    }
    ab();
    return add(5, 6);
}

console.log(x())

// anonymus function
const a = function () {
    return ("anonyums function")
}


// function statement
function stm(params) {
    console.log("the way write the function called function statement! function statement is also knwon as function decleration");
}


// function expression
const a = function ab() {
    console.log("function expression is when assign to a variable as a value")
}


console.log(a());