var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'production';
    
console.log(env);


var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bsc-web'
    },
    port: process.env.PORT || 1234,
  },

  test: {
    root: rootPath,
    app: {
      name: 'bsc-web'
    },
    port: process.env.PORT || 1234,
  },

  production: {
    root: rootPath,
    app: {
      name: 'bsc-web'
    },
    port: process.env.PORT || 1234,
  }
};

module.exports = config[env];
