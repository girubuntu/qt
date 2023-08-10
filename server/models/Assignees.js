const mongoose = require('mongoose')

const AssigneesSchema = new mongoose.Schema({
   name: Object

})

const AssigneesModel = mongoose.model("assignees", AssigneesSchema)
module.exports = AssigneesModel