const mongoose = require('mongoose')

const TasksSchema = new mongoose.Schema({
    title: String,
    start: String,
    end: String,
    assignee: String,
    projects: String,
    description: String,
    priority: String,
    file: String

})

const TaskModel = mongoose.model("task", TasksSchema)
module.exports = TaskModel