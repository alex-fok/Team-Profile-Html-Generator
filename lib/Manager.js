const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
            throw "Expected parameter 'officeNum' to be a non-negative number";
        }
        this.officeNum = officeNum;
    }
    getOfficeNum() { return this.officeNum }
    getRole() { return "Manager" }
}
module.exports = Manager;