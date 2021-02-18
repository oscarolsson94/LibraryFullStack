if (process.env.NODE_ENV !== 'production') { //defaulted
    require('dotenv').config();
}


const express = require('express');
const app = express();

const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); //where our views are coming from
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public')); //common name for public folder

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to DB'));




app.listen(process.env.PORT);


//routers
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const authorRouter = require('./routes/authors');
app.use('/authors', authorRouter)