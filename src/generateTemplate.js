const generateComponent = (data) => {

    const generateCustomData = (data) => {
        const custom = (data.getOfficeNum && `Office Number: ${data.getOfficeNum()}`) ||
        (data.getGithub && `GitHub: <a href="https://github.com/${data.getGithub()}" target="_blank">${data.getGithub()}</a>`) ||
        (data.getSchool && `School: ${data.getSchool()}`);

        return `<li class="list-group-item">${custom}</li>`;
    }

    return (
        `   <div class="col mt-3" style="min-width: 150px; max-width: 350px;">
                <div class="card h-100">
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
        <title>Team Profile</title>
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
            <div class="row row-cols-1 row-cols-md-3 g-4">
                ${members.map((data) => generateComponent(data)).join("")}        
            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </body>
    </html>
    `);
}

module.exports = generateTemplate;