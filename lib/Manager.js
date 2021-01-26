const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() { return "Manager" }
    print() { console.log(`${super.getProps()}Office Number: ${this.officeNumber}\n`) }
}
module.exports = Manager;