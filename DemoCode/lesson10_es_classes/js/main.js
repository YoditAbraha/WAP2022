/**
 * main.js
 */
import { greeting } from "./modules/greeting.mjs";
import { add, subtract, multiply } from "./modules/arithops.js";
// import {default as whatever}  from "./modules/arithops.js";
import { Account } from "./bankingappmodule/model/account.js";

const greet = function(name) {
    console.log(`${greeting} ${name}`);
};

greet("Anna");

// console.log(whatever(2,3));
console.log(subtract(4,3));
console.log(multiply(5,6));

const accounts = [
    new Account("A001", "Anna Smith", 1100),
    new Account("A002", "Bob Jones", 250)
];
accounts.forEach(a => console.log(a));
