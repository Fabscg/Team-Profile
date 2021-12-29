//imports the employee file to be able to use in this file
const Employee = require('./Employee')

//creates an engineer class, instead of writing again more code to get the engineer name, id, + github, we use 'extend' to re-use the same contructor from employee by adding 'super' method, the we add the github wich is not included in the employee file
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    //creates this last two funtions that are not included in the employee file to add the getgithub() and the getRole() which will be Engineer in this case
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }

}

//exports ths especific Engineer file to any other file
module.exports = Engineer;