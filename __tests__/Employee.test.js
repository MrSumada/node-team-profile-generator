const Employee = require("../lib/Employee.js");


test("creates an employee object", () => {
    const employee = new Employee("Adam");

    expect(employee.name).toBe("Adam");
    expect(employee.ID).toEqual(any(Number));
    expect(employee.email.length).toBeGreaterThan(0);
});