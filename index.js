
//we require 'inquire' dependency to be able to ask questions to the user
const inquirer = require('inquirer')
// global variables with the user to create a team
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs')
const template = require('./src/page-template')

const team = []
const idArray = []
//inquirer help us to  see the questions in the console
inquirer
//creates the questions for the manager
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your managers name?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please, enter your name');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your Managers ID number?(Required)',
            //validates the id number in this question, if the user type a number, true will be accepted, and if not, the user will have a message in the screen that it need the number, that is required
            validate: idNumber => {
                if (idNumber) {
                    return true
                } else {
                    console.log('You need to type your employee number ID');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your managers email address?'
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is your managers office number?'
        }
        //the 'then' method is a chain that help us to connect the functions, in this case the answers from the manager will be display
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
        team.push(manager)
        idArray.push(answers.managerId)
        promptUser()
    })

promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'chosen',
            message: 'Add any of the follow options to build a team (Enter and press the arrows to choose)',
            choices: ['Engineer', 'Intern', ' Done']
        }
    ]).then(answer => {
        if (answer.chosen === "Engineer") {
            createEngineer()
        } else if (answer.chosen === 'Intern') {
            createIntern()
        } else {
            createTeam()
        }
    })

}

function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is your Engineer ID?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        }

    ]).then(answer => {
        const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.github)
        team.push(engineer)
        idArray.push(answer.engineerId)
        promptUser()
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your ID?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school?'
        }
    ]).then(answer => {
        const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.school)
        team.push(intern)
        idArray.push(answer.internId)
        promptUser()
    })
}

function createTeam() {
 
    fs.writeFile('team.html', template(team), 'utf-8', err => err ? console.log(err) : console.log('HTML has been created'));
    console.log(team)
}


