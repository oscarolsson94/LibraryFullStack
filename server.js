const express = require('express');
const app = express();

const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); //where our views are coming from
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public')); //common name for public folder

app.listen(process.env.PORT || 3000);


//routers
const indexRouter = require('./routes/index');
app.use('/', indexRouter);