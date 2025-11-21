const express = require('express');
const app = express();

const db = require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.get('/', (req, res) => {
   res.send('Welcome to my hotel');
});

app.use('/person', personRoutes);
app.use('/menuItem', menuItemRoutes);

app.listen(3000, () => {
   console.log("Server running on http://localhost:3000");
});
