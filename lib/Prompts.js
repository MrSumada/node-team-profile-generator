const inquirer = require("inquirer");
const Employee = require("./Employee")

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
            name: "office",
            message: "What is the Office Number of your team Manager?"
        })
        .then(({ name }) => {
            this.employee = new Employee(name);
        })
};




module.exports = Prompts;
