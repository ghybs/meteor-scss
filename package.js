Package.describe({
  summary: 'Sass and SCSS compilers for Meteor.',
  version: '3.8.1_1',
  git: 'https://github.com/barbatus/meteor-scss.git',
  name: 'barbatus:scss-compiler'
});

Npm.depends({
  'node-sass': '3.8.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.3.4.1');

  api.use([
    'caching-compiler@1.0.5_1',
    'ecmascript@0.4.6_1',
    'underscore@1.0.9'
  ]);

  api.addFiles(['plugin/compile-scss.js'], 'server');

  api.export(['SassCompiler'], 'server');
});

Package.on_test(function (api) {
  api.use(['test-helpers',
           'tinytest']);

  api.use(['barbatus:scss-compiler']);
});
