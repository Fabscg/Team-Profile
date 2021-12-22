const createAll = team => {

    const makeManager = manager => {
        return `
        
        `
    }

    const makeIntern = intern => {
        return `
            
        `
    }

    const makeEngineer = engineer => {
        return `
            
        `
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
        <title>Team-Profile</title>
    </head>
    <body>
        <header class='jumbotron bg-secondary text-light'>
            <h1>My Team</h1>
        </header>
        <div class='card-body'>
            ${createAll(team)}
        </div>
    </body>
    </html>
    `
}