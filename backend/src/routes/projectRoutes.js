const express = require('express');

const router = express.Router();
const projectController = require('../controllers/projectControllers');

router.get('/', projectController.get_project);

module.exports = router;