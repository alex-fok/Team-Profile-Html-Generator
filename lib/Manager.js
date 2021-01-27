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
    print() { console.log(`${super.getProps()}Office Number: ${this.officeNum}\n`) }
}
module.exports = Manager;