/**
 * userModule.js
 * 
 * This library module defines a set of functionality
 * that presents data about a user. i.e. their name, location and dateOfBirth
 */
const getName = () => {
    return "Jim";
};
const getLocation = () => {
    return "Fairfield, Iowa, USA";
};
const dateOfBirth = new Date(1980, 1, 13);

exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth;
