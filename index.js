const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const generateHTML = (members) => {
    const fs = require('fs');
    const generateTemplate = require('./src/generateTemplate');
    const html = generateTemplate(members);
    fs.writeFile("./dist/index.html", html, "utf8", (err) => {
        if (err) throw err;
        console.log("HTML File generated. Check 'dist/index.html'")
    })
}

const inquireEmployee = () => [
    {
        name: "name",
        type: "input",
        message: "Name:"
    },
    {
        name: "id",
        type: "number",
        message: "ID:"
    },
    {
        name: "email",
        type: "input",
        message: "Email:"
    }
];

const inquireEngineer = () => {
    return inquirer
    .prompt([
        ...inquireEmployee(),
        {
            name: "github",
            type: "input",
            message: "GitHub:"
        }
    ])
}

const inquireIntern = () => {
    return inquirer
    .prompt([
        ...inquireEmployee(),
        {
            name: "school",
            type: "input",
            message: "School:"
        }
    ])
}

const inquireMembers = (members) => {
    const currentMembers = members;
    const addMember = (type, info) => {
        const values = Object.keys(info).map(key => info[key]);
        try {
            const member = 
                type === "Engineer"
                    ? new Engineer(...values)
                    : new Intern(...values);
            currentMembers.push(member);
            console.log(`${type} '${info["name"]}' added\n`);
        } catch(err) {
            console.error(`Invalid input: ${err}\n`);
        }
    }

    inquirer
    .prompt([{
        name: "type",
        type: "list",
        message: "Member Type:",
        choices: ["Engineer", "Intern", new inquirer.Separator(), "Finish & Quit"]
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
    console.log("Type in info for Manager:");
    inquirer
    .prompt([
        ...inquireEmployee(),
        {
            name: "officeNum",
            type: "number",
            message: "Office Number:"
        }
    ])
    .then(answers => {
        const {name, id, email, officeNum} = answers;
        try {
            const manager = new Manager(name, id, email, officeNum);
            console.log(`Manager '${name}' added. Choose Member(s):\n`);
            inquireMembers([manager]);
        } catch(err) {
            console.error(`Invalid input: ${err}\n`);
            inquireManager();
        }
    })
}

const start = () => {
    inquireManager();
}

start();