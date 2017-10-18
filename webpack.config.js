const path = require('path');

module.exports = {
  entry: 'app-client.js',
  output: {
    path: path.resolve(__dirname, './public/components'),
    filename: 'bundle.js'
  }
};
