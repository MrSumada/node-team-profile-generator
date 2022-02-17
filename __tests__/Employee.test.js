const Employee = require("../lib/Employee.js");


test("creates an employee object", () => {
    const employee = new Employee("Adam", 20, "adam@gmail.com");

    expect(employee.name).toBe("Adam");
    expect(employee.ID).toEqual(expect.any(Number));
    expect(employee.email.length).toBeGreaterThan(0);
});