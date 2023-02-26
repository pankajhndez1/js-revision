// 1 .High-level programming: JavaScript is a high-level language, which means that it has abstractions that manage hardware resources such as memory and CPU.

// let me explain it in simpler terms.

// JavaScript is a type of computer programming language. When we write code in JavaScript, we use commands and instructions to tell the computer what to do.

// Now, computer hardware resources are things like memory (where the computer stores data) and the CPU (which is like the brain of the computer that performs calculations and operations).

// But, JavaScript is a "high-level" language, which means that it has built-in tools and commands that help manage these hardware resources. This makes it easier for programmers to write code without worrying about the details of how the computer is actually processing that code.





//  Garbage collection


// 2. Garbage collection: JavaScript has a garbage-collection algorithm that automatically removes unused objects from memory.


// exaplanation :


// When you write code in JavaScript, your program creates objects (like variables, arrays, and functions) that take up space in your computer's memory. Sometimes, your program doesn't need certain objects anymore, but they're still taking up space in memory.

// To solve this problem, JavaScript has a built-in process called "garbage collection." Garbage collection automatically finds and removes objects from memory that are no longer being used by your program. This helps keep your program running smoothly and prevents it from using up too much memory. You don't have to worry about doing anything special to remove unused objects yourself - JavaScript takes care of it for you.






// 3. Interpreted or just-in-time compiled: JavaScript code is human-readable and needs to be translated to machine code through a compilation or interpretation process.


//  Explanation :

// JavaScript is a programming language that humans can easily read and understand. However, computers can't understand it directly. Therefore, JavaScript code needs to be translated into a language that the computer can understand, which is called machine code.

// There are two ways to do this translation:

// Interpretation: In this method, the JavaScript code is translated line by line as it runs. The computer reads each line of code, translates it into machine code, and executes it. This process happens every time the code is run.

// Just-in-time (JIT) compilation: In this method, the JavaScript code is compiled into machine code before it's executed. The computer translates the entire code into machine code and then runs it. This process happens only once, before the code is run for the first time.

// Both methods achieve the same result of translating JavaScript code into machine code that the computer can understand, but they do it in different ways.



// , let's use a real-world scenario to explain Just-in-time (JIT) compilation.

// Imagine you are a chef and you need to prepare a recipe for the first time. The recipe is in a foreign language that you don't understand. In order to follow the recipe, you need to translate it into a language you understand, such as English.

// In this scenario, the foreign language recipe is like the JavaScript code, and the English translation is like the machine code. Just like how you need to translate the recipe once before you can start cooking, the computer translates the entire JavaScript code into machine code before it runs it for the first time.

// Once the translation is done, the computer can run the machine code faster and more efficiently than it could run the original JavaScript code. It's like how once you have the English translation of the recipe, you can easily refer to it again and again without needing to translate it every time you use it.





// Multi-paradigm :


//4. Multi-paradigm: JavaScript supports different programming paradigms such as procedural, object-oriented, and functional programming.



// explanation :

// Programming paradigms refer to different styles and approaches to writing code. JavaScript is a versatile language that allows developers to use various programming paradigms to create their applications.

// Procedural programming is a programming style that focuses on a sequence of actions or steps to perform a task. Object-oriented programming, on the other hand, involves creating objects that have properties and methods, and these objects interact with each other to accomplish a task. Functional programming is a programming style that emphasizes the use of pure functions, which are functions that always produce the same output given the same input, and do not have side effects.

// In simple terms, JavaScript allows developers to use different ways of organizing and writing their code. They can use a step-by-step approach, create objects with properties and methods, or focus on writing pure functions. This flexibility allows developers to choose the approach that best fits their application's needs.



// Object-oriented programming: JavaScript is a prototype-based object-oriented language, where almost everything is an object, including arrays. Prototypal inheritance is used to create objects from a blueprint or template called a prototype.

//  explanation :

// In JavaScript, objects are like a blueprint or a template that can be used to create new objects with similar properties and methods. These blueprints are called prototypes, and they can be used to create new objects.

// When you create a new object, it is created based on the prototype, which means that the new object inherits properties and methods from the prototype. This process is called prototypal inheritance.

// For example, imagine you have a car prototype with properties like "color", "brand", "model", and methods like "start", "stop", and "accelerate". When you create a new car object, it will inherit all of these properties and methods from the car prototype. You can then modify the properties of the new object, like changing its color or model, and call its methods, like starting or stopping the car.

// In JavaScript, almost everything is an object, including arrays, which means that they also have prototypes and can inherit properties and methods from them.




// Concurrency model: JavaScript has a non-blocking event loop concurrency model.




// First-class functions: Functions are treated as first-class citizens in JavaScript, which means they can be assigned to variables, passed as arguments, and returned as values.



// explanation :


// In JavaScript, functions are very important and powerful, and they are treated like any other value or variable in the language. This means that you can do the same things with functions that you can do with other values, like numbers and strings.

// For example, you can assign a function to a variable, like this4


const greeting = function(name) {
    console.log(`Hello, ${name}!`);
  };

//   Now, you can use the greeting variable as if it were a function:

greeting('John'); // logs "Hello, John!"


// You can also pass a function as an argument to another function, like this:


function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
      fn(i);
    }
  }
  
  function printNumber(num) {
    console.log(num);
  }
  
  repeat(printNumber, 3); // logs 0, 1, 2

//   In this example, the repeat function takes two arguments: a function fn and a number n. It then calls the fn function n times, passing in the current iteration number as an argument.

// We pass the printNumber function as the fn argument to the repeat function, and we also pass the number 3 as the n argument. This means that the printNumber function will be called 3 times, with the arguments 0, 1, and 2, and it will log those numbers to the console.







// Dynamic: JavaScript is a dynamic language, which means that types are inferred at runtime.


// explanation :


// In JavaScript, the type of a value is determined at runtime, which means that it is determined when the program is actually running. This is different from some other programming languages, where types are determined at compile time, which is when the program is translated into machine code.

// For example, let's say you have a variable in JavaScript called myVariable. You might assign a number to it like this: myVariable = 42; Later in your program, you might assign a string to the same variable: myVariable = "Hello, world!"; In a statically-typed language, this would not be allowed, because myVariable was declared to be of a certain type (in this case, a number), and cannot be changed to a different type later. But in JavaScript, the type of myVariable is determined at runtime, so this is allowed.

// This flexibility can be useful in some cases, but it can also lead to bugs if you're not careful.








// Single-threaded: JavaScript is a single-threaded language, which means that it can only execute one task at a time.


// 90 . section 8

// JavaScript engine is a computer program that executes JavaScript code.

// Every browser has its own JavaScript engine, but probably the most well-known engine is Google's V-Eight.

// Any JavaScript engine always contains a call stack and a heap.

// The call stack is where our code is actually executed using something called execution contexts. The heap is an unstructured memory pool which stores all the objects that our application needs.

// Compilation and interpretation are two different methods used to convert source code into machine code.

// JavaScript used to be a purely interpreted language, but modern JavaScript engine now uses a mix between compilation (whole code gets compiled at once ) and interpretation ( line by line code getting executed ) which is called just-in-time compilation.

// Just-in-time compilation compiles the entire code into machine code at once and then executes it right away.

// As a piece of JavaScript code enters the engine, the first step is to parse the code, which essentially means to read the code.

// During the parsing process, the code is parsed into a data structure called the abstract syntax tree or AST.

// The resulting tree will later be used to generate the machine code.

// The next step is compilation, which takes the AST and turns it into machine code.

// This machine code is then executed in the call stack.




// 91 . Execution of JavaScript Code and Execution Context

// JavaScript code execution happens in the call stack of the engine where a global execution context is created for the top-level code.

// Top-level code is the code outside any function and is executed first. Functions are executed only when they are called.

// An execution context is an environment in which a piece of JavaScript code is executed and is like a box that stores all the necessary information for the code to be executed.

// In any JavaScript project, there is only one global execution context where top-level code is executed. All functions and methods also have their own execution contexts, and all these execution contexts make up the call stack.

// The variable environment is a part of the execution context where all variables, function declarations, and the arguments object are stored.

// The scope chain is a part of the execution context that consists of references to variables located outside of the current function.

// The this keyword is a special variable in the execution context.

// The content of the execution context is generated in the creation phase right before execution. Once the top-level code execution is finished, functions start to execute, and the engine waits for callback functions to arrive.

