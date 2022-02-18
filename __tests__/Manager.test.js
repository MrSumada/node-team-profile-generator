const Manager = require("../lib/Manager");


test("creates a manager object", () => {
    const manager = new Manager("Adam", 20, "adam@gmail.com");

    expect(manager.name).toBe("Adam");
    expect(manager.ID).toEqual(expect.any(Number));
    expect(manager.email.length).toBeGreaterThan(0);
    expect(manager.office.length).toBeGreaterThan(0);
    expect(manager.getName()).toBe("Adam");
});

describe('Manager', () => {
    describe('getName', () => {
        it('should retrieve a name given string', () => {
        const str = 'Hello World!';

        const result = new Manager().getStats(str);

        expect(result).toEBe("Hello World!");
        });
    })

    describe('getId', () => {
        it('should retrieve an ID given number', () => {
            const num = 1;

            const result = new Manager().getId(num);

            expect(result).toEqual(1);
        })
    })

    describe('getEmail', () => {
        it('should retrieve an email given a string', () => {
            const str = "Adam.com";

            const result = new Manager().getEmail("str");

            expect(result).toBe("Adam.com");
        })
    })

    describe('getRole', () => {
        it('should retrieve an email given a string', () => {
            const str = "Engineer";

            const result = new Manager().getRole(str);

            expect(result).toBe("Engineer");
        })
    })

    describe('getOfficeNumber', () => {
        it('should retrieve an office number given a string', () => {
            const result = new Manager("Adam", 1, "fake@email.com", "A10").officeNumber.length(str);

            expect(result).toBeGreaterThan(0);
        })
    })
})