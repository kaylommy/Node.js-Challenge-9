// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
        //added 'validate:' to the questions in this array that are required to be answered for a quality README. Without validate, if nothing was inputed it would just move on to the next question.
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
        message: 'What is your email?',
        name: 'email',
        validate: email => {
            if(email) {
                return true;
            }else {
                console.log('Please enter your email')
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
        message: 'Please enter any usage information',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select a license',
        name: 'license',
        choices: ['Apache', 'ISC', 'MIT', 'CC0', 'None'],
    },
    {
        type: 'input',
        message: 'Add below any contributors to your project',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Enter below any testing instructions for your project:',
        name: 'testingInstr',
    },

];

const fileName = 'README.md'; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('README successfully created!'));
}

// TODO: Create a function to initialize app
function init() {
    // inquirer.prompt(questions) refers to the questions array
    return inquirer.prompt(questions)
    .then(answers => {
        const markdownFile = generateMarkdown(answers);
        writeToFile('./output/README.md', markdownFile);
    })
}

// Function call to initialize app
init();
