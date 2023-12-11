// JAVA SCRIPT LEARING UDEMY 
// JavaScript Fundamental Part 1

let country = 'INDIA';
let continent = 'AISIA';
let population = '3.2B';

console.log(country);

console.log(continent);

console.log(population);


// // JavaScript has three kinds of variable declarations.

// // var
// // Declares a variable, optionally initializing it to a value.

// // let
// // Declares a block-scoped, local variable, optionally initializing it to a value.

// // const
// // Declares a block-scoped, read-only named constant.

// ou can declare a variable in two ways:

// With the keyword var. For example, var x = 42. This syntax can be used to declare both local and global variables, depending on the execution context.
// With the keyword const or let. For example, let y = 13. This syntax can be used to declare a block-scope local variable. (See Variable scope below.)


// // You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.
// Some examples of legal names are Number_hits, temp99, $credit, and _name.


// The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

// JavaScript has the following kinds of scopes:

// Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.
// In addition, variables declared with let or const can belong to an additional scope:

// Block scope: The scope created with a pair of curly braces (a block).

if (true) {
    var x = 5;
  }
  console.log(x);  // x is 5

var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
// Expected output: 2

console.log(y);
// Expected output: 1




// if you declear any variable in java script javascript will return with undifined always...

// Hoisting
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// Hoisting is not a term normatively defined in the ECMAScript specification. The spec does define a group of declarations as HoistableDeclaration, but this only includes function, function*, async function, and async function* declarations. Hoisting is often considered a feature of var declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting:

// Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
// Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
// The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
// The four function declarations above are hoisted with type 1 behavior; var declaration is hoisted with type 2 behavior; let, const, and class declarations (also collectively called lexical declarations) are hoisted with type 3 behavior.


//HOISTING EXAMPLE

greet()
function greet(){
    console.log ("Good Morning")
}
//hopisting will work because its a declearation 

console.log(a);
greet()
function greet(){
    console.log ("Good Morning")
}
var a;
//hoisting will work because function and class defination is hoisted 


console.log(a); // following two line will run sucessfully due to hoisting 
greet()
function greet(){
    console.log ("Good Morning")
}
var a=9  ; //Declarition hoisted top but inilization is not.
console.log(a);


//hoisting will not work and you'll get refarence error because let & const can not be used before initalization but it can be decleared.
//if you put let a at the top then you can use the code
console.log(a);
greet()
function greet(){
    console.log ("Good Morning")
}
let a;
console.log(a);

