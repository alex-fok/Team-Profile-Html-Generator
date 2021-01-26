const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() { return this.school }
    getRole() { return "Intern" }
    print() { console.log(`${super.getProps()}School: ${this.school}\n`) }
} 

module.exports = Intern;