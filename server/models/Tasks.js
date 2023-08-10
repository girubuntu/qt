const mongoose = require('mongoose')

const TasksSchema = new mongoose.Schema({
    title: String,
    start: String,
    end: String,
    assignees: Object,
    project: Object,
    description: String,
    priority: String,
    file: String

})

const TaskModel = mongoose.model("task", TasksSchema)
module.exports = TaskModel