const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const SESSION_SECRET = 'ooo sooo secret string!!!! super secret!!! dont touch me!!';
const path = require('path');

// Load env
dotenv.config({ path: './config.env'});

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cookieSession({name: 'cs', secret: SESSION_SECRET, httpOnly: false}));
// Dev login
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// API routes
app.use('/api/v1/', require('./routes/users'));

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(__dirname + '../../dist/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(path.resolve('../dist/index.html')));
}

app.listen(PORT, () => {console.log(`MiniMax server running in ${process.env.NODE_ENV} on ${PORT}`);});