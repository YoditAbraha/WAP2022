/**
 * patients.js
 */

"use strict"

export class Patient {
  constructor(
    patientID,
    first,
    middle,
    last,
    dateOfBirth,
    department,
    outpatient
  ) {
    this.patientIDNum = patientID;
    this.firstName = first;
    this.middleInitial = middle;
    this.lastName = last;
    this.dateOfBirth = dateOfBirth;
    this.department = department;
    this.isOutPatient = outpatient;
  }
  toString() {
    return `Patient ID: ${this.patientIDNum}, Full Name: ${this.firstName} ${this.middleInitial}, ${this.lastName}, 
    Date Of Birth: ${this.dateOfBirth}, Department: ${this.department}, Is out-patient?: ${this.isOutPatient}`;
  }
}
