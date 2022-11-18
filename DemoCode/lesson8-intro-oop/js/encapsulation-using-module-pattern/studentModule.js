/**
 * 
 */
"use strict";

// studentModule
const student = (function(){
    let studentId = "000-00-0000";
    let firstName = null;
    let cgpa = null;

    const getStudentId = function() {
        return studentId;
    }
    const getFirstName = function() {
        return firstName;
    }
    const getCGPA = function() {
        return cgpa; 
    }
    const setStudentId = function(newStudentId) {
        studentId = newStudentId;
    }
    const setFirstName = function(newFirstName) {
        firstName = newFirstName;
    }
    const setCGPA = function(newCGPA) {
        cgpa = newCGPA; 
    }
    return {
        getStudentId: getStudentId,
        getFirstName: getFirstName,
        getCGPA: getCGPA,
        setStudentId: setStudentId,
        setFirstName: setFirstName,
        setCGPA: setCGPA
    }
})(); // IIFE

console.log(student.firstName); // No access to private field. Note: new prop added instead
student.firstName = "Bob"; // No access to the internal private field. Note: new prop added and being set here
console.log(student.firstName);
// Using the student module
console.log(student.getStudentId());
student.setStudentId("000-11-1234");
student.setFirstName("Anna");
student.setCGPA(4.00);
console.log(student);
console.log(student.getStudentId());
console.log(student.getFirstName()); // Note: prints Anna (the encapsulated internal firstName field) not Bob
console.log(student.getCGPA());
// Extending the student module by adding new method
student.printData = function() {
    console.log(`Student Information:
        { 
            Student Id: ${student.getStudentId()},
            First Name: ${student.getFirstName()},
            CGPA: ${student.getCGPA()}
        }
    `);
};
student.printData();

