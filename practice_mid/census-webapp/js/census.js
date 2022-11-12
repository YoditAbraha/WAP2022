/**
 * census.js
 */
"use strict";

window.onload = () => {
    const censusForm = document.forms[0];
    censusForm.onsubmit = (event) => {
        event.preventDefault();

        // How to read the data for selected Radio Button
        // Option 1:
        // const rdoSeniorCitizen = document.getElementsByName("rdoSeniorCitizen");
        // let selectValue = null;
        // if(rdoSeniorCitizen[0].checked) {
        //     selectValue = "Yes";
        // } else {
        //     selectValue = "No";
        // }
        // alert(selectValue);

        // Option 2:
        // const rdoSeniorCitizen = censusForm.elements["rdoSeniorCitizen"];
        // alert(rdoSeniorCitizen.value);

        // Option 3:
        const rdoSeniorCitizenSelectedValue = document.querySelector("input[name='rdoSeniorCitizen']:checked").value;
        alert(rdoSeniorCitizenSelectedValue);
    }
}