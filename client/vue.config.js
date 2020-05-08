const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../dist'),
  // devServer: {
  //   proxy: {
  //     '/despachonacional': {
  //       target: 'http://www.xm.com.co',
  //       ws: true,
  //       changeOrigin: true
  //     }
  //   }
  // }
}