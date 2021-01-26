const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    getRole() { return "Manager" }
    print() { console.log(`${super.getProps()}Office: ${this.office}\n`) }
}
module.exports = Manager;