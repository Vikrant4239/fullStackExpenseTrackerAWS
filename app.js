const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');



const sequelize = require('./util/database');


var cors = require('cors');

const app = express();


app.use(cors());
const userRoute = require('./routes/user');
const expensRoute = require('./routes/expense');

app.use(bodyParser.json({ extended: false }));


app.use(userRoute);
app.use(expensRoute);



sequelize
 .sync()
 .then(result => {
    
    app.listen(4000);
 })
 .catch(err => {
    console.log(err);
 })