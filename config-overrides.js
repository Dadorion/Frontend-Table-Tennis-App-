const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@icons": "src/assets/icons/svg_pack",
  })(config);

  return config;
};
