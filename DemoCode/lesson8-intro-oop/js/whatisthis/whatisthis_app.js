/**
 * whatisthis_app.js
 */
// "use strict";
console.log(`What IS This???`);

// Global environment
console.log(this); // Points to the 'window' object

// Function enviroment
function foo() {
    // Points to the 'window' object when executing without strict mode
    // Points to undefined when executing in strict mode
    console.log(this); 
}
foo();

// "this inside function expression"
    // Points to the 'window' object when executing without strict mode
    // Points to undefined when executing in strict mode
const foo2 = function() {
    console.log(this); 
}
foo2();

function foo3() {
    this.prop = "hello"; // In strict mode, TypeError
}
foo3();
console.log(prop);
console.log(this);
console.log(this.prop);

function foo4() {
    const PI = 3.14;
    function bar() {
        console.log(this);
    }
    bar();
}
foo4();

// "this" in an object literal
const bob = {
    firstName: "Bob",
    lastName: "Jones",
    printThis: function() {
        console.log(this);
    }
}
bob.printThis();
