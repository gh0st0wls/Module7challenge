// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// import { type } from 'os';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {   
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are you installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
    },
    {   
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'Apache-2.0', 'BSL-1.0', '0BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {   
        type: 'input',
        name: 'email',  
        message: 'What is your email address?',
    },
];


// TODO: Create a function to write README file
function writeToFile(README,data) {
    fs.writeFile('README.md', data, (error) => 
        error ? console.log(error) : console.log('README file has been written successfully.')
    );
}

function generateREADME(answers) {
    return `
# ${answers.title}
  
## Description
${answers.description}

## Badge
${renderLicenseBadge(answers.license)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
  
## Installation
${answers.installation}
  
## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.tests}
  
## License
This project is licensed under ${renderLicenseLink(answers.license)}
  
## Questions
If you have any additional questions, you can reach me at [${answers.email}](mailto:${answers.email}) or visit my GitHub profile at https://github.com/${answers.github}
    `;
}


















// function generateREADME(answers) {
//         return `
// # ${answers.title}
  
// ## Description
// ${answers.description}

// ## Badge
// ${renderLicenseBadge(answers.license)}

// ## Table of Contents
// - [Installation](#installation)
// - [Usage](#usage)
// - [Contribution](#contribution)
// - [Tests](#tests)
// - [License](#license)
// - [Questions](#questions)
  
// ## Installation
// ${answers.installation}
  
// ## Usage
// ${answers.usage}

// ## Contribution
// ${answers.contribution}

// ## Tests
// ${answers.tests}
  
// ## License
// This progect is licensed under ${renderLicenseLink(answers.license)}
  
// ## Questions
// IF there's any additional questsions I can answer for you, you can reach me at [${answers.email}](mailto:${answers.email}) or vist my GitHub profile at https://github.com/${answers.github}
    
//     `;
// }
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmecontent = generateREADME(answers);
        writeToFile('README.md', readmecontent);
    }); 
}
init();

// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(badge) {
    if (badge === 'MIT') {
        return '![Badge: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (badge === 'Apache-2.0') {
        return '![Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    } else if (badge === 'BSL-1.0') {
        return '![Badge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)';
    } else if (badge === '0BSD') {
        return '![Badge](https://img.shields.io/badge/License-0BSD-blue.svg)';
    } else {
        return '';
    }
}
// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return '[MIT](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache-2.0') {
        return '[Apache-2.0](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'BSL-1.0') {
        return '[BSL-1.0](https://opensource.org/licenses/BSL-1.0)';
    } else if (license === '0BSD') {
        return '[0BSD](https://opensource.org/licenses/0BSD)';
    } else {
        return '';
    }
}
// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return '![license: MIT](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache-2.0') {
        return '![license](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'BSL-1.0') {
        return '![license](https://opensource.org/licenses/BSL-1.0)';
    } else if (license === '0BSD') {
        return '![license](https://opensource.org/licenses/0BSD)';
    } else{
        return '';
    }
}
// // TODO: Create a function to initialize app
// function init() {
//     console.log("Readme Generator");
// }

// // Function call to initialize app
// init();
