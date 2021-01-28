const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        if (typeof github !== "string" || !github.trim().length) {
            throw "Expected parameter 'name' to be a non-empty string";
        }
        if (github.length > 39) {
            throw "Expected parameter 'github' to have maximum length of 39 characters";
        }
        if (!github.trim().match(/^[a-z\d]([a-z\d]|-[a-z\d])*$/i).length) {
            throw "Parameter 'github' does not have the correct format";
        }
        

        this.github = github;
    }
    getGithub() { return this.github }
    getRole() { return "Engineer" }
}

module.exports = Engineer;