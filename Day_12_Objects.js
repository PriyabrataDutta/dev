let employee = {
    name : "Priyabrata Dutta",
    age : 31,
    designation : "Software Engineer",  
    skills : ["JavaScript", "React", "Node.js"],
    address : {
        city : "Kolkata",
        state : "West Bengal",
        country : "India"
    },
    salary : function(){
        return this.age * 500;
    },
    displayInfo : function() {
        return `Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}, Skills: ${this.skills.join(", ")}, Address: ${this.address.city}, ${this.address.state}, ${this.address.country}`;
    }
};
console.log(employee); // Accessing property
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