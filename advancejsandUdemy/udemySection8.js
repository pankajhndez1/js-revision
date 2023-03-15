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

// Note :  many people still think that JavaScript is an interpreted language but that's not really true anymore. So instead of simple interpretation modern JavaScript engine now use a mix between compilation and interpretation which is called just-in-time compilation. This approach basically compiles the entire code into machine code at once and then executes it right away. So we still have the two steps of regular ahead of time compilation but there is no portable file to execute (like in case of the compilation where the code is then transferred to the binary file to get used !!).And the execution happens immediately after a compilation. And this is perfect for JavaScript as it's really a lot faster than just executing code line by line.

//  more explanation :

// As a piece of JavaScript code enters the engine, the first step is to parse the code, which essentially means to read the code.

// During the parsing process, the code is parsed into a data structure called the ( abstract syntax tree ) or AST.

// The resulting tree will later be used to generate the machine code.

// The next step is compilation, which takes the AST and turns it into machine code.

// This machine code is then executed in the call stack of js engine .




// 91 . Execution of JavaScript Code and Execution Context

// JavaScript code execution happens in the call stack of the engine where a global execution context is created for the top-level code.

// Top-level code is the code outside any function and is executed first. Functions are executed only when they are called.

// An execution context is an environment in which a piece of JavaScript code is executed and is like a box that stores all the necessary information for the code to be executed.

// In any JavaScript project, there is only one global execution context where top-level code is executed. All functions and methods also have their own execution contexts, and all these execution contexts make up the call stack.

// The variable environment is a part of the execution context where all variables, function declarations, and the arguments object are stored.

// The scope chain is a part of the execution context that consists of references to variables located outside of the current function.

// The this keyword is a special variable in the execution context.

// The content of the execution context is generated in the creation phase right before execution. Once the top-level code execution is finished, functions start to execute, and the engine waits for callback functions to arrive.



// note : const and let variables are block scoped. So they are valid inside the block in which they were created . Example : if block .


//  Also , note that the var variable are the function scoped and they do not care about the block scope .


function myFunc(name, birthYear) {
  const myName = name;
  const myAge = 2023 - birthYear;
  function printAge() {
    const myString = ` your birth year is :${birthYear} and the age is ${myAge} and house is ${house}`;
    console.log(myString);
    if (myAge < 30 && myAge > 25) {
      console.log('you are between 25 and 30 !!');
      var message = 'congratulations';
    }
    console.log(message, 'message1');
    function myCar() {
      console.log(`i have a car`);
      console.log(message, 'message2');
    }
    myCar();
  }
  // the below message won't get printed as the message is declared with the var which means it has the function scope wherever it has been defined !!
  // console.log(message, 'message2');
  printAge();
}
const house =`#128/6 itbp campus`
myFunc('pankaj',1996);
const momName ='sarita devi';

//  also do note that the function are also block scoped i.e they will only get called inside the scope in which it has been defined !!



//  note note note : the scope chain is all about the order in which functions are written in the code.But what's really important to note here is that the scope chain has nothing to do with the order in which functions were called.Or in other words, the scope chain has nothing to do with the order of the execution contexts in the call stack.The order of function calls is not relevant to the scope chain at all, all right?Really keep that in mind.


// const a ='Jonas';

// first();

// function first() {
//   const b='hello';
//   second();
//   function second() {
//     const c='Hii';
//     third();
//   }
// }

// function third() {
//   const d='hey';
//   console.log(d+c+b+a);
// }

// output of teh above code : Uncaught ReferenceError: c is not defined !!


// explain me why this is not working in very detailed version as i am totally a fresher and not able to get it ?



/*

The code you provided is not working because the variable c is defined inside the second() function and is not accessible outside of that function.

To understand why this is happening, it's important to understand how JavaScript's scope works.

JavaScript has function scope, which means that variables declared inside a function are only accessible within that function (and any nested functions). This is known as lexical scope.

In the code you provided, the variable c is declared inside the second() function, which means it is only accessible within that function. When the third() function tries to access c, it cannot find it because c is not in its scope.

Here is a breakdown of what happens when the code is executed:

The variable a is assigned the value 'Jonas'.
The first() function is called.
Inside the first() function, the variable b is assigned the value 'hello'.
The second() function is called.
Inside the second() function, the variable c is assigned the value 'Hii'.
The third() function is called.
Inside the third() function, the variable d is assigned the value 'hey'.
The console.log() statement tries to print out the values of d, c, b, and a. However, it cannot find the value of c because it is not in the scope of the third() function.
To fix this issue, you could pass the value of c as an argument to the third() function, like this:




const a ='Jonas';

first();

function first() {
  const b='hello';
  second();
  function second() {
    const c='Hii';
    third(c);
  }
}

function third(c) {
  const d='hey';
  console.log(d+c+b+a);
}



Now, when the third() function is called, it will receive the value of c as an argument, and it will be able to use it in its scope.




Ques : and why is it so that third function is declared and initialized after it was called and why is that working ?





The reason why the code is still working even though the third() function is declared and defined after it is called is because of how JavaScript works with function declarations and variable hoisting.

JavaScript has a concept called hoisting, which means that variable and function declarations are moved to the top of their respective scopes by the JavaScript engine during the compilation phase. This means that even if a function is declared and defined after it is called, it can still be used as if it had been declared before the function call.

In your code, when the JavaScript engine first parses the code, it recognizes that there are three function declarations: first(), second(), and third(). These functions are hoisted to the top of their respective scopes. This means that even though the third() function is defined after it is called inside the second() function, it can still be found and executed when the second() function calls it.

However, it's important to note that only function declarations are hoisted in JavaScript. Function expressions, which are defined using a variable assignment, are not hoisted. So if you were to define the third() function using a variable assignment like this:




const third = function() {
  const d='hey';
  console.log(d+c+b+a);
}



Then the code would not work as expected, because the third variable declaration would be hoisted to the top of its scope, but its value (which is the function expression) would not be defined until later in the code. This would result in an error when the second() function tries to call the third() function.




Ques  : ok but only the function declaration moves to the top the program , isn't the decalration when moving to the top hold the undefined ?



Yes, you are correct. When function declarations are hoisted to the top of their scope, they are actually initialized with the value undefined. This means that when the JavaScript engine encounters a function declaration during the compilation phase, it creates a variable with the same name as the function, and sets its value to undefined.

For example, consider the following code:



foo();

function foo() {
  console.log("Hello, world!");
}



When the JavaScript engine first parses this code, it recognizes the function declaration for foo(), and hoists it to the top of the global scope. At this point, foo is defined as a variable with the value undefined. Then, when the JavaScript engine executes the code, it encounters the foo() function call, and since foo has already been declared and initialized with the value undefined, the call to foo() is successful and the string "Hello, world!" is logged to the console.

So, to summarize, when function declarations are hoisted to the top of their scope, they are initialized with the value undefined. This allows them to be called before they are defined in the code, as long as they are defined in the same scope.


// more detailed version below :


 Let me try to explain this in more detail.

When a JavaScript file is executed, the JavaScript engine first goes through a process called compilation. During this process, the engine creates an abstract syntax tree (AST) of the code, and then generates machine code that can be executed by the computer.

As part of this process, the JavaScript engine identifies function declarations in the code and hoists them to the top of their respective scope. What this means is that the engine essentially moves the function declaration to the top of its containing scope, so that it is available for use throughout the entire scope.

Here is an example of a function declaration being hoisted to the top of its containing scope:





foo();

function foo() {
  console.log("Hello, world!");
}


In this example, the function declaration for foo() is hoisted to the top of the global scope. This means that when the code is executed, the foo() function is already defined and can be called.

However, when a function declaration is hoisted to the top of its scope, it is initialized with the value undefined. This is because the JavaScript engine needs to create a variable for the function in memory before it actually processes the function's code.

Here is an example of a function declaration being initialized with the value undefined:


console.log(foo); // logs 'undefined'

foo();

function foo() {
  console.log("Hello, world!");
}


In this example, the console.log() statement logs undefined because the variable foo has been declared but has not yet been assigned a value. However, when the foo() function is called, it works as expected because the function declaration has already been hoisted to the top of the scope and is available for use.

I hope this explanation helps to clarify the concept of hoisting in JavaScript. Please let me know if you have any further questions!


In the examples I provided earlier, foo() was used as an example of a function call that is executed before the function declaration. This is possible because function declarations are hoisted to the top of their containing scope during the compilation phase, which means that they are available for use before their actual position in the code.

In the case of foo(); in the example code I provided earlier, the JavaScript engine attempts to execute the function call before the foo() function is declared. However, because the function declaration is hoisted to the top of its containing scope during the compilation phase, the function is actually available for use at this point, even though it has not yet been declared in the code.


So, moving the declaration to the top of the program or top of the defined scope is known as hoisting 
due to which we can access the function before it has been declared , but the hoisting is not seen in case of the function expression !! Also , note that the variable declared with let and const keyword are having the block scope only due to which the scope is only accessible to the scope in which they are defined !! Also even tho one function scope is calling another function won't provide the variable to the called function !! So , below the third function don't have the accessibility of the variable 'c' ,even tho the third function is called inside the second function which have the 'c' variable !!

exampe :

  function second() {
    const c='Hii';
    third();
  }
  function third() {
  const d='hey';
  console.log(d+c+b+a);
}
*/



// gloabal variable : variables which are not defined inside any function , are accessible through out the whole program !!


//93 . Scoping in practice :

function calAge(birthYear) {
  const age = 2023 - birthYear;
  console.log(firstName);
  function printAge() {
    const output =`${firstName} You're ${age} !! and your birthYear is ${birthYear}`
    console.log(output);
    if (age>25) {
      function add(a,b) {
        return a+b ;
      }
      console.log(add(10 , 20));
    }
    console.log( add(1,2));
  }
  printAge();
  return age;
}

const firstName= 'Jonas'; // the firstName has the global scope which means the firstName is having the accessibilty through out the whole code !!
calAge(1996);




/*
So you see that indeed,Jonas here was printed to the console,which is the first name variable.
And so when this line of code [ console.log(firstName); ] was executed,JavaScript did not find this variable (firstName) in the scope.And so it did a variable lookup,where it looked up in the scope chain to see if it found the  (firstName) variable there.
And indeed, the parent scope of the calcAge function is the global scope.And the firstName variable is in there,and therefore JavaScript could then use that.

//  most important :

Also , do note that the code inside the function only get called only when the function get called , so this is one of the reason why we can access the firstName before it has been declared !!,


//  most important :

Do note :

the same is true for the birthYear variable,because for scoping , the parameter of a function
work just like normal variables.And also remember that we said that the scope of a variable
is the entire region of the code in which the variable is accessible, due to which we can use the parameter of the outer function inside the inner function too withour even passing them as a parameter.


//  most most most most important :
//  do note one more thing : 


The function are also considered as the block scoped only when you use the stric mode !! example : the function add can only get called inside the if block in which it is defined and not outside it !! But if you remove the strict mode then in that case you can access the add function outside of the if block !!

*/



// 94.

// Hoisting :


const myName = 'Jonas';

if (myName==='Jonas') {
  // console.log(`Hey ${myName} and i am a ${job}`);
  const job ='software engineer !!'
}


// (job) is a const defined variable , so it's scoped only to the if block in which it has been defined and also it is going be accessible starting from the line where it's defined. So , if we try to use the job variable before it's been defined then in that case it will give you an error !! So , we can say that the variable 'job' has the TDZ (temproal dedad zone ) that starts at the beginning of the if block scope  until the line where it is defined. i.e  [ const job ='software engineer !!' ]

// basically each and everylet and const variable get their own Temporal Dead Zone that starts at the beginning of the scope until the line where it is defined. And the variable is only safe to use after the TDZ.

/* 94 .

What is hoisting in JavaScript? How does it work and what are the differences between variable types in relation to hoisting?

Hoisting is a mechanism in JavaScript that allows certain types of variables to be accessed before they are declared in the code. This happens because during the creation phase of the execution context, the code is scanned for variable declarations, and for each variable found, a new property is created in a variable environment object. Hoisting does not work the same way for all variable types.

Function declarations are hoisted, and the initial value in the variable environment is set to the actual function. This means that function declarations can be used before they are declared in the code. Variables declared with var are also hoisted, but when accessed before being declared, they return undefined. This can be a source of bugs in JavaScript. On the other hand, let and const variables are not hoisted in the same way, as their value is set to uninitialized and placed in a Temporal Dead Zone (TDZ). Attempts to use let and const variables before they are declared result in an error. Function expressions and arrow functions behave like variables in relation to hoisting. Functions created with var are hoisted to undefined, while those created with let or const are not usable before they are declared because of the TDZ.



//  so , remember that the function declaration and var defined variable are hoisted also in case of the function declaration , the initial value is set to function initial value itself i.e during the hoisiting due to which we can access the function before it has been declared !!




*/ 


// examples :
console.log(addNum(2, 3));

function addNum(a, b) {
  return a + b;
}


console.log(subFunc);    // as we know that the function expression defined with var are hoisted and set to undefined !! so , calling the undefined as a function will result in subFunc is not a function .
// console.log(subFunc(5,2));

 var subFunc =function myFuncToSub(a,b) {
  return a-b ;
}


//  Also var defined variable becomes the property of the window object while let and const do not !!




//96. 


/*

when we use arrow functions in JavaScript, they don't have their own "this" keyword. Instead, the "this" keyword in an arrow function will refer to the "this" keyword of the surrounding or parent function. This is because the arrow function picks up the "this" keyword from the outer or lexical scope of the function.

For example, let's say we have a function that defines an object and then has a method using an arrow function like this:



function myObject() {
  this.myValue = 42;

  this.myMethod = () => {
    console.log(this.myValue);
  };
}


Here, the arrow function myMethod doesn't have its own "this" keyword. Instead, when it's called, the "this" keyword will refer to the object that was created with the myObject function.

This is called the "lexical this keyword" because it's determined by the lexical scope of the function, which is the set of variables and functions that are available to it. It's important to remember this property of arrow functions because it can affect how we write and use our code.




// this keyword with the event listeners :



When we use a function as an event listener in JavaScript, the "this" keyword inside that function will always refer to the DOM element that the listener is attached to.

For example, let's say we have an HTML button element with an ID of "myButton". We can attach a click event listener to this button using JavaScript like this:




const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {
  console.log(this); // "this" refers to the "myButton" element
});


Here, when the button is clicked, the event listener function is called and the "this" keyword inside that function will refer to the "myButton" element.

It's important to note that this behavior only applies when using regular functions as event listeners. If we were to use an arrow function instead, the "this" keyword would still refer to the parent function and not the DOM element.

So, when working with event listeners in JavaScript, it's important to be aware of how the "this" keyword behaves so we can write our code accordingly.




Note : that in case of the simple function if strict mode is there then this keyword will always  set to undefined , but if the mode isn't strict then in that case the simple function's this keyword will point to the window object !!




/* 

Notes:


The 'this' keyword is important to understand in JavaScript.

Beginners often find it difficult.

The 'this' variable is created for every execution context and function.

It is one of the three components of an execution context, along with the variable environment and scope chain.

The value of the 'this' keyword is not static and depends on how the function is called.

Four different ways of calling functions are discussed: as a method, as a normal function, with arrow functions, and as an event listener.

The value of the 'this' keyword inside a method will point to the object on which the method is called.

In strict mode, the 'this' keyword will be undefined when a function is called as a normal function.

Arrow functions do not get their own 'this' keyword and instead use the 'this' keyword of the surrounding function.

The 'this' keyword will point to the DOM element that the handler function is attached to when a function is called as an event listener.

The 'this' keyword will never point to the function in which it is used or to the variable environment of the function.

Other ways of calling functions using the 'this' keyword include using the new keyword or the call, apply, and bind methods.


*/



// example : this keyword used inside the function expression . 

const calcMyAge = function (birthYear) {
  console.log(2032-birthYear);
  console.log(this);  // undefined if mode is strict , otherwise the this keyword will point to the window object!!
}

calcMyAge(1996);


//  Also do note that calcMyAge do not have any owner object !!






// 97.  


/*

Notes :


Arrow functions do not have their own this keyword

They use the lexical this keyword, which means they use the this keyword of their parent function or parent's scope

In the global scope, the this keyword is window

When an arrow function is used in a function, its this keyword points to the this keyword in the global scope

In a normal function, the this keyword is undefined if it does not have its own this keyword

In an arrow function, the this keyword is not the this keyword of the current function but the this keyword of its parent's scope, which can be the window object in the global scope.

*/


//  examples :

console.log(this);  // window object


//  function expression :

const myFuncExp = function (birthYear) {
  console.log(birthYear);
  console.log(this);   // if mode is strict then this will hold 'undefined'  otherwise holds window object .
}

myFuncExp(1996);


//  arrow function's this keyword :

const myArrFunc = ()=>{
  console.log(this);   // window
}

myArrFunc();



//  this keyword in case of the objcets : the 'this' keyword will hold the refrence of the object calling the method !!


//  examples :

const myObject = {
  year :1991,
  calAge :function () {
    console.log(this);
    console.log(2037 -this.year);
  }
}

myObject.calAge();

const matilda ={
  year :2017,
}

//  defining the calAge method in the matilda object too !!

matilda.calAge = myObject.calAge

matilda.calAge();   // output will be 20 , as the this keyword now hold the refrence of the matilda object in which the year is set to 2017 !!

//  imp !!

// note : while copying the method we do not call the calAge method below !!

//  example :

const f = matilda.calAge ;

console.log(f);


//  so , in the above case the this keywords will be undefined as the f just become tehe function expression !!


//  most important :


//  98 . Regular function vs arrow function's this keyword !!


const jonas ={
  firstName:'Jonas',
  year:1991,
  calAge :function () {
    console.log(this);
    console.log(this.year);
  },
  //  defining the arrow function below in the same object i.e jonas !!
  greet: () => {
    console.log(this);  // the this keyword here will hold the window object !!
    console.log(this.firstName);  // due to which the firstName will always be undefined !!
  }
}


jonas.greet();
/*
So you might think that, like this kind of block here i.e jonas object block,ought to create its own scope, but it doesn't.So this is not a code block. It is an object literal.So it's just a way that we literally define objects.So all the property and method in the jonas object is in the global scope still.And so therefore, that includes greet method.So ( greet method ) is in the global scope,and so therefore, the arrow function here (greet),which does not have its own this keyword,will use the this keyword from the global scope.And remember that is the window object.And so [ this.firstName ] will be set to undefined.




//  so do remember that it is considered as a good practice to not use teh arrow function inside a particular object !! SO ,always use the regular function in order to create a method inside a particular object !! as shown below :

*/

const jonas1 ={
  firstName:'Jonas',
  year:1991,
  calAge :function () {
    console.log(this);
    console.log(this.year);
  },
  //  defining the arrow function below in the same object i.e jonas !!
  greet: function() {
    console.log(this);  // the this keyword here will hold the window object !!
    console.log(this.firstName);  // due to which the firstName will always be undefined !!
  }
}


jonas1.greet();

//  And now, one final example of a pitfall of this keyword is when we have a function inside of a method.

const jonas2 ={
  firstName:'Jonas',
  year:1991,
  calAge :function () {
    console.log(this);
    console.log(this.year);
    const isMillienial = function () {
      console.log(this.year >=1981 && this.year<=1961);
    }
    isMillienial();
  },
 
  greet: function() {
    console.log(this);  
    console.log(this.firstName);  
  }
}


jonas2.calAge(); 

//  the above function will show that the function inside the calAge i.e isMillienial will hold undefined for the this keyword !! bcoz the isMillienial is regular function call even tho it is inside a particular method i.e calAge !! And the rule says that inside a regular function call,which this clearly is, that this keyword must be undefined.And so therefore 'this' is undefined inside the isMillienial function .Now some people consider that this is a bug in JavaScript but in my opinion, it's not really.It's just how the this keyword works.It's a clear rule that a regular function (isMillienial) call has the this keyword set to undefined. And so that's just what is happening here.

/*


//  so to solve the above problem 

*/

const jonas3 ={
  firstName:'Jonas',
  year:1991,
  calAge :function () {
    console.log(this);
    console.log(this.year);
    const self = this ; // here the this keyword holds the jonas object , due to which , we get the access of the this keyword inside the isMillienial function  !!

    //  do note that the 'self' is sometimes written as 'that' by the developers too !!
    const isMillienial = function () {
      console.log(self.year >=1981 && self.year<=1961);
    }
    isMillienial();
  },
 
  greet: function() {
    console.log(this);  
    console.log(this.firstName);  
  }
}


jonas3.calAge(); 



//  another way to tackle with this kind of error is to use the arrow function !! as the arrow function will use the this keyword of its parent scope and in this case it will be  the calAge method !!


const jonas4 ={
  firstName:'Jonas',
  year:1991,
  calAge :function () {
    console.log(this);
    console.log(this.year);
    //  do remember one thing , i.e the arrow function inherits the this keyword from the parent scope  !!
    const isMillienial = () =>{
      console.log(self.year >=1981 && self.year<=1961);
    }
    isMillienial();
  },
 
  greet: function() {
    console.log(this);  
    console.log(this.firstName);  
  }
}


jonas4.calAge(); 





// most most most important line :


//  do note that the argument object only exsist in the regular function expression and the function declaration , but not in the arrow function !!


function myFuncDec(a, b) {
  console.log(arguments);
  console.log(this,'this'); 
  return a + b;
}

myFuncDec(1,2,2,3,6,6,6);

const myFUncExp = function myFuncExp(a, b) {
  console.log(arguments);
  return a + b;
}

myFUncExp(15,26,6,54);


const myArrow = (a, b) => {
  // console.log(arguments); this will throw the error !!
  return a + b;
}

myArrow(12,5,6);



// 99.  primitive vs refrence types !!

// Note : refrence types are stored in the  memory heap and the primitive types are stored in the callStack .

// in case of primitive types the value at a certain memory address is immutable,or in other words, it cannot be changed.


// example :


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// So, when we change the 'age' variable to 31 in that case a new piece of memory is allocated to the age variable . So memory address is created and the age variable now simply points to the new address after the reassigning ,due to which it is holding the new value of 31 .



/*

reference types :


when we declare a variable as an object,an identifier is created,which points to a piece of memory in the stack,which in turn points to a piece of memory in the heap.And that is where the object is actually stored.And it works this way because objects might be too large to be stored in the stack.
Instead they are stored in the heap,which is like an almost unlimited memory pool.And the stack just keeps a reference to where the object is actually stored in the heap so that it can find it whenever necessary.


*/


const me ={
  name:'Jonas',
  age:30,
};

const friend = me;
friend.age =27 ;

console.log(me);

/*
 o/p : {
  name:'Jonas',
  age:27,
};
 */

console.log(friend);

/*
 o/p : {
  name:'Jonas',
  age:27,
};
 */

//  which shows only refrence get copied and then it points to the same object !!

/*

in the above example :just like with primitive values,the Friend identifier will point
to the exact same memory address as the Me identifier.And again, that address contains the reference,
which then points to the object itself.And as the Friend object is now essentially the exact same as the Me object.




as we change a property in the Friend object by setting friend.age to 27 ,so do note friend and me's identifier will point to the exact same memory address as the Me identifier due to which the heap, and the 30 is changed to 27. and the value then reflects 27 fro both the objects !!


//  do note :

it's a misconception that all variables declared with const are immutable.In fact, that is only true for primitive values not for the refrence type values !!



example :


 While variables declared with const are immutable in the sense that they cannot be reassigned to a new value, this does not mean that the value itself is necessarily immutable. This distinction is particularly important when dealing with reference values.

A reference value is any value that is not a primitive value (i.e., not a string, number, boolean, null, or undefined). Instead, it is an object, array, or function. When you assign a reference value to a variable, the variable actually holds a reference to the memory location where the value is stored, rather than the value itself. This means that when you use a variable to access a reference value, you are actually accessing the value in memory by following the reference.

When you declare a variable with const and assign a reference value to it, the const keyword only prevents you from reassigning the variable to a different reference value. However, you can still modify the underlying value that the variable references, as long as the value itself is mutable.

Here's an example to illustrate this:


const myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); // Output: [1, 2, 3, 4]



In this example, we declare a variable myArray and assign it a reference to an array with three elements. We then use the push() method to add a fourth element to the array. Even though myArray is declared with const, we are still able to modify the array by adding an element to it.

On the other hand, if we were to assign a primitive value to myArray, such as a string or number, then myArray would be truly immutable:



const myString = "hello";
myString = "world"; // This would cause an error



In this example, we declare a variable myString and assign it a string value. When we try to reassign myString to a new string value, we get an error because myString is declared with const and is therefore immutable.

*/



// do note that the object made with const allows us to only make the changes in the object properties and not the whole object getting replaced with another object !!





// most most most important !! :


// object.assign method :

const Jessica2 = {
  firstName: 'Jessica',
  lastName: 'willias',
  age: 27,
  family: ['Alice', 'Bob']
};

const JessicaCopy = Object.assign({}, Jessica2);

JessicaCopy.lastName ='Davis';

console.log(Jessica2,'Jessica2');
console.log(JessicaCopy,'JessicaCopy');


JessicaCopy.family.push('Mary');
JessicaCopy.family.push('John');

//  most important note :

//  note : although i have pushed the data in the family array of the JessicaCopy , but it is going to reflect in both the objects i.e JessicaCopy and  jessica and the reason behind it is that the family object is a deeply nested object.And so therefore, object.assign did not really,behind the scenes, copy it to the new object.So in essence, both the objects, Jessica2 and JessicaCopy have a property called family,which points at the same object in the memory heap,and that object is the family array. And so, when we change the array in one of them,it's also gonna be changed in the other one.

console.log(Jessica2);
console.log(JessicaCopy);



//  let see with the nested objects :

const Jessica3 = {
  firstName: 'Jessica',
  lastName: 'willias',
  age: 27,
  family: {
    name :'pankaj',
    lastName:'kumar'
  }
};

const JessicaCopy2 = Object.assign({}, Jessica3);

JessicaCopy2.lastName ='Davis';

console.log(Jessica3,'Jessica3');
console.log(JessicaCopy2,'JessicaCopy2');

JessicaCopy2.family.name='Raj' ;

console.log(Jessica3,'Jessica3');
console.log(JessicaCopy2,'JessicaCopy2');


//  which shows that the object.assign method is not considered as a good method to copy the nested objects as when we change a particular property in the the copied object's nested object (family) then in that case the changes are going to get reflected in the main object too !!



//  reason :

/*


Object.assign method is a shallow copy method, which means that it only creates a new object with the same properties as the original object, but the values of those properties that are objects themselves are still references to the original objects. Therefore, if you change a property in the nested object of the copied object, it will reflect the changes in the original object as well.


For example, consider the following code:





const person = {
  name: "John",
  age: 30,
  family: {
    mother: "Jane",
    father: "Jack"
  }
};

const copyPerson = Object.assign({}, person);

copyPerson.family.mother = "Emily";

console.log(person.family.mother); // Output: "Emily"




In this code, we create an object person with a nested object family. We then create a copy of the person object using Object.assign method and modify the family.mother property in the copied object. But when we log the value of person.family.mother, we see that it has also changed to "Emily".

To create a deep copy of an object with nested objects, you can use other methods such as the spread operator or libraries like lodash. These methods create a new object with all the properties and values of the original object, including the nested objects, without keeping the references to the original objects.






*/