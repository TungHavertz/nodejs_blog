const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const { log } = require('console');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());

//Connect to DB
db.connect();

//HTTP logger
// app.use(morgan('combined')) // Log requests in a compact format

//Template engine
app.engine(
  'hbs',
          engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
