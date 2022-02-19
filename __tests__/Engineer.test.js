const Engineer = require("../lib/Engineer")

describe('Engineer', () => {
    describe('getName', () => {
        it('should retrieve a name given an Obj', () => {
            const engineer = new Engineer("Adam", 20, "adam@gmail.com", "MrSumada", "Engineer");

            expect(engineer.getName()).toBe("Adam");
        });
    })

    describe('getId', () => {
        it('should retrieve an ID number given an Obj', () => {
            const engineer = new Engineer("Adam", 20, "adam@gmail.com", "MrSumada", "Engineer");

            expect(engineer.getId()).toEqual(20);
        })
    })

    describe('getEmail', () => {
        it('should retrieve an email given an Obj', () => {
            const engineer = new Engineer ("Adam", 20, "adam@gmail.com", "MrSumada", "Engineer");

            expect(engineer.getEmail()).toBe("adam@gmail.com");
        })
    })

    describe('getGithub', () => {
        it('should retrieve a Github Username given an Obj', () => {
            const engineer = new Engineer("Adam", 20, "adam@gmail.com", "MrSumada", "Engineer");

            expect(engineer.getGithub()).toBe("MrSumada");
        })
    })

    describe('getRole', () => {
        it('should retrieve a role given an Obj', () => {
            const engineer = new Engineer("Adam", 20, "adam@gmail.com", "MrSumada", "Employee");

            expect(engineer.getRole()).toBe("Engineer");
        })
    })
})