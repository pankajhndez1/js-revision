var var1 = 10;
console.log(var1, "var1");

// switch cases :

let key = "Mon"

switch (key) {
    case "Mon":
        console.log(key, "is the value you have entered !!")
        break;
    case "Tue":
        console.log(key, "is the value you have entered !!")
        break;
    case "Wed":
        console.log(key, "is the value you have entered !!")
        break;
    case "Thurs":
        console.log(key, "is the value you have entered !!")
        break;
    case "Fri":
        console.log(key, "is the value you have entered !!")
        break;

    default:
        console.log("sat or sunday !!")
        break;
}


// nested while :
let i = 0
while (i < 3) {
    console.log(i, 'outer loop');
    i++;
    let j = 0;
    while (j < 5) {
        console.log(j, 'inner loop');
        j++;
    }
}

// do while :
let x = 0;
do {
    console.log(x, 'x');
    x++;
} while (x < 5);

// nested do while :
let b = 0;
do {
    console.log(b, 'outer');
    b++;
    let a = 0;
    do {
        console.log(a, 'inner');
        a++;
    } while (a < 3);
} while (b < 5);


// break and continue 


// break :

for (let i = 0; i < 5; i++) {
    if (i==3){
        break ;
    }
    console.log(i,'is the value of i');
}


//  continue :

for (let a = 0; a < 5; a++) {
    if (a===3) {
        continue;
    }
    console.log(a,'is the value of a')
}

