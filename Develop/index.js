// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
        validate: github => {
            if (github) {
                return true;
            }else{
                console.log('Please enter your github username!');
            }
        }
    },
    {
        type: 'input',
        message: 'Create a title for your README',
        name: 'title',
        validate: title => {
            if(title){
                return true;
            }else{
                console.log('Please enter a title for your README');
            }
        }
    },
    {
        type: 'input',
        message: 'Enter a description of your project',
        name: 'description',
        validate: description => {
            if(description){
                return true;
            }else{
                console.log('Please enter a description');
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter any installation instructions',
        name: 'installationInst',
    },
    {
        type: 'input',
        message: 'Any usage information?',
        name: 'usageInfo',
    },
    {
        type: 'list',
        message: 'Select a license',
        name: 'licenses',
        choices: ['Apache', 'GNU General Public', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        message: 'Add below any contributors to your project',
        name: 'contributors',
    },
    {
        type: 'input',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // const fileName = 'README.md';
    fs.appendFile(fileName, JSON.stringify(data, '\t'), err => err ? console.log(err) : console.log('README successfully created!'));
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();
