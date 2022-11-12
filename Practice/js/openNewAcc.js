window.onload =()=>{
const fullName = document.getElementById("fullName");
const address = document.getElementById("address");
const accountNumber = document.getElementById("AccNum");
const typeOfAccount = document.getElementById("typeAcc")

const form = document.getElementById("form");

form.onsubmit = function(){
    alert(`
    Full Name ${fullName.value}
    Address ${address.value}
    Account Number ${accountNumber.value}
    Type Of Account ${typeOfAccount.value}`)
//    form.reset();
}

}