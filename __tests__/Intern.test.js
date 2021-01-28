const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('constructor():', () => {
        describe('Parameter \'school\'', () => {
            it('should throw error when given empty string', () => {
                expect(() => new Intern("abc", 123, "abc@gmail.com", "").toThrow("Expected parameter 'school' to be a non-empty string"));
            });
            it('should throw error when given a non-string', () => {
                expect(() => new Intern("abc", 123, "abc@gmail.com", 1).toThrow("Expected parameter 'school' to be a non-empty string"));
            });
        })
    });
    describe('Getters:', () => {
        const intern = new Intern("abc", 123, "abc@gmail.com", "Bob");
        describe('getSchool()', () => {
            it('should return \'Bob\' when constructed with parameter \'school\' = \'Bob\'', () => {
                expect(() => intern.getSchool().toBe("Bob"));
            })
        })
        describe('getRole()', () => {
            it('should return \'Intern\'', () => {
                expect(() => intern.getRole().toBe("Intern"));
            })
        });
    })
})