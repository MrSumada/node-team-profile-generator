const Intern = require("../lib/Intern");


// test("creates a intern object", () => {
//     const intern = new Intern("Adam", 20, "adam@gmail.com");

//     expect(intern.name).toBe("Adam");
//     expect(intern.ID).toEqual(expect.any(Number));
//     expect(intern.email.length).toBeGreaterThan(0);
//     expect(intern.office.length).toBeGreaterThan(0);
// });

describe('Intern', () => {
    describe('getName', () => {
        it('should retrieve a name given an Obj', () => {
            const intern = new Intern("Adam", 20, "adam@gmail.com", "High School", "Intern");

            expect(Intern.getName()).toBe("Adam");
        });
    })

    describe('getId', () => {
        it('should retrieve an ID number given an Obj', () => {
            const intern = new Intern("Adam", 20, "adam@gmail.com", "High School", "Intern");

            expect(Intern.getId()).toEqual(20);
        })
    })

    describe('getEmail', () => {
        it('should retrieve an email given an Obj', () => {
            const intern = new Intern ("Adam", 20, "adam@gmail.com", "High School", "Intern");

            expect(Intern.getEmail()).toBe("adam@gmail.com");
        })
    })

    describe('getSchool', () => {
        it('should retrieve a school given an Obj', () => {
            const intern = new Intern("Adam", 20, "adam@gmail.com", "High School", "Intern");

            expect(Intern.getSchool()).toBe("High School");
        })
    })

    describe('getRole', () => {
        it('should retrieve a role given an Obj', () => {
            const intern = new Intern("Adam", 20, "adam@gmail.com", "High School", "Intern");

            expect(Intern.getRole()).toBe("Intern");
        })
    })
})