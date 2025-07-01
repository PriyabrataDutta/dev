//map() -> The map() method creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method.

// const arr = [5, 1, 2, 3, 4, 5];

// function double (x){
//     return x*2;
// }

// function triple(x){
//     return x*3;
// }

// function binary(x){
//     return x.toString(2);
// }
// const output = arr.map((x)=> x.toString(2))
// console.log(output);


//Filter : ->

const arr2 = [5,1,2,3,7,9];

function isOdd(x){
    return x % 2;
 }

const output2 = arr2.filter(isOdd);

console.log(output2);
