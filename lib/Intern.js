const Employee = require("./Employee");



class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID, email);
        
        this.school = school;
    }


    getSalary() {
        console.log("Money");
    };
}

module.exports = Intern;
