const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const SESSION_SECRET = 'ooo sooo secret string!!!! super secret!!! dont touch me!!';
const path = require('path');
const redis = require("redis");
const client = redis.createClient();
const config = require('./config/config');

client.on("error", function(error) {
  console.error(error);
});
// client.get("EDUARD", redis.print);
// redis Middleware
function cahceRedis (req, res, next) {
  let dateString = new Date().toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  client.get(dateString, (err, data) => {
    if (err) throw err;
    console.log(`key => ${dateString}`)
    if (data !== null) {
      console.log('Responding from cache')
      res.send(data);
    } else {
      console.log('making request');
      next();
    }
  });
}

const PORT = config.server.port || 8000;
const app = express();

app.use(cookieSession({name: 'cs', secret: SESSION_SECRET, httpOnly: false}));
// Dev login
if (config.env === 'development') {
  app.use(morgan('dev'));
}

// API routes
app.use('/api/v1/', cahceRedis, require('./routes/users'));

// Handle production
if (config.env === 'production') {
  // Set static folder
  app.use(express.static(__dirname + '../../dist/'));
  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(path.resolve('../dist/index.html')));
}

app.listen(PORT, () => {console.log(`POSLUNA server running in ${config.env} on ${PORT}`);});