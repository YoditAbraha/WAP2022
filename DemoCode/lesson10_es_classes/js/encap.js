/**
 * encap.js
 */

class Person {
    #fullname = null;
    constructor(name) {
        this.#fullname = name;
    }

    getName() {
        return this.#fullname;
    }
}

// class PersonApp {
//     p1 = new Person("Bob");
//     console.log(p1.getName());
// }