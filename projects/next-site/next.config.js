const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@ruan/design-system',
  '@ruan/utils',
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  // ...
});
