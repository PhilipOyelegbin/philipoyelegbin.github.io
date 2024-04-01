const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
    {
        full_name: {type: String, require: [true, "The full name is required"]},
        email: {type: String, require: [true, "The email is required"]},
        comment: {type: String, require: [true, "The comment is required"]},
        rating: {type: Number, require: [true, "The rating is required"]},
    },
    {timestamps: true}
)

const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports = Feedback;