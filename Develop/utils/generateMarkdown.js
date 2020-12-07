const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

`;
}

module.exports = generateMarkdown;
