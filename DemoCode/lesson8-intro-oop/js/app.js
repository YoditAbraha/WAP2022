/**
 * app.js
 */
console.log("Hello, Lesson8-Intro to OOP in JS");

// Objects in JavaScript
// Multiple forms/ways to define objects
// 1: Object Literal

const address = {
    street: "North 4th Street",
    city: "Fairfield",
    state: "IA",
    zipCode: "52557-0001",
    "house number": 1000
};
console.log(`Street is ${address.street}`); // console.log("Street is " + address.street)
console.log(`House Number is ${address["house number"]}`);

const anna = {
    firstName: "Anna",
    lastName: "Smith",
    home_address: {
        street: "South Court Street",
        city: "Fairfield"
    },
    work_address: address,
    printFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    } 
};
console.log(`Person is named ${anna.firstName} ${anna.lastName}`);
console.log(`She lives on a street name ${anna.home_address.street}`);
console.log(`${anna.firstName} works at ${anna.work_address.street}`);
anna.printFullName();

// Adding new property for anna object
anna.dateOfBirth = new Date(1975, 11, 12);
console.log(`${this.firstName} was born on ${anna.dateOfBirth}`);
for(const prop in anna) {
    console.log(anna[prop]);
}

// Constructor Function -- we see this later
