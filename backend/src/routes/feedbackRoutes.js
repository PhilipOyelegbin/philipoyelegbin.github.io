const express = require('express');

const router = express.Router();
const feedbackController = require('../controllers/feedbackControllers');

router.get('/', feedbackController.get_feedback);

router.post('/', feedbackController.post_feedback);

module.exports = router;