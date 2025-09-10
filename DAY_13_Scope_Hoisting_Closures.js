//1. Scope

// Scope defines where a variable can be accessed in your code.

// Types of Scope:

// Global Scope – Accessible everywhere.

var globalVar = "Hello";

function greet() {
  console.log(globalVar); // ✅ Accessible
}
greet();


// Function Scope – Variables declared with var inside a function are only accessible in that function.

function test() {
  var localVar = 10;
  console.log(localVar); // ✅
}
// console.log(localVar); ❌ Error


// Block Scope – Variables declared with let or const are only accessible within {}.

if (true) {
  let x = 5;
  const y = 10;
}
// console.log(x, y); ❌ Error


// 👉 Why it matters for React/Node:
// Understanding scope is crucial for managing state, props, and closures in callbacks.