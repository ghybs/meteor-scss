Package.describe({
  name: 'barbatus:scss-compiler',
  summary: 'Sass and SCSS compilers for Meteor.',
  version: '3.8.3',
  git: 'https://github.com/barbatus/meteor-scss.git',
});

Npm.depends({
  'node-sass': '3.8.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.3.4.1');

  api.use([
    'isobuild:compiler-plugin@1.0.0',
    'barbatus:caching-compiler@1.1.9',
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
