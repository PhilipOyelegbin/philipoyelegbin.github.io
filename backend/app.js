const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const projectRoute = require('./src/routes/projectRoutes');
const feedbackRoute = require('./src/routes/feedbackRoutes');
const { default: helmet } = require('helmet');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// connect to mongodb
mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("Database connected")
        app.listen(port, () => console.log("Server has started on port", port));
    })
    .catch(err => console.log(err))

// middleware
app.use(express.json())
app.use(helmet())
app.use(cors({"origin": "https://philipoyelegbin.github.io/"}))
app.use(express.urlencoded({extended: false}))

// page route
app.get("/", (req, res) => {
    res.send("My Portfolio API built using express, routes are: -/projects -/feedbacks")
})

// blogs
app.use('/projects', projectRoute)
app.use('/feedbacks', feedbackRoute)

// error route
app.use((req, res) => {
    res.status(404).send("404, route not found")
})