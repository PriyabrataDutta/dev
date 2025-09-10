// Objects in Javascript
//An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value.

// Declaring an object with litarels 

let obj = {
    name: "",
    Age: 35,
    designation : "Technical lead"
};

//console.log(obj);


//Creation Using new Object() Constructor

let obj2 = new Object();

obj2.name = "Manojit Ghosh";
obj2.age = 36;
obj.designation = "Auditer";

//console.log(obj2);

// Basic Operations on JavaScript Objects
// 1. Accessing Object Properties

// Using Dot Notation
//console.log(obj.name);

// Using Bracket Notation
//console.log(obj["age"]);


// let employee = {
//     name : "Priyabrata Dutta",
//     age : 31,
//     designation : "Software Engineer",  
//     skills : ["JavaScript", "React", "Node.js"],
//     address : {
//         city : "Kolkata",
//         state : "West Bengal",
//         country : "India"
//     },
//     salary : function(){
//         return this.age * 500;
//     },
//     displayInfo : function() {
//         return `Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}, Skills: ${this.skills.join(", ")}, Address: ${this.address.city}, ${this.address.state}, ${this.address.country}`;
//     }
// };
// console.log(employee); // Accessing property
// console.log(employee.name); // Accessing property
// console.log(employee.age); // Accessing property    
// console.log(employee.skills[0]); // Accessing array element
// console.log(employee.address.city); // Accessing nested object property
// console.log(employee.salary()); // Calling method
// console.log(employee.displayInfo()); // Calling method to display information
// // Adding a new property
// employee.department = "IT";
// // Updating an existing property        
// employee.age = 32;
// // Deleting a property
// delete employee.designation;


const user = {
username : "Pdutta",
price: 599
}

function handelObject (anyobject){
console.log(`Usename is ${anyobject.username} and Price is ${anyobject.price}`);
}

handelObject(user);


