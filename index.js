const inquirer = require('inquirer');
const fs = require("fs");




const generateHTML= ({managerName,officeNumInput,managerEmail,managerID,engineer1Name,engineer1ID,engineer1Email,engineer1Github,engineer2Name,engineer2ID,engineer2Email,engineer2Github,engineer3Name,engineer3ID,engineer3Email,engineer3Github,student1Name,student1ID,student1Email,student1School}) =>{
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Viewer</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      <link rel="stylesheet" href="./assets/css/style.css">
  
  </head>
  
  <body class="p-3 mb-2 bg-secondary text-white">
    
  
      <header class="text-center mb-5">
          <h1 class="fw-bold" >View Team Below</h1>
      </header>
      <main>
          <div class="container">
              <div class="row">
                <div class="col-3 card text-bg-success mb-5 text-start " style="max-width: 18rem">
                  <div class="card-header text-center fw-bold">${managerName}</div>
                  <div class="card-body">
                  <p class=" text-start">ID #${managerID}</p> 
                  <p class=" text-start">Email:${managerEmail}</p>
                  <p class=" text-start">Office Number:${officeNumInput}</p>
                  </div>
                </div>
                
                <div class="col-3 offset-md-1 card text-bg-success mb-5 text-start " style="max-width: 18rem">
                  <div class="card-header text-center fw-bold">${engineer1Name}</div>
                  <div class="card-body">
                  <p class=" text-start">ID #${engineer1ID}</p> 
                  <p class=" text-start">Email:${engineer1Email}</p>
                  <p class=" text-start">Github:${engineer1Github}</p>
                  </div>
                </div>
                
                <div class="col-3 offset-md-1 card text-bg-success mb-5 text-start " style="max-width: 18rem">
                  <div class="card-header text-center fw-bold">${engineer2Name}</div>
                  <div class="card-body">
                  <p class=" text-start">ID #${engineer2ID}r</p> 
                  <p class=" text-start">Email:${engineer2Email}</p>
                  <p class=" text-start">Github:${engineer2Github}</p>
                  </div>
                </div>
              </div>
  
              <div class="row">
                
                 
                  <div class="col-4 offset-md-2 card text-bg-success mb-3" style="max-width: 18rem">
                      <div class="card-header text-center fw-bold">${engineer3Name}</div>
                      <div class="card-body"> ID #${engineer3ID}</div>
                      <p class="card-text">Email:${engineer3Email}</p>
                      <p class="card-text">Github:${engineer3Github}</p>
                    </div>
  
                
  
                    <div class="col-4 offset-md-2 card text-bg-success mb-3" style="max-width: 18rem">
                      <div class="card-header text-center fw-bold">${student1Name}</div>
                      <div class="card-body">ID #${student1ID}</div>
                      <p class="card-text">Email:${student1Email}</p>
                      <p class="card-text">School:${student1School}</p>
                    </div>
                 
                </div>
          </div>
      </main>
     
        
  
  
  
  
  
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
  
  </body>
  </html>`;

  fs.writeFile("./dist/index.html", html, "utf8", (err) => {
    if(err) throw err;
    console.log("Team has been created!")
  })
}

inquirer
  .prompt([
    {
      
      message: 'What is the managers name?',
      name: 'managerName',
    },
    {
      
      message: 'What is the managers office number?',
      name: 'officeNumInput',
    },
    {
      
      message: 'What is the managers email',
      name: 'managerEmail',
    },
    {
      
      message: 'What is the managers ID number?',
      name: 'managerID',
    },
    {
      
      message: 'What is the engineers name?',
      name: 'engineer1Name',
    },
    {
      
      message: 'What is engineers ID numbner?',
      name: 'engineer1ID',
    },
    {
      
      message: 'What is the engineers email?',
      name: 'engineer1Email',
    },
    {
      
      message: 'What is the engineers github?',
      name: 'engineer1Github',
    },
    {
      
      message: 'What is the engineers name?',
      name: 'engineer2Name',
    },
    {
      
      message: 'What is engineers ID numbner?',
      name: 'engineer2ID',
    },
    {
      
      message: 'What is the engineers email?',
      name: 'engineer2Email',
    },
    {
      
      message: 'What is the engineers github?',
      name: 'engineer2Github',
    },
    {
      
      message: 'What is the engineers name?',
      name: 'engineer3Name',
    },
    {
      
      message: 'What is engineers ID numbner?',
      name: 'engineer3ID',
    },
    {
      
      message: 'What is the engineers email?',
      name: 'engineer3Email',
    },
    {
      
      message: 'What is the engineers github?',
      name: 'engineer3Github',
    },
    {
      
      message: 'What is the students name?',
      name: 'student1Name',
    },
    {
      
      message: 'What is the students ID numbner?',
      name: 'student1ID',
    },
    {
      
      message: 'What is the students email?',
      name: 'student1Email',
    },
    {
      
      message: 'What is the students github?',
      name: 'student1School',
    },
  ])

  .then((answers) => {
    generateHTML(answers);
  })












