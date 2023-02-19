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




// Lecture : 21  Properties of Attribute Object in JavaScript  :


//  so , in order to access the attribute and its value we do it like :


//  getting the node name 
console.log(document.getElementById('geek1').attributes[0].name);


//  getting the node value 
console.log(document.getElementById('geek1').attributes[0].value);

// assigning the value to something else :

document.getElementById('geek1').attributes[0].value ='geeeeek111'


//  due ot which the id value will get changed to something else !!


// video : 22    Difference between Node of an Element and Element Node of an Element in JavaScript .


//  note : that while making the document tree starting from the document , then the enter , space and tab also gets counted !! and these three things create the node in document tree , which we usually call as text node .


//  which mean if we check the nodeName of a enter  key then it will provide the name as the text node .


//  some example of the element Node are  : html , head, body,h1 and p tag !!  this is known as the Element Node of an Element .

//  so , we can conclude that  except the Element node of an Element all we have is the Node of an element which includes the enter , space ,text ,tab etc and on checking the nodeName of the Node enter , space ,text ,tab etc , it will usually return us text node !!


//The nodeName of the comment node would be "#comment".!!



//  23 . DOM Traversal in JavaScript .

// * parentNode : it will return the parent node .  Which includes Node of an Element, which consist of enter , tab , comment , text etc .

// * parentElement : it will return the parent element node . Which includes the Element Node of an Element in JavaScript .

// • parentNode – Returns parent node

// • parentElement – Returns parent element node

// • childNodes – Returns collection of an element’s child nodes (including text and comment nodes)

// • children – Returns a collection of an element’s child element node (do not include text and comment  nodes)


// • firstChild – Returns first child node of an element (it can be text or comment node)

// • firstElementChild – Returns first child element node of an element

// • lastChild - Returns last child node of an element (it can be text or comment node)

// • lastElementChild – Returns last child element node of an element

// • previousSibling - Returns previous node of same level (it can be text or comment node)

// • previousElementSibling – Returns previous element node of same level

// • nextSibling - Returns next node of same level (it can be text or comment node)

// • nextElementSibling – Returns next element of same level



// 24.  parentNode and parentElement in JavaScript .


// The parentNode read-only property returns the parent of the specified node in the DOM tree.
// The parentElement property returns the parent element of the specified element. If the parent node is not an element node, it returns null. 


// parentNode will return the node no matter what , but in case of accessing the parentElement the parent element should be there !! for example :


console.log(document.getElementById('myId').parentNode);

//  o/p will give document !!

console.log(document.getElementById('myId').parentElement);

//  o/p will return null as the html does not have the parent element but do have the parentNode i.e document.
//  so the parentNode should be an element in order not to return null.


//  so , the parentNode will return the parent element no matter if it's an element or not , but in case of parentElement it should be an element ,i.e parent should be an element , otherwise it will return us the null.



// 25. childNodes and children in JavaScript .


//  children igonres the text node , white space , enter key and comments while childNodes property doesn't !! and also note that both returns the list of the elements .

// accessing the childNodes inside the element which is having the id='idOne'

console.log( document.getElementById('idOne').childNodes);

//  using the below code we can access the element <h1 class="pkj"> h1 inside the div </h1> inside text !!

console.log(document.getElementById('idOne').children[0].childNodes[0]);


//  or we can use the property textContent too to get the text !!

console.log(document.getElementById('idOne').children[0].textContent);



//  we can also do the looping too in order to access the childNodes and children !!


const myArr = document.getElementById('myBody').childNodes;

for (let i = 0; i < myArr.length; i++) {
    let element = myArr[i];
    console.log(element);
}



// 26. firstChild and firstElementChild in JavaScript 

//  firstChild considers the text ,comment , enter key ,spaces whereas the firstElementChild will only consider the element child .

console.log(document.getElementById('myBody').childNodes);
console.log(document.getElementById('myBody').firstChild);
//  so we can say that childNodes is some where equivalent  to firstChild .


console.log(document.getElementById('myBody').children);

console.log(document.getElementById('myBody').firstElementChild);

//  whereas  we can say that children is some where equivalent  to firstElementChild . Also we can use the textContent property to access the text inside them !! and  same goes with lastChild and lastElementChild and previousSibling and previousElementSibling .

// ex :

console.log(document.getElementById('myBody').firstElementChild.textContent);


// 28. note that the previousSibling and previousElementSibling accesses the previous  Sibling of the element which can include the text, comment , enter key etc , and Also previousElementSibling does not include the text , comment and the enter key and only access the previous element sibling . Also , note in case the previous sibling is not present while accessing the previousElementSibling or previousSibling then in that case it will return null !!


console.log(document.getElementById('myBody').firstChild.previousSibling);

//  it will return null as the first child does not have the previous sibling .


console.log(document.getElementById('idOne').lastElementChild.previousElementSibling);


//29. nextSibling and nextElementSibling 

// nextSibling : will consider the text , comment , enter key and tab !!

console.log(document.getElementById('idOne').firstChild.nextSibling);

// nextElementSibling : will consider the html elements !!

console.log(document.getElementById('idOne').firstChild.nextSibling.nextElementSibling);

// 30. How to Create Element Node in JavaScript


//  creating an element node : 

let nNode = document.createElement('h2');

console.log(nNode);

//  creating a new text node :

let newTextNode  = document.createTextNode("hii there !!")

console.log(newTextNode);

//  creating a new comment node using createComment method :

let newCommentNode = document.createComment('i am a comment !!')

console.log(newCommentNode);


//  creating the document fragment using the createDocumentFragment !!

let theDOcFrag = document.createDocumentFragment();

console.log(theDOcFrag);


// 34. How to Append Element Node in JavaScript

//  the appendChild(Child_Node) method can be used to append the html element  , comment node ,or text node easily . 
//  append will always append to the last !! 

// append existing element : so if append an exsisting element then it will move from its original position and will get inserted to the target element . 



//  example :

const myData = document.getElementById('idTwo').childNodes[1];

console.log(myData);

document.getElementById('idThree').appendChild(myData);

console.log(document.getElementById('idThree'));



//  creating and appending new h2 to div which is having idFour !!

const myH2Data =document.createElement('h2');
console.log(myH2Data);
const myTextNode = document.createTextNode('this is h2 text');

myH2Data.appendChild(myTextNode) 
console.log(myH2Data);

document.getElementById('idFour').appendChild(myH2Data)


//  now appending a comment node at the same place , which will get added to the last !!
const myCommentNode =document.createComment('i am small comment')

document.getElementById('idFour').appendChild(myCommentNode);

console.log(document.getElementById('idFour'));

//  working with the document fragments So, note that once the document fragment along with its element gets inserted in the document tree , then the document fragment  becomes empty again !!

//  first step is to create the document fragment :

const myDocFrag =document.createDocumentFragment();


console.log(myDocFrag);

// now inserting the elements in this document fragment !!

const myele =document.createElement('h1');

myele.textContent ='this is the h1 for the doc fragment !!'

console.log(myele);

//  now inserting this h1 to the id ='docFrag';

myDocFrag.appendChild(myele);

document.getElementById('docFrag').appendChild(myDocFrag)

// now after inserting the element in the document tree  the document fragment will again get empty !!

console.log(myDocFrag);


// 40. When you use the "normalize" method on a node in the DOM tree, it will traverse the subtree of the given node and merge any adjacent text nodes that it finds into a single node. This can be useful for cleaning up the DOM tree and simplifying the structure.

// For example, if you have a DOM tree like this:


{/*

 <div>
  Some text
  <span>More text</span>
  <br>
  Even more text
</div>

*/}


// and you call the "normalize" method on the "div" element, the resulting DOM tree will look like this:


// <div>
//   Some textMore text
//   <br>
//   Even more text
// </div>


// As you can see, the "normalize" method has merged the two adjacent text nodes into a single node.

// However, it is important to note that the "normalize" method does not remove any nodes from the DOM tree, and it does not change the overall structure of the tree. It only merges adjacent text nodes into a single node, which can simplify the structure and make it easier to work with.

const myelem=document.createElement('h1');
const myDatas =document.createTextNode('hehe ');
const myEmptyData =document.createTextNode(' ');
const myelem2=document.createElement('h2');
const myDatas2 =document.createTextNode(' hahahaha ');
myelem.appendChild(myDatas);
myelem2.appendChild(myDatas2);

document.getElementById('normalizeMeth').append(myelem)
document.getElementById('normalizeMeth').append(myelem2)
document.getElementById('normalizeMeth').append(myEmptyData)
console.log(document.getElementById('normalizeMeth').childNodes);

document.getElementById('normalizeMeth').normalize();
//  after normalizing the no. of childNodes :
console.log(document.getElementById('normalizeMeth').childNodes);
console.log(document.getElementById('normalizeMeth'));


//  see normalize again !!