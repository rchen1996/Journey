import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);

module.exports = {
  addons: ['@storybook/addon-postcss'],
};
