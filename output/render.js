const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src');

const render = employees => {

    


  const generateManager = manager => {

    // let temp = fs.readFileSync(path.resolve(srcDir, 'manager.html'), 'utf8');
    // temp = replacePlaceholders(temp, 'name', manager.getName());
    // temp = replacePlaceholders(temp, 'role', manager.getRole());
    // temp = replacePlaceholders(temp, 'id', manager.getId());
    // temp = replacePlaceholders(temp, 'email', manager.getEmail());
    // temp = replacePlaceholders(temp, 'officeNumber', manager.getOfficeNumber());

    // return temp;

    return `
    <div class="col-3 card">
    <div class="card-header">
        <h2><strong>${manager.getName()}</strong></h2>
        <h3>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>Id: ${manager.getId()}</p>
        <p>Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></p>
        <p>Office number: ${manager.getOfficeNumber()}</p>
    </div>
</div>
    `
};

const generateEngineer = engineer => {

    // let temp = fs.readFileSync(path.resolve(srcDir, 'engineer.html' ), 'utf8');
    // temp = replacePlaceholders(temp, 'name', engineer.getName());
    // temp = replacePlaceholders(temp, 'role', engineer.getRole());
    // temp = replacePlaceholders(temp, 'id', engineer.getId());
    // temp = replacePlaceholders(temp, 'email', engineer.getEmail());
    // temp = replacePlaceholders(temp, 'github', engineer.getGithub());
    
    return `
    <div class="col-3 card">
    <div class="card-header">
        <h2><strong>${engineer.getName()}</strong></h2>
        <h3>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>Id: ${engineer.getId()}</p>
        <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p>Github: <a href="${engineer.getGithub()}">${engineer.getGithub()}</a></p>
    </div>
</div>  
    `
};

const generateIntern = intern => {

    // let temp = readFileSync(path.resolve(srcDir, 'intern.html'), 'utf8');
    // temp = replacePlaceholders(temp, 'name', intern.getName());
    // temp = replacePlaceholder(stemp, 'role', intern.getRole());
    // temp = replacePlaceholders(temp, 'id', intern.getId());
    // temp = replacePlaceholders(temp, 'email', intern.getEmail());
    // temp = replacePlaceholders(temp, 'school', intern.getSchool());

    return `
    <div class="col-3 card">
    <div class="card-header">
        <h2><strong>${intern.getName()}</strong></h2>
        <h3>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>Id: ${intern.getId()}</p>
        <p>Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></p>
        <p>School: ${intern.getSchool()}</p>
    </div>
</div>
    `
};

const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
        .join(""));
  
    html.push(employees 
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join(""));

    html.push(employees
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join(""));

        return html.join("");


// const renderMain = html => {
//     let temp = fs.readFileSync(path.resolve(srcDir, 'structure.html'), 'utf8');
//     return replacePlaceholders(temp, 'team', html);
// };

// const replacePlaceholders = (temp, placeholder, value) => {
//   let pattern = new RegExp("{{" + placeholder + "}}", "gm");
//   return temp.replace(pattern, value);
// }

}
module.exports = employees => {

return `
<!DOCTYPE html>
<html lang="en-us">
    <head>
    <title>My Team Profile</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link href="/dist/style.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    </head>

    <body>

        <div class="container">
            <div class="row">
                <div class="team-area d-flex justify-content-center">
                   ${render(employees)}
                 </div>

                <div class="row">
                    <div class="team-area d-flex justify-contente-center">
                        
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
`
};