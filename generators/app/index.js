'use strict';
const Generator = require('yeoman-generator');
const prompts = require('./prompts');
const storeFiles = require('./templates/store/write');
const logs = require('../../logs');

module.exports = class extends Generator {
  prompting() {
    this.log(logs.start());
    this.log(logs.welcome());

    return this.prompt(prompts).then(answers => {
      this.name = answers.name;
      this.feature = answers.feature;
      this.agree = answers.agree;
    });
  }

  configuring() {
    const implemented = ['store'];
    if (!implemented.includes(this.feature)) {
      this.log(logs.notImlement(this.feature));
      this.log(logs.end());
      process.exit(1);
    }
    if (this.agree === false) {
      this.log(logs.notAgree());
      this.log(logs.end());
      process.exit(1);
    }
  }

  writing() {
    storeFiles(this.name).forEach(element => {
      this.fs.copyTpl(
        this.templatePath(element.templatePath),
        this.destinationPath(element.destinationPath),
        element.props
      );
    });
  }

  end() {
    this.log(logs.end());
  }
};
