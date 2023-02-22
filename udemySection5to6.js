const myArr = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const myArr2 = [31, -12, -46, , 59, 613, 157, 155, 4, 90, 455];
const myFunc = (arr ,arr2) => {
    let newArr = [...arr,...arr2];
    let highestNum = newArr[0];
    let minNum = newArr[0];
    for (let i = 0; i < newArr.length; i++) {
        const element = newArr[i + 1];
        element && typeof (element) === 'number' && typeof (highestNum) === 'number' && element > highestNum ? highestNum = element : null;
        element && typeof (element) === 'number' && typeof (minNum) === 'number' && element < minNum ? minNum = element : null;
    }
    return ({
        highestNum: highestNum,
        minNum: minNum,
        amplitude: highestNum - minNum,
    })
}


console.log(myFunc(myArr,myArr2));


//  now if we have two arrays then use the spread !!


//  note : most important !! 

// console.table (); will convert the object into a table in order to get the better representation of the object !!


const myObj ={
    name:'pankaj',
    lastName:'kumar',
    roll:25,
    house:'#128/6 itbp campus sector 32 -A chandigarh !!',
    phoneNum :8264672672,
    childObj :{
        name:'raj',
        roll:56,
        hobby:{
            game :'football',
        }
    }
}


console.table(myObj);

//  make the below given string using the specified array  :

// [17,21,23] ` ...17°C in 1 days ...21°C in 2 days and so on`

const myArray =[17,21,23]
let myStr ='';

for (let i = 0; i < myArray.length; i++) {
    const ele = myArray[i];
    myStr +=`...${ele}°C in ${i} days`
}
console.log(myStr);

//  below should be in the udem.ipynb wali file :

//  section 7 :

//  note : DOM is not a part of the JavaScript language

// But, now you might ask, "If the DOM is not a part of the JavaScript language,then how does this all work?" Well, the DOM and DOM methods are actually part of something called the web APIs. So the web API APIs are like libraries that browsers implement and that we can access from our JavaScript code. And API stands for Application Programming Interface.

// For now, what you need to know is that a web APIs are, basically, libraries that are also written in JavaScript and that are automatically available for us to use. So all this happens behind the scenes, we don't have to import or do anything . And there is actually an official DOM specification that browsers implement, which is the reason why DOM manipulation works the same in all browsers.



//  note :

//  from a normal input field in html ,if we want to get the vlaue through out it , then in that case we use the value property .


//  example :

// </div>
// <input class='getTheFormValue' type="number" placeholder="enter the number" />
// </div>

//  and do note that we can give the class to the input field too !!s

console.log(document.querySelector('.getTheFormValue'));
// document.querySelector('.getTheFormValue').value = 56;
console.log(document.querySelector('.getTheFormValue').value);


//73. Handling the click events .
const myNum = Math.floor(Math.random() * 10 + 1);
let score = 5;

document.querySelector('.myClass').addEventListener('click', function () {
    console.log('i got clicked  !!');
    const checkGuess =
        Number(document.querySelector('.getTheFormValue').value) && Number(document.querySelector('.getTheFormValue').value) === myNum ? true : false;
    console.log(document.querySelector('.getTheFormValue').value);
    console.log(myNum, 'is the random Num');
    checkGuess ? console.log('correct') : score -= 1;
    if (score < 1) {
        console.log('u loose');
    } else {
        console.log(`you have ${score} chances left !! come on !!`);
    }
});


// note : the while adding the eventListener to the particular element all we need to do is pass the the event ( ex :click) and the then the handler which will be listening to the click event and will be executing a particular set line of code , i.e function .


//  Also note , we passed function directly here into the addEventListener method.So as the first argument,we had the name of the event that we're listening for,which is a click.And then as the second argument,we have this function value.And this function simply contains the code that we want to execute whenever the event happens.Also, note that we do not call this function here anywhere !!, We simply define the function here,and then pass it into the event handler.But it is the JavaScript engine who will call this function as soon as the event happens.


// So note again, this function which we have passed in the addEventListener() will not be called immediately once the script here is executed.This function will only be called as soon as the event happens.

//  do note : important !!

//  do note that we always gets a string from the input field !! Also the query selector method also accepts the elements of the html too !! example : document.querSelector('body') , which will give u the access of the whole body tag !! 

//  Also we can change the color of the body using the properties too , example : document.querSelector('body').style.backgroundColor = '#60b347'