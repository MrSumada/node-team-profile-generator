const Employee = require("../lib/Employee.js");


test("creates an employee object", () => {
    const employee = new Employee("Adam", 20, "adam@gmail.com");

    expect(employee.name).toBe("Adam");
    expect(employee.ID).toEqual(expect.any(Number));
    expect(employee.email.length).toBeGreaterThan(0);

    // expect(employee.getName()).toBeGreaterThan(0);
});

describe('Employee', () => {
    describe('getName', () => {
        it('should retrieve a name given string', () => {
        const str = 'Hello World!';

        const result = new Employee().getStats(str);

        expect(result).toEBe("Hello World!");
        });
    })

    describe('getId', () => {
        it('should retrieve an ID given number', () => {
            const num = 1;

            const result = new Employee().getId(num);

            expect(result).toEqual(1);
        })
    })

    describe('getEmail', () => {
        it('should retrieve an email given a string', () => {
            const str = "Adam.com";

            const result = new Employee().getEmail("str");

            expect(result).toBe("Adam.com");
        })
    })

    describe('getRole', () => {
        it('should retrieve an email given a string', () => {
            const str = "Employee";

            const result = new Employee().getRole(str);

            expect(result).toBe("Employee");
        })
    })
})