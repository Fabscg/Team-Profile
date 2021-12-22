const Employee = require('../lib/Employee')
const inquirer = require('inquirer')


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;


module.exports = Manager;