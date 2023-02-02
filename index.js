var var1 = 10;
console.log(var1, "var1");

// switch cases :

let key = "Mon"

switch (key) {
    case "Mon":
        console.log(key, "is the value you have entered !!")
        break;
    case "Tue":
        console.log(key, "is the value you have entered !!")
        break;
    case "Wed":
        console.log(key, "is the value you have entered !!")
        break;
    case "Thurs":
        console.log(key, "is the value you have entered !!")
        break;
    case "Fri":
        console.log(key, "is the value you have entered !!")
        break;

    default:
        console.log("sat or sunday !!")
        break;
}


// nested while :
let i = 0
while (i < 3) {
    console.log(i, 'outer loop');
    i++;
    let j = 0;
    while (j < 5) {
        console.log(j, 'inner loop');
        j++;
    }
}

// do while :
let x = 0;
do {
    console.log(x, 'x');
    x++;
} while (x < 5);

// nested do while :
let b = 0;
do {
    console.log(b, 'outer');
    b++;
    let a = 0;
    do {
        console.log(a, 'inner');
        a++;
    } while (a < 3);
} while (b < 5);


// break and continue 


// break :

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i, 'is the value of i');
}


//  continue :

for (let a = 0; a < 5; a++) {
    if (a === 3) {
        continue;
    }
    console.log(a, 'is the value of a')
}

// function with paramater and argument object in js 


function myFunc(a, b, c) {
    console.log(arguments, " arguments");
    console.log(a, "a");
    console.log(b, "b");
    console.log(c, "c");
    arguments[0] = 'hii'
    console.log('now value of a is ', a);
    console.log(arguments[3], " arguments[3]")

}

myFunc(10, 20, 30, 12, 36);


function myObjFunc({ x = 10, y = 20, name, age } = {}) {
    console.log(x + y, 'x+y');
    console.log(name, 'name');
    console.log(age, 'age');
}


myObjFunc({ name: "pankaj", age: 26 });


function outerFunc() {
    var a = 10;
    function innerFunc() {
        var x = 15;
        console.log(a, 'a in the inner !!');
        console.log(x, 'x in the inner !!')
    }
    console.log(a, 'a in the outer !!')
    innerFunc();
    console.log(x, 'sfsg')
}

outerFunc();

if (true) {
    var xy = 02;
}
console.log(xy);

var myVar = 15;

function myFunc1() {
    console.log(myVar);
    var myVar = 12;
}

myFunc1();

function myFunc2(a) {
    return function (b) {
        return a + b;
    }
}

const myHolder = myFunc2(10);
const myOut = myHolder(20);
console.log(myOut);


const myArrowFunc = () => {
    console.log("myArrowFunc");
}
myArrowFunc();


const myArrowFunc1 = (a) => {
    let b = a;
    return b + a;
}

console.log(myArrowFunc1(10));



const myArrowFunc2 = a => a;
console.log(myArrowFunc2("pankaj"));

const myArrowFunc3 = (a, b) => a + b
console.log(myArrowFunc3(25, 3));

const myArrowFunc4 = (x) => { return x };
console.log(myArrowFunc4("hii"));

//  iifee

(function (c, d) {
    console.log("value of c and d is ", c, d)
})(25, 36);


// undefined and null

let myVari;
console.log(typeof (myVari));


let myVari1 = null;
console.log(typeof (myVari1), "myVari1")




function myFunc() {
    var yx = 5;
}
myFunc();
// console.log(yx);


const myObj = new Object();


myObj.name = "pankaj";
myObj.rollNum = 25;
myObj.state = 'chandigarh'
myObj['lastName'] = 'kumar';
myObj.myFunc = function () {
    console.log("hii there !!");
}
myObj["myFunc1"] = function () {
    console.log("hey there !!");
}
console.log(myObj);
myObj.myFunc();
myObj["myFunc1"]();


const myObj1 = {

}

myObj1.name = "raja jii";
myObj1.roll = "15";
myObj1["myFunc"] = function (a, b) {
    console.log(a + b, 'is the sum');
}

//  you should use the double or single quotes while making the methods i.e "myFunc"


console.log(myObj1, ' myObj1');

myObj1["myFunc"](10, 20);

console.log(myObj1);



//  factory functions :

function myFactoryFunc(modelName, modelNum, modelColor, price) {
    return {
        model: modelName,
        modelNumber: modelNum,
        modelColor: modelColor,
        modelPrice: price,
    }
}

const newObj = myFactoryFunc("samsung", "A71", "black", 32000);
console.log(newObj)

delete newObj.model;

console.log(newObj)


console.log(newObj.model, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
//  the above line of code will show u undefined !!+\][po-*


// constructor function :


function myConstructorFunc(a, b) {
    this.name = a;
    this.roll = b;
    this.myMeth = function (c, d) {
        console.log(c, 'and ', d)
    }
}


let myObjx = new myConstructorFunc("pankaj", 152);
console.log(myObjx.name);
console.log(myObjx.roll);
myObjx.myMeth("hey", "Hii")



let myNewObj = new Object();
function myFuncs(a, b) {
    console.log(a, b)
}
myNewObj["name"] = "pankaj";
myNewObj["roll"] = 15;
myNewObj["myMeth"] = myFuncs;

console.log(myNewObj)


myNewObj["myMeth"]("hey", 'there')


// acessing the object property :

function myFuncObj(name, roll) {
    this.name = name;
    this.roll = roll;
    this.myMethod = function () {
        console.log(this.name + 'and my roll is ' + this.roll);
    }
}


let obj1 = new myFuncObj("pankaj", 125);

console.log(obj1);

for (const key in obj1) {
    if (typeof (obj1[key]) !== 'function') {
        console.log(key, " holds : ", obj1[key]);
    }
}

console.log(Object.keys(obj1));


//  creation of the object using the object literal :


let myObject = {};

myObject['name'] = "pankaj kumar";
myObject["roll"] = 15;
myObject.school = 'k.v sector 8'
// so defining the object using without usig the "" , but when it comes to acces it using the [''] then in that case we will using the "" i.e double quoutes .

console.log(myObject);

console.log(myObject["school"]);


let myObject1 = { name: 'raja ji ', roll: 55 }
console.log(myObject1);


//  using the Object constructor function now :


let myObject2 = new Object();
console.log(myObject2);

myObject2.name = 'pankaj kumar'

console.log(myObject2);

//  now using the factory function 

function myFact(a, b) {
    return (
        {
            name: `${a}hey there ${b}`,
            subject: "js ",
        }
    )
}

let myO1 = myFact(1, 2)
console.log(myO1);


//  making the object using the constructor function 


function myFuncCon(a, b) {
    {
        this.model = "galaxy";
    }
}

let myObj3 = new myFuncCon();
console.log(myObj3, "myObj3");

//  now making the constructor in order to make the js object :

class myClass {
    constructor(model, modelNum) {
        this.mobileName = model;
        this.modelNumber = modelNum;
        this.myMethod = function (a, b) {
            return (a + b);
        };
    }
}

let myClassObj = new myClass('samsung', 7231);
console.log(myClassObj.mobileName, ' myClassObj.mobileName');

console.log(myClassObj.myMethod(12, 25), " myClassObj.myMethod(12,25)");


//  making the private property inside the object which is made using the constructor function .


let myPrvClass = function (a, b) {
    this.name = "pankaj";
    let phoneNumber = a;
    this.address = b;
    this.myMethod = function (c, d) {
        return (`${this.name} phoneNumber is ${phoneNumber} and address is ${b} and cp is ${c + d}`)
    }
}

let myObjj = new myPrvClass(8264672672, '//22 itbp campus sector 32  d chandigarh');

console.log(myObjj.name);
console.log(myObjj.myMethod(20, 35));



const myProtoFunc = function (name, roll) {
    this.name = name;
    this.roll = roll;
    this.myMethod = function (phone, address) {
        return `my name is ${this.name} and my roll is${this.roll} and my phoen number is ${phone} and address is ${address} and cp is ${this.costPrice} `
    }
}

const myObjPro = new myProtoFunc('pankaj', 39);

console.log(typeof (myProtoFunc.prototype), 'type');
myProtoFunc.prototype.favColor = 'black';

console.log(myObjPro.favColor, '  myObjPro.favColor');


//  defining the function using prototype :


myProtoFunc.prototype.myUniversalMethod = function (x, y) {
    this.sellingPrice = x;
    this.costPrice = y;
}


console.log(myObjPro.myUniversalMethod(10, 20));
console.log(myObjPro.myMethod('8264672672', "//22 itbp camp"));
console.log(myObjPro);

//  Object.keys(objectName) can access the all the instance members 
console.log(Object.keys(myObjPro));

//  for in loop can access the prototype member too !!


for (const key in myObjPro) {
    if (myObjPro[key]) {
        console.log(key, "these are the key of instance and prototype members");
    }
}


// knowing the prototype object more :

// every object in js is associated with another object .So,

let myObje = {};

console.log(Object.getPrototypeOf(myObje));
console.log(Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));


let myArrayObje = new Array();

console.log(Object.getPrototypeOf(myArrayObje));
console.log(Array.prototype);
console.log(Object.getPrototypeOf(Array.prototype));
console.log(Object.getPrototypeOf(Object.prototype));

// lecture 86 se pdna
//  how prototype works in js :


function Myfunc() {
    this.name = "pankaj";
    this.roll = 25;
}
console.log(Myfunc);
Myfunc.prototype.a = 10;
Myfunc.prototype.name = "Manish ram";
Myfunc.prototype.Eroll = "55";
const myObj22 = new Myfunc();

console.log(myObj22.a, " myObj22.a");
console.log(myObj22.name, " myObj22.name");
console.log(myObj22.Eroll, " myObj22.Eroll");

console.log(Myfunc.prototype);
console.log(myObj22.__proto__);

console.log(Myfunc.prototype.constructor);
console.log(myObj22.__proto__.constructor);
console.log(Myfunc.prototype.constructor === myObj22.__proto__.constructor);



//  prototype inheritance in js :


function MyProtoFunc1(a, b) {
    this.name1 = a;
    this.phone = b;
    this.myMethod = function calSp(cp, sp) {
        console.log(`my name1 is${this.name1} and my phone num is ${this.phone} my cp is ${cp}  and my sp is ${sp}`)
    }
}
// MyProtoFunc1.prototype = {};
MyProtoFunc1.prototype.color = 'black';
let myObjectFunc = new MyProtoFunc1('pankaj', 8264672672);
myObjectFunc.__proto__.brand = 'zara';

myObjectFunc.myMethod("50K", "26K");


console.log(myObjectFunc.color, ' myObjectFunc.color');
console.log(MyProtoFunc1.prototype.__proto__);




function MyProtoFunc2(a, b) {
    MyProtoFunc1.call(this, a, b)
    this.name = a;
    this.phone = b;
    this.myMethod = function calSp(cp, sp) {
        console.log(`my name is${this.name} and my phone num is ${this.phone} my cp is ${cp}  and my sp is ${sp}`)
    }
}

MyProtoFunc2.prototype = Object.create(MyProtoFunc1.prototype)
MyProtoFunc2.prototype.constructor = MyProtoFunc2;
let myObjectFunc2 = new MyProtoFunc2('Raja jii', 9856575622);

console.log(myObjectFunc2.color);
console.log(myObjectFunc2.name1);
console.log(myObjectFunc2.color);


// prototype inheritance  :

function MyPro1() {
    this.name = "Raja jii hai";
    this.house1 = "ITBP 1";
}

MyPro1.prototype.color ="red"


function MyPro2() {
    MyPro1.call(this);
    this.name = "pankaj jii hai";
    this.house2 = "ITBP 2";
}

MyPro2.prototype = Object.create(MyPro1.prototype);
MyPro2.prototype.constructor = MyPro2;

let myproObj1 = new MyPro1();
let myproObj2 = new MyPro2();


console.log(myproObj2.house1);
console.log(myproObj2.color);



// one super and two sub classes 


function mySuperClass(model) {
    this.model = model;
    this.x ="super"
}

mySuperClass.prototype.myMethod = function (a, b) {
    return ` A is ${a} and B is ${b} and the model is ${this.model} and the value of x is ${this.x}`
}

function mySubClass1(modelA, model) {
    mySuperClass.call(this, model)
    this.modelSub1 = modelA;
    this.x='sub 1'
    console.log(this.model, 'of the parent class i.e mySuperClass');
}
mySubClass1.prototype = Object.create(mySuperClass.prototype);
mySubClass1.prototype.constructor = mySubClass1

mySubClass1.prototype.color = 'black mySubClass1';


function mySubClass2(model, x, y) {
    mySubClass1.call(this, x, y);
    this.model='mai sub class2222222222222222'
    this.modelSub2 = model;
    this.x='sub 2'
    console.log(this.modelSub1, 'of mySubclass1 i.e modelA value');
}
mySubClass2.prototype = Object.create(mySubClass1.prototype);
mySubClass2.prototype.constructor = mySubClass2

mySubClass2.prototype = Object.create(mySuperClass.prototype);
mySubClass2.prototype.constructor = mySubClass2

mySubClass2.prototype.color = 'red mySubClass2';


let newSubClassObj = new mySubClass2("Tesla", 'bike', 'plane');


console.log(newSubClassObj.color);
console.log(newSubClassObj.modelSub2);
console.log(newSubClassObj.modelSub1);
console.log(newSubClassObj.model);
console.log(newSubClassObj.myMethod(10,20));
console.log(newSubClassObj.myMethod(10,20));


function mixin(target, ...sources) {    
    //this one is rest paramter ,which means that the sources here consist
    //eating, walking, talking as an array of object , and now in order to extract the
    //methods we will be using the spread operator .
    console.log(sources)

   let mj= Object.assign({}, ...sources);   //this one is spread operator
   console.log(...sources)
   console.log(mj);
}


//Eating Feature 
var eating = {
    eat: function () {
        return "I can Eat <br>";
    }
};



//Walking Feature
var walking = {
    walk: function () {
        return "I can Walk <br>";
    }
};



//Talking Feature
var talking = {
    talk: function () {
        return "I can Talk <br>";
    }
};



//Human Class
var Human = function () {

}


//Compositing Features to Human
mixin(Human.prototype, eating, walking, talking);



//  mixims example along with Object.assign examples :

let userInfo ={ name :"pankaj" , lastName :"kumar" ,roll :"52"}
let userPrivateInfo ={phone :8264672672 ,address:"#2255 jkl colony chandigarh"}
let userProtectedInfo ={email:"pankajkumar12861@gmail.com" ,roll:96 ,favNum:5}

let userTotalInformation = Object.assign({},userInfo,userPrivateInfo,userProtectedInfo);

console.log(userTotalInformation)


// now using the mixims :

let myMiximFunc = function (name, roll) {
    this.name = name;
    this.roll = roll;
}

myMiximFunc.prototype.favNum = 965;

//  defining the properties in the prototype of the function using the Object.assign method .

Object.assign(myMiximFunc.prototype,userInfo,userPrivateInfo,userProtectedInfo);

let objMixim = new myMiximFunc("pankaj jii", 56);


console.log(objMixim.roll);  // instance member do consist of roll so 56 .
console.log(objMixim.address);  // will go into the prototype as the instance member does not have the address




//  creating the mixim function :


let myFuncMix =function (target,...args) {
    return (Object.assign(target,...args))
}

let myObjOfmixim =myFuncMix({},userInfo,userPrivateInfo,userProtectedInfo);

console.log(myObjOfmixim,'myObjOfmixim');


// class in js : well there is no sch thing as class in js but it is a special function which we usually call as class in js .

class myclass {
    constructor(a, b) {
        //  instance member 
        this.name = a;
        this.roll =b;
        this.myMeth =function (c,d) {
            return c+d
        }
    }
// prototype member 
    show(x,y){
        return x+y;
    }
}

let myclassObj =new myclass('pankaj',25);

console.log( myclassObj.name," myclassObj.name;");
console.log(myclassObj.roll,"myclassObj.roll");
console.log(myclassObj.myMeth(25,3));

console.log(myclassObj.show(1,2))


//  paramterized constructor 

class MyclassParamterized {
    constructor(a, b) {
        //  instance member 
        this.name = a;
        this.roll =b;
        this.myMeth =function () {
            return this.name
        }
    }
// prototype member 
    show(x,y){
        return x+y;
    }
}

let paramClass = new MyclassParamterized('Raja jii',56);

console.log( paramClass.myMeth());



class ParentClass {
    constructor(a, b) {
        //  instance member 
        this.name = a;
        this.roll =b;
        this.myMeth =function () {
            return this.name
        }
    }
// prototype member 
    show1(x,y){
        return 'parent'+x+y;
    }
}

class ChildClass extends ParentClass {
    constructor(a,b,c, d) {
        super(a,b)
        //  instance member 
        this.name1 = c;
        this.roll =d;
        this.myMeth1 =function () {
            return this.name + this.roll
            //this.name will be holdiung the parent class name property as we have called teh super method due to which the child class now have the accessiblity to access the parent class property and method .
        }
    }
// prototype member 
    show(x,y){
        return 'child'+x+y;
    }
}


let myObjChild = new ChildClass('pankaj',12,"Raja jii",9);

console.log(myObjChild.name1);
console.log(myObjChild.roll);
console.log(myObjChild.myMeth1());
console.log(myObjChild.show(10,20));
console.log(myObjChild.show1(10,20));


//  static method in js  :

class MyStaticMethodClass{
    constructor(){
        this.name ="pankaj"
    }
     static disp(a,b){
        return a+b ;
     }
}

let myObjStat =new MyStaticMethodClass();

console.log(myObjStat.name);
//  cannot call the static method with the object i.e myObjStat as it is a static method and can only get called using the className .
// console.log(myObjStat.disp());

//  so in order to call the static method we will call it using the Class name 

console.log(MyStaticMethodClass.disp(1,2));


