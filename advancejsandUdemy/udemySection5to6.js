const myArr = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const myArr2 = [31, -12, -46, , 59, 613, 157, 155, 4, 90, 455];
const myFunc = (arr, arr2) => {
    let newArr = [...arr, ...arr2];
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


console.log(myFunc(myArr, myArr2));


//  now if we have two arrays then use the spread !!


//  note : most important !! 

// console.table (); will convert the object into a table in order to get the better representation of the object !!


const myObj = {
    name: 'pankaj',
    lastName: 'kumar',
    roll: 25,
    house: '#128/6 itbp campus sector 32 -A chandigarh !!',
    phoneNum: 8264672672,
    childObj: {
        name: 'raj',
        roll: 56,
        hobby: {
            game: 'football',
        }
    }
}


console.table(myObj);

//  make the below given string using the specified array  :

// [17,21,23] ` ...17°C in 1 days ...21°C in 2 days and so on`

const myArray = [17, 21, 23]
let myStr = '';

for (let i = 0; i < myArray.length; i++) {
    const ele = myArray[i];
    myStr += `...${ele}°C in ${i} days`
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

let myNum = Math.floor(Math.random() * 10 + 1);
let score = 5;
let highScore = score;
document.querySelector('.highScore').textContent = `${highScore} is the highscore`;
document.querySelector('.highScore').style.color = 'red';
document.querySelector('.myClass').addEventListener('click', function () {
    console.log('i got clicked  !!');
    const checkGuess =
        Number(document.querySelector('.getTheFormValue').value) && Number(document.querySelector('.getTheFormValue').value) === myNum ? true : false;
    console.log(document.querySelector('.getTheFormValue').value);
    console.log(myNum, 'is the random Num');
    checkGuess ? console.log('correct') : score -= 1;
    if (score < 1) {
        console.log('u loose');
        document.querySelector('.againButton').textContent = "play again?";
        document.querySelector('.againButton').style.color = "green";
        document.querySelector('.againButton').addEventListener('click', function () {
            score = 5;
            document.querySelector('.againButton').textContent = null;
            myNum = Math.floor(Math.random() * 10 + 1);
            console.log(highScore, 'highScore');
        })
    }
    else if (myNum === Number(document.querySelector('.getTheFormValue').value)) {
        console.log("Correct guess !!");
        highScore += 1;
        console.log(highScore, 'is the highscore');
        document.querySelector('.highScore').textContent = `${highScore} is the highscore`;
        document.querySelector('.highScore').style.color = 'red';
        myNum = Math.floor(Math.random() * 10 + 1);
        document.querySelector('.getTheFormValue').value = '';
    }

    else {
        console.log(`you have ${score} chances left !! come on !!`);
        console.log(highScore, 'highScore');
        document.querySelector('.highScore').textContent = `${highScore} is your highscore`;
        document.querySelector('.highScore').style.color = 'red';
    }
});


// note : the while adding the eventListener to the particular element all we need to do is pass the  event ( ex :click) and the then the handler which will be listening to the click event and that handler will be executing a particular set line of code , i.e function .


//  Also note , we passed function directly here into the addEventListener method. So as the first argument,we had the name of the event that we're listening for , example 'click'. And then as the second argument,we have this function value.And this function simply contains the code that we want to execute whenever the click event happens.Also, note that we do not call this function inside the addEventListener anywhere !!, We simply define the function there,and then pass it into the event handler.But it is the JavaScript engine who will call this function as soon as the event happens  ('click').


// So note again, this function which we have passed in the addEventListener() will not be called immediately once the script here is executed.This function will only be called as soon as the event happens.

//  do note : important !!

//  do note that we always gets a string from the input field !! Also the query selector method also accepts the elements of the html too !! example : document.querSelector('body') , which will give u the access of the whole body tag !!

//  Also we can change the color of the body using the properties too , example : document.querSelector('body').style.backgroundColor = '#60b347'




// most important line !! :


const myArray1 = ['pankaj', 56, 'sde engg', 'doctor']

for (let i = 0; i < myArray1.length; i++)
    console.log(myArray1[i]);

// you might have noticed that we didn't even use the curly braces to define a block that should be executed for the particular iterations .
// And that's because just like an if else statement,if there is only one line of code
// that we want to execute, then we actually don't have to create this block using {}, we can just write one line after the for loop.And then that's the one that will be iterated over and over again .



//  note note :  that in order to write the anonymous function as an eventHandler while adding the eventListener to a particular button we only passes the function , and the js then internally calls the anonymous function !!

// for example  :
console.log(document.querySelector('.topicModal'));

document.querySelector('.topicModal').addEventListener('click', function () {
    console.log('i got clicked !!');
});


//  note : if we assign the anonymous function to some variable then in that case the we just need to pass the variable and don't need to ass the parenthesis with the variable as that will be resulting in calling the function ,with the occurence of the event !!

// or :

// for example :

const myAnonFunc = function () {
    console.log('i got clicked !!');
}

document.querySelector('.topicModal').addEventListener('click', myAnonFunc);


//  note : i have not written the myAnonFunc as myAnonFunc() as it will call the function immediately without even occurence of the click event !! 


//  in order to add or remove the classes from a particular element all we need to do is : element.classList.remove('className');

//  also in order to add the classes !!

// element.classList.add('className');  


//  also note that the dot is not added wityh the class name i.e add('className') !!




// 81 . handling an 'Esc' keypress event !!


// So in order to listen for keyboard events, we still need to use the same i.e addEventListener. Because the key press event is simply just another type of event. Now, keyboard events are so-called global events because they do not happen on one specific element. And for global events like keyboard events ( ex : Esc ) we usually listen on the whole document.


// JavaScript generates an object that contains all the information about the event, including which key was pressed . This object can be accessed in the event handler function which will be responding the event like (Key down )!!

// example : 

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        console.log(e, 'e is the event object which will give the additional information about the event which occured !!');
    }
})

//  so remember We do not call the function inside the addEventListener method , we only define it there. So the JS engine that will react on the occurence of the event ('keydown') in the following way : i.e the js engine would say Hey, JavaScript engine call the anonymous function (2nd parameter) when a keydown event happens. And when you do so please pass in the event object as an argument.


//  Also note : in order to check if our element do contains a particular class then we can use the below defined method :

// // element.classList.contains('className');     # do note that the className doesn't contains the dot with it !! i.e ( '.className')

//  example :
console.log(document.querySelector('.checkEsc').classList);

console.log(document.querySelector('.checkEsc').classList.contains('checkEsc'));



// Dice game :

const winnerNum = 20;

let player1Score = 0;
let player2Score = 0;
let activePlayer ;
const myFuncToCalScore = function (e) {
    if (!(Math.floor(Math.random() * 6 + 1) === 1)) {
        player1Score += Math.floor(Math.random() * 6 + 1)
        document.querySelector('#score1').textContent = `player score is : ${player1Score}`;
        if (player1Score >= 20) {
            document.querySelector('#score1').textContent = `Winner`;
        }
    }
    else {
        player1Score = 0;
        activePlayer ='Player 2 is Active';
        document.querySelector('#theActivePlayer').textContent = activePlayer;
        document.querySelector('#score1').textContent = `player score is : ${player1Score}`;
        player2Score += Math.floor(Math.random() * 6 + 1)
    }
}
const myFuncToCalScore2 = function (e) {
    if (!(Math.floor(Math.random() * 6 + 1) === 1)) {
        player2Score += Math.floor(Math.random() * 6 + 1)
        document.querySelector('#score2').textContent = `player score is : ${player2Score}`;
        if (player2Score >= 20) {
            document.querySelector('#score2').textContent = `Winner`;
        }
    }
    else {
        player2Score = 0;
        activePlayer ='Player 1 is Active';
        document.querySelector('#theActivePlayer').textContent = activePlayer;
        document.querySelector('#score2').textContent = `player score is : ${player2Score}`;
        player1Score += Math.floor(Math.random() * 6 + 1)
    }
}

document.querySelector('#player1').addEventListener('click', myFuncToCalScore);
document.querySelector('#player2').addEventListener('click', myFuncToCalScore2);








//  imp line below :

//  example : <img src='dice-5.png' alt='Playiong dice' class='dice' />


// document.querySelector('.dice').src =`dice-${dice}.png`;


//  so using the above code we display the diffrent images as the ${dice} is the dice is the variable which gets evaluated on the basis of the random number !!

//  note : that the switching between the active player can be done by using the ternary operator too :

// activePlayer = activePlayer ===0?1:0;


