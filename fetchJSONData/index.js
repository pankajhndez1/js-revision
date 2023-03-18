document.getElementById("myBtn").addEventListener('click', async () => {
    try {
        const myData = await fetch('myJSONdata.json');
        console.log(myData, 'myData');
        if (!myData.ok) {
            throw new Error(myData.statusText)
        }
        const myJSONdata = await myData.json();
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
     }).then((data) => { console.log(data, 'data'); }).catch((error)=>{console.log(error,'error');})
}


// 49 min se pdna fetch Api wala lecture 