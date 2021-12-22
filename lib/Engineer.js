const Employee = require('./Employee')
const Manager = require('./Manager')
const inquirer = require('inquirer')


class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github =  github;
    }


   getName(){
       return this.name;
   }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getGithub(){
        return this.github;
    }

    getRole() {
        return 'Employee'
    }
  
}

module.exports = Engineer;