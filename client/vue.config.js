const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../dist'),
  // devServer: {
  //   proxy: {
  //     '/api/v1': {
  //       target: 'http://localhost:5000',
  //       ws: true,
  //       changeOrigin: true
  //     }
  //   }
  // }
}