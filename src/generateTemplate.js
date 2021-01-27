const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateComponent = (data) => {
    const generateCustomData = (data) => {
        return (
        data instanceof Manager
            ? `<li class="list-group-item">Office Number: ${data.getOfficeNumber()}</li>`
        : data instanceof Engineer
            ? `<li class="list-group-item">
                Github: <a href="https://github.com/${data.getGithub()}">${data.getGithub()}</a>
            </li>`
        : data instanceof Intern
            ? `<li class="list-group-item">School: ${data.getSchool()}</li>`
        : ""        
        )
    }

    return (
        `<div class="col-3 mt-3 mx-1" style="min-width: 150px;">
            <div class="card">
                <h5 class="card-header bg-primary text-white">${data.getName()}<br>${data.getRole()}</h5>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${data.getId()}</li>
                        <li class="list-group-item">
                            Email: <a href="mailto:${data.getEmail()}">
                            ${data.getEmail()}</a>
                        </li>
                        ${generateCustomData(data)}
                    </ul>
                </div>
            </div>
        </div>
    `)
}

const generateTemplate = (members) => {
    return (
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    </head>
    <body>
        <header class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="navbar-brand m-auto">
                    <h1 class="text-white text-center">Team Profile</h1>
                </div>
            </div>
        </header>
        <div class="container mt-5">
            <div class="row justify-content-center">
                ${members.map((data) => generateComponent(data)).join("")}        
            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </body>
    </html>
    `);
}

module.exports = generateTemplate;