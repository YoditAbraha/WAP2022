class Employee extends Person{
    constructor(name, dateOfBirth, salary, hireDate) {
       super(name, dateOfBirth);
        this.salary = salary;
        this.hireDate = hireDate;
    }
    doJob(jobTittle){
        console.log(`${this.name} is a ${jobTittle} who earns $${this.salary}`)
    }
}