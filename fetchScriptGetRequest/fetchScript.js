// put it in anaconda !!  

// do note that here below the url may contains the term post but here we are actually generating  the get  requests !!

// GET REQUESTS :   


// fetching the data from the remote API :

/*
sending the request to the remote Api
, and after that working with the  response !!
*/



/* 


MOST MOST MOST MOST MOST MOST IMPORTANT :

.json() and .text() methods returns us a promise and after returning the promise , we can use the keyword "return" with it due to which , we get the resolved value out of the promise , and so ,we can further use the 
.then method with the returned promise resolved value , due to which we get the response out of the returned promise !!




further explanation :

When you use the .json() or .text() method on a response object in JavaScript, you get back a Promise. This Promise represents the eventual completion (either successful or unsuccessful) of the asynchronous operation to fetch the data.

To get the resolved value out of the Promise, you use the return keyword, which allows you to pass the resolved value of the Promise to the next .then() method in the Promise chain.

Here's an example of how you could use .json() to get JSON data from a server and then use the resolved value of the Promise to log the data to the console:


fetch('https://example.com/data.json')
  .then(response => response.json())
  .then(data => console.log(data));


In this example, the first .then() method uses the .json() method to convert the response object into a JavaScript object. The second .then() method logs the resulting data to the console.



MOST MOST MOST MOST MOST MOST IMPORTANT  !!



Also do note that the return keyword is used with the promise and .then only not with the async and await method !!


Explanation :


The return keyword is used with Promises and the .then() method to pass the resolved value of the Promise to the next .then() method in the Promise chain. It's not used with the async and await keywords.

With async/await, you use the await keyword to wait for the Promise to resolve and get the resolved value directly. You can then use the resolved value as you would any other value in synchronous code.

Here's an example of how you could use async/await to get JSON data from a server and then use the resolved value to log the data to the console:


async function getData() {
  const response = await fetch('https://example.com/data.json');
  const data = await response.json();
  console.log(data);
}

getData();

In this example, the async keyword is used to define an asynchronous function. Within the function, the await keyword is used to wait for the fetch() and .json() Promises to resolve before logging the resulting data to the console. The getData() function is then called to start the asynchronous operation.

*/


// using the promise and .then method :

function myDataFromRemote() {
    fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
        console.log(res, 'res');
        return res.json()
    }).then((data) => { console.log(data, 'data'); })
}


document.getElementById("remoteSingleData").addEventListener('click', myDataFromRemote)





//  working with the multiple data using promise and .then method :


document.getElementById("remoteMultipleData").addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts').
        then((res) => {
            console.log(res, 'res');
            return res.json();
        }).then((data) => {
            console.log(data, 'data');
            const myData = data.forEach(element => {
                document.getElementById("multipleDataSHownBelow").innerHTML +=
                    `<div>
              id:  ${element.id}
              <br>
              <br>
              title : ${element.title}
              <br>
              <br>
              body : ${element.body}
              <br>
              <br>
                </div>
                <hr/>`
            });
        })
})



//  1hr.14min hr se pdna  or uppr ka sara kaam anaconda mai hona chahiye

document.getElementById("myBtn").addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
        console.log(res);
        if (!res.ok) {
            throw new Error("the url is not correct !!")
        } else {
            return res.json();
        }
    }).catch((error) => {
        console.log(error, 'url error');
    }).then((data) => {
        // manipulation with the data goes here !!
        //  so, if the error is thrown by the url then the data will be set to undefined and also , the spread will work as it is !! as , the data is the one which is set to undefined but we are adding a name key to the object , so the updatedData object will consist of the key i.e name !!
        console.log(data, 'data');
        return { ...data, name: 'pankaj' }
    }).then((updatedData) => {
        console.log(updatedData, 'updatedData');
        if (updatedData.name != 'pankaj') {
            throw new Error('name is not pankaj !!')
        } else {
            return updatedData;
        }
    }).catch((error) => { console.log(error, 'name error'); })
})


//  also , do note , that once the error is thrown , or once the exception is created the execution will get transferred to the catch !!



//  now doing the same using the async and await concept : i.e showing the single json data on the UI !!


document.getElementById('myBtn2').addEventListener("click", async () => {
    try {
        const myData = await fetch('https://jsonplaceholder.typicode.com/aposts/1');
        console.log(myData, 'myData');
        if (!myData.ok) {
            throw new Error(myData.statusText == ""?"errorrrrr the url is not right !!":myData.statusText);
        } else {
            const myActualJSONData = await myData.json();
            console.log(myActualJSONData, 'myActualJSONData');
        }
    } catch (error) {
        console.log(error, 'error');
    }
})


// fetching and showing the multiple json data on the UI !!

async function fetchTheMultipleData() {
    try {
        const myData = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!myData.ok) {
            throw new Error('An error occured xxxxxx');
        }
        const myActualJSONData = await myData.json();
        console.log(myActualJSONData, 'myActualJSONData');
        let myHtmlData;
        myActualJSONData && myActualJSONData.length && Array.isArray(myActualJSONData) &&
            myActualJSONData.forEach((ele) => {
                myHtmlData += `<div>
           id: ${ele.id}
           title :${ele.title}</div>
           <hr>
           `
            })
        document.getElementById('multipleData').innerHTML = myHtmlData;
    } catch (error) {
        console.log(error, 'error');
    }
}

document.getElementById('myBtn3').addEventListener('click', fetchTheMultipleData)