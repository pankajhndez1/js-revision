// note :  should be put in anaconda [priority !!]



//  do note that , when we post the json data , we use the content-type: 'application/json'; and the key i.e body defines which data we want to get post with the request !!

//  post request means we are sending the data from the frontend to the backend !!


// do note : we will be sending the data from the frontend to backend using the fetch method , so , here the Api i.e url written inside the fetch method is responsible for sending the data ( i.e the data which is written in the body attribute of the object ) from frontend to backend ,so we can say that the fetch method here will do the post request , due to which we can say that we are sending the post request using the fetch method to send the data from frontend to backend !! due to which now the data will go to the backend and get saved in the database at the backend !! ,Also , do note that the data ,inside the key body will go along with this post request !!

function makeRequestToSendTheData() {
    console.log('button clicked  !!');
    const myInit = {
        // the method will be the post aswe are sending the request to save the data at the backend !! 
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
            //  copankaj jiin ,"roll":56tent-type will be application/json as the data which we are sending is in the form of the JSON !!
        },
        body: '{"name":"Pankaj" ,"job" :"Web Dev"}'

        // the data which we want to send to the backend will be written inside the key body !! which consist of the actual data which we want to send !!
    }



    /* using  :

    fetch('https://reqres.in/api/users',myInit)
    we are actually able to send the request from frontend to backend sucessfuly !! and the backend then do some manipulation with our to store it acc to the website requirement !! But we can further on check it , i.e the data got stored at the backend or not using the .then method  !!
    */
    fetch('https://reqres.in/api/users', myInit).then((res) => {
        console.log(res, 'res');
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return res.json()
    }).then((data) => { console.log(data, 'data'); })
}


document.getElementById("myBtn").addEventListener("click", makeRequestToSendTheData);




/*

doubt ?

question :

  fetch('https://reqres.in/api/users', myInit).then((res) => {
        console.log(res, 'res');
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return res.json()      ## will that run if the !res.ok block runs ?
    }).then((data) => { console.log(data, 'data'); })


    No, the .then() block that returns the JSON data will not run if the !res.ok block is executed and an error is thrown.

In your example code, the fetch() function sends a request to the server and returns a promise. When the promise is resolved, the first .then() block is executed with the response object as its argument. If the response is not OK (i.e., if res.ok is false), an error is thrown using the throw keyword.

If an error is thrown in the first .then() block, the control will jump to the nearest .catch() block and any subsequent .then() blocks will be skipped. In this case, the second .then() block that logs the JSON data will not be executed.

Here's an updated version of your code that includes a .catch() block to handle errors:


*/




// Now doing the sam work using the concept of async and await !!
//  do note : that we do not use the .then method in the async and await !!

document.getElementById("myBtn2").addEventListener("click", async () => {
    try {
        const myInit = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "name": "pankaj jii", "roll": 56 })
        }
        const myData = await fetch("https://reqres.in/api/users", myInit);
        console.log(myData, 'myData');
        if (!myData.ok) {
            throw new Error(myData.statusText)
        }
        const myActualDataWhichiHaveSent = await myData.json();
        console.log(myActualDataWhichiHaveSent, 'myActualDataWhichiHaveSent');
    } catch (error) {
        console.log(error, 'error');
    }
})



//  do note :

/*

MOST MOST MOST MOST IMPORTANT :

do note that the data which is going to get send to the server i.e the data which the key attribute  
i.e : 'body' is holding should be in the format of the string , that is why we have used body: JSON.stringify({ "name": "pankaj jii", "roll": 56 })  !!

*/




//  MOST MOST MOST MOST IMPORTANT :


/*  TOPIC : sending the form data to the server !! */

//    mostly used in the real world applications  !!


//  do note , that the form default behaviour is to submit , so , in order to get the submitted data of the form ,we first need to prevent the default behaviour, so that the data , won't get submitted directly !!


document.getElementById("formBtn").addEventListener('click', (e) => {
    e.preventDefault();
    console.log(document.getElementById('name').value);
    const myInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": document.getElementById('name').value,
            "Job": document.getElementById('job').value
        })
    }

    //  do note : that only the data inside the body , goes in the JSON.stringfy format !!
    console.log(myInit);
    //  now sending the data to the server :
    const myActualData = fetch("https://reqres.in/api/uzsers", myInit);
    console.log(myActualData, 'myActualData');
    myActualData.then((res) => {
        console.log(res, 'res');
        if (!res.ok) {
            //res.ok will be false on the network errors only !!
            throw new Error(res.statusText)
        }
        return res.json();
    }).catch((error) => { console.log(error, 'on network errors'); }).then((data) => { console.log(data, 'is the actual data'); })
})


//  now doing the same work using the async and await !!

document.getElementById("formBtn2").addEventListener("click", async (e) => {
    e.preventDefault();
    const myInit = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": document.getElementById("name2").value,
            "Job": document.getElementById("job2").value,
        }
        )
    }
    try {
        const myData = await fetch("https://reqres.in/api/uzsers", myInit)
        if (!myData.ok) {
            throw Error(myData.statusText)
        }
        const myActualData = await myData.json();
        console.log(myActualData, 'myActualData');
    } catch (error) {
        console.log(error, 'error');
    }
})





//  promise.all(); function :


/* let say if we have lots and lots of promises ex : hundreds of promises and we want to resolve them all then in that case , in order to resolve it , we have function which is promise.all()  

* Also , do note that if all the promises which we have , gets resolved , only then our .then is going to get called !! 

* But if out of those hundreds of promises if only one of them gets rejceted then , the catch method is going to get called !!



* So, we can say that we do have one benifit of promise.all() , which is , we have to use only one time the '.then()' and '.catch()' method !!

*/


// example of promise.all() :


let promiseObj1 = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve("first promise value")
    }, 2000)
})



let promiseObj2 = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve("sencond promise value")
    }, 1000)
})

//  so , inside the promise.all() method the promise objects should be written in an array , and the result will be provided to us in the form of an array too !!

Promise.all([promiseObj1, promiseObj2]).then((res) => { console.log(res, 'res'); }).catch((error) => { console.log(error, 'error'); })



//  so , do remember if all the promises gets resolved only then the .then() is going to get called , otherwise the .catch() method is will get called !!


// example : what if one promise gets rejected :



const promiseObj3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 3 is resolved !!')
    }, 2000)
})


const promiseObj4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise 4 is rejected!!')
    }, 5000)
})

const promiseObj5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 5 is resolved !!')
    }, 5000)
})

Promise.all([promiseObj3, promiseObj4, promiseObj5]).then((res) => { console.log(res, 'res'); }).catch((error) => { console.log(error, 'error'); })


//  which shows that even if only one promse gets rejected we won't get the output !!



//  now keeping the code dry : so , we will be creating function which will be creating all the promise object for us !!


function myPromiseCreator(promiseNum, promiseNumRes, promiseNumReject) {
    return ((resolve, reject) => {
        resolve(`promise number :${promiseNum}  ,promise_resolved message :${promiseNumRes}`)
    })
}


const myPromise1 = new Promise(myPromiseCreator('promise1', 'promise1 resolved message ', 'promise1 reject message '))

const myPromise2 = new Promise(myPromiseCreator('promise2', 'promise2 resolved message ', 'promise2 reject message '))

const myPromise3 = new Promise
    (myPromiseCreator('promise3', 'promise3 resolved message ', 'promise3 reject message '));


Promise.all([myPromise1, myPromise2, myPromise3]).then((res) => { console.log(res, 'res'); }).catch((error) => { console.log(error, 'error'); })



//  MOST MOST MOST MOST IMPORTANT :


//difference between promise.all()  , promise.allsetteled() and promise.race() !!


//  promise.all() : let say we have three promises p1,p2,p3 , and let say that ,the p1 takes 1 second to resolve the promise and similarly p2 gets  2 second second to resolve the promise and similarly p3 takes 3 second to resolve the promise !! , so we will be getting the result out of the promise.all() when the maximum number of seconds get completed , i.e after three second we will be getting the result value out of the promise.all() !! So , even if only one promise gets rejected we won't be getting the resolved value in the .then method !! ,and it will get rejected !!


//  promise.allsettled()  : this particular method will tell us , that how many number of the promises get resolved and how many number of the promises get rejected , which we can check using the object 'key' (status) which we get in return in an array of object , after getting the .then method's response !! So, here even if two promises passes and one promise gets rejected , the .then() method will be called and will tell us which promise gets fulfilled and  which one gets rejected  !!


// promise.race() : this particular method will be giving us the result of only that particular promise which gets resolved first !! , so , for example out of the p1,p2 and p3 , if the p1 gets resolved first then the result of only p1 promise will be provided to us immediately!!

const myProObj1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved promise obj1 ')
    }, 2000)
})
const myProObj2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved promise obj2 ')
    }, 3000)
})
const myProObj3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved promise obj3 ')
    }, 4000)
})

// case 1 : when all the promises i.e  : myProObj1, myProObj2, myProObj3 are resolved !!

// Promise.all :

Promise.all([myProObj1, myProObj2, myProObj3]).then((res) => { console.log(res, 'res'); }).catch((error) => { console.log(error, 'error'); })

//case 2 : when one of the  promise gets rejected !!

const myProObj4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved promise obj4 ')
    }, 2000)
})
const myProObj5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('rejected promise obj5 ')
    }, 3000)
})
const myProObj6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved promise obj6 ')
    }, 4000)
})

//  so, the  Promise.allSettled() will give us the information about which promise gets resolved and which one got rejected !! , Also even after the rejection the .then method will run !!

Promise.allSettled([myProObj4, myProObj5, myProObj6]).then((res) => { console.log(res, 'res of Promise.allSettled()'); }).catch((error) => { error, 'error' })


//  case 3 : Promise.race() method , will give the result of the only particular promise  which gets resolved first  !!


const myProObj7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved promise obj7 ')
    }, 2000)
})
const myProObj8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('rejected promise obj8 ')
    }, 3000)
})
const myProObj9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved promise obj9 ')
    }, 4000)
})

Promise.race([myProObj7, myProObj8, myProObj9]).then((res) => { console.log(res, 'res of Promise.race()'); }).catch((error) => { error, "error" })