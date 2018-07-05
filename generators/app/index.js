'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the riveting ${chalk.red('generator-4-redux')} generator!`)
    );

    const prompts = [
      {
        type: 'list',
        name: 'features',
        message: 'What do you want create',
        choices: ['store']
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  install() {
    const type = `4-redux:${this.props.features}`;
    this.spawnCommand('yo', [type]);
  }
};
