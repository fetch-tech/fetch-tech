/****** LOCAL SERVER ******/
require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const users_controller = require('./controllers/users_controller');

// Sets up express server
const app = express();

app.use(json());
app.use(cors());

// Allows local server to utilize SQL commands within db folder
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
}).catch(err => console.log(err));

// Allows application to be utilized by multiple users
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 7
    }
  })
);

// Gets a user form users table in database
app.get('/api/users/:id', users_controller.getUser);

// Runs the server on localhost:3001
const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`Listening @ port: ${ port }`) });