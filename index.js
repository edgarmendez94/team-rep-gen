const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      
      message: 'What is your name?',
      name: 'managerInput',
    },
    {
      
      message: 'What is your office number?',
      name: 'officeNumInput',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );










