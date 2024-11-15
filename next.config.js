const path = require('path');

module.exports = {
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};
