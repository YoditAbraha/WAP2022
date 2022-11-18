/**
 * 
 */
const personAnna = {
    name: "Anna"
};
const studentAnna = {
    cgpa: 3.98,
    __proto__: personAnna
};
// studentAnna.__proto__ = personAnna;
const facultyAnna = {
    areaOfResearch: "Machine Learning",
    __proto__: personAnna
};

// -- Using Constructor Function
function Person(name) {
    this.name = name;
}
const anna = new Person("Anna");
const bob = new Person("Bob");
console.log(anna);
