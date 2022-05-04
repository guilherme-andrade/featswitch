const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@modules': 'src/modules',
    '@App': 'src/modules/App',
    '@Core': 'src/modules/Core',
    '@UI': 'src/modules/UI',
    '@I18n': 'src/modules/I18n',
    '@Shared': 'src/modules/Shared',
    '@api': 'src/api'
  })(config);

  return config;
};
