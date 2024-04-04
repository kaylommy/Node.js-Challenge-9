// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
        // I added 'validate:' to the questions in this array that are required to be answered for a quality README. Without validate it would just move on to the next question.
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
        type: 'confirm',
        message: 'Are there any installation instructions?',
        name: 'installQuestion',

    },
    {
        type: 'input',
        message: 'Please enter any installation instructions',
        name: 'installationInst',
        // 'when:' is added so if the question above is answered yes it will run this question if there is a no answer it will skip this question since it will not apply.
        when: function(answers) {
            return answers.installQuestion;
        }
    },
    {
        type: 'confirm',
        message: 'Any usage information?',
        name: 'usageInfo',
    },
    {
        type: 'input',
        message: 'Please enter any usage information',
        name: 'usage',
        when: function(answers) {
            return answers.usageInfo;
        }
    },
    {
        type: 'list',
        message: 'Select a license',
        name: 'licenses',
        choices: ['Apache', 'GNU General Public', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'confirm',
        message: 'Are there any contributors to your project?',
        name: 'contributorsQuestion',
    },
    {
        type: 'input',
        message: 'Add below any contributors to your project',
        name: 'contributors',
        when: function(answers) {
            return answers.contributorsQuestion;
        }
    },
    {
        type: 'confirm',
        message: 'Any testing instructions?',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Enter below any testing instructions for your project:',
        name: 'testingInstr',
        when: function(answers) {
            return answers.testing;
        }
    },

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
