const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const manager = new Manager("A", 19483, "fedf@fjdsi", 103);
manager.print();

const engineer = new Engineer("B", 11234, "Fejdfe@engineer", 234);
engineer.print();

const intern = new Intern("C", 1234, "jif3@f", "abc");
intern.print();
