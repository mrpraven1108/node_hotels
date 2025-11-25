const express = require('express');
const app = express();

const db = require('./db');
require('dotenv').config();
const bodyParser = require('body-parser');

// ✅ import passport config
const passport = require('./auth');

app.use(bodyParser.json());

// Time Logger Middleware
const logRequest = (req, res, next) => {
   const now = new Date().toLocaleString();
   console.log(`📅 Request Time: ${now} | ${req.method} ${req.url}`);
   next();
};
app.use(logRequest);

// ✅ initialize passport
app.use(passport.initialize());

const PORT = process.env.PORT || 3000;

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Protected Route
app.get('/',
   passport.authenticate('local', { session: false }),
   (req, res) => {
      res.send('Welcome to my hotel');
   }
);

app.use('/person',localAuthMiddleware,personRoutes);
app.use('/menuItem', menuItemRoutes);

app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
});
