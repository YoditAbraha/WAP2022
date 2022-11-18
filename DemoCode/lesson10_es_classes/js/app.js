/**
 * app.js -- ES Classes and ESModules
 */
"use strict";
// String Template Literals -- backticks and ${...} expressions
const topicName = "ES Classes and ESModules";
console.log(`Welcome to ${topicName}`);
console.log("Hello" + topicName);

class User {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, ${this.name}`);
    }
}

const userJohn = new User("John");
userJohn.sayHello();

console.log(typeof User);
console.log(userJohn instanceof User);
console.log(userJohn);

// Student class with getter/setter prototype methods
class Student {
    // can declare properties here
    constructor(studentId, name, admissionDate, cgpa) {
        this.studentId = studentId;
        this.name = name;
        this.admissionDate = admissionDate;
        this._cgpa = cgpa;
    }
    // Getters and Setters
    get studentId() {
        return this._studentId;
    }
    get name() {
        return this._name;
    }
    get admissionDate() {
        return this._admissionDate;
    }
    get cgpa() {
        return this._cgpa;
    }

    set studentId(value) {
        // some vlidation check
        if(value == null) {
            throw new Error("Invalid studentId data");
        }
        this._studentId = value;
    }
    set name(value) {
        this._name = value;
    }
    set admissionDate(value) {
        this._admissionDate = value;
    }
    set cgpa(value) {
        this._cgpa = value;
    }
}

// Usage
const bob = new Student("000-01-0001", "Bob Jones", new Date(2021, 11, 15), 3.97);
console.log(bob);
console.log(bob.name); // call the public getter
bob.name = "Bob Jones";
console.log(bob.__proto__);
Student.prototype.toString = function() {
    return `{StudentId: ${this.studentId}, Name: ${this.name}}`;
}
console.log(bob.toString());

// Defining Getters and Setters using getXXX and setXXX methods
// And also using private variables syntax
class Person {
    // private fields declarations;
    #name = null;
    #dateOfBirth = null;

    constructor(name, dateOfBirth) {
        this.#name = name;
        this.#dateOfBirth = dateOfBirth;
    }

    // Getters and Setters using getXXX and setXXX method syntax
    // Getters
    getName() { return this.#name; }
    getDateOfBirth() { return this.#dateOfBirth; }
    // Setters
    setName(name) {
        this.#name = name;
    }
    setName = function(name) { // function expr is possible
        this.#name = name;
    }
    setDateOfBirth(dateOfBirth) {
        this.#dateOfBirth = dateOfBirth;
    }
    toString() {
        return `{Name: ${this.#name}, DateOfBirth: ${this.#dateOfBirth}}`;
    }
}

const anna = new Person("Anna Smith", new Date(1988, 2, 15));
console.log(anna.toString());
anna.setName("Anna Lynn Smith");
console.log(anna.name); // cannot access name because it is a private variable data field
console.log(anna.toString());

// Implementing Inheritance using the 'extends' keyword
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    constructor(name, collarColor) {
        super(name);
        this.collarColor = collarColor;
    }
    speak() {
        console.log(`${this.name} barks and has a ${this.collarColor} collar`);
    }
}
let d = new Dog("Mitzie", "red");
d.speak();

// Polymorphism in JS
class Shape {
    constructor() {
        // Noop
    }
    area() { // Polymorphic method
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    area() {
        return 0.5 * this.base * this.height;
    }
}

function calcSumOfAreas(shapes) { // Applying Polymorphism
    return shapes.reduce((sum, shape) => {
        if(shape instanceof Shape) {
            console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
            return sum + shape.area();
        }
        throw new Error(`Invalid Argument: ${Object.getPrototypeOf(shape).constructor.name} is NOT a kind of Shape`);
    }, 0);
}

const shapes = [
    new Circle(3),
    new Rectangle(2, 3),
    new Triangle(4, 3)
    // ,
    // d
];

console.log(calcSumOfAreas(shapes));

// Verifying the get/set JS syntax for getters/setters
class Account {
    constructor(accountNo, name) {
        this.setaccountNo = accountNo;
        this.setname = name;
    }
    // getAccountNo()
    get accountNo() { return this._accountNo; }
    get name() { return this._name; }
    set setaccountNo(value) { this._accountNo = value; }
    set setname(value) { this._name = value; }
}
const a = new Account("C001", "Alan");
console.log(`${a.name}'s account number is ${a.accountNo}`);
