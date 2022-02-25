const generateHTML = function(projectArr) {

    // filters to sort roles, managers will appear first, then engineers, then interns regardless of the order you input them
    const managers = projectArr.filter((a)=>{if(a.role=="Manager"){return a}});
    const engineers = projectArr.filter((b)=>{if(b.role=="Engineer"){return b}});
    const interns = projectArr.filter((c)=>{if(c.role=="Intern"){return c}});

    var newArticle = ``;

    for (var i = 0; i < managers.length; i++) {
        newArticle += `
                <article class="card col-lg-3 col-m-6 col-sm-12">
                    <div class="card-heading manager">
                        <h3>${managers[i].name}</h3>
                        <p class="d-flex align-items-center justify-content-center"><span class="material-icons">coffee</span> : ${managers[i].role}</p>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li class="ID">ID: ${managers[[i]].ID}</li>
                            <li class="email">Email: <a href=mailto:${managers[i].email}>${managers[i].email}</a></li>
                            <li class="office">Office Number: ${managers[i].officeNumber}</li>
                        </ul>
                    </div>
                </article>
            `
    }
    for (var i = 0; i < engineers.length; i++) {
        newArticle += `
                <article class="card col-lg-3 col-m-6 col-sm-12">
                    <div class="card-heading engineer">
                        <h3>${engineers[i].name}</h3>
                        <p class="d-flex align-items-center justify-content-center"><span class="material-icons">engineering</span> : ${engineers[i].role}</p>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li class="ID">ID: ${engineers[i].ID}</li>
                            <li class="email">Email: <a href=mailto:${engineers[i].email}>${engineers[i].email}</a></li>
                            <li class="github">Github: <a href=https://github.com/${engineers[i].github}>${engineers[i].github}</a></li>
                        </ul>
                    </div>
                </article>
            `
    }
    for (var i = 0; i < interns.length; i++) {
        newArticle += `
                <article class="card col-lg-3 col-m-6 col-sm-12">
                    <div class="card-heading intern">
                        <h3>${interns[i].name}</h3>
                        <p class="d-flex align-items-center justify-content-center"><span class="material-icons">school</span> : ${interns[i].role}</p>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li class="ID">ID: ${interns[i].ID}</li>
                            <li class="email">Email: <a href=mailto:${interns[i].email}>${interns[i].email}</a></li>
                            <li class="school">School: ${interns[i].school}</li>
                        </ul>
                    </div>
                </article>
            `
    }
    // add invisible cards so large veiwports will have nicer columns, 1 or 2 cards added to allow for 3 cards per row
    // Using %, second invisible card added if 2 cards required. 3 - projectArr.length %3 will always be 1 or 2 here. 
    // for example: 4 employees would get two extra cards for six cards in the row.  Multiples of 3 look nicest.

    if (projectArr.length % 3 !== 0) {
        for (var i = 0; i < (3 - projectArr.length % 3); i++) {
        newArticle += `
        <article class="card invisible col-lg-3 col-m-6 col-sm-12">
                    <div class="card-heading intern">
                        <h3></h3>
                        <p></p>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li class="ID"></li>
                            <li class="email"></li>
                            <li class="school"></li>
                        </ul>
                    </div>
                </article>`
        }
    }

    return generateHTMLAll(newArticle);
}


const generateHTMLAll = (newArticle) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>Our Team</title>
</head>
<body>
    <header>
        <h1 class="p-2">Our Team</h1>
    </header>
    <main>
        <div class="container my-3">
            <div class="row">
                ${newArticle}
            </div>
        </div>
    </main>
</body>
</html>`
}

module.exports = generateHTML;