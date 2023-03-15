// export default class myClass {
//     myArr = (para) => {
//         console.log('the para is :', para);
//     }
// }



/*  **************** topic 2 **************** */



// export default function myFunc(x, y) {
//     return x + y;
// }



/*  **************** topic 3 **************** */


const myArrowFunc = (a, b) => a + b;
//  do note that we donot need to call the myArrowFunc while exporting it using the export default command !! 


//  so , the myArrowFunc() is the wrong way and myArrowFunc ; is the right way !!


// export default myArrowFunc;

/*  **************** topic 4 **************** */


// export default variables :

const myVari ='hey there !!';

export default myVari;




/* **************** NAMED EXPORT  **************** */


//  **********  topic 1 : named export the class   **********

class Nokia {
    myFunc = (a, b) => {
        return a + b;
    }
}

export { Nokia };

//  so , do remember that the named export uses the curly brackets !!



//  **********  topic 2 : named export the function   **********;

const myAnonymousFunc = function (a, b, c) {
    return a + b + c;
}

export { myAnonymousFunc };


//  **********  topic 3 : named export the variable   **********; 


const myVariNamedExport = 'this is the named export variable ';

export { myVariNamedExport };


//  **********  topic 4 : named export using the  alias   **********; 



const myFunction = (a, b) => a + b;
const myVar = 'hii ';


export { myFunction, myVar };


//  **********  topic 5 : named export using the  alias   **********; 

const myFunction1 = (a, b) => a + b;
const myVar1 = 'hii xxxxxxxx';

export { myFunction1, myVar1 };