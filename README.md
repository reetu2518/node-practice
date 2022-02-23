# Node-practice

### What is NodeJS?
#### Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.


### What is async and await?
#### async and await make promises easier to write
#### 1. async makes a function return a Promise
#### 2. await makes a function wait for a Promise
##### With Node v8, the async/await feature was officially rolled out by the Node to deal with Promises and function chaining. The functions need not to be chained one after another, simply await the function that returns the Promise. But the function async needs to be declared before awaiting a function returning a Promise.


### What is callback function?
#### A callback is a function which is called when a task is completed, thus helps in preventing any kind of blocking and a callback function allows other code to run in the meantime. Callback is called when task get completed and is asynchronous equivalent for a function. Using Callback concept, Node.


### What is promise?
#### A Promise in Node means an action which will either be completed or rejected. In case of completion, the promise is kept and otherwise, the promise is broken. So as the word suggests either the promise is kept or it is broken. And unlike callbacks, promises can be chained. Callbacks to Promises.


### What is event lopp?
#### The event loop is what allows Node.js to perform non-blocking I/O operations
#### Features of Event Loop:
#### Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
#### The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
#### The event loop allows us to use callbacks and promises.

###### Note: When Node.js starts, it initializes the event loop, processes the provided input script which may make async API calls, schedule timers, or call process.nextTick(), then begins processing the event loop.


### What is middelware?
#### Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.


### What is mongoose?
#### Mongoose is basically a package that serves as a mediator between the NodeJS application and MongoDB server. It is an Object Document Mapper(ODM) that allows us to define objects with strongly-typed-schema that is mapped to a MongoDB document. Mongoose supports all the CRUD operations – Creating, Retrieving, Updating, and Deleting.

### What is MongoDB?
#### MongoDB is a NoSQL database.MongoDB is a JSON document datastore. It allows you to store and query JSON style documents with a few smarts on top. MongoDB stores data in BSON format both internally, and over the network, but that doesn’t mean you can’t think of MongoDB as a JSON database. MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time

### Node.js allows us to create and handle custom events easily by using events module. Event module includes EventEmitter class which can be used to raise and handle custom events.

### The following example demonstrates EventEmitter class for raising and handling a custom event.

  
### "use strict"

### use strict will restrict to js on the time of execution like for their decleartions, datatypes, intilizatio, declaration 
### in other words "use stricts" instructs the browser to use the strict mode
#### function sum(a) {
####    console.log("hii", a);
#### }
#### sum(10)

####  console.log(x);
#### var x = 10;
#### var x = 5;
#### console.log(x, "x redeclare");
#### let c;
#### c = 51
#### let c
#### console.log(c, "b doesn't allow");


### Array from method 
###  The Array.from() method returns an array from any iterable object.
###  Create an array from a string:
###  in other words create array from string to make iterable object

#### let text = "ABCDEF"
#### let a = Array.from(text)
#### console.log(a);

###  array keys method
###  The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
###  this method get all keys of iterable object for each index in array
#### console.log(a.keys(), "arrray keys");
#### for (const key of a.keys()) {
 ####    console.log(key);
#### }


###  array slice method 
####  The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
####  create a shallow copy remove element from given index
#### let arrSlice = ['aaa', 'bbb', 'cc', 'ddd', 'eee']
#### console.log(arrSlice.slice(1), "array slice");  


### array filter method
### The filter() method creates a new array with all elements that pass the test implemented by the provided function.
#### console.log(arrSlice.filter(word => word.length>2), "array filter");

###  Map, filter, reduce methods
#### let arr = [1, 2, 3, 4, 5, 6]

###  square of numbers
#### let sqrArr = arr.map((x) => x*2)
####  console.log(sqrArr, "square of array");

