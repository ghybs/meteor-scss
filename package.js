Package.describe({
  summary: 'Sass and SCSS compilers for Meteor.',
  version: '3.8.0_1',
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
  ], 'server');

  api.addFiles(['plugin/compile-scss.js'], 'server');

  api.export(['SassCompiler'], 'server');
});

Package.on_test(function (api) {
  api.use(['test-helpers',
           'tinytest']);

  api.use(['barbatus:scss-compiler']);

  // Tests for .scss
  api.addFiles([
    'test/scss/_emptyimport.scss',
    'test/scss/_not-included.scss',
    'test/scss/_top.scss',
    'test/scss/_top3.scss',
    'test/scss/empty.scss',
    'test/scss/dir/_in-dir.scss',
    'test/scss/dir/_in-dir2.scss',
    'test/scss/dir/root.scss',
    'test/scss/dir/subdir/_in-subdir.scss']);
  api.addFiles('test/scss/top2.scss', 'client', {isImport: true});

  // Tests for .sass
  //api.addFiles([
  //  'test/sass/_emptyimport.sass',
  //  'test/sass/_not-included.sass',
  //  'test/sass/_top.sass',
  //  'test/sass/_top3.sass',
  //  'test/sass/empty.sass',
  //  'test/sass/dir/_in-dir.sass',
  //  'test/sass/dir/_in-dir2.sass',
  //  'test/sass/dir/root.sass',
  //  'test/sass/dir/subdir/_in-subdir.sass']);
  //api.addFiles('test/sass/top2.sass', 'client', {isImport: true});

  api.addFiles('tests.js', 'client');
});
