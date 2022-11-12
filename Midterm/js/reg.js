/**
 * registration.js
 * @author Yodit
 */
"use strict"
const form = document.forms[0];
const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const personalBio = document.getElementById("personalBio");
const levelofstudy = form.elements["levelofstudy"];
const applicationIDNumber = document.getElementById("applicationID");
const courseToRegister = document.getElementById("courseRegister");

form.onsubmit = function (event) {
    event.preventDefault();
    alert(`
    
    First Name: ${firstName.value}
    Middle Initial: ${middleName.value}
    Last Name: ${lastName.value}
    Address: ${address.value}
    Personal Bio: ${personalBio.value}
    level of Study: ${levelofstudy.value}
    Aplication ID Number: ${applicationIDNumber.value}
    Course To Register For: ${courseToRegister.value}
    
    
    `)
    firstName.value = "";
    middleName.value = "";
    lastName.value = "";
    address.value
    personalBio.value = "";
    levelofstudy.value = "";
    applicationIDNumber.value= "";
    courseToRegister.value = "";

}
