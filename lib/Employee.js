class Employee {
    constructor(name, id, email) {
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