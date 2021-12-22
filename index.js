
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')



const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name?(Required)',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log('Please, enter your name');
                    return false
                }
            }
        },
        {
            type:'input',
            name:'employeeId',
            message:'What is your ID number?(Required)',
            validate: idNumber => {
                if(idNumber){
                    return true
                } else {
                    console.log('You need to type your employee number ID');
                    return false
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:'What is your email address?'
        },
        {
            type:'input',
            name:'office',
            message:'What is your office number?'
        }
    ])
}
