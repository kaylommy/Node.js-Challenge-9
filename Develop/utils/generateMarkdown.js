// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if not a license it will return an empty string.
  if (!license) {
    return '';
  }

  switch(license) {
    case 'Apache' :
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'ISC' :
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        case 'MIT' :
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
          case 'BSD 2-Clause' :
            return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
            case 'BSD 3-Clause' :
              return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            default:
              return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  switch(license) {
    case 'Apache' :
      return '(https://opensource.org/licenses/Apache-2.0)';
      case 'ISC' :
        return '(https://opensource.org/licenses/ISC)';
        case 'MIT' :
          return '(https://opensource.org/licenses/MIT)';
          case 'BSD 2-Clause' :
            return '(https://opensource.org/licenses/BSD-2-Clause)';
            case 'BSD 3-Clause' :
              return '(https://opensource.org/licenses/BSD-3-Clause)';
            default:
              return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `${renderLicenseBadge(data.license)}\n${renderLicenseLink(data.license)};
    `
  }else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `# ${data.title} 

  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributing}
  ## Tests
  ${data.tests}
          
  
  ## License
  ${renderLicenseSection(data.license)}
          
  
  ## Questions
  https://github.com/${data.github}/
  ${data.email}
  You can reach me here at my email.
`;
}

module.exports = generateMarkdown;
