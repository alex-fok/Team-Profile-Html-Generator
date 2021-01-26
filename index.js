const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const inquireBasic = (type) => [
    {
        name: "name",
        type: "input",
        message: `Name for ${type}:`
    },
    {
        name: "id",
        type: "number",
        message: "ID:"
    },
    {
        name: "email",
        type: "input",
        message: "Email"
    }
];

const generateHTML = (members) => {
    console.log(members);
}

const inquireEngineer = () => {
    return inquirer
    .prompt([
        ...inquireBasic("engineer"),
        {
            name: "github",
            type: "input",
            message: "Github:"
        }
    ])
}

const inquireIntern = () => {
    return inquirer
    .prompt([
        ...inquireBasic("intern"),
        {
            name: "school",
            type: "input",
            message: "School:"
        }
    ])
}

const inquireMembers = (members) => {
    console.log(members);
    const currentMembers = members;
    const addMember = (type, info) => {
        const values = Object.keys(info).map(key => info[key]);
        const member = 
            type === "Engineer"
                ? new Engineer(...values)
                : new Intern(...values);
        currentMembers.push(member);
    }

    inquirer
    .prompt([{
        name: "type",
        type: "list",
        message: "Choose member type:",
        choices: ["Engineer", "Intern", new inquirer.Separator(), "Quit"]
    }])
    .then(member => {
        switch(member.type) {
            case "Engineer":
                inquireEngineer().then(info => {
                    addMember("Engineer", info);
                    inquireMembers(currentMembers);
                });
                break;
            case "Intern": 
                inquireIntern().then(info =>{
                    addMember("Intern", info);
                    inquireMembers(currentMembers);
                });
                break;
            default:
                return generateHTML(members);
        }
    })
}

const inquireManager = () => {
    inquirer
    .prompt([
        ...inquireBasic("manager"),
        {
            name: "officeNumber",
            type: "number",
            message: "Office Number:"
        }
    ])
    .then(answers => {
        const {name, id, email, officeNumber} = answers;
        const manager = new Manager(name, id, email, officeNumber);
        inquireMembers([manager]);
    })
}

const start = () => {
    inquireManager();
}

start();