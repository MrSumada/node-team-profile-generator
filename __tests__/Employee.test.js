const Employee = require("../lib/Employee");


// test("creates an employee object", () => {
//     const employee = new Employee("Adam", 20, "adam@gmail.com", "Employee");

//     expect(employee.name).toBe("Adam");
//     expect(employee.ID).toEqual(expect.any(Number));
//     expect(employee.email.length).toBeGreaterThan(0);
//     expect(employee.role).toBe("Employee")

    // expect(employee.getName()).toHaveProperty("name");
// });

describe('Employee', () => {
    describe('getName', () => {
        it('should retrieve a name given an Obj', () => {
            const employee = new Employee("Adam", 20, "adam@gmail.com", "Employee");

            expect(employee.getName()).toBe("Adam");
        });
    })

    describe('getId', () => {
        it('should retrieve an ID number given an Obj', () => {
            const employee = new Employee("Adam", 20, "adam@gmail.com", "Employee");

            expect(employee.getId()).toEqual(20);
        })
    })

    describe('getEmail', () => {
        it('should retrieve an email given an Obj', () => {
            const employee = new Employee("Adam", 20, "adam@gmail.com", "Employee");

            expect(employee.getEmail()).toBe("adam@gmail.com");
        })
    })

    describe('getRole', () => {
        it('should retrieve a role given an Obj', () => {
            const employee = new Employee("Adam", 20, "adam@gmail.com", "Employee");

            expect(employee.getRole()).toBe("Employee");
        })
    })
})