const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('constructor():', () => {
        describe('Parameter \'github\'', () => {
            it('should throw error when given empty string', () => {
                expect(()=>new Engineer("abc", 123, "abc@gmail.com", "").toThrow("Expected parameter 'github' to be a non-empty string"));
            });
            it('should throw error when given non-string', () => {
                expect(()=>new Engineer("abc", 123, "abc@gmail.com", 1).toThrow("Expected parameter 'github' to be a non-empty string"));
            });
            it('should throw error when given string that exceeds 39 characters', () => {
                expect(() => new Engineer("abc", 123, "abc@gmail.com", "1234567890123456789012345678901234567890").toThrow("Expected parameter 'github' to have maximum length of 39 characters"));
            });
            it('should throw error when given string in incorrect format', () => {
                expect(() => new Engineer("abc", 123, "abc@gmail.com", "-abc").toThrow("Parameter 'github' does not have the correct format"));
                expect(() => new Engineer("abc", 123, "abc@gmail.com", "abc-").toThrow("Parameter 'github' does not have the correct format"))
            });
        });
    });
    describe('Getters:', () => {
        const engineer = new Engineer("abc", 123, "abc@gmail.com", "Bob")
        describe('getGithub()', () => {
            it('should return \'Bob\' when constructed with parameter \'github\' = \'Bob\'', () => {
                expect(() => engineer.getGithub().toBe("Bob"));
            });
        });
        describe('getRole()', () => {
            it('should return \'Engineer\'', () => {
                expect(() => engineer.getRole().toBe("Engineer"));
            });
        });
    })
})