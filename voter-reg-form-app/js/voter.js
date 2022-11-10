


const voterNo = document.getElementById("voterNo");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const levelStudy = document.getElementById("levelOfStudy");

const form =  document.getElementById("form");
form.onsubmit = function(event){
    event.preventDefault();

    const message = document.getElementById("message2");

    message.innerHTML = `
    Voter Number: ${voterNo.value}
    First Name: ${firstName.value}
    Last Name: ${lastName.value}
    Level of Study ${levelStudy.value}`;


}