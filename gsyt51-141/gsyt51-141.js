//72 onward se pdna 


const myTable = document.getElementById('mytab');

const tabCpation = myTable.caption;

console.log(tabCpation, "tabCpation");
console.log(tabCpation.innerText, 'tabCpation');

tabCpation.innerText = 'new caption'


//  accessing the thead  of the table !!


const myThead = document.getElementById('mytab');

console.log(myThead.tHead);


//  manuplating the thead :
console.log(myThead.tHead.innerHTML, 'myThead.tHead.innerHTML');
myThead.tHead.innerHTML = "<tr><th>Num</th><th>Name</th><th>subject</th></tr>"

//  manuplating the tfoot :

const myTfoot = document.getElementById('mytab').tFoot;

console.log(myTfoot, 'myTfoot');
myTfoot.innerHTML = "<tr><td>12</td><td>Raj</td><td>python</td></tr>"



//73 .createCaption and deleteCaption Methods in JavaScript


//  createCaption

const tcap = myTable.createCaption();
tcap.innerText = 'my caption';

// deleteCaption

myTable.deleteCaption();


// createTHead and deleteTHead

// createTHead :


const myTheads = myTable.createTHead();
console.log(myTheads, 'myTheads');
console.log(myTheads.innerHTML);
myTheads.innerHTML = "<tr><th>Number</th><th>Name</th><th>my subjects</th></tr>"


// deleteTHead :

console.log(myTheads);

// myTable.deleteTHead();




// 75. createTFoot and deleteTFoot Methods in JavaScript .
const myData = myTable.createTFoot();
console.log(myData);
console.log(myData.innerHTML);
myData.innerHTML = "<tr><td>123</td><td>pankaj jii</td><td>aws</td></tr>"


myTable.deleteTFoot();



// 76. insertRow and deleteRow Methods in JavaScript

const myTableData = document.getElementById('mytab');

const insertNewRow = myTableData.insertRow(-1);
insertNewRow.insertCell(0).textContent = 'data 1';
insertNewRow.insertCell(1).textContent = 'data 2';
insertNewRow.insertCell(2).textContent = 'data 3';



//  now deleting the last row :

myTableData.deleteRow(-1);


// 77. HTML Table Section Element in JavaScript


//  inserting and deleting rows from a particular section :

const myBody = document.getElementById('tBody');


console.log(myBody.rows);
console.log(myBody.rows[0].innerHTML);
// myBody.rows[0].insertCell().textContent ='hii'


//  now adding a new row to the particular section of the table i.e inside the body  .


const myTableBody = document.getElementById('tBody');

const myNewRow = myTableBody.insertRow();

myNewRow.insertCell().textContent = 'hiiii'


//  deleting the newly inserted row from tBody :

myTableBody.deleteRow(1);



//78. HTML Table Row Element in JavaScript 


// do note that the row property do includes the row of the thead too !! so , all the rows of the tables are considered when using the rows property  !!


console.log(myTableData, 'myTableData');

console.log(myTableData.rows, ' myTableData.rows');
//  to get all the cells of a particular row :
console.log(myTableData.rows[0].cells);


//  to get the length of the cells of a particular row :
console.log(myTableData.rows[0].cells.length);


// inserting  a new thead cell at the last :

console.log(myTableData.rows[0].cells);
myTableData.rows[0].insertCell().innerHTML = '<th>Fav color</th>';
console.log(myTableData.rows[0].cells);

const lastDataOnRow1 = myTableData.rows[1].insertCell();

lastDataOnRow1.innerText = 'Red';


// 79.  textContent :

// 85 . event bindings with html :

document.getElementById('myButton').addEventListener('click', function () {
    alert('i got clicked !!');
});


//  adding the multiple event listener to a particular button :

function myFunc1() {
    alert('i  got clicked and i am myFunc1 ')
}
function myFunc2() {
    alert('i  got clicked and i am myFunc2 ')
}
document.getElementById('myButton').addEventListener('click', myFunc1)
document.getElementById('myButton').addEventListener('click', myFunc2)



//  now removing the event listener i.e myFunc2

document.getElementById('myButton').removeEventListener('click', myFunc1)



// 91 . target and currentTarget :

//  bubble phase :
document.getElementById('one').addEventListener('click', function myFunc1(e) {
    console.log('target', e.target.dataset.name);
    console.log('currentTarget', e.currentTarget.dataset.name);
    console.log('1');
}, false);

document.getElementById('two').addEventListener('click', function myFunc2(e) {
    console.log('target', e.target.dataset.name);
    console.log('currentTarget', e.currentTarget.dataset.name);
    console.log('2');
}, false)

document.getElementById('three').addEventListener('click', function myFunc3(e) {
    console.log('target', e.target.dataset.name);
    console.log('currentTarget', e.currentTarget.dataset.name);
    console.log('3');
}, false)

document.getElementById('four').addEventListener('click', function myFunc4(e) {
    console.log('target', e.target.dataset.name);
    console.log('currentTarget', e.currentTarget.dataset.name);
    console.log('4');
}, false)


// 92.  stopPropagation and   stopImmediatePropagation 

/*

stopPropagation() and stopImmediatePropagation() are both methods used in JavaScript events to prevent the event from propagating further through the DOM tree. However, there is an important difference between the two.

stopPropagation() method stops the event from propagating to the parent elements. It means that if an event is triggered on a child element and you call stopPropagation() on that event, the parent elements won't be notified of the event.

On the other hand, stopImmediatePropagation() not only stops the event from propagating to the parent elements, but it also prevents any other event listeners on the same element from being called. This means that if an event is triggered on an element with multiple event listeners, calling stopImmediatePropagation() will stop all subsequent event listeners on that element from being called.

Here's an example to illustrate the difference between stopPropagation() and stopImmediatePropagation():
*/


//93 . diffrence between the stopPropagation and prevent default .

//  stopPropagation prevents the propagation  in the parent element but preventDefault avoids the default behavior of an element , also do note that the prevent default only prevents the default actions but the propagation will be the default one depends on what we have used i.e bubbling phase or capture phase !! so , if we want to impact the propagation too then in that case we have to use the stopPropagation too !! so , stopPropagation prevents the Propagation and prevent default prevents the default action .


const myDiv = document.getElementById('myDiv');

const myAnchor = document.getElementById('myAnchor');

function func1(e) {
    e.preventDefault();
    e.stopPropagation();
}




// boolean false is used for the bubble phase
myAnchor.addEventListener('click', func1, false);

myDiv.addEventListener('click', function (e) {
    this.style.backgroundColor = 'red';
}, false);

// 94. Mouse event in js :

//note : event like  click , mousedown ,contextmenu ,mousemove and mouseup event bubbleup !! whereas mouseeneter and mouseleave doesn't bubble up !!
//  remember bubble up means firing the parent's events too ,but note that, it is not necessary for both elements to have the same event types in order for the event to "bubble up" from the child to the parent elements.
document.getElementById('ones').addEventListener('mousedown', function (e) {
    console.log(e.type, 'event type bubble');
}, false);

document.getElementById('fours').addEventListener('click', function (e) {
    console.log(e.type, 'event type');
}, false);


// 95. key events in js :


const myInput = document.getElementById('abc');
myInput.addEventListener('focus', function (e) {
    console.log(this);
    this.style.backgroundColor = 'orange'
});
myInput.addEventListener('blur', function (e) {
    console.log(this);
    this.style.backgroundColor = 'red'
});

//97. window object in js  


// outerHeight and outerWidth depends on the browser's height and width and the innerHeight and innerWidth depends on the ui interface if we do not open the console .


//  window.alert();
// window.confirm(); returns true on pressing ok and returns false on pressing cancel .

// example :

// window.alert('hii there');

// const theBool =window.confirm();
// console.log(theBool,'theBool');


// 100. open and close Method in JavaScript 


//101.window.print()

// window.print() gives you the facility to print a particular document !!

//103.


// Location Object in JavaScript 

// History object in js 


console.log(window.history.length, ' window.history.length');


// window.history.back();


//  the negative value which the go takes will take u one step back !!
// window.history.go(-1);


//  if we want to go two steps back then we have to give the go parameter value of -2 and so on !!

// 108 . setTimeout and clearTimeout Methods 


const retVal = setTimeout((e) => {
    document.getElementById('myPara').style.color = 'red';
}, 5000);


//  setTimeout will execute after the number of miliseconds gets completed !!

function myClearTimeOut() {
    clearTimeout(retVal)
}

document.getElementById('myBtn').addEventListener("click", myClearTimeOut)



// 108. setInterval and clearInterval methods 

// the difference between the setTimeOut and setInterval is that the setTimeOut executes a function only once , whereas the clearInterval executes a function each and every time , when the function interval completes !!

// const setInt = setInterval(() => { document.getElementById('setIntervalEx').textContent += 'hello ' }, 2000);

//  inorder to stop the execution done by the setInterval we use the clearInterval .

// const myfuncexp = function () {
//     clearInterval(setInt);
// }

// document.getElementById('stopSetInterval').addEventListener('click',myfuncexp);


// 112. accessing the forms

console.log(document.forms, ' document.forms');

const myFormData = document.forms['myForm'];

console.log(myFormData, 'myFormData');


// 113. accessing form fields

//  example :

const mysData = document.yForm.elements['y_username'];

// console.log(mysData);
// console.log(mysData.name);
// console.log(mysData.type);


// getting the data from the field input :

const myHandlerForForm = document.getElementById('clickSubmit');
mysData.addEventListener('change', (e) => {
    console.log(e.target.value, 'e.target.value');
})
myHandlerForForm.addEventListener('click', function (e) {
    const mySubmittedData = mysData.value
    console.log(mySubmittedData, 'mySubmittedData ');
})


// 114. Form Validation in JavaScript .


const myVali = document.fForm.f_username;
console.log(myVali);

let regexPattern = /^[^\d\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
function validateData(data) {
    if (regexPattern.test(data)) {
        document.getElementById('spaan').textContent = 'valid'
    } else {
        document.getElementById('spaan').textContent = 'inValid'
    }
}
myVali.addEventListener('change', function (e) {
    console.log(e.target.value);
    validateData(e.target.value);
})

// 117 . cookies 

// document.cookie = 'username =pankaj jii';
// console.log(document.cookie);


document.cookie = 'username =pankaj ;max-age=' + 60 * 60 * 24 * 10 + ";path=/";


console.log(document.cookie);

// 119. persistent cookies :

document.cookie = 'house = #256 itbp campus sector 32 c chandigarh ; expires =Mon ,12-sep -2023 09:00:00 UTC';

console.log(document.cookie);

//121. se pdna

document.cookie = 'username=orange';
document.cookie = 'id=banana';


//  the above data will get appended with each other !!


const myUnameCookFormData = document.forms.uForm.uName;
const myuEmailCookFormData = document.forms.uForm.uEmail;
const myuLangCookFormData = document.forms.uForm.uLang;
const theCommonListener = addEventListener('change', function (e) {
    console.log(e.target.name, 'is the name');
    console.log(e.target.value);
    e.target.name === 'uName' ? document.cookie = `Name =${e.target.value}` : e.target.name === 'uEmail' ? document.cookie = `Email =${e.target.value}` : document.cookie = `Language =${e.target.value}`;
});

myUnameCookFormData.theCommonListener;
myuEmailCookFormData.theCommonListener;
myuLangCookFormData.theCommonListener;

console.log(document.cookie);



// 126.  se pdna


/* 

localStorage :  The localStorage is a read only property of window object. It 
stores data in a web browser specifically to the domain and protocol. It doesn’t get sent to the server as it is stored locally in 
the web browser with no expiration date. The data will not be deleted when the browser is closed and reopened. 

Syntax:- window.localStorage

*/


window.localStorage.setItem('name', 'pankaj');
window.localStorage.setItem('age', '26');
window.localStorage.setItem('phone', '8264672672');

console.log(localStorage);
console.log(localStorage.getItem('age'));



//  we can also use the index number to get the item out of the local storage !!
console.log(localStorage.key(0));

//  now in order to remove a particular item from the localStorage then , we can use the removeItem method :

localStorage.removeItem('phone');


//  now in order to remove all the itme from the local storage we can use the clear method :

localStorage.clear();


//  note : the localstorage data persist in our system for a longer interval of time , even if we close the window and reopen the window !! or off the pc and re open the pc !!

// 127 . sessionStorage : the data only gets removed from the system when we close the current window on chrome.

sessionStorage.setItem('otp', 5693);


//  note even if we comment the above code i.e sessionStorage.setItem('otp',5693); and re load the page even then sessionStorage is going to persist there !! but note if we comment the code i.e i.e sessionStorage.setItem('otp',5693); and close the current opened browser then the sessionStorage is not going to get last !!


sessionStorage.setItem('mail', 'raja@gmail.com');

//  now in order to get the itme from the sessionStorage then :

console.log(sessionStorage.getItem('otp'));

// now using the key property to get a particular item's key :

console.log(sessionStorage.key(0));


//  now in order to remove a particular item from the sessionStorage then :

sessionStorage.removeItem('otp');

console.log(sessionStorage);


// now similarly if we want to remove all the items from the sessionStorage then we use the clear method :

sessionStorage.clear();


console.log(sessionStorage);



// 128 . execption handling :

//  note the code which can throw the exception is written inside the try block and also , once the exception is thrown at a particular line in the try block the below code which is written right after the line which throws the exception won't get executed, and the excution of the catch block will happen , which comes with the error object (e) which can be used to see the message ,name and stack using the (e) object !! so , (e) object gives us the information about the exception which occured in the try block  . Or do note that we can actually define our own message in the catch block !!



//  so always do remember to write only that particular code inside the try block which generates the exception , and no other code should be written inside the try block as once the exception is generated inside the try block at a particular line , then the code below that particular line inside the try block won't get executed !! and also once the exception is thrown the execution will move to catch block !!


//  finally block : the finally consist of that particular code which must execute even if the exception occurs or not . So , that partcular code will be written inside the finally block which is very neccessary for the whole application .



//  do note one more thing that the catch block code only get executed once the exception gets generated in the try block !! else catch  won't get executed !!


try {
    add();
    console.log('exception is thrown above i.e why i did not get executed ');
} catch (error) {
    console.log(error);
}
finally {
    console.log("this block of code will execute no matter what !! i.e if the exception is thrown or not !!");
}


// most imp line below :

//  there is another way to deal with the execptions  ,is to ( throw ) the excetion once it gets generated in the try block, and in such cases , the catch will run even if we use the throw  statement !! Also do note the error message provided in the throw statement will be used by the catch block to provide context and information about the exception that was generated.


function myFunc(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw 'one of the parameter is not a number !!';
    }
}

try {
    myFunc('a', 12);
}
catch (error) {
    console.log(error, 'xxxxxxxxxxx message xxxxxxxxxxx');
}


/* 
Also , do note When an exception is thrown in the try block, the control is transferred to the catch block, and any statements after the point of the exception are skipped.

In above example, when the throw statement is executed in the myFunc function, the control is transferred to the catch block. The console.log statement in the catch block is then executed, and the error message is logged to the console.

So, in summary, using throw does not prevent the catch block from running. Instead, it causes control to be transferred to the catch block immediately after the exception is thrown.

*/


//129. strictmode :

"use strict";

function myFuncInStrictMode(a, b, b) {
    console.log(a + b + b);
}

myFuncInStrictMode(15, 6, 9)


//  the above code will throw under the strict mode that the duplicate parameters are not allowed !!



// synchronous function : it completes the whole execution and only then it moves forward !!


const myArr = a => console.log(12 + a);
myArr(15);

function myFuncGeek(callback, num) {
    callback(num);
}

myFuncGeek(a => { console.log('hii there ' + a) }, 55)


// Asynchronous function : An asynchronous function is one that allows the code to continue to execute while it is running. Instead of blocking the execution of the code, an asynchronous function will execute in the background and notify the code when it is done through a callback, promise, or async/await syntax . Example : setTimeout function .

// setTimeout(function () {
//     console.log('hii i am setTimeout function');
// }, 5000);

console.log('this code will get executed first in comparsion to the code written inside the setTimeout function ');


// 132 . map Method in JavaScript 


const myArray = [10, 20, 30, 40, 50];

const newArr = myArray.map((value, i, arr) => {
    console.log(value, 'is the value');
    console.log(i, 'is the i');
    console.log(arr, 'is the arr');
    return (value * i)
});

console.log(newArr, 'newArr');



// 132 . Array destructuring :


const myArray2 = ['pankaj', 56, '#128/6 itbp campus sector 32 ', 8264672672];

const [names, roll, address, phone] = myArray2;

console.log(names);



// also do note that the destructuring occurs according to the index position !!


//  example :

const myArray3 = ['x', 'y', 'z', 'chandigarh', 569, 'jkl colony'];

const [alpha1, , alpha3, state, num, addresss] = myArray3;

console.log(alpha3);

const myArray4 = [15, 26, 699];

function myArrReturingFunc(arr) {
    return arr;
}

const [num1, num2, num3] = myArrReturingFunc(myArray4);

console.log(num1);


//  desturcturing the nested arrays :

const [data1, [data2, data3]] = ['hii', ['hey', 'hello']];

console.log(data1, ' data1');
console.log(data2, ' data2');


//133 .object destructuring !!

const myObj = {
    courseName: 'javascript',
    duration: '6 months',
    tutor: 'pankaj kumar',
}

// now destructuring :
const { courseName: cname, duration, tutor } = myObj;

// note : courseName :cname means that the courseName now will be known by cname !!

console.log(cname);


//  do note if we want to declare the variable first and then want to destructure then in that case we can do so using the below approach :

let a, b;
({ a, b } = { a: 10, b: 20 })
console.log(a, b, 'a,b');



// also , do note if an object does not have particular key even we can further use it using the initial values.

//  example :

const { ax, bx = 10 } = { ax: 50 };

console.log(ax, bx, 'ax,bx');


//  do note that while destructuring we can change the name of the keys too :

const { key1: myKey = 45, key2 } = { key1: '563', key2: 5666 };

console.log(myKey, key2, 'myKey,key2');



//  imp topic :

// mostly used in framework i.e object destructuring in a function :

//  object destructuring in a function :


function myFuncShow({ courseName: cname, duration, tutor, house }) {
    console.log(cname, duration, tutor, house, 'courseName,duration,tutor,house');
}

myFuncShow({ courseName: 'JS', duration: '6 months', tutor: 'Geek for Geeks', house: '#128/6' })


// destructuring the object retured by the function :

function funcObj(obj1, obj2) {
    const newObj = { ...obj1, ...obj2 };
    console.log(newObj, 'newObj');
    return newObj;
}


const myReturnedObj = funcObj({ name: 'pankaj', lastName: 'kumar', age: 26 }, { roll: 56, house: '#156/66', lastName: 'Raj' })

console.log(myReturnedObj, 'myReturnedObj');


//  nested object destructuring :


const myNestedObj = {
    name: 'Raja jii',
    age: 93,
    about: {
        wife: 3,
        children: 8,
        nameOfWife: 'xyz'
    },
}

const { name, age, about: { wife, children, nameOfWife } } = myNestedObj;

console.log(wife, "wife");
console.log(children, 'children');



// 136. Spread operator is used when we do not want to copy the refrence and just want to copy the values !!


// 137 .Promise and Async Await in JavaScript

//  note note note : callback can be synchronous as well asynchronus !!

/* callback :A callback function in JavaScript is simply a function that is passed as an argument to another function and is intended to be called later. When the function that receives the callback is executed, it calls the callback function to perform a specific task or action.

In other words, a callback function is a way of passing a behavior (a function) as an argument to another function, allowing that behavior to be executed at a later time or under certain conditions.


example : the forEach is also an example of the callback function !!

*/

// example : showing that the callback can act as a synchronous function :

const myArrayData = [1, 5, 3, 6, 88, 9, 89, 89, 5, 63, 9];

console.log('start');

myArrayData.forEach((ele) => {
    console.log(ele);
})

console.log('end');



//  so the Asynchronous function sometimes lead to the problem of undefined !! and in order to solve that we use the callback function !!


//  example :

console.log('start');

function myFuncForUndefinedProblem(name) {
    setTimeout((name) => {
        console.log('inside the setTimeOut');
        return name;
    }, 2000)
}
const myName = myFuncForUndefinedProblem('pankaj');

console.log(myName, 'myName');

console.log('end');



//  so , the above function shows that the name will be set to undefined ,bcoz javascript won't be waiting for the whole execution of the setTimeout . Due to which it won't be giving us the right output as we have expected !!



//  so to solve the undefined problem we use the callback function :

//  example :

console.log('start');

function myFuncToSolveUndefinedProblem(name, callback) {
    setTimeout(() => {
        console.log('inside myFuncToSolveUndefinedProblem setTimeout');
        callback(name);
    }, 2000)
}
myFuncToSolveUndefinedProblem('pankaj', (nm) => { console.log(nm); });


console.log('end');


//  so here we have accessed the name , and resolved the undefined problem !!

console.log('start 2');

function myFunc10(name, callback) {
    setTimeout(() => {
        console.log('inside the myFunc10 setTimeout');
        callback(name);
    }, 2000);
}


function myFunc11(x, callback) {
    setTimeout(() => {
        console.log('inside the myFunc11 setTimeout');
        callback(['crcket', 'football']);
    }, 2000)
}

myFunc10('raaj', (nm) => {
    console.log(nm);
    myFunc11(nm, (hobby) => { console.log(hobby) });
});

console.log('end 2');



//  so ,this becomes way too complicated as the myFunc11 depends on the myFunc10  and if we have similar kind of logic then it becomes more complicated !!



/*   *********** promises ***********    */


//  so in order avoid this kind of callback hell we use the concept of promises !!




//  do note that the 'then' behaviour is similar to 'catch' during the rejection !!

/* 

A pending promise can either be Resolved with a value or Rejected with a reason (error).

When either of these options happens, the associated handlers queued up by a promise's then method
are called.

A promise is said to be settled if it is either Resolved or Rejected, but not Pending

*/

//  note  : that the Promise object is a constructor function which takes an executor function , and also the executor function takes two parameter too , i.e one is the resolve function and one is reject function so , the resolve function will be called once the promise is fulfilled and the reject function is going to get called when the promise is rejected !!

// and further on inside the executor function we can do the asynchronous tasks , and on success if we want to take some values then we can do so , using the resolve function : resolve(value) and if on reject we want to take some error object , then we can do so using the reject function . i.e reject(Error)  !!

//  so ,syntax :  

// const promiseObj =new Promise ((resolve,reject)=>{
//     // **** Do Asynchronous Operation ****
//     resolve(value);
//     reject(Error);
// })


//  the above code is known as the producing code !!


//  there is another way to create the promise : Function returing a promise :

// function myFunction() {
//     return new Promise((resolve, reject) => {
//         // **** Do Asynchronous Operation ****
//         resolve(value);
//         reject(Error);
//     })
// }




//  A JavaScript Promise object contains both the producing code and calls to the consuming code.

// so ,as  we have seen the producing code above ,and corrosponding to that we have the consuming code :



//  now making the consuming code , and in order to make the consuming code we use the 'then' method .


/*

The then() method returns a Promise. It takes up to two arguments: callback functions for the success 
and failure cases of the Promise.


Syntax:- then(onResolved, onRejected);


onResolved - A Function called if the Promise is fulfilled. This function has one argument, the 
fulfillment value. 

onRejected - A Function called if the Promise is rejected. This function has one argument, the 
rejection reason. 


promiseObj.then(
    value => {console.log(value); },     // onResolved 
    error => {console.log(error); }      // onRejected 
);


// so the above code is known as the consuming code !!

*/



// do note : that the value which we have passed in the resolve function can be accessed , in the consuming code's  .then value !!


//  example of producing code and consuming code together :


//  method 1  : in order to write the producing code and consuming code :

//  producing code :

const promiseObject = new Promise((resolve,reject)=>{
    let req =true ;
    if (req === true) {
        resolve('Request Success');
    } else {
        reject('Request Rejected')
    }
})

//  consuming code :

promiseObject.then(
    (value) => { console.log(value); },// on the resolve , the producing code's resolve value will be passed here !!
    (error) => { console.log(error); }// on the rejection , the producing code's reject value will be passed here !!
);


//  method 2  : in order to write the producing code and consuming code :


const promiseObject2 = new Promise((resolve, reject) => {
    let req = true;
    if (req === true) {
        resolve('request resolved ');
    } else {
        reject('request rejected');
    }
}).then(
    (value) => { console.log(value); },
    (error) => { console.log(error); },
);


//  Also , do note : that the (.then) method returns a promise !! , so , due to which we can do the method chaining there !! , i.e for the producing code we get after using the .then method  , we can further on attach the consuming code to it !!


//  example :

/*

The then method returns a Promise which allows for method chaining. If the function passed as 
handler to then returns a Promise, an equivalent Promise will be exposed to the subsequent then in the method chain .

*/

const promiseObject3 = new Promise((resolve, reject) => {
    let myVal = true;

    if (myVal === true) {
        resolve(10);
    } else {
        reject('not fulfilled ');
    }
}).then(
    (value) => {
        console.log(value, 'value');
        value = value + 12;
        return value;
    },
    (error) => { console.log(error, 'the above value we get in the producing code '); }
).then(
    (value) => { console.log(value, 'is the returned value '); }
)


//  catch() method is used to deal with the rejected promises in order to handle the error !!



//  note : that we can actually handle the error when the promise gets rejected using the .then method's onRejected but it is considered as a good practice to use the .catch method !!

/*

The catch() method returns a Promise and deals with rejected cases only. It behaves the same as calling then(undefined, onRejected). In fact, calling catch(onRejected) internally calls then(undefined, onRejected). 

The catch method is used for error handling in promise composition. Since it returns a Promise, it can be chained in the same way as its sister method, then()

Syntax:- catch(callback);

Where the callback is a function called when the Promise is rejected. This function has one argument error – The rejection error.


*/



//  example 3 : 


const promiseObject4 = new Promise((resolve, reject) => {
    let myDataFetched = false;
    if (myDataFetched) {
        resolve('**************************** yes the data is fetched ****************************!!');
    } else {
        reject('**************************** no the data is not fetched **************************** !!')
    }
}).then(
    (value)=>{console.log(value,'value');}
).catch((error)=>{console.log(error,'error');});



//  do note one more method which is the finally method :

/*

finally () Method  :


The finally() method returns a Promise. SO , no matter what i.e When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.

This helps to avoid duplicating code in both the promise's then() and catch() handlers.

Syntax:- finally(callback)



// conclusion : the finally method will get executed no matter what i.e either if the promise is fullfilled or rejected the finally method is going to get executed !!

*/



//  example : finally () ; method !!


const promiseObject5 = new Promise((resolve, reject) => {
    let myData = { name: 'pankaj', age: 56 }
    let newObj = { house: '152/9 itbp campus !!' };
    if (myData) {
        resolve({ ...myData, ...newObj });
    } else {
        reject('there is an error ');
    }
}).then(
    (value) => { console.log(value, 'value'); }
).catch(
    (error) => { console.log('oops an error occured !!'); }
).finally(
    () => { console.log('finally got runned !!S'); }
)


// ***************** imp note ***************** : 

// so , do note that the then , catch and finally all of them returns a promise !!



// important code :


const promiseObject6 = new Promise((resolve, reject) => {
    let myReq = true;
    const myObject = { name: 'jkl', age: 59 };
    if (myReq) {
        resolve(myObject)
    } else {
        reject('sorry your promise is rejected !!')
    }
}).then(
    (value) => {
        console.log(value, 'is the object !!');
        return { ...value, phone: 8264672672 };
    }
).then(
    (value) => {
        console.log(value, 'value');
        return value;
    }
).then(
    () => { throw 'error is thrown 0000000000000000000000000000000'; }
).catch(
    (error) => { console.log(error, 'error'); }
).finally(
    () => { console.log('it is running after the error is thrown'); }
);


//                 ******************** end ********************



// 

console.log('start 3');

function myFunc10__ResolvedUsingThePromises(name) {
    return new Promise((resolve, reject) => {
        console.log('myFunc10__ResolvedUsingThePromises setTimeout');
        setTimeout(() => {
            if (name) {
                resolve(name);
            } else {
                reject('name not found !!')
            }
        }, 2000);
    })
}


function myFunc11__ResolvedUsingThePromises(x) {
    console.log(x,'is the value of x');
    return new Promise((resolve, reject) => {
        if (x) {
            setTimeout(() => {
                console.log('myFunc11__ResolvedUsingThePromises setTimeout');
                resolve(['football', 'rugby', 'table tennis'])
            }, 1000)
        } else {
            reject('no value is recieved !!')
        }
    })
}

myFunc10__ResolvedUsingThePromises('pankaj').then((value) => { myFunc11__ResolvedUsingThePromises(value) }).then((value) => { console.log('yes you got the array', value); }).catch((error)=>{console.log(error,'error');})

console.log('end 3');


//  imp note :

//  so , do note in real world the API is given to us , which acts as the producing code and corrosponding to that we write the consuming code !!


//  Async Await :

/*


async – This keyword is used to turn a function declaration to async function. 

async Function - An async function is a function declared with the async keyword. 
An async function is a function that knows how to expect the possibility of the await
keyword being used to invoke asynchronous code. It returns a Promise.

await - The await operator is used to wait for a Promise. It can only be used inside 
an async function within regular JavaScript code. 

await can be put in front of any async promise-based function to pause your code on 
that line until the promise fulfills, then return the resulting value.






**************************** Async Function syntax ****************************

syntax 1 :

async function function_name () {……….}



syntax 2 :


Async Function Expression :

let function_name = async function () {………….}



syntax 3 :

Async Arrow Function  :

let function_name = async () => {………….}


*/


//  so , here the consuming code gets changed , i.e the way we consume the code :

async function showHobby() {
    //  now we use await with the promise returning function i.e myFunc10__ResolvedUsingThePromises

    try {
        const nm = await myFunc10__ResolvedUsingThePromises('Raja ji');
        const rajaHobby = await myFunc11__ResolvedUsingThePromises(nm);
        console.log(rajaHobby, 'rajaHobby');
    } catch (error) {
        console.log(error, 'could not fetch the hobbies !!');
    }
}

showHobby();



//  async await is used most of the time in real time projects and to handle the errors we use the try and catch statements  !!


// homework : do research on promise.All() and promise.Race() !!

