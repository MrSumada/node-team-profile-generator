const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, ID, email, github, role) {
        super(name, ID, email, role);

        this.github = github;
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

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;



