const Employee = require("../lib/Employee");


test("creates an employee object", () => {
    const employee = new Employee("Adam", 20, "adam@gmail.com", "Employee");

    expect(employee.name).toBe("Adam");
    expect(employee.ID).toEqual(expect.any(Number));
    expect(employee.email.length).toBeGreaterThan(0);
    expect(employee.role).toBe("Employee")

    // expect(employee.getName()).toHaveProperty("name");
});

describe('Employee', () => {
    describe('getName', () => {
        it('should retrieve a name given string', () => {
        const employee = new Employee("Adam");

        // const result = new Employee().getName(employee);
        expect(employee.getName()).toBe("Adam");

        // expect(result).toBe("Hello World!");
        // expect(result).toEqual(expect.stringContaining('Hello World!'));
        });
    })

//     describe('getId', () => {
//         it('should retrieve an ID given number', () => {
//             const employee = new Employee("Adam", 20, "adam@gmail.com");

//             const result = new Employee().getId(num);

//             expect(result).toEqual(1);
//         })
//     })

//     describe('getEmail', () => {
//         it('should retrieve an email given a string', () => {
//             const str = "Adam.com";

//             const result = new Employee().getEmail("str");

//             expect(result).toBe("Adam.com");
//         })
//     })

//     describe('getRole', () => {
//         it('should retrieve an email given a string', () => {
//             const str = "Employee";

//             const result = new Employee().getRole(str);

//             expect(result).toBe("Employee");
//         })
//     })
})