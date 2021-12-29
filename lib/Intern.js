//Imports the employee file wish we need to pass over the constructor that we will use in this file, that help us to override in this file
const Employee = require('./Employee')

//creates the intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
//creates the functions that we need in this file to call the getSchool() and getRole() to be able to call the intern
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }

}

//exports ths especific Intern file to any other file
module.exports = Intern;