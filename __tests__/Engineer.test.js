const Engineer = require("../lib/Engineer")

test("creates an engineer object", () => {
    const engineer = new Engineer("Adam", 20, "adam@gmail.com");

    expect(engineer.name).toBe("Adam");
    expect(engineer.ID).toEqual(expect.any(Number));
    expect(engineer.email.length).tobeGreaterThan(0);
    expect(engineer.office.length).tobeGreaterThan(0);
});