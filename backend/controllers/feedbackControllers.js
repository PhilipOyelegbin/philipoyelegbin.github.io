const Feedback = require("../models/feedbackModels");

async function get_feedback(req, res) {
    try {
        const feedback = await Feedback.find()
        res.status(200).json(feedback)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

async function post_feedback(req, res) {
    try {
        const feedback = await Feedback.create(req.body)
        res.status(200).json(feedback)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }

}

module.exports = {
    get_feedback,
    post_feedback,
}