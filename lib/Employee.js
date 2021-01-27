class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw "Expected parameter 'name' to be a non-empty string";
        }
        
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw "Expected parameter 'id' to be a non-empty string";
        }
        if (typeof email !== "string" || !email.trim().length) {
            throw "Expected parameter 'email' to be a non-empty string";
        }
        if (!email.includes("@") || !email.includes(".com") || email.indexOf(".com") < email.indexOf("@") - 1) {
            throw "Parameter 'email' does not have the correct format"
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() { return this.name}
    getId() { return this.id }
    getEmail() { return this.email }
    getRole() { return "Employee" }
    getProps() {
        return `${this.getRole()}\nName: ${this.name}\nID: ${this.id}\nEmail: ${this.email}\n`
    }
}

module.exports = Employee;