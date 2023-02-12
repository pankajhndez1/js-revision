//  prototype inheritance and go through :

const proFunc1 = function (a, b) {
    this.name = a;
    this.roll = b;
    this.myMethodAdd = function (c, d) {
        return ` the sum is ${c + d} `
    }
}

proFunc1.prototype.color = 'red';
proFunc1.prototype.myMethodDev = function (x, y) {
    return x % y;
}

const proFunc2 = function (a, b, c, d) {
    proFunc1.call(this, c, d)
    this.name1 = a;
    this.roll = b;
    this.myMethodMulti = function (c, d) {
        return ` the multi is ${c * d} and the the name1 is ${this.name1} and the parent proFunc1 name is ${this.name}`
    }
}

proFunc2.prototype.color = 'yellow';
proFunc2.prototype.myMethodQuo = function (x, y) {
    return x / y
}

//  function for prototype inheritance :

function protoTypeInherit(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}


protoTypeInherit(proFunc2, proFunc1);


let myObj1 = new proFunc2('pankaj for name 1',45,'raja ji ',6);
console.log(myObj1.name);
console.log(myObj1.name1);
//  roll of the child class will get accessed
console.log(myObj1.roll ,' roll of the child class will get accessed');
console.log(myObj1.myMethodMulti(25,2),'multi is ');
console.log(myObj1.myMethodDev(10,3),'reminder');


class  GrandFather1{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    Gfmethod(){
        return " i am Gfmethod ";
    }
}

class Father1 extends GrandFather1{
    constructor(name,age,mykey){
        //   you must call the super method for the parent constructor before defining you own parameter with this keyword !!
        super(name,age);
        this.mykey = mykey;
    }
    Fmethod(){
        return  " i  am father method  ",this.mykey;
    }
}




let Fonobj  = new Father1("pankaj jii ",44,"iphone 450");

// accessing the grandfather method with the Father1 object !!

console.log(Fonobj.Fmethod());
console.log(Fonobj.Gfmethod());


//  splice method in an array 

let arr =['orange','tomato',15,668,258,99,8,'pankaj','raj'];

// arr.splice(1,0,'x');   
//  it will start inserting the element from the index position 1.

// console.log(arr);

arr.splice(1,2,'xx','yy')
console.log(arr);

// array 2 

let arr2 = ['a', 'b', 'c', 'd', 12, 36, 45, 9, 79, 8];
console.log(arr2.length);
let lengthOfarr2 = arr2.unshift("pankaj", 'kumar');
//  so the unshift method return the length of the new array .
console.log(arr2);
console.log(lengthOfarr2, 'is the length of arr2 ');


//  shift method in js 


let arr3 =['d','e','f',45,225,669,44,8];

let arrfirstEle =arr3.shift();

console.log(arr3);

console.log(arrfirstEle);

// replace method :


let myStr ='pankaj have two cars and one house';

let newStr =myStr.replace("rs",'r');

console.log(newStr);

console.log(myStr.indexOf("a"))
console.log('abc'+5+66);
console.log(55+66+'sdwf');


//  number and strings in case of division :

let num1 = '50';
let num2 =10 ;


//  so , when string gets devided by the number then the operation of division will get performed vice versa !!

console.log(num1/num2);   
//  o/p= 5;

console.log(num2/num1);   
//  o/p= 0.2;



//  checking out the multiplication :


console.log(num1 * num2);
// o/p :500

console.log(num2 * num1);
// o/p :500


//  subtraction cases :


console.log(num1-num2);
// 40

console.log(num2-num1);
//- 40


// so the number and strings works simply as the number and number works in case of normal mathematics for the diffrent operators i.e division , multiplication and subtraction but only in case of addition it works diffrently i.e concatenation .

// NaN
console.log('hello' === 66); 
console.log(NaN ===NaN);

// false will be the o/p as we cannot compare NaN to anything even Nan cannot be comapred to NaN itself due to which the on comparing NaN to NaN will still return false .


//  to fixed method 

let myNum =19.62563;

console.log(myNum.toFixed());
console.log(myNum.toFixed(2));



// Math.min() method .

let myArr =[1,25,6,9,48,87,98,569,698,3];

console.log(...myArr);
console.log(Math.min(...myArr));


// Math.floor(); method :


console.log( Math.floor(2.336));
console.log( Math.floor(-2.336));

//  dates 

let myDate= new Date();

console.log(myDate);
 
console.log(myDate.getMonth()); 

