//  if the request is successful then in that case we get [ ok: true ] !!


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
