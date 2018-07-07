module.exports = [
  {
    type: 'list',
    name: 'feature',
    message: 'What do you want create',
    choices: ['store', 'container', 'component', 'stateLessComponent']
  },
  {
    type: 'input',
    name: 'name',
    message: 'Add name: ',
    default: 'default'
  },
  {
    type: 'confirm',
    name: 'agree',
    message: 'Sure?',
    default: true
  }
];