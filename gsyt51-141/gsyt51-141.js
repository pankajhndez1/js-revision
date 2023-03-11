//72 onward se pdna 
 

const myTable =document.getElementById('mytab');

const tabCpation =myTable.caption ;

console.log(tabCpation,"tabCpation");
console.log(tabCpation.innerText,'tabCpation');

tabCpation.innerText='new caption'


//  accessing the thead  of the table !!


const myThead = document.getElementById('mytab');

console.log(myThead.tHead);


//  manuplating the thead :
console.log(myThead.tHead.innerHTML,'myThead.tHead.innerHTML');
myThead.tHead.innerHTML ="<tr><th>Num</th><th>Name</th><th>subject</th></tr>"

//  manuplating the tfoot :

const myTfoot =document.getElementById('mytab').tFoot;

console.log(myTfoot,'myTfoot');
myTfoot.innerHTML = "<tr><td>12</td><td>Raj</td><td>python</td></tr>"



//73 .createCaption and deleteCaption Methods in JavaScript


//  createCaption

const tcap = myTable.createCaption();
tcap.innerText ='my caption';

// deleteCaption

myTable.deleteCaption();


// createTHead and deleteTHead

// createTHead :


const myTheads =myTable.createTHead();
console.log(myTheads,'myTheads');
console.log(myTheads.innerHTML);
myTheads.innerHTML ="<tr><th>Number</th><th>Name</th><th>my subjects</th></tr>"


// deleteTHead :

console.log(myTheads);

// myTable.deleteTHead();




// 75. createTFoot and deleteTFoot Methods in JavaScript .
const myData =myTable.createTFoot();
console.log(myData);
console.log( myData.innerHTML);
myData.innerHTML ="<tr><td>123</td><td>pankaj jii</td><td>aws</td></tr>"


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


console.log( myBody.rows);
console.log( myBody.rows[0].innerHTML);
// myBody.rows[0].insertCell().textContent ='hii'


//  now adding a new row to the particular section of the table i.e inside the body  .


const myTableBody =document.getElementById('tBody');

const myNewRow= myTableBody.insertRow();

myNewRow.insertCell().textContent ='hiiii'


//  deleting the newly inserted row from tBody :

myTableBody.deleteRow(1);



//78. HTML Table Row Element in JavaScript 


// do note that the row property do includes the row of the thead too !! so , all the rows of the tables are considered when using the rows property  !!


console.log( myTableData,'myTableData');

console.log( myTableData.rows,' myTableData.rows');
//  to get all the cells of a particular row :
console.log(myTableData.rows[0].cells);


//  to get the length of the cells of a particular row :
console.log(myTableData.rows[0].cells.length);


// inserting  a new thead cell at the last :

console.log(myTableData.rows[0].cells);
myTableData.rows[0].insertCell().innerHTML ='<th>Fav color</th>';
console.log( myTableData.rows[0].cells);

const lastDataOnRow1 =myTableData.rows[1].insertCell();

lastDataOnRow1.innerText ='Red';


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
    alert('i  got clicked and i am myFunc2 ')}
document.getElementById('myButton').addEventListener('click', myFunc1)
document.getElementById('myButton').addEventListener('click', myFunc2)



//  now removing the event listener i.e myFunc2

document.getElementById('myButton').removeEventListener('click',myFunc1)



// 91 . target and currentTarget :

//  bubble phase :
document.getElementById('one').addEventListener('click',function myFunc1(e) {
    console.log('target',e.target.dataset.name);
    console.log('currentTarget',e.currentTarget.dataset.name);
    console.log('1');
},false);

document.getElementById('two').addEventListener('click',function myFunc2(e) {
    console.log('target',e.target.dataset.name);
    console.log('currentTarget',e.currentTarget.dataset.name);
    console.log('2');
},false)

document.getElementById('three').addEventListener('click',function myFunc3(e) {
    console.log('target',e.target.dataset.name);
    console.log('currentTarget',e.currentTarget.dataset.name);
    console.log('3');
},false)

document.getElementById('four').addEventListener('click',function myFunc4(e) {
    console.log('target',e.target.dataset.name);
    console.log('currentTarget',e.currentTarget.dataset.name);
    console.log('4');
},false)


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
myAnchor.addEventListener('click',func1,false);

myDiv.addEventListener('click', function (e) {
    this.style.backgroundColor = 'red';
},false);

// 94. Mouse event in js :

//note : event like  click , mousedown ,contextmenu ,mousemove and mouseup event bubbleup !! whereas mouseeneter and mouseleave doesn't bubble up !!
//  remember bubble up means firing the parent's events too ,but note that, it is not necessary for both elements to have the same event types in order for the event to "bubble up" from the child to the parent elements.
document.getElementById('ones').addEventListener('mousedown',function (e) {
    console.log(e.type,'event type bubble');
},false);

document.getElementById('fours').addEventListener('click',function (e) {
    console.log(e.type,'event type');
},false);


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


console.log( window.history.length,' window.history.length');


// window.history.back();


//  the negative value which the go takes will take u one step back !!
// window.history.go(-1);


//  if we want to go two steps back then we have to give the go parameter value of -2 and so on !!

// 108 . setTimeout and clearTimeout Methods 


const retVal=setTimeout((e) => {
    document.getElementById('myPara').style.color = 'red';
}, 5000);


//  setTimeout will execute after the number of miliseconds gets completed !!

function myClearTimeOut() {
    clearTimeout(retVal)
}

document.getElementById('myBtn').addEventListener("click",myClearTimeOut)



// 108. setInterval and clearInterval methods 

// the difference between the setTimeOut and setInterval is that the setTimeOut executes a function only once , whereas the clearInterval executes a function each and every time , when the function interval completes !!

// const setInt = setInterval(() => { document.getElementById('setIntervalEx').textContent += 'hello ' }, 2000);

//  inorder to stop the execution done by the setInterval we use the clearInterval .

// const myfuncexp = function () {
//     clearInterval(setInt);
// }

// document.getElementById('stopSetInterval').addEventListener('click',myfuncexp);


// 112. accessing the forms

console.log( document.forms,' document.forms');

const myFormData =document.forms['myForm'];

console.log(myFormData,'myFormData');


// 113. accessing form fields

//  example :

const mysData =document.yForm.elements['y_username'];

// console.log(mysData);
// console.log(mysData.name);
// console.log(mysData.type);


// getting the data from the field input :

const myHandlerForForm = document.getElementById('clickSubmit');
mysData.addEventListener('change', (e) => {
    console.log(e.target.value,'e.target.value');
})
myHandlerForForm.addEventListener('click', function (e) {
    const mySubmittedData = mysData.value
    console.log(mySubmittedData, 'mySubmittedData ');
})


// 114. Form Validation in JavaScript .


const myVali = document.fForm.f_username;
console.log(myVali);

let regexPattern =  /^[^\d\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
function validateData(data) {
    if (regexPattern.test(data)) {
        document.getElementById('spaan').textContent ='valid'
    } else {
        document.getElementById('spaan').textContent ='inValid'
    }
}
myVali.addEventListener('change',function (e) {
    console.log(e.target.value);
    validateData(e.target.value);
})

// 117 . cookies 

// document.cookie = 'username =pankaj jii';
// console.log(document.cookie);


document.cookie = 'username =pankaj ;max-age=' + 60 * 60 * 24 * 10 + ";path=/";


console.log(document.cookie);

// 119. persistent cookies :

document.cookie ='house = #256 itbp campus sector 32 c chandigarh ; expires =Mon ,12-sep -2023 09:00:00 UTC' ;

console.log(document.cookie);

//121. se pdna

document.cookie = 'username=orange';
document.cookie ='id=banana';


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

sessionStorage.setItem('otp',5693);


//  note even if we comment the above code i.e sessionStorage.setItem('otp',5693); and re load the page even then sessionStorage is going to persist there !! but note if we comment the code i.e i.e sessionStorage.setItem('otp',5693); and close the current opened browser then the sessionStorage is not going to get last !!


sessionStorage.setItem('mail','raja@gmail.com');

//  now in order to get the itme from the sessionStorage then :

console.log( sessionStorage.getItem('otp'));

// now using the key property to get a particular item's key :

console.log( sessionStorage.key(0));


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


function myFunc(a,b) {
    if (isNaN(a)||isNaN(b)) {
        throw 'one of the parameter is not a number !!';
    }
}

try {
   myFunc('a',12); 
} 
catch (error) {
    console.log(error,'xxxxxxxxxxx message xxxxxxxxxxx');
}


/* 
Also , do note When an exception is thrown in the try block, the control is transferred to the catch block, and any statements after the point of the exception are skipped.

In above example, when the throw statement is executed in the myFunc function, the control is transferred to the catch block. The console.log statement in the catch block is then executed, and the error message is logged to the console.

So, in summary, using throw does not prevent the catch block from running. Instead, it causes control to be transferred to the catch block immediately after the exception is thrown.

*/


//129. strcimode :