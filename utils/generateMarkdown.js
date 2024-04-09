// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license) {
    case 'Apache' :
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'ISC' :
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        case 'MIT' :
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
          case 'CC0' :
            return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
            default:
              return 'The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 switch(license) {
  case 'Apache' :
    return '“License” shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document. “Licensor” shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.';
    case 'ISC' :
      return 'Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.';
      case 'MIT' :
        return 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.';
        case 'CC0' :
        return ''
 }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `# ${data.title} 

  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)
  
  ## Description
  ${data.description}
  ## Installation
  ${data.installationInst}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Tests
  ${data.testingInstr}
          
  
  ## License
  ${renderLicenseSection(data.license)}
          
  
  ## Questions
  https://github.com/${data.github}/
  ${data.email}
  You can reach me here at my email.
`;
}

module.exports = generateMarkdown;
