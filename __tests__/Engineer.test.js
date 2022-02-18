const Engineer = require("../lib/Engineer")

// test("creates an engineer object", () => {
//     const engineer = new Engineer("Adam", 20, "adam@gmail.com");

//     expect(engineer.name).toBe("Adam");
//     expect(engineer.ID).toEqual(expect.any(Number));
//     expect(engineer.email.length).tobeGreaterThan(0);
//     expect(engineer.office.length).tobeGreaterThan(0);
// });

describe('Engineer', () => {
    describe('getName', () => {
        it('should retrieve a name given string', () => {
        const str = 'Hello World!';

        const result = new Engineer().getStats(str);

        expect(result).toEBe("Hello World!");
        });
    })

    describe('getId', () => {
        it('should retrieve an ID given number', () => {
            const num = 1;

            const result = new Engineer().getId(num);

            expect(result).toEqual(1);
        })
    })

    describe('getEmail', () => {
        it('should retrieve an email given a string', () => {
            const str = "Adam.com";

            const result = new Engineer().getEmail("str");

            expect(result).toBe("Adam.com");
        })
    })

    describe('getRole', () => {
        it('should retrieve an email given a string', () => {
            const str = "Engineer";

            const result = new Engineer().getRole(str);

            expect(result).toBe("Engineer");
        })
    })

    describe('getGithub', () => {
        it('should retrieve a github username given a string', () => {
            const str = "MrSumada";

            const result = new Engineer().getGithub(str);

            expect(result).toBe("MrSumada");
        })
    })
})