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
#### Features of Event Loop:
#### Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
#### The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
#### The event loop allows us to use callbacks and promises.
## -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Node.js allows us to create and handle custom events easily by using events module. Event module includes EventEmitter class which can be used to raise and handle custom events.

### The following example demonstrates EventEmitter class for raising and handling a custom event.
