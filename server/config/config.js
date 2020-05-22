// config/config.js
'use strict'
const dotenv = require('dotenv');
// Load env
dotenv.config({ path: './config/config.env'});

// required environment variables
[
  'NODE_ENV',
  'PORT'
].forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`)
  }
})
const config = {
  env: process.env.NODE_ENV,
  server: {
    port: Number(process.env.PORT)
  }
  // ...
}
module.exports = config