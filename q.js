// Prime Number

 

var num = 12;

const isPrime = num => {

    for(let i = 2; i < num; i++)

      if(num % i == 0) return false;

    return num > 1;

  }

console.log("Prime: ", isPrime(num));

 

// 2nd highest

 

var arr = [10,15,80,70,100,100];

var arrSize = arr.length;

function SecondLargest(arr, arrSize) {

    for( let i = arrSize-1; i>=0; i--) {

        if(arr[i] != arr[arrSize-1]) {

            return arr[i -1]

        }

    }

}

console.log("Second Largest is : ", SecondLargest(arr, arrSize));

 

// program to find the HCF or GCD of two integers

 

let hcf;

// take input

const number1 = 60;

const number2 = 72;

// looping from 1 to number1 and number2

for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers

    if( number1 % i == 0 && number2 % i == 0) {

        hcf = i;

    }

}

// display the hcf

console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

 

 

// program to find the factorial of a number

 

// take input from the user

const number = 5;

 

// checking if number is negative

if (number < 0) {

    console.log('Error! Factorial for negative number does not exist.');

}

 

// if number is 0

else if (number === 0) {

    console.log(`The factorial of ${number} is 1.`);

}

 

// if number is positive

else {

    let fact = 1;

    for (i = 1; i <= number; i++) {

        fact *= i;

    }

    console.log(`The factorial of ${number} is ${fact}.`);

}

 

 

 

// https://www.programiz.com/javascript/examples/factorial