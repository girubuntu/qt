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
    TaskModel.create(req.body)
    .then(task => res.json(task))
    .catch(err => res.json(err))
})

app.get('/', (req, res) => {
    TaskModel.find({})
    .then(users => res.json(users))
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
    bcrypt.hash(req.body.password, 10)
  .then((hashedPassword) => {
    const user = new UserModel({
        email: req.body.email,
        password: hashedPassword
    })
  })
  .catch((e) => {
    res.status(500).send({
      message: "Password was not hashed successfully",
      e,
    });
  })

  user.save().then((res) => {
    res.status(201).send({
      message: "User Created Successfully",
      res,
    });
  })
  .catch((err) => {
    res.status(500).send({
      message: "Error creating user",
      err,
    });
  });
});





app.listen(3001, ()=>{
    console.log("server is running")
})