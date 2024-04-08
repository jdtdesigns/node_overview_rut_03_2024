const inquirer = require('inquirer')
const save = require('./lib/save')

inquirer.prompt([
  {
    name: 'age',
    message: 'Please type your age'
  },
  {
    name: 'full_name',
    message: 'Please type your full name'
  },
  {
    name: 'position',
    type: 'list',
    choices: ['Manager', 'Clerk', 'Finance']
  },
  {
    name: 'fav',
    type: 'checkbox',
    message: 'Please choose your favorite food type',
    choices: ['Korean', 'Southern', 'Turkish']
  }
]).then(save)

