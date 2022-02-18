const Intern = require("../lib/Intern");


// test("creates a intern object", () => {
//     const intern = new Intern("Adam", 20, "adam@gmail.com");

//     expect(intern.name).toBe("Adam");
//     expect(intern.ID).toEqual(expect.any(Number));
//     expect(intern.email.length).toBeGreaterThan(0);
//     expect(intern.office.length).toBeGreaterThan(0);
// });

describe('Intern', () => {
    describe('getName', () => {
        it('should retrieve a name given string', () => {
        const str = 'Hello World!';

        const result = new Intern().getStats(str);

        expect(result).toEBe("Hello World!");
        });
    })

    describe('getId', () => {
        it('should retrieve an ID given number', () => {
            const num = 1;

            const result = new Intern().getId(num);

            expect(result).toEqual(1);
        })
    })

    describe('getEmail', () => {
        it('should retrieve an email given a string', () => {
            const str = "Adam.com";

            const result = new Intern().getEmail("str");

            expect(result).toBe("Adam.com");
        })
    })

    describe('getRole', () => {
        it('should retrieve an email given a string', () => {
            const str = "Intern";

            const result = new Intern().getRole(str);

            expect(result).toBe("Intern");
        })
    })

    describe('getSchool', () => {
        it('should retrieve a school given a string', () => {
            const str = "Random High School";

            const result = new Intern().getGithub(str);

            expect(result).toBe("Random High School");
        })
    })
})