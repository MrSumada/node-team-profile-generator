const Manager = require("../lib/Manager");


// test("creates a manager object", () => {
//     const manager = new Manager("Adam", 20, "adam@gmail.com");

//     expect(manager.name).toBe("Adam");
//     expect(manager.ID).toEqual(expect.any(Number));
//     expect(manager.email.length).toBeGreaterThan(0);
//     expect(manager.office.length).toBeGreaterThan(0);
//     expect(manager.getName()).toBe("Adam");
// });

describe('Manager', () => {
    describe('getName', () => {
        it('should retrieve a name given an Obj', () => {
            const manager = new Manager("Adam", 20, "adam@gmail.com", "A10", "Manager");

            expect(manager.getName()).toBe("Adam");
        });
    })

    describe('getId', () => {
        it('should retrieve an ID number given an Obj', () => {
            const manager = new Manager("Adam", 20, "adam@gmail.com", "A10", "Manager");

            expect(manager.getId()).toEqual(20);
        })
    })

    describe('getEmail', () => {
        it('should retrieve an email given an Obj', () => {
            const manager = new Manager ("Adam", 20, "adam@gmail.com", "A10", "Manager");

            expect(manager.getEmail()).toBe("adam@gmail.com");
        })
    })

    describe('officeNumber', () => {
        it('should retrieve an Office Number given an Obj', () => {
            const manager = new Manager("Adam", 20, "adam@gmail.com", "A10", "Manager");

            expect(manager.officeNumber).toBe("A10");
        })
    })

    describe('getRole', () => {
        it('should retrieve a role given an Obj', () => {
            const manager = new Manager("Adam", 20, "adam@gmail.com", "A10", "Employee");

            expect(manager.getRole()).toBe("Manager");
        })
    })
})