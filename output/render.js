const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../dist');

const render = employees => {

    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager)));
  
    html.push(employees 
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer)));

    html.push(employees
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern)));

        return renderMain(html.join(""));
};

const generateManager = manager => {

    const temp = fs.readFileSync(path.resolve(srcDir, 'manager.html'), 'utf-8');
    temp = replacePlaceholders(temp, 'name', manager.getName());
    temp = replacePlaceholders(temp, 'role', manager.getRole());
    temp = replacePlaceholders(temp, 'id', manager.getId());
    temp = replacePlaceholders(temp, 'email', manager.getEmail());
    temp = replacePlaceholders(temp, 'officeNumber', manager.getOfficeNumber());

    return temp;
};

const generateEngineer = engineer => {

    const temp = fs.readFileSync(path.resolve(srcDir, 'engineer.html' ), 'utf-8');
    temp = replacePlaceholders(temp, 'name', engineer.getName());
    temp = replacePlaceholders(temp, 'role', engineer.getRole());
    temp = replacePlaceholders(temp, 'id', engineer.getId());
    temp = replacePlaceholders(temp, 'email', engineer.getEmail());
    temp = replacePlaceholders(temp, 'github', engineer.getGithub());
    
    return temp;
};

const generateIntern = intern => {

    const temp = readFileSync(path.resolve(srcDir, 'intern.html'), 'utf-8');
    temp = replacePlaceholders(temp, 'name', intern.getName());
    temp = replacePlaceholder(stemp, 'role', intern.getRole());
    temp = replacePlaceholders(temp, 'id', intern.getId());
    temp = replacePlaceholders(temp, 'email', intern.getEmail());
    temp = replacePlaceholders(temp, 'school', intern.getSchool());

    return temp;
};

const renderMain = html => {
    const temp = readFileSync(path.resolve(srcDir, 'main.html'), 'utf-8');
    return replacePlaceholders(temp, 'team', html);
};

const replacePlaceholders = (temp, placeholder, value) => {
  const pattern = new RegExp("{{" + placeholder + "}}", "gm");
  return temp.replace(pattern, value);
}