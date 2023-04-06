const Project = require("../models/projectModels");

async function get_project(req, res) {
    try {
        const project = await Project.find({})
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    get_project,
}