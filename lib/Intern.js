const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, ID, email, school, role) {
        super(name, ID, email, role);
        
        this.school = school;
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

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

module.exports = Intern;
