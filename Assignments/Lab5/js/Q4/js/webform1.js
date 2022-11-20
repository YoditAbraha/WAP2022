window.onload = function () {
    const form = document.getElementById("form");
    const emailField = document.getElementById("textEmailAdr");
    const passwordField = document.getElementById("textPassword");

    form.onsubmit = function () {


        console.log("The email address:" + emailField.value);
        console.log("password: " + passwordField.value);

        form.reset();

    };

}