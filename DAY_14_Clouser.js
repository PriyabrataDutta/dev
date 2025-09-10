// function one (){
//     const usename = "Pdutta";
//     function two(){
//         const website = "Pdutta.com";
//         console.log (usename);
//     }
//     // console.log(website);
//     two();
// }
 
// one();


// let counter = 0;
// function add (){
//     counter +=1;
// }
// console.log(add());
// console.log(add());
// console.log(add());
//1. It did not work because we display the global counter instead of the local counter. We can remove the global counter and access the local counter by letting the function return it:

// function add (){
//     let counter = 0;
//     counter +=1;
// }
// let x = 0;
// x = add();
// console.log(x);
// console.log(x);
// console.log(X);
//2. It did not work because we reset the local counter every time we call the function.

// function add2 (){
//     let counter = 0;
//     function plus(){
//         counter +=1;
//     }
//     plus()
//     return counter();
// }
// console.log(add2());

//This could have solved the counter dilemma, if we could reach the plus() function from the outside. We also need to find a way to execute counter = 0 only once.

// function myCounter(){
//     let counter = 0;
//     return function (){
//         counter ++;
//         return counter;
//     };
// }

// const add3 =  myCounter();

// console.log(add3());
// console.log(add3());
// console.log(add3());

// Example Explained
// The variable add is assigned to the return value of a function.

// The function only runs once. It sets the counter to zero (0), and returns a function expression.

// This way add becomes a function. The "wonderful" part is that it can access the counter in its parent scope.

// This is called a closure. It makes it possible for a function to have "private" variables.

// The counter is protected by the scope of the myCounter function, and can only be changed using the add function.

// Conclusion
// A closure is a function that has access to the parent scope, after the parent function has closed.

// Closures has historically been used to:

// Create private variables
// Preserve state between function calls
// Simulate block-scoping before let and const existed
// Implement certain design patterns like currying and memoization
// Note
// Old JavaScript code will often contain closures, but modern JavaScript will not use closures as frequently as before.

// ECMAScript 2015 and subsequent JavaScript versions have introduced new language features that provide alternatives to closures.

// While closures are a powerful concept in JavaScript, new JavaScript features make some use cases for closures less necessary.

if (true){
    const username = "Priyabrata Dutta";
    if(username === "Priyabrata Dutta"){
        const website = " Youtube";
        console.log (username + website);
    }
    //console.log(website)
}
//console.log(username);

