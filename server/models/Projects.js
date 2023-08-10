const mongoose = require('mongoose')

const ProjectsSchema = new mongoose.Schema({
   name: Object

})

const ProjectsModel = mongoose.model("projects", ProjectsSchema)
module.exports = ProjectsModel