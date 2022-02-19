const Engineer = require("../lib/Engineer")

// test("creates an engineer object", () => {
//     const engineer = new Engineer("Adam", 20, "adam@gmail.com");

//     expect(engineer.name).toBe("Adam");
//     expect(engineer.ID).toEqual(expect.any(Number));
//     expect(engineer.email.length).tobeGreaterThan(0);
//     expect(engineer.office.length).tobeGreaterThan(0);
// });

describe('Engineer', () => {
    describe('getName', () => {
        it('should retrieve a name given an Obj', () => {
            const engineer = new Engineer("Adam", 20, "adam@gmail.com", "MrSumada", "Engineer");

            expect(Engineer.getName()).toBe("Adam");
        });
    })

    describe('getId', () => {
        it('should retrieve an ID number given an Obj', () => {
            const engineer = new Engineer("Adam", 20, "adam@gmail.com", "MrSumada", "Engineer");

            expect(Engineer.getId()).toEqual(20);
        })
    })

    describe('getEmail', () => {
        it('should retrieve an email given an Obj', () => {
            const engineer = new Engineer ("Adam", 20, "adam@gmail.com", "MrSumada", "Engineer");

            expect(Engineer.getEmail()).toBe("adam@gmail.com");
        })
    })

    describe('getGithub', () => {
        it('should retrieve a Github Username given an Obj', () => {
            const engineer = new Engineer("Adam", 20, "adam@gmail.com", "MrSumada", "Engineer");

            expect(Engineer.getGithub()).toBe("MrSumada");
        })
    })

    describe('getRole', () => {
        it('should retrieve a role given an Obj', () => {
            const engineer = new Engineer("Adam", 20, "adam@gmail.com", "MrSumada", "Engineer");

            expect(Engineer.getRole()).toBe("Engineer");
        })
    })
})