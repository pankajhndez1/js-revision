// import myClass from "./importExportTopics.js";
// const myObj =new myClass();
// myObj.myArr(56);





/*  **************** topic 2 **************** */




//  do note that the default export can be imported any name !!

// import efg from "./importExportTopics.js";
// console.log( efg(10,20));





/*  **************** topic 3 **************** */




// import myArrowFunc from "./importExportTopics.js";

// console.log( myArrowFunc(53,50));




/*  **************** topic 4 **************** */


// export default variables :

// import myVari from "./importExportTopics.js";

// console.log(myVari);


/* **************** NAMED EXPORT  **************** */




//  **********  topic 1 : named export the class   **********


import { Nokia } from "./importExportTopics.js";

const myObject = new Nokia();
console.log(myObject.myFunc(15, 23));



//  **********  topic 2 : named export the function   **********


import { myAnonymousFunc } from './importExportTopics.js';

console.log(myAnonymousFunc(15,23,7));



//  **********  topic 3 : named export the variable   **********; 

import { myVariNamedExport } from "./importExportTopics.js";

console.log(myVariNamedExport);



//  **********  topic 4 : named export using the  alias   **********; 

import { myVar, myFunction } from "./importExportTopics.js";

console.log(myVar, 'is myVar');
console.log(myFunction(15,6));


//  **********  topic 5 : named export using the  alias   **********; 


import * as myAllPropertiesAndMethods from "./importExportTopics.js";

console.log( myAllPropertiesAndMethods.myVar1);