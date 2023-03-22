//      JUST FOR THE REVISION :


console.log('start');
function fetchNames(name) {
    setTimeout(() => {
        console.log('inside setTimeout');
        return name;
    }, 2000)
}

const nm = fetchNames('pankaj');
console.log(nm, 'nm');
console.log('end');

//  so , in order to tackle the problem of undefined we use the callback functions !!



console.log('start 2');
function fetchNames2(names, callback) {
    setTimeout(() => {
        console.log('inside teh setTimeout 2');
        callback(names)
    }, 2000);
}


fetchNames2('pankaj', (x) => { console.log(x); })
//  so using the callback the execution won't get stopped in between the execution !!
console.log('end 2');




// now this concept of callback further on gives you the callback hell when the problems are way too complex !!

function fetchNames3(name, callback) {
    setTimeout(() => {
        console.log('inside fetchNames3');
        callback(name)
    }, 2000)
}

function fetchNames3Hobbies(name, callback) {
    setTimeout(() => {
        console.log('inside fetchNames3hobbies');
        name ? callback(['cricket', 'football']) :
            callback({ hobbies: ['reading', 'meditation'] })
    }, 2000)
}


fetchNames3('raaj', (x) => {
    console.log(x);
    fetchNames3Hobbies(x, (hobbies) => { console.log(hobbies); })
});



// do note that the .then execution won't get proceeded once it catches the exception !! and immediately the execution will move to catch  !!

/*


question :

.then,.catch ,.finally returns a promise ?


answer :


Yes, all three methods .then(), .catch(), and .finally() return a new promise.

When a then() method is called on a promise, it returns a new promise that can be used to chain additional then() methods or catch errors with a catch() method. Similarly, when a catch() method is called on a promise, it returns a new promise that can be used to chain additional catch() methods or handle errors with a finally() method.

The finally() method returns a new promise that is resolved when the original promise is settled (either resolved or rejected). This can be useful for performing cleanup tasks or other actions that should be executed regardless of whether the promise was resolved or rejected.

It's important to note that when a then(), catch(), or finally() method is called, it always returns a new promise. This means that if you want to chain multiple asynchronous operations together, you can do so by calling then() on the previous promise and returning a new promise inside the then() method.*/



console.log('start 3');

function getNameFunc(name) {
    return new Promise((resolve, reject) => {
        resolve(name);
    })
}


function getHobbiesOfTheProvidedName(name) {
    return new Promise((resolve, reject) => {
        if (name == 'Raj') {
            resolve(['baseball', 'football'])
        }
        reject('error the name is not Raj')
    })
}


/*


MOST IMPORTANT LINE :




the resolved promise also returns a promise ?
No, a resolved promise does not return a promise. Once a promise has been resolved, its value or result is immediately available and can be accessed synchronously.

When a promise is resolved, its then() method is called with the resolved value as its argument. If the then() method returns a value, that value is wrapped in a new promise which is resolved with that value. However, if the then() method returns a promise, then the new promise is not resolved until the returned promise is resolved.

So, while a resolved promise can lead to a new promise being created (if its then() method returns a value), it itself is not a promise and does not return a promise.




*/


getNameFunc('Raj').then((value) => {
    console.log(value, 'value');
    return getHobbiesOfTheProvidedName(value);
}).then((value) => { console.log(value, 'value getHobbiesOfTheProvidedName  '); }).catch((error) => { console.log(error, 'error'); })

console.log('end 3');


/*


MOST IMPORTANT LINE :



console.log('start 3');

function getNameFunc(name) {
    return new Promise((resolve, reject) => {
        resolve(name);
    })
}


function getHobbiesOfTheProvidedName(name) {
    return new Promise((resolve, reject) => {
        if (name == 'Raj') {
            resolve(['baseball', 'football'])
        }
        reject('error the name is not Raj')
    })
}

getNameFunc('Raj').then((value) => {
    console.log(value, 'value');
   return getHobbiesOfTheProvidedName(value);  
}).then((value) => { console.log(value, 'value getHobbiesOfTheProvidedName  '); }).catch((error) => { console.log(error, 'error'); })

console.log('end 3'); 



question : 


can you explain me why it is neccessary to use return here : 
i.e : return getHobbiesOfTheProvidedName(value);






getHobbiesOfTheProvidedName() returns a Promise object. In a Promise chain, the value returned from the previous then() method is automatically passed as an input to the next then() method.

Therefore, if you don't use the return keyword before calling getHobbiesOfTheProvidedName(value), the Promise returned by getHobbiesOfTheProvidedName() will not be passed as an input to the next then() method, and the output of the previous getNameFunc('Raj') Promise will be lost.

By using return getHobbiesOfTheProvidedName(value), you are passing the Promise returned by getHobbiesOfTheProvidedName() to the next then() method, so it can be properly resolved or rejected.

In summary, using return in a Promise chain is necessary to properly pass the output of one Promise to the next Promise in the chain

*/




/*


MOST IMPORTANT LINE :



Question :  does catch run corrosponding to any  .then method ? 


getNameFunc('Raj').then((value) => {
    console.log(value, 'value');
   return getHobbiesOfTheProvidedName(value);
}).then((value) => { console.log(value, 'value getHobbiesOfTheProvidedName  '); }).catch((error) => { console.log(error, 'error'); })





solution :

In a Promise chain, the catch() method is used to handle errors that occur in any of the previous then() methods. When a Promise is rejected or throws an error, the control jumps to the nearest catch() method in the chain. Therefore, the catch() method is not associated with any particular then() method; rather, it can catch any error that occurs in any of the previous then() methods.


*/


// now using the async and await :


const myFuncAsyncAwaitFunc = async () => {
    try {
        const myName = await getNameFunc('Raj');
        const myHobbies = await getHobbiesOfTheProvidedName(myName);

        console.log(myHobbies, 'myHobbies');
    } catch (error) {
        console.log(error, 'error in async and await');
    }
}


myFuncAsyncAwaitFunc();


// mainly use the async and await !!