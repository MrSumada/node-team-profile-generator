const Employee = require("./Employee");



class Manager extends Employee {
    constructor(name, ID, email, office) {
        super(name, ID, email);
        
        this.office = office;
    }

}

module.exports = Manager;
