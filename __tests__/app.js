'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('../../../../Library/Caches/typescript/2.9/node_modules/@types/yeoman-test');

describe('generator-4-redux:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ features: 'store' });
  });

  it('creates files', () => {

  });
});
