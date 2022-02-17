const Intern = require("../lib/Intern");


test("creates a intern object", () => {
    const intern = new Intern("Adam", 20, "adam@gmail.com");

    expect(intern.name).toBe("Adam");
    expect(intern.ID).toEqual(expect.any(Number));
    expect(intern.email.length).toBeGreaterThan(0);
    expect(intern.office.length).toBeGreaterThan(0);
});