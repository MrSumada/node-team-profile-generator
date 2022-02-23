const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
// const Employee = require("./Employee");

const fs = require('fs');
const generateHTML = require("../utils/generateHTML");
// const generateHTML = require("../src/html-template.js");
// const  writeFile = require("../utils/generateHTML.js");

function Prompts() {
    this.employees = [];
    currentRole = "Manager";
    isManager = false;
    isEngineer = false;
    isIntern = false;
}


// Initial welcoming

Prompts.prototype.initializePrompts = function() {

    console.log(`
    Hello!  Welcome to the Employee HTML Creator.
    
    Let's begin by adding information for your Team Manager.
    `)

    this.addEmployee();
}

// Inquire general employees prompts

Prompts.prototype.addEmployee = function() {

    // set Role Booleans for "When" inquire questions
    if (currentRole === "Manager") {
        isManager = true;
    } else {
        isManager = false;
    }
    if (currentRole === "Engineer") {
        isEngineer = true;
    } else {
        isEngineer = false;
    }
    if (currentRole === "Intern") {
        isIntern = true;
    } else {
        isIntern = false;
    }

    // Questions array

    const employeeQuestions = [
        {
        type: "input",
        name: "name",
        message: "What is the name of your Team Member",
        validate: nameInfo => {
            if (nameInfo) {
                return true;
            } else {
                console.log("Please enter a name for your Team Member?");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "ID",
        message: "What is the Employee ID of your Team Member?",
        validate: inputInfo => {
            if (inputInfo) {
                return true;
            } else {
                console.log("Please enter an Employee ID for your Team Member?");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the email of your Team Member?",
        validate: emailInfo => {
            if (emailInfo) {
                return true;
            } else {
                console.log("Please enter an email for your Team Member?");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the office Number of your Manager?",
        when: isManager === true,
        validate: officeInfo => {
            if (officeInfo) {
                return true;
            } else {
                console.log("Please enter an Office Number for your Manager?");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the GitHub Username of your Engineer?",
        when: isEngineer === true,
        validate: githubInfo => {
            if (githubInfo) {
                return true;
            } else {
                console.log("Please enter a GitHub Username for your Engineer?");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What is the school your Intern attends?",
        when: isIntern === true,
        validate: schoolInfo => {
            if (schoolInfo) {
                return true;
            } else {
                console.log("Please enter a School for your Intern?");
                return false;
            }
        }
    }]

        // Call the questions array, and push for specific Team Member's role.

        inquirer.prompt(employeeQuestions).then(({name, ID, email, officeNumber, github, school}) => {

            if (isManager){
                this.employees.push(new Manager(name, ID, email, officeNumber, currentRole));
            }
            if (isEngineer){
                this.employees.push(new Engineer(name, ID, email, github, currentRole));
            }
            if (isIntern) {
                this.employees.push(new Intern(name, ID, email, school, currentRole));
            }
            console.log(this.employees);

            return this.addMoreEmployees();
        })
    }

Prompts.prototype.addMoreEmployees = function() {
    inquirer
        .prompt({
                type: "confirm",
                name: "addMore",
                message: "Would you like to add another Team Member?"
            })
        .then((answer) => {
            if(answer.addMore === true) {
                inquirer
                    .prompt({
                        type: "list",
                        name: "role",
                        message: "What is this Team Member's Role?",
                        choices: ["Engineer", "Intern"]
                    })
                    .then((answer) => {
                        currentRole = answer.role;
                        console.log("This new employee will be an " + answer.role + ".")
                        return this.addEmployee();
                    })
            } else {
                
                console.log(this.employees)
                this.makeHTML(this.employees);
            }
        })
};

Prompts.prototype.makeHTML = function() {
    
    console.log("Writing File!");

    const fileContent = generateHTML(this.employees);

    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created!"
            });

        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "Stylesheet created!"
            });
        });
    });

    console.log(`
        
    Done! You can find your html file in your dist folder.
        
        `)
    });
};


module.exports = Prompts;