const inquirer = require("inquirer");
const Employee = require("./Employee");
const Manager = require("./Manager");

function Prompts() {
    this.employee;
}

Prompts.prototype.welcome = function() {
    console.log(`
    Hello!  Welcome to the Employee HTML Creator.
    
    Let's begin by adding information for your first employee.
    `)

    inquirer
        .prompt({
            type: "text",
            name: "name",
            message: "What is the name of your Team Manager?"
        },
        {
            type: "text",
            name: "ID",
            message: "What is the Employee ID of your Team Manager?"
        },
        {
            type: "text",
            name: "email",
            message: "What is the email of your Team Manager?"
        },
        {
            type: "text",
            name: "officeNumber",
            message: "What is the Office Number of your team Manager?"
        })
        .then(({ name, ID, email, officeNumber }) => {
            this.employee = new Manager(name, ID, email, officeNumber);
            //Push to employee Array
            // Call addMoreEmployees()
        })
};




module.exports = Prompts;
