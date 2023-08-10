const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TaskModel = require('./models/Tasks')
const AssigneesModel = require('./models/Assignees')
const UserModel = require('./models/Users')
const ProjectsModel = require('./models/Projects')
const bcrypt = require("bcrypt");


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/qt")

app.post("/create", (req, res) => {
    console.log(req.body);
    TaskModel.create(req.body)
    .then(task => res.json(task))
    .catch(err => res.json(err))
})

app.get('/getTask/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findById({_id:id})
   
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
    console.log(req.body)
})

app.put('updateUser/:id', (req, res) => {
    const id = req.params.id
    TaskModel.findByIdAndUpdate({_id:id},{
        title: req.body.title, 
        start: req.body.start, 
        end: req.body.end
        })
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})

app.get('/', (req, res) => {
    TaskModel.find({})
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})

app.get('/assignees', (req, res) => {
    AssigneesModel.find({})
    .then(assignee => res.json(assignee))
    .catch(err => res.json(err))
})
app.get('/projects', (req, res) => {
    ProjectsModel.find({})
    .then(project => res.json(project))
    .catch(err => res.json(err))
})

app.post("/register", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body
    UserModel.findOne({ email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("success")
            } else {
                res.json("password is incorrect")
            }
        }else {
            res.json("No user found")
        }
    })
    .catch(err => res.json(err))
})





app.listen(3001, ()=>{
    console.log("server is running")
})