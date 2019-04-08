const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/user');
require('./models/meetup');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();
const { CLIENT_ORIGIN } = require('./config/cors');

// Express cors middleware 
app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

// body parser middleware
app.use(bodyParser.json());

// cookie session middleware
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/mapRoutes')(app);
require('./routes/meetupRoutes')(app);

// for heroku build processing

if (process.env.NODE_ENV === 'production') {
  // Express serve up production assets
  app.use(express.static('client/build'))

  // Express serve up index.html file
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.get('/', (req, res) => {
  res.send('home page');
  console.log('rendered page successfully');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = {app};