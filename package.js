Package.describe({
  name: 'wiseplat:blocks',
  summary: 'Provides informations about the current and last 50 blocks',
  version: '0.3.2',
  git: 'http://github.com/wiseplat/meteor-package-blocks'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('mongo', ['client', 'server']);

  // api.use('frozeman:persistent-minimongo@0.1.3', 'client');
  api.use('wiseplat:web3@0.15.1', ['client', 'server']);

  api.export(['WshBlocks'], ['client', 'server']);

  api.addFiles('blocks.js', ['client', 'server']);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('wiseplat:blocks');
//   api.addFiles('blocks-tests.js');
// });

