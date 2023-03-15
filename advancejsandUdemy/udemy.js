// string with numbers 

// const { c } = require("tar");

let x = 12;
let y = '15';

// the string and number together will always performs the concatenation 

console.log(x + y);

// O/P : 1215

//  switch statements :

const day ='monday'

switch (day) {
    case 'monday':
        console.log('today is monday');
        break;
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
        console.log('today is tue||wed||thurs');
        break;

    case 'friday':
    case 'saturday':
        console.log('today is friday || saturday');
        break;
    default:
        console.log("today is sunday");

}

//  string literal :

let myAge = 26;

let myBio =`hii i am a  ${myAge>25 ?'man':'child'}`
console.log(myBio);



//  practice question : the below thing cannot be done as it is the primitive data type .

let myStr ='pankaj kumar'
myStr[0]='A';

console.log(myStr);



// the function parameter will always get defined only when the function is called !!

function  myFruitMixer(apples,oranges) {
    console.log(apples,oranges);
}

myFruitMixer(15,25)


//  arrow functions


const myArrowFunc = (name, age) => {
    const myName = name;
    const myAge = age;
    return `${myName} is ${myAge} years old`;
}

console.log(myArrowFunc("pankaj",25));


//  arrays : note that we can write the expressions( which returns some value) inside a particular array too .


const myArray = ['x','y','z'];
//  non primitive type :
console.log( myArray[myArray.length-1 ]);

myArray[2]='a';

console.log(myArray);

// note that  1942 -1500  is also an expression as it returns some value . 

//  example :

const myArray2 =['pankaj','15',1563-256 ,myArray];

console.log(myArray2);

//  example of calling an expression inside an array  ex: function which is returning something inside an array .


function addingTen(num){
    return num+10 ;
}

const myArr1 =[addingTen(1),addingTen(2),addingTen(3)];

console.log(myArr1);  // [11, 12, 13]


// shift unshift , push and pop ;

//  shift : adds element to the front of an array .

let myArr2 =['x','y','z','k','l',5];

myArr2.push('25');   // 25 as a string we are pushing !!

console.log( myArr2.includes(25));

// 25 as number we are checking !!

//  false , as the number 25 was added as a string and we are looking for it as a number so , no type coercion happens when we look for the element in an array using incudes method ,So, it should be of the same type while searching for a particluar element in an array otherwise it will give you error !!

//  Object property retrieving :

const myObj ={
    firstName :"pankaj",
    lastName:'kumar',
}

console.log( myObj.lastName); // o/p : 'kumar'

// or we can retrieve like : 

console.log(myObj['lastName']); // o/p : 'kumar'


// both are correct !!

//  note that in case of the bracket notations we can also use any expression ( which evaluates some value ) in order to retrieve some data out of the object .

// example :

const nameSuffix ='Name';

console.log(myObj['last'+nameSuffix]);

// o/p : 'kumar'



//  adding the properties to the object :

myObj.location ='USA';
myObj['location'] ='USA';

// both are the correct ways to add the property to an object !!


// methods inside the object :

const myObj1 = {
    name:"pankaj kumar",
    roll:36,
    house :"22 itbp",
    hasDriverLicence :true,
    birthYear:1996,
    calAge :function () {
        //  note that the 'this' keyword inside a particular method holds the refrence of the object calling the method . 
        //  object is myObj1 which calling the method .
         return 2023 - this.birthYear;
    },

    summaryMethod : function () {
        this.summary =`${this.name} has the roll ${this.roll} and his house number is ${this.house} and has the birthyear of ${this.birthYear} so the age of ${this.name } is ${this.calAge()} also note that the ${this.hasDriverLicence?'he has driver licence':'he do not have driver licence'}`

        //  using the  (this.summary) we have set another key in our object which is summary due to which later on we can retrieve the summary easilly from summary key and need not to call the summaryMethod again and again to get the summary of the pankaj , As calling the summaryMethod  again and again will violate the dry code rule and due to which we usually store the o/p of the summaryMethod in a particular key i.e summary and later on can access the summary using myObj1.summary easilly .
        return `${this.name} has the roll ${this.roll} and his house number is ${this.house} and has the birthyear of ${this.birthYear} so the age of ${this.name } is ${this.calAge()}`

        // or return (this.summary) simply !!


        //  also note that we can call the method inside the template literal too !! 
    },
}

// myObj1.calAge  : holds the value of the function and using the peranthesis along with it calls the method . i.e :

myObj1.calAge();
myObj1.summaryMethod();

console.log(myObj1.summary);



//  so , we can somewhere also conclude that the arrays are object too and we can use  the methods of the array object .

// Example : push ,pop , shift and unshift  .




// note : important !!

//  myArr3 =['pankaj',2566-669,{true?'hii':'hello'}]  

// wrong by syntax 
// reason :


// const myArr3 =['pankaj',2566-669,{true?'hii':'hello'},], the third element of the array is an expression that uses a ternary operator to evaluate to either the string 'hii' or the string 'hello'. However, this expression is not a standalone value that can be stored in an array by itself.

// To make it a valid element of the array, we need to make sure that the expression evaluates to a string (or any other data type that can be stored in an array), like this: 
// const myArr3 =['pankaj',2566-669,(true?'hii':'hello')];   so , prefer the round brackets while writting the expression inside the array , ex : (true?'hii':'hello') !!






//  looping through an array along with the continue and break statements :


const myArr3 =['pankaj',2566-669,(true?'hii':'hello'), {name:'raj kappor' ,age:56}];

const arrayToStoreType =[];

for (let i = 0; i < myArr3.length; i++) {
    console.log(myArr3[i], 'has the type :',typeof myArr3[i]);
    let element = myArr3[i];
    arrayToStoreType.push( typeof element)    
}

console.log(arrayToStoreType);


//  example of break and continue :

const myFunc =function () {
    console.log('this is myFunc');
}


const myArr4 =['pankaj',45,['a','b','c'], {name :"raja ji" ,roll:56} ,myFunc];
const arrayToHoldTypeExceptFunction =[];

for (let i = 0; i < myArr4.length; i++) {
    console.log(myArr4[i],typeof myArr4[i]);
   (typeof myArr4[i] !='function'? arrayToHoldTypeExceptFunction.push(typeof myArr4[i]):null)
}

console.log(arrayToHoldTypeExceptFunction);  


//  while loop 

let luckyNum=Math.floor(Math.random()*6+1);
console.log(typeof luckyNum);

while (luckyNum!=6) {
    console.log('better luck next time',luckyNum);
    luckyNum=Math.floor(Math.random()*6+1);
    if (luckyNum===6) {
        console.log(`it's a six`);
    }
}