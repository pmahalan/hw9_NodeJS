const fs  = require("fs");
const inquirer = require("inquirer");

const utils = require("utils");



inquirer
.prompt([
{
    type: "input",
    message:"What is the title of your project?",
    name:"title",
},
{
    type: "input",
    message: "Please provide a short description of your project",
    name: "description",
},

{
    type: "input",
    message:"Please provide installation instructions.",
    name:"installation",
},
{
    type: "input",
    message: "What is this project used for?",
    name: "usage",
},
{
    type: "input",
    message:"What contributions are needed?",
    name:"contributing",
},
{
    type: "confirm",
    message: "Any accompanying tests?",
    name: "tests",
},{
    type: "list",
    message:"Does this require a license?",
    name:"license",
    choices: [
        "MIT",
        "Academic Free license",
        "Apache license",
        "Boost Software License",
        "None"
    ]
},
{
    type: "input",
    message: "What is your gitHub username?",
    name: "gitHub",
},
{
    type: "input",
    message:"What is your email address?",
    name:"email",
},

]).then(function(response) {

    var filename ="README.md"
  
    fs.writeFile(filename, JSON.stringify(response,  null, '\t'), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });
  