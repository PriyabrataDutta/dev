// What is Function ?
//Functions are one of the fundamental building blocks in JavaScript.
// A function in JavaScript is similar to a procedure—a set of statements 
//that performs a task or calculates a value, but for a procedure to qualify
//as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.
//Amust read frm here //https://www.squash.io/javascript-arrow-functions/

function logger (){
console.log("Myname is Priyabrat Dutta");
}
//calling the function
//logger();


//passing the parameter
function fruitProcessor(apples, oranges){
console.log(apples, oranges);
const juice = `juice with ${apples} apples and ${oranges} oranges.`;
return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));
//fruitProcessor(5, 0);



function calAge1(birthYear){
    const age = 2037 - birthYear;
    return age; 
}

const age1 = calAge1(1991);
console.log(age1);
function calAge1(birthYear){
    //const age = 2037 - birthYear;
    return 2037 - birthYear; 
}


//Function Expression 
// 

// const calcAg2 = function (birthYear1) {
//     return age2 = 2030 - birthYear1;
// }

// const age2 = calcAg2(1990);
// // console.log(age1, age2);


//arrow Function 
// arrow function return implicitly 

const calcAge3 = birthYearNew => 2037 - birthYearNew;
const age3 = calcAge3(2000);
console.log(`hi my name is Pdutta & my age is ${age3}`);


// Arrow Function 
const yearUntillRetirement = (birthYearNew, FirstName) => {
    const age = 2037 - birthYearNew;
    const retierment = 65 - age;
    // return retierment;
    return `${FirstName} retires in ${retierment} in years`;
}

console.log(yearUntillRetirement(1991, 'Pdutta'));

//calling on function into anathor function
const cutPiecs = function (fruit){
    return fruit * 4;
}

const fruitProcess = function (apple, orenges){

    const applePices = cutPiecs (apple);
    const orangePices = cutPiecs (orenges);
    
    const juice = `Juice With ${applePices} pices of apple and ${orangePices} pices of orange`;
    return juice;
}
console.log(fruitProcess(2, 3));



// how to write a function in java script 

function functionName (){

    //you can put your things which you wanna return 
}

// and this is how you return it 
functionName();


// Ananomus function 

const calcAverage = (a,b,c) => {
    let totalAvg = (a+b+c)/3;
    console.log(totalAvg);
    return (a,b,c);
}

console.log(calcAverage(5,10,30));