const chalk = require('chalk');

module.exports = {
  start: () => {
    return `${chalk.blue('Starting ...')}`;
  },
  welcome: () => {
    return `Welcome to the riveting ${chalk.red('generator-4-redux')} generator!`;
  },
  notImlement: feature => {
    return `${chalk.green(feature)} not implemented yet, will be soon`;
  },
  notAgree: () => {
    return `Next time ${chalk.red('generator-4-redux')}`;
  },
  end: () => {
    return `${chalk.blue('See You :)')}`;
  }
};
