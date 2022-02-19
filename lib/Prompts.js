const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
// const Employee = require("./Employee");

// const fs = require('fs');
// const generateHTML = require("./src/html-template.js");
// const  writeFile = require("./utils/generateFile.js");

function Prompts() {
    this.employees = [];
    this.newEmployee;
    this.role = "Manager";
;}

// Initial welcoming

Prompts.prototype.initializePrompts = function() {

    console.log(`
    Hello!  Welcome to the Employee HTML Creator.
    
    Let's begin by adding information for your first employee.
    `)

    this.addEmployee();
}

// Inquire general employees prompts

Prompts.prototype.addEmployee = function(employee) {

    console.log("Adding Employee");

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
        message: "What is the Employee ID of your Team Member?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email of your Team Member?"
    }]
        inquirer.prompt(employeeQuestions).then((inquirerResponses) => {
            console.log(inquirerResponses);
        })
    }
    
    // inquirer
    //     .prompt({
    //         type: "input",
    //         name: "name",
    //         message: "What is the name of your Team Member"
    //     },
    //     {
    //         type: "input",
    //         name: "ID",
    //         message: "What is the Employee ID of your Team Member?"
    //     },
    //     {
    //         type: "input",
    //         name: "email",
    //         message: "What is the email of your Team Member?"
        // })
        // .then(({ name, ID, email, role }) => {
        //     this.employees.push = new Employee(name, ID, email, role);
        //     if (this.role === "Manager") {
        //         this.manager();
        //     }
        //     if (this.role === "Engineer") {
        //         this.engineer();
        //     }
        //     if (this.role === "Intern") {
        //         this.intern();
        //     }
        // })
// };

// Inquire Manager specific prompt

Prompts.prototype.manager = function(employee) {


    inquirer
        .prompt({
                type: "input",
                name: "officeNumber",
                message: "What is the Office Number of your Team Manager?"
            })
            .then(({ name, ID, email, officeNumber, role }) => {
                this.employees.push = new Manager(name, ID, email, officeNumber, role);
                console.log(this.employees)
                this.addMoreEmployees();
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
                this.employee = new Engineer(name, ID, email, github, role);
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
                this.employee = new Intern(name, ID, email, school, role);
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
                    .then((answer) => {
                        this.role = answer;
                        this.addEmployee();
                    })
            } else {
                writeFile();
            }
        })
};

// function Game() {
//     this.roundNumber = 0;
//     this.isPlayerTurn = false;
//     this.enemies = [];
//     this.currentEnemy;
//     this.player;
// }

// Game.prototype.initializeGame = function() {
//     this.enemies.push(new Enemy("goblin", "sword"));
//     this.enemies.push(new Enemy("orc", "baseball bat"));
//     this.enemies.push(new Enemy("skeleton", "feeling of ennui"));

//     this.currentEnemy = this.enemies[0];

//     inquirer
//         .prompt({
//             type: "text",
//             name: "name",
//             message: "What is your name?"
//         })
//         .then(({ name }) => {
//             this.player = new Player(name);

//             this.startNewBattle();
//         });
// };


module.exports = Prompts;
