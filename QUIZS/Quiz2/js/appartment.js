/**
 * app.js
 * Quiz_2
 * @author Yodit 
 */

const buildingNo = document.getElementById("buildingNo");
const floorNo = document.getElementById("floorNo");
const apartmentNo = document.getElementById("apartmentNo");
const tittle = document.getElementById("title");
const fullNames = document.getElementById("fullNames");
const phoneNo = document.getElementById("phoneNo");
const email = document.getElementById("email");
const driverLicenceNo = document.getElementById("driversLicenceNo");

const form = document.getElementById("form");

form.onsubmit = ()=>{
   
    alert(`
    Building No: ${buildingNo.value}
    Floor No: ${floorNo.value}
    Apartment No: ${apartmentNo.value}
    Tittle: ${tittle.value}
    Full Names: ${fullNames.value}
    Phone No: ${phoneNo.value}
    Email: ${email.value}
    Driver's Licence No: ${driverLicenceNo.value}`)
}

