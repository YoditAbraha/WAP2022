
import { Person } from "./person.js";
export class Employee extends Person{
    constructor(name, dateOfBirth, salary, hireDate) {
       super(name, dateOfBirth);
        this.#salary = salary;
        this.#hireDate = hireDate;
    }
    getSalary(){
        return this.#salary;
    }
    getHireDate(){
        return this.#hireDate;
    }
    doJob(jobTittle){
        console.log(`${super.name} is a ${jobTittle} who earns $${this.#salary}`)
    }
}