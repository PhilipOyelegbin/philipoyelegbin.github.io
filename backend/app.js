const express = require('express');
// const morgan = require('morgan');
const mongoose = require('mongoose');
const projectRoute = require('./views/projectRoutes')
const feedbackRoute = require('./views/feedbackRoutes')

const app = express();
const port = 3001;

// connect to mongodb
const dbURI = "mongodb+srv://philipoyelegbin:Bayowa,96@expressdb.0io21lm.mongodb.net/portfolio?retryWrites=true&w=majority";
mongoose.connect(dbURI)
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