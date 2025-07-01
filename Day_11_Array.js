
//loops in Array
// //FOR
// //const friends = ['Papai','Bolai','Arijit','Himanish','Godu'];
// let fLen = friends.length;
// let text = "<ul>";
// for (let i=0; i<fLen; i++){
//     text += "<li>" + friends[i] + "</li>";
// }
// text += "</ul> </br>";
// console.log(text);
// const pNumbers = 

// // 1. Access Specific Elements
// // Write a function that takes an array and an index as arguments and returns the element at that index. If the index is out of bounds, return "Index out of bounds".

// function getElementIndex(arr, index) {
    
//     return index >= 0 && index < arr.length ? arr [index] : "Index Out Of Bound" ;

// }

// console.log(getElementIndex([10,20,30], 2));
// // console.log(getElementIndex([10,20,30,50]),4);

// // 2. Modify an Array
// // Write a function to replace the second element of an array with the string "Modified".

// function secondElementReturn(arr, index){
//     if (arr.length > 1) arr [index] = "modified";
//     return arr;
// }

// console.log([1,2,3], 2);

// // 3. Find the Last Element
// // Write a function that returns the last element of an array. If the array is empty, return "Array is empty".

// function findLastElement(arr){
//     let elementtsCount = arr.length;
//     console.log (arr[elementtsCount -1]);

// }

// findLastElement ([1,2,3,4]);


// const arr = [10,20,30,40];
// arr.push(50)
// console.log( arr);



// /// SEARCH ELEMNTS IN ARRY 
// function arrySearchFind(arr,Selement){
//    // let fLen = arr.length;
//     for (let i = 0; i< arr.length; i++)
//     {
//         // console.log("i value",i);
//         if (arr[i]==Selement   ){
//             console.log("in the ",arr[i],"element in the array");
//             break;
//        }
//         else
//        console.log("Not found");
    
//     //    console.log(arr[i]);

//     }
// }
// arrySearchFind([1,22,3,4,5,6],22);

// let names =  new Array (1,2,3,4,5,6, "papai", "bolai", "arijit", "himanish", "goddu", undefined, null);
// console.log(names.length);
// names = names.sort();
// console.log(names);

//a. What is an Array?
// An array [] = ordered collection of elements, enclosed by square brackets [].
// It is one of the most useful data structures in JavaScript, as it stores multiple values into a single, organized data structure.
// b. How to create an Array?
// An array can be created using square brackets [] or the Array constructor.
// Array Creation 
let arr35 = [1,2,3,4,5,6,7,8,9,10];
// Array Methods
console.log(arr35.length); // Length of the array
//multipal array Definition
let arr21 = new Array(1,2,3,4,5,6,7,8,9,10);
// THis is is also an array. but it is created using the Array object constructor. you can multipal array definition like this.
let names1 =  new Array (1,2,3,4,5,6, "papai", "bolai", "arijit", "himanish", "goddu", undefined, null);

// now create objects in array
// explaign the code below. how to define objects in array. and how to access them.
// Array of Objects
// An array can also contain objects, which allows for more complex data structures.
// In this example, we create an array of employee objects, each with properties like name, age, designation, skills, address, and methods for salary and displayInfo.

let employees = [
    {
        name: "Priyabrata Dutta",
        age: 31,
        designation: "Software Engineer",
        skills: ["JavaScript", "React", "Node.js"],
        address: {
            city: "Kolkata",
            state: "West Bengal",
            country: "India"
        },
        salary: function() {
            return this.age * 500;
        },
        displayInfo: function() {
            return `Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}, Skills: ${this.skills.join(", ")}, Address: ${this.address.city}, ${this.address.state}, ${this.address.country}`;
        }
    },
    {
        name: "John Doe",
        age: 28,
        designation: "Data Scientist",
        skills: ["Python", "Machine Learning", "Data Analysis"],
        address: {
            city: "New York",
            state: "NY",
            country: "USA"
        },
        salary: function() {
            return this.age * 600;
        },
        displayInfo: function() {
            return `Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}, Skills: ${this.skills.join(", ")}, Address: ${this.address.city}, ${this.address.state}, ${this.address.country}`;
        }
    }
];


// NOw start with accessing the array elements 
let arr = [1,2,3,4,5,6,7,8,9,10];
// Accessing elements in an array
console.log(arr[0]); // Accessing the first element
console.log(arr[4]); // Accessing the fifth element
console.log(arr[arr.length - 1]); // Accessing the last element


// let arr2 = new Array(1,2,3,4,5,6,7,8,9,10);
// // Accessing elements in an array created with the Array constructor
// console.log(arr2[0]); // Accessing the first element
// console.log(arr2[4]); // Accessing the fifth element
// console.log(arr2[arr2.length - 1]); // Accessing the last element


let names =  new Array (1,2,3,4,5,6, "papai", "bolai", "arijit", "himanish", "goddu", undefined, null);
// Accessing elements in an array with mixed data types
console.log(names[0]); // Accessing the first element       
console.log(names[5]); // Accessing the sixth element
console.log(names[names.length - 1]); // Accessing the last element


// Accessing properties of objects in an array
console.log(employees[0].name); // Accessing the name of the first employee 
console.log(employees[1].skills[0]); // Accessing the first skill of the second employee
console.log(employees[0].address.city); // Accessing the city of the first employee's address
console.log(employees[1].salary()); // Calling the salary method of the second employee
console.log(employees[0].displayInfo()); // Calling the displayInfo method of the first employee
// Adding a new employee to the array
employees.push({
    name: "Alice Smith",
    age: 26,
    designation: "Web Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        city: "Los Angeles",
        state: "CA",
        country: "USA"
    },
    salary: function() {
        return this.age * 550;
    },
    displayInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}, Skills: ${this.skills.join(", ")}, Address: ${this.address.city}, ${this.address.state}, ${this.address.country}`;
    }
});


//modify array elements 
//let arr3 = [1,2,3,4,5,6,7,8,9,10];
// Modifying elements in an array
//arr3[0] = 100; // Changing the first element
//arr3[4] = 500; // Changing the fifth element
//console.log(arr3); // Output: [100, 2, 3, 4, 500, 6, 7, 8, 9, 10]
let arr4 = new Array(1,2,3,4,5,6,7,8,9,10);
// Modifying elements in an array created with the Array constructor
arr4[0] = 200; // Changing the first element
arr4[4] = 600; // Changing the fifth element
console.log(arr4); // Output: [200, 2, 3, 4, 600, 6, 7, 8, 9, 10]
let names2 =  new Array (1,2,3,4,5,6, "papai", "bolai", "arijit", "himanish", "goddu", undefined, null);
// Modifying elements in an array with mixed data types
names2[0] = 300; // Changing the first element
names2[5] = "modified"; // Changing the sixth element
console.log(names2); // Output: [300, 2, 3, 4, 5, "modified", "papai", "bolai", "arijit", "himanish", "goddu", undefined, null]
// Modifying properties of objects in an array
employees[0].age = 32; // Changing the age of the first employee
employees[1].skills.push("Deep Learning"); // Adding a new skill to the second employee
// Modifying the address of the first employee
employees[0].address.city = "Mumbai"; // Changing the city of the first employee's address
// Modifying the salary method of the second employee
employees[1].salary = function() {
    return this.age * 700; // Changing the salary calculation
};
// Modifying the displayInfo method of the first employee
employees[0].displayInfo = function() {
    return `Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}, Skills: ${this.skills.join(", ")}, Address: ${this.address.city}, ${this.address.state}, ${this.address.country}`;
};
// Adding a new property to the first employee
employees[0].department = "IT"; // Adding a new property to the first employee
// Deleting a property from the second employee
delete employees[1].designation; // Deleting the designation property from the second employee
// Displaying the modified employees array
console.log(employees);
// Accessing the modified properties
console.log(employees[0].age); // Accessing the modified age of the first employee
console.log(employees[1].skills); // Accessing the modified skills of the second employee
// Accessing the modified address of the first employee
console.log(employees[0].address.city); // Accessing the modified city of the first employee's address
// Accessing the modified salary of the second employee
console.log(employees[1].salary()); // Calling the modified salary method of the second employee
// Accessing the modified displayInfo method of the first employee
console.log(employees[0].displayInfo()); // Calling the modified displayInfo method of the first employee
// Accessing the new property added to the first employee
console.log(employees[0].department); // Accessing the new department property of the first employee
// Accessing the deleted property from the second employee
console.log(employees[1].designation); // This will be undefined since the designation property was deleted

//JavaScript Array Methods

//To help you perform common tasks efficiently, JavaScript provides a wide variety of array methods. These methods allow you to add, remove, find, and transform array elements with ease.

let papai = [1,2,3,4,5,6,7,8,9,10];
const friends = ['Papai','Bolai','Arijit','Himanish','Godu'];

// lenght
console.log(papai.length);

// toString()
let printFriends = friends.toString(); // Convert array to string
console.log(printFriends); // Output: "Papai,Bolai,Arijit,Himanish,Godu"    

// join 
console.log (friends.join('|')); // Output: "Papai,Bolai,Arijit,Himanish,Godu"

// delete

let emp = {
    firstName: "papai",
    LastName: "Dutta",
    salary : 50000
}

console.log( delete emp.salary);
console.log(emp);

// concat
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let newArr = arr1.concat(arr2, arr3);
console.log(newArr);

// Flat ()
let nestedArray = [1, 2, [3, 4], [5, [8], 6]];
let flatArray = nestedArray.flat(Infinity); // Flat
console.log(flatArray);


// PUSH()
let  a =  [25,26,30];
a.push(60);
console.log('pushed 60:->',a);
a.push(25,78,90);
console.log('pushed 25 78 90:->',a);
console.log("Hey Youre are here");

//Unshift  isused when you wanna add element in the front
a.unshift(9999, 99999);
console.log(a);

// POP () Delete elements from the end of an array 
a.pop();
console.log(a);

// splic() remove and add elemets in between array
a.splice(1, 3);
a.splice(1, 0, 3, 4, 5);
console.log(a);

//some() -> checks whether at least one of the elements of the array satisfies the condition checked by the argument function.
let res = a.some((val) => val > 103);
console.log("This is Some() Method",res);
