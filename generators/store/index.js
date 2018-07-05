'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`You can create store module`));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Enter name your module: ',
        default: 'defaulModule',
        required: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('action.js'),
      this.destinationPath(`src/store/${this.props.name}/action.js`),
      { name: this.props.name }
    );
    this.fs.copyTpl(
      this.templatePath('reducer.js'),
      this.destinationPath(`src/store/${this.props.name}/reducer.js`),
      { name: this.props.name }
    );
    this.fs.copyTpl(
      this.templatePath('types.js'),
      this.destinationPath(`src/store/${this.props.name}/types.js`),
      { name: this.props.name }
    );
    this.fs.copyTpl(
      this.templatePath('api.js'),
      this.destinationPath(`src/store/api/${this.props.name}.js`),
      { name: this.props.name }
    );
  }
};
