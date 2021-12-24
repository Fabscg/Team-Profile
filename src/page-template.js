const { fs } = require("fs")

const createAll = team => {

  const makeManager = manager => {
    return `
        <div class="col-lg-4 card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${manager.manageName}</div>
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-mug-hot"></i>Manager</h5>
        </div>
        <div class='card-body'>
        <p>ID:${manager.managerId}</p>
        <p>Email: <a href="mailto:${manager.managerEmail}"></a> ${manager.managerEmail}</p>
        <p>Office Number:${manager.managerOffice}</p>
        </div>
      </div>
        `
  }

  const makeIntern = intern => {
    return `
        <div class="col-lg-4 card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${intern.internName}</div>
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-user-graduate"></i></i>Intern</h5>
        </div>
        <div class='card-body'>
        <p>ID:${answers.internId}</p>
        <p>Email:<a href="mailto:${intern.internEmail}"></a></p>
        <p>School:${intern.school}</p>
        </div>
      </div>
        `
  }

  const makeEngineer = engineer => {
    return `
        <div class="col-lg-4 card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.engineerName}</div>
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-glasses"></i></i>Intern</h5>
        </div>
        <div class='card-body'>
        <p>${engineer.engineerId}</p>
        <p>${engineer.engineerEmail}</p>
        <p><a href="https://github.com/${engineer.github}"></a>${engineer.github}</p>
        </div>
      </div>
        `
  }
  team = data => {
    pageArray = []
  
    for(var i = 0; i < data.length; i++){
        const employee = data[i]
        const role = employee.getRole()
  
        if(role === 'Manager'){
            const managerCard = makeManager(employee)
  
            pageArray.push(managerCard)
        }
  
        if(role === 'Engineer'){
            const engineerCard = makeEngineer(employee)
            pageArray.push(engineerCard);
        }
        if(role === 'Intern'){
            const internCard = makeIntern(employee)
            pageArray.push(internCard)
        }
    }

    const teamCards = pageArray.join(' ')

    const generateTeam = generateTeamPage(teamCards)
    return generateTeam
  }

}



module.exports = team => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/4cf7e7bf8a.js" crossorigin="anonymous"></script>
        <title>Team-Profile</title>
    </head>
    <body>
        <header class='jumbotron justify-content-center bg-secondary text-light'>
            <h1>My Team</h1>
        </header>
        <div class='card-body'>
            ${createAll(team)}
        </div>
    </body>
    <script src="index.js"></script>
    </html>
    `
}


module.exports = createAll