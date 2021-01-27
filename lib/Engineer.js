const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        if (typeof github !== "string" || !github.trim().length) {
            throw "Expected parameter 'name' to be a non-empty string";
        }

        if (!github.trim().match(/^[a-z\d]([a-z\d]|-[a-z\d]){0,38}$/i).length) {
            throw "Parameter 'github' does not have the correct format";
        }

        this.github = github;
    }
    getGithub() { return this.github }
    getRole() { return "Engineer" }
    print() { console.log(`${super.getProps()}Github: ${this.github}\n`) }
}

module.exports = Engineer;