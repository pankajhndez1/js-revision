//  if the request is successful then in that case we get [ ok: true ] !!



/*

fetch method :

The fetch() method in JavaScript is used to request data from a server. The request can be of any type of API that returns the data in JSON or XML. The fetch() method requires one parameter, the URL to request, and returns a promise.

Syntax:

fetch('url')           //api for the get request
  .then(response => response.json())
  .then(data => console.log(data));
Parameters: This method requires one parameter and accepts two parameters:

URL: It is the URL to which the request is to be made.
Options: It is an array of properties. It is an optional parameter.
Return Value: It returns a promise whether it is resolved or not. The return data can be of the format JSON or XML. It can be an array of objects or simply a single object.


    # API for get requests


    let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/todos/1");
    // fetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        })



Making Post Request using Fetch: Post requests can be made using fetch by giving options as given below:


let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(data)
}     

# do note : one more thing :

let data1 =  new Promise((resolve,reject)=>{
    
})

console.log(data1)

let data2 = fetch("https://dummy.restapiexample.com/api/v1/employees")

console.log(data2)

so , the console.log() of both i.e data1 and data2 will give us the promise in the pending state !!, due to which we can say that the fetch method some consist of the code i.e  [ new Promise((resolve,reject)=>{})  ]


// further explanation :

so ,Both data1 and data2 are promises in the pending state because they have not been resolved or rejected yet.

The fetch() method returns a Promise that resolves to the Response to that request. Therefore, data2 is also a Promise, and its console.log() statement will show the Promise in the pending state until the Response is received from the server.

So, the fetch() method internally creates a Promise to manage the asynchronous network request, which is why data2 is a Promise.



//  status : 200 shows the request is going good !!


// so ,  the status ,statusText and ok is mainly used for the error handling !!


//  the res.text(); method returns a promise which on resolving will be giving us a text representation of the request body !!  , so as resolved promise is getting returned so , we can further on use the .then method to it !! to see the right output .


//  fetching the data from text file !!

document.getElementById('myBtn').addEventListener('click', () => {
    console.log('i got clicked');
    const myPromiseObj = fetch('myTextFile.txt');
    console.log(myPromiseObj, 'myPromiseObj');
    myPromiseObj.then((res) => {
        console.log(res, 'res');
        return res.text();
        //  so , as we were looking for the text out of myTextFile.txt ,i.e why we have used the .text () ;
    }).then((data) => { console.log(data); })
})


/*
The text() method in promises is typically used to extract the response body as a string from a network request made with the fetch() method or a similar API that returns a promise that resolves to a Response object.

The text() method is called on the Response object and returns a new promise that resolves to the response body as a string. Here's an example:



fetch('https://example.com/data.json')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));



In this example, the fetch() function returns a promise that resolves to a Response object. The first then() method calls the text() method on the Response object to extract the response body as a string. The second then() method logs the response body to the console. The catch() method logs any errors to the console.

So, in summary, the text() method in promises gives you the response body as a string from a network request made with the fetch() method or a similar API that returns a promise that resolves to a Response object.


//  the text() method in promises returns a new promise that resolves to the response body as a string.


fetch('https://example.com/data.json')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));

The then() method that follows the text() method is called when the promise returned by text() is resolved, and it logs the response body (which is now a string) to the console.

So, in summary, the text() method gives you the resolved data (i.e., the response body as a string) by returning a new promise that resolves to the response body.

*/


document.getElementById('myBtn2').addEventListener('click', () => {
    fetch('myTextFile.txt').then((res) => {
        console.log(res);
        return res.text();
    }).then((data) => { console.log(data); })
})


// do note : fetch API promise will only get reject when there is a network error only  !!

//  do note : in case of the fetch () if we face any kind of error then in that case the ok will hold the value of false , i.e ok :false . also , the status will hold the value of 404 , i.e status: 404 i.e the status won't be equal to 200 !! and the statusText will hold the "Not Found".

//  so , in success only we will be getting the ok :false



//   ***************** Fetching the wrong File Data ***************** 

document.getElementById("myBtn3").addEventListener('click', () => {
    //  so , below the myTextFile1 do not exsist !!
    fetch('myTextFile1.txt').then((res) => {
        console.log(res, 'res');
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.text();
    }).then((data) => {
        console.log(data, 'data');
        document.getElementById('myDivData').innerText = data;
    }).catch((error) => {
        console.log(error);
        document.getElementById('myDivData').innerText = error;
    })
}
)


//  now fetching the same data using the async and await !! along with the error handling !!

document.getElementById('myBtn4').addEventListener('click', async () => {
    try {
        const myTextFileData = await fetch('myTedxtFile.txt');
        console.log(myTextFileData);
        if (!myTextFileData.ok) {
            throw new Error(myTextFileData.statusText)
        }
        const bodyData = await myTextFileData.text();
        console.log(bodyData);
    } catch (error) {
        console.log(error);
    }
})


// fetch method only rejects on the network errors !!




//  Another example :


 function fetchTheDataInTextFile2() {

    document.getElementById('myBtn5').addEventListener('click',()=>{
        const myPromiseObj =fetch('myTextFile2.txt');
        console.log(myPromiseObj, 'myPromiseObj');
        myPromiseObj.then(
            (value) => {
                console.log(value, 'value');
                return value.text();
            }
            ).then((data)=>{console.log(data,'data');})
    })
 }


 fetchTheDataInTextFile2();

 /*
 

 NOTE :



Question :fetch() do returns a resolved promise  ?


Solution :

The fetch() function is an asynchronous function that returns a promise. When called, fetch() sends a request to the server and returns a promise that resolves to the response from the server.

However, the promise returned by fetch() may not always be resolved. If there is a network error or the server returns an error status code, the promise may be rejected. In this case, you can handle the error by attaching a .catch() method to the promise returned by fetch().

Here's an example of how to use fetch() to make a request to a server:
 


fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));



  In this example, fetch() returns a promise that is resolved when the server responds with data. The then() method is used to process the response data, and the catch() method is used to handle any errors that occur during the request .


 */





//    now handling the error if the wrong file name is provided to the fetch !!


function fetchTheDataInTextFile2_WithWrongFileName() {
    document.getElementById('myBtn6').addEventListener('click', () => {
        fetch("myTextFile2a.txt").then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText)
            } else {
                return res.text();
            }
        })
            .then((data) => { console.log(data, 'data'); }).
            catch((error) => { console.log(error, 'error'); })
    })
}

fetchTheDataInTextFile2_WithWrongFileName();


// using the async and await method :


//  note : that the text() method also returns a promise !! which on resolving gives us the data !!



const myFunc = async () => {
    try {
        const myPromiseObj = await fetch("myTextFile2.txt")
        const myData = await myPromiseObj.text()
        console.log(myData);
    } catch (error) {
        console.log(error, 'error');
    }
}

document.getElementById('myBtn7').addEventListener('click', myFunc);


//  now providing the worng file name as an input in async and await  !!


document.getElementById('myBtn8').addEventListener('click',async ()=>{
    try {
        const myResolvedData =await  fetch('myTextFile.txt');
        if (!myResolvedData.ok) {
            throw new Error(myResolvedData.statusText)
        }else{
            const myTextData = await myResolvedData.text();
            console.log(myTextData,'myTextData');
            return myTextData;
        }
    } catch (error) {
        console.log(error,'is error');
    }
    
})
