const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('constructor():', () => {
        describe('Parameter \'officeNum\'', () => {
            it('should throw error when given a non-number', () => {
                expect(()=>new Manager("asdf", 123, "abc@gmail.com", "123").toThrow("Expected parameter 'office' to be a non-negative number"));
            })
            it('should throw error when given a NaN', () => {
                expect(() => new Manager("abc", 123, "abc@gmail.com", Number.NaN).toThrow("Expected parameter 'office' to be a non-negative number"));
            });
            it('should throw error when given a negative number', () => {
                expect(() => new Manager("abc", 123, "abc@gmail.com", -1).toThrow("Expected parameter 'office' to be a non-negative number"));
            });
        });
    });
    describe('Getters:', () => {
        const manager = new Manager("abc", 123, "abc@gmail.com", 1);
        describe('getOfficeNum()', () => {
            it('should return \'1\' when constructed with parameter \'officeNum\' = \'1\'', () => {
                expect(() => manager.getOfficeNum().toBe(1));
            });
        })
        describe('getRole()', () => {
            it('should return \'Manager\'', () => {
                expect(() => manager.getRole().toBe("Manager"));
            })
        });
    })
})