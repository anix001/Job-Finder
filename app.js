const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const gigsRoute = require('./routes/gigs');
// const Gig = require('./models/Gig');

const app = express();

const port = process.env.PORT || 5000;  

//db 
const db = require('./config/database');

//checking db connection
db.authenticate()
.then(()=>console.log('DB connected'))
.catch(err=>console.log('Error: '+ err));

//to create table
// Gig.sync({force: true});

//gigs routes
app.use('/gigs', gigsRoute);

app.listen(port, console.log(`Server started on port ${port}`));