document.getElementById("myBtn").addEventListener('click', async () => {
    try {
        const myData = await fetch('myJSONdata.json');
        console.log(myData, 'myData');
        if (!myData.ok) {
            throw new Error(myData.statusText)
        }
        const myJSONdata = await myData.json();

        // note : .json() method returns a Promise !! and on the promise resolution the json will be returned to us !!
        console.log(myJSONdata, 'myJSONdata');
    } catch (error) {
        console.log(error, 'error');
    }
});


// now doing the above task using .then to show the JSON data !!

document.getElementById('myBtn2').addEventListener('click', myFuncForJson)

function myFuncForJson() {
    const myJSONdata = fetch('myJSONdata.json');
    myJSONdata.then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return res.json()
    }).then((data) => { console.log(data, 'data'); }).catch((error) => { console.log(error, 'error'); })
}

//  working with the json data :

document.getElementById('myBtn3').addEventListener('click', () => {
    const myData = fetch('myJSONdata2.json');
    console.log(myData, ' myData');
    myData.then((res) => {
        console.log(res);
        /*
        {type: 'basic', url: 'http://127.0.0.1:5500/fetchJSONData/myJSONdata2.json', redirected: false, status: 200, ok: true, …}
        */
        return res.json();
    }).then((data) => {
        console.log(data, ' data');
    })
});

//  now doing the same with async and await :

async function myAsyncAwaitFuncToFetch(params) {
    try {
        const myData = await fetch('myJSONdata2.json');
        if (!myData.ok) {
            throw new Error(myData.statusText)
        }
        const myJSONdata = await myData.json();
        console.log(myJSONdata);
        return myJSONdata;
    } catch (error) {
        console.log(error, 'error');
    }

}
document.getElementById('myBtn4').addEventListener('click', myAsyncAwaitFuncToFetch)