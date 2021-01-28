const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('constructor():', () => {
        describe('Parameter \'name\'', () => {
            it('should throw error when given an empty string', () => {
                expect(() => new Employee("", 123, "123@gmail.com").toThrow("Expected parameter 'name' to be a non-empty string"));
            });
            it('should throw error when given a non-string', () => {
                expect(() => new Employee(123, 123, "123@gmail.com").toThrow("Expected parameter 'name' to be a non-empty string"));
            });
        });
        describe('Parameter \'id\'', () => {
            it('should throw error when given a non-number', () => {
                expect(() => new Employee("abc", "123", "123@gmail.com").toThrow("Expected parameter 'id' to be a non-negative number"));
            });
            it('should throw error when given a NaN', () => {
                expect(() => new Employee("abc", Number.NaN, "123@gmail.com").toThrow("Expected parameter 'id' to be a non-negative number"));
            });
            it('should throw error when given a negative number', () => {
                expect(() => new Employee("abc", -1, "123@gmail.com").toThrow("Expected parameter 'id' to be a non-negative number"));
            });
        });
        describe('Parameter \'email\'', () => {
            it('should throw error when given an empty string', () => {
                expect(() => new Employee("abc", 123, "").toThrow("Expected parameter 'email' to be a non-empty string"));
            });
            it('should throw error when given a non-string', () => {
                expect(() => new Employee("abc", 123, 123).toThrow("Expected parameter 'email' to be a non-empty string"));
            });
            it('should throw error when given an incorrect format string', () => {
                expect(() => new Employee("abc", 123, "abc").toThrow("Parameter 'email' does not have the correct format"));
                expect(() => new Employee("abc", 123, "abc.com").toThrow("Parameter 'email' does not have the correct format"));
                expect(() => new Employee("abc", 123, "abc.com@").toThrow("Parameter 'email' does not have the correct format"));
            });
        });
    });
    describe('Getters:', () => {
        const employee = new Employee("abc", 123, "abc@gmail.com");
        describe('getName()', () => {
            it('should return \'abc\' when constructed with parameter \'name\' = \'abc\'', () => {
                expect(() => employee.getName().toBe("abc"))
            });
        });
        describe('getId()', () => {
            it('should return \'123\' when constructed with parameter \'id\' = \'123\'', () => {
                expect(() => employee.getId().toBe(123));
            });
        });
        describe('getEmail()', () => {
            it('should return \'abc@gmail.com\' when constructed with parameter \'email\' = \'abc@gmail.com\'', () => {
                expect(() => employee.getEmail().toBe("abc@gmail.com"));
            });
        });
        describe('getRole()', () => {
            it('should return \'Employee\'', () => {
                expect(() => employee.getRole().toBe("Employee"));
            })
        });
    })
})