const Employee = require("./Employee");



class Manager extends Employee {
    constructor(name, ID, email, officeNumber, role) {
        super(name, ID, email, role);
        
        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.ID;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
