const inquirer = require("inquirer");
// const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// const fs = require('fs');
// const generateHTML = require("./src/html-template.js");
// const  writeFile = require("./utils/generateFile.js");

function Prompts() {
    this.employee;
}

Prompts.prototype.welcome = function() {
    console.log(`
    Hello!  Welcome to the Employee HTML Creator.
    
    Let's begin by adding information for your first employee.
    `)
}

// Inquire employees prompts

Prompts.prototype.employee = function() {
    inquirer
        .prompt({
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
            message: "What is the Employee ID of your Team Member?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email of your Team Member?"
        })
};

// Inquire Manager specific prompt

Prompts.prototype.manager = function(employee) {
    inquirer
        .prompt({
                type: "input",
                name: "officeNumber",
                message: "What is the Office Number of your Team Manager?"
            })
            .then(({ name, ID, email, officeNumber }) => {
                this.employee = new Manager(name, ID, email, officeNumber);
                //Push to employee Array
                // Call addMoreEmployees()
            })
};

// Inquire Engineer specific prompt

Prompts.prototype.engineer = function(employee) {
    inquirer
        .prompt({
                type: "text",
                name: "github",
                message: "What is this Engineer's Github username?"
            })
            .then(({ name, ID, email, github }) => {
                this.employee = new Engineer(name, ID, email, github);
                //Push to Engineer Array
                // Call addMoreEmployees()
            })
};

// Inquire Intern specific prompt

Prompts.prototype.intern = function(employee) {
    inquirer
        .prompt({
                type: "text",
                name: "school",
                message: "What school does this Intern attend?"
            })
            .then(({ name, ID, email, school }) => {
                this.employee = new Intern(name, ID, email, school);
                //Push to Intern Array
                // Call addMoreEmployees()
            })
};

// addMoreEmployees prompt

Prompts.prototype.addMoreEmployees = function(employee) {
    inquirer
        .prompt({
                type: "confirm",
                name: "addMore",
                message: "Would you like to add another team member?"
            })
        .then((addMore) => {
            if(addMore) {
                inquirer
                    .prompt({
                        type: "list",
                        name: "roll",
                        message: "What is this Team Member's Roll?",
                        choices: ["Engineer", "Intern"]
                    })
            } else {
                writeFile();
            }
        })
};

module.exports = Prompts;