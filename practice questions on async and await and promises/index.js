console.log('Promise and asunc and await problems');


async function myFunc(arrayOfUrls) {
    const myNewArray = [];
    for (const url of arrayOfUrls) {
        const response = await fetch(url);
        const content = await response.text();
        myNewArray.push(content);
    }
    return myNewArray;
}

const myResult = myFunc([
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
]);

myResult.then((result) => {
    console.log(result, 'result');
    let myArr = [];
    for (const i of result) {
        myArr.push(JSON.parse(i))
    }
    return myArr;
}).
    then((data) => { console.log(data, 'data'); })
    .catch((err) => {
        console.log(err, 'error');
    });




function myFuncForTwoPromises(myFunc1, myFunc2) {
    let myData1 = myFunc1();
    let myData2 = myFunc2();
    let myArr = [myData1, myData2]
    return Promise.all(myArr).then((res) => {
        console.log(res);
        return res;
    }).catch((err) => { console.log(err); })
}

function myFunc1() {
    return new Promise((resolve, reject) => {
        resolve('func1')
    })
}
function myFunc2() {
    return new Promise((resolve, reject) => {
        resolve('func2')
    })
}

myFuncForTwoPromises(myFunc1, myFunc2);


// Write a function that takes in a number and returns a Promise that resolves after the number of milliseconds specified.


function myFuncTakeNum(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, num * 1000);
    })
}

//: Write a function that takes in a string and returns a Promise that resolves with the length of the string. If the string is empty, the Promise should reject with an error message.

function myFuncTakeString(myString) {
    return new Promise((resolve, reject) => {
        if (myString) {
            resolve(myString.length)
        }
        reject('it is an empty string !!')
    })
}

myFuncTakeString('pankaj kumar').then((res) => { console.log(res, 'res'); })


// Write a function using async/await that fetches data from an API and returns the result.

async function myFuncOfAsync(myUrl) {
    const myData = await fetch(myUrl);
    console.log(myData);
    if (!myData.ok) {
        throw new Error('error')
    }
    return await myData.json();
}

const myRess = myFuncOfAsync('https://jsonplaceholder.typicode.com/users');
myRess.then((x) => { console.log(x, 'x'); })

/*

Convert the following Promise-based code to use async/await:


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

*/

async function funConversion(myUrl) {
    const myData = await fetch(myUrl);
    console.log(myData, 'myData');
    const exe = await myData.json();
    return exe;
    console.log(exe, 'exe');
}

funConversion('https://jsonplaceholder.typicode.com/users');


// Write a function that takes an array of Promises and resolves all of them, returning an array of the resolved values.


function myArrayFunc(urlArray) {
    let newArr = [];
    for (const myUrlData of urlArray) {
        fetch(myUrlData).then((data) => { return data.json() }).then((res) => {
            console.log(res, 'res');
            newArr.push(...res);
        })
        console.log(newArr, 'newArr');
    }
    return newArr;

}
myArrayFunc(['https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/users'])


// Write a function that takes an array of Promises and resolves the first one to resolve, ignoring the others.

function resolvesTheFirstOne(arrayOfpromises) {
    console.log(arrayOfpromises, 'arrayOfpromises');
    Promise.race(arrayOfpromises).then((res) => {
        console.log(res, 'rexxxxxxxxxs');
        console.log(res.headers.get("Content-Type"), 'res.headers');
        const contentType = res.headers.get('Content-Type');
        if (contentType && contentType.startsWith('text/')) {
            return res.text();
        } else {
            return res.json();
        }
    }).then((myData) => {
        console.log(myData, 'myData');
    })
}

resolvesTheFirstOne([fetch('https://jsonplaceholder.typicode.com/users'), fetch('https://jsonplaceholder.typicode.com/users'), fetch('https://jsonplaceholder.typicode.com/users')])


// Write a function that takes a Promise and returns a new Promise that resolves with the result of the original Promise after a delay of 1 second.


function takesaPromise(myPromise) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(myPromise)
        }, 1000);
    })
}
takesaPromise(fetch('https://jsonplaceholder.typicode.com/users')).then((res) => {
    if (res && res.headers && res.headers.get("Content-Type").startsWith('text/')) {
        return res.text();
    } else {
        return res.json();
    }
}).then((myData) => { console.log(myData, 'myDvata'); })


// Write a function that takes a string and returns a Promise that resolves with the same string, but with all vowels removed.


function myFuncVowel(myString) {
    return new Promise((resolve, reject) => {
        let myNewString;
        let vowArr = ['a', 'e', 'i', 'o', 'u']
        const myNewStringArr = myString.split('');
        myNewStringArr.map(ele => {
            for (let i = 0; i < vowArr.length; i++) {
                if (ele === vowArr[i] || ele === ' ') {
                    myNewStringArr.splice(myNewStringArr.indexOf(ele), 1);
                }
            }
            console.log(myNewStringArr, 'myNewStringArr');
        });
        myNewString = myNewStringArr.join('');
        resolve(myNewString)
    })
}
myFuncVowel("pankaj kumar");