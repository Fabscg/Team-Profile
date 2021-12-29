//imports the employee file to be able to use in this file
const Employee = require('./Employee')

//creates the manager class to use the same constructor but  to overrride the information for manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }

}

//exports ths especific Manager file to any other file
module.exports = Manager;