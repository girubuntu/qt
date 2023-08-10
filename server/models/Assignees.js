const mongoose = require('mongoose')

const AssigneesSchema = new mongoose.Schema({
   name: String

})

const AssigneesModel = mongoose.model("assignees", AssigneesSchema)
module.exports = AssigneesModel