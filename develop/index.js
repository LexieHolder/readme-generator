// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');




// TODO: Create an array of questions for user input
//const questions = [];
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title? (Required)',
        validate: projectTitleInput => {
          if (projectTitleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Enter a description of your project',
        validate: projectDescriptionInput => {
          if (projectDescriptionInput) {
            return true;
          } else {
            console.log('Please enter a description of your project!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmTableOfContents',
        message: 'Would you like to add a Table of Contents section to your readme?',
        default: true
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'Please enter a table of contents for your project',
        when: ({ confirmTableOfContents }) => confirmTableOfContents
      },
      {
        type: 'confirm',
        name: 'confirmInstallationInstructions',
        message: 'Would you like to add installation instructions to your readme?',
        default: true
      },
      {
        type: 'input',
        name: 'installationInstructions',
        message: 'Please enter installation instructions for your project',
        when: ({ confirmInstallationInstructions }) => confirmInstallationInstructions
      },
      {
        type: 'confirm',
        name: 'confirmUsageInformation',
        message: 'Would you like to add usage information to your readme?',
        default: true
      },
      {
        type: 'input',
        name: 'tableUsageInformation',
        message: 'Please enter usage information for your project',
        when: ({ confirmUsageInformation }) => confirmUsageInformation
      },
      {
        type: 'confirm',
        name: 'confirmContributionGuidelines',
        message: 'Would you like to add contribution guidelines to your readme?',
        default: true
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please enter contribution guidelines for your project',
        when: ({ confirmContributionGuidelines }) => confirmContributionGuidelines
      },
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license to your readme?',
        default: true
      },
      {
        type: 'input',
        name: 'license',
        message: 'Please enter a license for your project',
        when: ({ confirmLicense }) => confirmLicense
      },
      {
        type: 'confirm',
        name: 'confirmContributingMembers',
        message: 'Would you like to add contributing members to your readme?',
        default: true
      },
      {
        type: 'input',
        name: 'contributingMembers',
        message: 'Please enter contributing members for your project',
        when: ({ confirmContributingMembers }) => confirmContributingMembers
      },
      {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to add a tests section to your readme?',
        default: true
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please enter tests for your project',
        when: ({ confirmTests }) => confirmTests
      },
      {
        type: 'confirm',
        name: 'confirmQuestions',
        message: 'Would you like to add questions to your readme?',
        default: true
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Please enter questions for your project',
        when: ({ confirmQuestions }) => confirmQuestions
      },
    ]);
  };



// TODO: Create a function to write README file
function writeToFile(generateMarkdown, data) {
    
}




// TODO: Create a function to initialize app
function init() {}




// Function call to initialize app
init();
