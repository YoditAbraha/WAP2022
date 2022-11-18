//Question 6
// Module Pattern
const count1 = (function(){
    let counter = 0;
    function add(){
        counter += 1;

    }
    function reset (){
        counter = 0;
    }

    return{
        counter: counter,
        add:add,
        reset: reset,
    };
})();

count1.add();
count1.reset();
console.log("count " + count1)


//Question 7
var add = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();

//In the context of a function closure, the free variable is counter because counter declared out of the closure function.

//Question 8
'use strict';

const adder = (function () {
    let counter = 0;
    function make_adder(n) {
        return function () {
            return this.counter += n;
        }
    }
    return {
        adder5: make_adder(5),
        counter: counter,
    };
})();
let res = adder.adder5();
console.log('Counter: ' + adder.counter);
console.log(res);
adder.adder5();
adder.adder5();
adder.adder5();
console.log('Counter: ' + adder.counter);

//Question9
/**
 * To remove all the names from the Global
 *  namespace is by using block scope and IIFE
 * 
 */
// for example
// var x = 0;
// var y = 0;
// function sum(x, y){
//     x + y;
// }

// //namespace using IIFE
// (function (){
//     var x = 5;
//     var y = 5;

//     function sum(x,y){
//         x + y;
//     }

//         sum(5,5);
//         console.log('sum' + sum);
    
// })();

//Question 10

const employee = (function (){
    let name = "";
    let age = 0;
    let salary = 0;

    function setAge(newAge){
        age = newAge;
    }
    function setSalary(newSalary){
        salary = newSalary;
    }
    function setName(newName){
        name = newName;
    }
    function getAge(){
        return age;
    }
    function getSalary(){
        return salary;
    }
    function getName(){
        return name;
    }

    function increaseSalary(percentage){
        const addedSalary = (getSalary()*percentage)/100
        salary += addedSalary
    }
    function incrementAge(){
        getAge()++;
    }

    return{
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        increaseSalary:increaseSalary,
        incrementAge: incrementAge

    };
})();

//Question 11
employee.address = {street: "", state: "", city: "", zip: ""}
employee.setAddress = function(street, state, city, zip){
    this.address = {
        street: street,
        state: state,
        city: city,
        zip: zip

    }

}
employee.getAddress = function(){
    return this.address;
}





















