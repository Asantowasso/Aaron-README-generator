// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const { title } = require('process')



// TODO: Create an array of questions for user input
// Needed questions, 1. What is my project title?, 2. The description, 3. Installation instructions, 4. Usage, 5. Contribution guidelines, 6. Test instructions, 7. Questions
const questions = ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'How do you contribute to this application',
    },

    {
        type: 'input',
        name: 'test',
        message: 'How do you test this application'
    },

    {
        type: 'input',
        name: 'yourquestions',
        message: 'Are there any questions you would like to address for the user'
    },
    {
        type: 'input',
        name: 'gituser',
        message:'what is your github username'

    },

    {
        type: 'input',
        name: 'emailaddress',
        message:'If you have additional questions reach out to this email address'

    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using',
        choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']

    }
]);


const generateREADME = ({title, tableofcontents, description, installation, usage, contribution, test, yourquestions, gituser, emailaddress, license}) =>
`
# ${title}

### ${license} license.![Github license](https://img.shields.io/badge/license-mit-blue.svg)

## Table of Contents
[Description](###Description)
[Installation](###Installation)
[Usage](###Usage)
[Contribution](###Contribution)
[Test](###Test)
[Questions](###Questions)


### Description

This application can be described as ${description}

### Installation

To install this application the user must ${installation}

### Usage

We intended for this application to be used to ${usage}

### Contribution

You can contribute to this application by ${contribution}

### Test

In order to test this application ${test}

### Questions
Link to my Github profile https://github.com/${gituser}
List any of your questions here ${yourquestions}

If you have additional questions reach out to
${emailaddress}
`

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {    
inquirer.prompt(questions)
.then ((inquirerResponse) => {
console.log(inquirerResponse)


    console.log("creating README");
    fs.writeFileSync("./output/README.md", generateREADME (inquirerResponse));
})
}
// Function call to initialize app
init();
