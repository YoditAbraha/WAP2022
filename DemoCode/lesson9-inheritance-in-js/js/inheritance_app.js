/**
 * 
 */
console.log(`Lesson9 - Inheritance`);

const personAnna = {
    name: "Anna"
};
console.log(personAnna);

const studentAnna = {
    cgpa: 3.89
};
// Define Inheritance
studentAnna.__proto__ = personAnna;
console.log(studentAnna);

// Using constructor function
// -- Using Constructor Function
function Person(name) {
    this.name = name;
}
const anna = new Person("Anna");
const bob = new Person("Bob");
console.log(anna);

const person = new Person(null);

function Student(cgpa) {
    this.cgpa = cgpa;
}
Student.prototype = person;
const studentJohn = new Student(3.99);
console.log(studentJohn);
console.log(studentJohn.name);
studentJohn.name = "John";
console.log(studentJohn);
console.log(studentJohn.name);

// ---------------
const numsArray = [1,2,3];
console.dir(numsArray); // shows its Type (name of its constructor function)
console.log(numsArray);
console.table(numsArray);

//-------Do NOT use obj.__proto__
//------Instead, use obj.getPrototypeOf(...) and obj.setPrototypeOf
// -- Example: HourlyEmployee IS-A kind of Employee
function Employee(employeeId, firstName, lastName, ssn) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.ssn = ssn;
}
function HourlyEmployee(hourlyRate, hoursWorked) {
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
    this.calculatePay = function() {
        return this.hourlyRate * this.hoursWorked;
    }
}
function SalariedEmployee(baseSalary, performanceBonus) {
    this.baseSalary = baseSalary;
    this.performanceBonus = performanceBonus;
    this.calculatePay = function() {
        return this.baseSalary + performanceBonus;
    }
}
const baseEmployee = new Employee(null, null, null, null);
// create employees
let hourlyEmpAnna = new HourlyEmployee(50, 60);
hourlyEmpAnna = Object.setPrototypeOf(hourlyEmpAnna, baseEmployee);
hourlyEmpAnna.employeeId = 1001;
hourlyEmpAnna.firstName = "Anna";
hourlyEmpAnna.lastName = "Smith";
hourlyEmpAnna.ssn = 123-12-1234;
console.dir(hourlyEmpAnna);
console.log(Object.getPrototypeOf(hourlyEmpAnna));
console.log(`${hourlyEmpAnna.firstName} ${hourlyEmpAnna.lastName}'s pay is $${hourlyEmpAnna.calculatePay()}`);
