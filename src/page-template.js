const { fs } = require("fs")

const createAll = team => {

  const makeManager = manager => {
    return `
        <div class="col-lg-4 card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${manager.getName()}</div>
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-mug-hot"></i>Manager</h5>
        </div>
        <div class='card-body'>
        <p>ID:${manager.getId()}</p>
        <p>Email: <a href="mailto:${manager.getEmail()}"></a> ${manager.getEmail()}</p>
        <p>Office Number:${manager.getOfficeNumber()}</p>
        </div>
      </div>
        `
  }

  const makeIntern = intern => {
    return `
        <div class="col-lg-4 card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${intern.getName()}</div>
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-user-graduate"></i></i>Intern</h5>
        </div>
        <div class='card-body'>
        <p>ID:${intern.getId()}</p>
        <p>Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
        <p>School:${intern.getSchool()}</p>
        </div>
      </div>
        `
  }

  const makeEngineer = engineer => {
    return `
        <div class="col-lg-4 card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.getName()}</div>
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-glasses"></i></i>Engineer</h5>
        </div>
        <div class='card-body'>
        <p>ID: ${engineer.getId()}</p>
        <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p>GitHub: <a href="https://github.com/${engineer.getGithub()}"></a>${engineer.getGithub()}</p>
        </div>
      </div>
        `
  }

    const pageArray = []

    pageArray.push(team.filter(item => item.getRole() === "Manager").map(manager => makeManager(manager)))
    pageArray.push(team.filter(item => item.getRole() === "Engineer").map(engineer => makeEngineer(engineer)))
    pageArray.push(team.filter(item => item.getRole() === "Intern").map(intern => makeIntern(intern)))

    return pageArray.join("")

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