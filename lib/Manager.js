const Employee = require("./Employee");



class Manager extends Employee {
    constructor(name, ID, email, office) {
        super(name, ID, email);
        
        this.office = office;
    }


    getSalary() {
        console.log("Money");
    };
}

module.exports = Manager;
