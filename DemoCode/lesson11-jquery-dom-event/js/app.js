/**
 * app.js
 */
"use strict";

// window.onload = function() {
//     console.log("Hello JQuery");

//     const divSquare = document.getElementById("square");
//     divSquare.onclick = function() {
//         alert("Boink!!!");
//     };
// }

// Using JQuery
$(document).ready(function() {
    console.log("Hello JQuery");

    $("#square").click(function() {
        alert("Boink!!!");
    });

    // Using DOM API
    const h1 = document.getElementsByTagName("h1");
    console.log(h1[0].textContent);
    const h1_qs = document.querySelectorAll("h1");
    console.log(h1_qs[0].textContent);
    console.log(h1);
    console.log(h1_qs);

    // Using JQuery
    const h1_jq = $("h1").text();
    console.log(h1_jq);

    // Using both DOM API and JQuery
    const h1_dom = document.getElementsByTagName("h1");
    const h1_dom_jq = $(h1_dom).text();
    console.log(h1_dom_jq);

});