/**
 * main.js
 */
'use strict'

import { Person } from "./model/person.js";
import{Employee} from "./model/employee.js";

const person1 = new Person("Ana Smith", new Date (1998,11,15));
const person2 = new Person("Bob Jone", new Date(1945,10,16));
const person3 = new Person("Carlos Slim Helu", new Date(1976,8,24));

const arrPerson = [person1, person2, person3];

arrPerson.forEach(element => {console.log(element.toString())});

const emp = new Employee("Jim Hanson", 245990.0 );
emp.doJob("Software Engineer");