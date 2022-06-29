const withTM = require("next-transpile-modules")(["ui", "api3-ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
