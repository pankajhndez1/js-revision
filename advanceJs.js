const myStore = document.getElementById("geek").getElementsByTagName("*");
console.log(myStore);

const myEle = document.getElementsByTagName("p");
console.log(myEle);


for (let i = 0; i < myEle.length; i++) {
    let ele = myEle[i];
    console.log(ele, 'ele');
}

// here the redeclaring of 'ele' is not considering the previous iteration's 'ele' declartaion i.e :

// In summary, since let declares block-scoped variables, each iteration of the for loop has its own block scope, and the variables declared in one iteration are not visible in the subsequent iterations. Therefore, re-declaring the variables in each iteration does not result in an error.


// video : 10


// getElementByCLassName specific :


const myClasses = document.getElementsByClassName("geek");
console.log(myClasses, 'myClasses');


//  if we want only those elments which contains the specific classes then in that case we have to do  like :

const specificClasses = document.getElementsByClassName("color geek");
console.log(specificClasses, 'specificClasses');


//  video :11  : getElementsByClassName More Specific Method in JavaScript 

const myElements = document.getElementById("idOne")
const pkjClassNameEle =myElements.getElementsByClassName("pkj")
//  above only the elements with the pkj class  inside "idOne" will get returned 
console.log(pkjClassNameEle);


// 14. querySelector Method in JavaScript 


//  querySelector follows first come first get !! and it only returns the first item 

// or we can say :


// querySelector is a method in JavaScript that allows you to select the first element that matches a specified CSS selector. It does not necessarily follow a "first come first get" approach, but rather returns the first matching element it finds as it traverses the document from top to bottom.

// For example, if you call document.querySelector('#myElement'), it will return the first element in the document that has an ID of 'myElement'. If there are multiple elements with that ID, it will return the first one it encounters in the document structure.

// It is important to note that querySelector only returns one element, even if multiple elements match the specified selector. If you want to select all elements that match a particular selector, you should use querySelectorAll.


//  element selector : 

const  eleOcc = document.querySelector('p');
//  the above code will return the first occurence of the p tag from our code :
console.log(eleOcc);



// below which ever occurs first i.e either 'p' or 'h1' will get returned by the code :

const  getTheFirstOccurenceOfTheSpecifiedELe = document.querySelector('p,h1');
console.log(getTheFirstOccurenceOfTheSpecifiedELe);


//  id selector : the first occurence of the specified id  will get returned to us .

const getIdUsingQuerySelector = document.getElementById('#geek');

console.log(getIdUsingQuerySelector,'getIdUsingQuerySelector');

// below which ever occurs first i.e either '#geek ' or '#geek1' will get returned by the code

const getFirstIdUsingQuerySelector = document.getElementById('#geek , #geek1');

console.log(getFirstIdUsingQuerySelector,'getFirstIdUsingQuerySelector');



//  querySlector with the classes :


// it will return the first element which will have the specified class .

const result = document.querySelector(".geek");

console.log(result);


//  with multiple classes it follows the same i.e the first occurence in between the specified classes  will get returned !!

const result1 = document.querySelector(".geek ,.geek1");

console.log(result1);


// 15.   querySelectorAll More Specific Method in JavaScript 

// querySelectorAll: this method returns all the specified elements and all the specified classes and ids which are present in the current document in the format of an array  .

// combined selctor i.e for the id , class ,and elements !!

const  myResult =  document.querySelectorAll('h1 ,p ,#geek ,.color');

console.log(myResult,'myResult');


//  id selector 

const results1 = document.querySelectorAll('#geek');

console.log(results1,'results1');

//  now giving the multiple Ids :

const result2 =document.querySelectorAll("#geek ,#geek1 ,#idOne");

console.log(result2,'result2');


//  class selctors :


const result3 = document.querySelectorAll('.color ');

console.log(result3,'result3');


const result4 = document.querySelectorAll('.geek,.color');
console.log(result4,'result4');


//  attribute selector ( imp !! )

//  accessing only that div which is having the atrribute 'id' in the following manner :


const result5 = document.querySelectorAll('div[id]')

//  so , the o/p will be consisting of only those div which contains the attribute 'id'.


//  we can also specify the particular id attribute's value in order to access the particular element .


const result6 = document .querySelectorAll('div[id="idOne"]')

//  so , only that div will get returned here which is having the attribute's value equals to the idOne .

console.log(result6,'result6');


// it's worth noting that querySelectorAll returns a NodeList object which is an array-like object that contains all the selected elements. So, it's necessary to iterate over this object using a loop or other methods to access each element.




// : 16. querySelectorAll Method with Length Property in JavaScript


//  selecting a specific class element  .



const result7 =document.getElementById("idOne").querySelectorAll('h1.pkj');
//  o/p will be the h1 with the class name of pkj .

//  also note that the searching will be done only inside the id ='idOne';

console.log(result7,'result7');



//  more specific :


const result8 = document.querySelectorAll('#show >.geek>span.myspan')


//  so , it will retrive like :

// first it will iterate the element with id show and then it will look for the child element which is having the class geek and then it will again look for its child element (span) having the class of myspan;


console.log(result8,'result8');


// 17 .querySelectorAll Method with Loop in JavaScript . As it returns a  list of all the elements .


//  calculating the length :


 const myLenData = document.querySelectorAll('.geek');

 console.log(myLenData.length ,'is the length');
 console.log(myLenData);


//  18.  looping using for loop .


for (let i = 0; i < myLenData.length; i++) {
    let element = myLenData[i];
    console.log(element, 'element');
}


// 19.   Properties of document Object in JavaScript 


// 20. nodeName ,nodeType and nodeValue  :

// The nodeName read-only property returns the name of the current node as a string.

// * example :  Document  ---> "#document"


// The nodeValue property returns or sets the value of the current node .

// * example : Document null


// The read-only Node.nodeType property that represents the type of the node , it will return a numeric value .


// example  : checking for Document

console.log(document.nodeName);
console.log(document.nodeType);
console.log(document.nodeValue);


//  example : checking for element , Ex: element <p>

console.log(document.getElementById("geek").nodeName);
console.log(document.getElementById("geek").nodeType);
console.log(document.getElementById("geek").nodeValue);


// example : checking for the text .


console.log(document.getElementById('geek').firstChild);  // this will give you the text 


console.log(document.getElementById('geek').firstChild.nodeName);
console.log(document.getElementById('geek').firstChild.nodeType);
console.log(document.getElementById('geek').firstChild.nodeValue);

//  similarly you can change the text value too :

//  example :

document.getElementById('geek').firstChild.nodeValue ='this is the new text !!';

console.log(document.getElementById('geek').firstChild.nodeValue);


//  now accessing the comment node attached with it .


console.log(document.getElementById('geek').firstChild.nextSibling.nodeName);
console.log(document.getElementById('geek').firstChild.nextSibling.nodeType);
console.log(document.getElementById('geek').firstChild.nextSibling.nodeValue);
