const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

const fs = require('fs');
const inquirer = require('require');
const render = require("./output/render")
const distPath = path.join(distDir, 'team.html');
const distDir = path.resolve(__dirname, 'dist');
const teamList = [];

// This is the array of questions to fill the employee info

const UITeam = () => {
    process.stdout.write('Would you like to create your team?')
   
    const questions = () => {
       inquirer 
       .prompt ([
           
          { 
            type: 'input', 
            name: 'name',
            message: 'Please add an employee name',
            validate: answer => {
                if (answer === "") {
                    return "Please fill this field with an employee name.";
                } else {
                    return true;
                }
            }
           },
        {
            type: 'input',
            name: 'id',
            message: "Please add an employee id",
            validate: answer => {
                if (answer === "") {
                    return "Please add a valid employee id"
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please add an employee email',
            
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role in the team?",
            choices: [
                {
                    name: 'Manager'
                },
                {
                    name: 'Intern'
                },
                {
                    name: 'Engineer'
                }
            ]
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please add a Manager's office number",
            
            when: answers => {
                return answers.role === 'Manager';
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please add a Engineer's Github username",
            when: answers => {
                return answers.role === 'Engineer';
            },
            validate: answer => {
                if (answer === "") {
                    return "Please add a valid Github username"
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the school that you are currently attending?",
            when: answers => {
                return answers.role === 'Intern';
            },
            validate: answer => {
                if (answer === "") {
                    return "Please add a valid school name"
                } else {
                    return true;
                }
            },
        },
       ])
   };

   promptUser = () => {

    inquirer.prompt(questions).then(function (response) {

        if (response.role === 'Manager'){
            const newManager = new Manager (response.name, response.id, response.email, response.officeNumber);
            teamList.push(newManager);
        } 
        else if (response.role === 'Engineer') {
            const newEngineer = new Engineer (response.name, response.id, response.email, response.github);
            teamList.push(newEngineer);
        }
        else if (response.role === 'intern') {
            const newIntern = new Intern (response.name, response.id, response.email, response.school);
            teamList.push(newIntern);
        }
        newEmployee();
    });
    
    
   }
   
   newEmployee = () => {
    inquirer   
    .prompt ([
         {
             type: 'input',
             name:  'newEmployee',
             message: "Would you like  to add a new employee?",
             default: true,
         },
       ]).then(function(answers) {
           if (answers.newEmployee) {
               promptUser();
           }
           else {
               const html = render(teamList)
               fs.writeFile(distPath, html, function(err) {
                   if (err) throw (err);
               })
           }
       })
   }

}

UITeam();
