const Manager = require("../lib/Manager");


test("creates a manager object", () => {
    const manager = new Manager("Adam", 20, "adam@gmail.com");

    expect(manager.name).toBe("Adam");
    expect(manager.ID).toEqual(expect.any(Number));
    expect(manager.email.length).toBeGreaterThan(0);
    expect(manager.office.length).toBeGreaterThan(0);
});