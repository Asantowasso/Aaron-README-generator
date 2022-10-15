// TODO: Include packages needed for this application
const inquirer = require('inquirer')
console.log(inquirer)
const fs = require('fs')
console.log(fs)

// TODO: Create an array of questions for user input
// Needed questions, 1. What is my project title?, 2. The description, 3. Installation instructions, 4. Usage, 5. Contribution guidelines, 6. Test instructions 
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
        name: 'Installation instructions',
        message: 'How do you install your application?',
    },

    {
        type: 'input',
        name: 'Usage',
        message: 'How do you use your application',
    },

    {
        type: 'input',
        name: 'Contribution guidelines',
        message: 'How do you contribute to this application',
    },

    {
        type: 'input',
        name: 'Test instructions',
        message: 'How do you test this application'
    }
]);

console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var fileName = README
    console.log(fileName)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
