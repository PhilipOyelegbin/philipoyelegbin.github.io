const express = require('express');
// const morgan = require('morgan');
const mongoose = require('mongoose');
const projectRoute = require('./routes/projectRoutes');
const feedbackRoute = require('./routes/feedbackRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// connect to mongodb
mongoose.connect(process.env.DB_URL)
    .then(resp => {
        console.log("Database connected")
        app.listen(port, () => console.log("Server has started on port", port));
    })
    .catch(err => console.log(err))

// register view engine
app.set('view engine', 'ejs')

// middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(morgan('dev'))

// page route
app.get("/", (req, res) => {
    res.render('index', {title: "Home"})
})

// blogs
app.use('/projects', projectRoute)
app.use('/feedbacks', feedbackRoute)

// error route
app.use((req, res) => {
    res.status(404).render('error', {title: "404"})
})