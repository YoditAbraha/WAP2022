'use strict'
//Question 1
const person = {
     name: "",
     dateOfBirth: "",

     getName: function(){
        return this.name;
     },
     setName: function(name){
        this.name = name;
     }
}
const john = Object.create(person, {
    name:{
    value: "John",
    },

    dateOfBirth:{ 
        value: "1998-12-10",
    },

})
console.log(`The person's name is ${john.name}
${john.name} was born on ${john.dateOfBirth}`);

//============================================================================================

//Question 2
const employee = Object.create(person, {
    salary: {
        value: 0,
    },
    hireDate: {
        value: new Date(),
    }
   
});
employee.doJob = (function(jobTittle){
    console.log(`${this.name} is a ${jobTittle} who earns $${this.salary}`);

})

const anna = Object.create(employee, {
    name: {
        value: "Anna",
    },
    salary: {
        value: 249995.50,
    },
})
anna.doJob("Programmer");
//============================================================================================

//Question 3
function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.getName =  function(){
        return this.name;
     },
     this.setName =  function(name){
        this.name = name;
     },
     this.toString = function(){
        return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`

     }

}
const person2 = new Person("John", new Date(1998-11-10));
console.log(person2.toString());
const person3 = new Person("Peter", new Date(1985, 10, 10));
console.log(person3.toString());
