//  callback function :


console.log('start');

function getName(name) {
    setTimeout(() => {
        console.log(name, 'is the name ');
        return name;
    }, 2000);
}
const myName = getName('pankaj');
console.log(myName, 'myName');
console.log('end');

//  so , the undefined problem occured !!

//  so , to solve this undefined problem we use the callback function :

console.log('start 2');

function getName(name, callback) {
    setTimeout(() => {
        console.log('this is a callback function !!');
        callback(name);
    }, 2000);
}

getName('Raaj', (nm) => { console.log(nm); })


console.log('end 2');




console.log('start 3');

function getNames(name, callback) {
    setTimeout(() => {
        console.log('this is a callback function !!');
        callback(name);
    }, 2000);
}

function getNameBasedHobbies(name, callback) {
    setTimeout(() => {
        console.log('this is a callback function !!');
        callback(['game1','game2']);
    }, 2000);
}

const x = getNames('pankaj jii', (nm) => {
    console.log(nm, ' nm ');
    getNameBasedHobbies(nm, (hobby) => { console.log(hobby); })
});


console.log(x,'x');
console.log('end 3');



//  promises :


const promiseObject = new Promise((resolve, reject) => {
    let request = true;
    if (request === true) {
        resolve('request is resolved');
    }
    else {
        reject('request is rejected ');
    }
}).then(
    (value) => { console.log(value, 'value'); }
).catch(
    (error) => { console.log(error, 'error'); }
)



const promiseObj2 = new Promise((resolve, reject) => {
    const myVar = true;
    if (myVar) {
        resolve('hii there')
    } else {
        reject('bye')
    }
}).then((value)=>{console.log(value);});



function getUserData(nameOfTheUser) {
    if (nameOfTheUser) {
        return new Promise((resolve, reject) => {
            if (nameOfTheUser === 'pankaj') {
               return resolve(['football', 'rugby'])
            } else {
               return reject('user name is not pankaj !!')
            }
        })
    }
}




function getUserHobbies(dataOfUser) {
    console.log(dataOfUser, 'dataOfUser');
    dataOfUser ? new Promise((resolve, reject) => {
        if (dataOfUser && dataOfUser.length >= 2 ) {
            console.log('asfcsegergregr');
            return new Promise((resolve,reject)=>{
                resolve([...dataOfUser,'hello'])
            })
        } else {
            reject('the array length is less than 2')
        }
    }) : null
}

getUserData('pankaj')
.then((value) => { return getUserHobbies(value)})
.then((value) => { console.log(value, 'xxxxxxxxxxxx'); })









function getUserData(nameOfTheUser) {
    if (nameOfTheUser) {
        return new Promise((resolve, reject) => {
            if (nameOfTheUser === 'pankaj') {
                 resolve(['football', 'rugby'])
            } else {
                 reject('user name is not pankaj !!')
            }
        })
    }
}

function getUserHobbies(dataOfUser) {
    console.log(dataOfUser, 'dataOfUser');
    return dataOfUser && dataOfUser.length >= 2 ? new Promise((resolve, reject) => {
        resolve([...dataOfUser, 'hello']);
    }) : Promise.reject('the array length is less than 2');
}

getUserData('pankaj')
    .then((value) => getUserHobbies(value))
    .then((value) => console.log(value, 'yyyyyyyyyyyyy'))
    .catch((error) => console.log(error));