var router = require('express').Router()
var Task = require('../models/task')

//GET BY ID
router.get('/api/tasks/:id', (req, res, next)=>{
    Task.findById(req.params.id)
      .then(task =>{
        res.status(200).send(task)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  
  router.get('/api/lists/:listId/tasks', (req, res, next)=>{
    Task.find({listId:req.params.listId})
      .then(tasks =>{
        res.status(200).send(tasks)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  //ADD
  router.post('/api/tasks', (req, res, next) => {
   
    console.log(req.body)
    debugger
    var task = req.body
    Task.create(task)
      .then(newTask => {
        res.status(200).send(newTask)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  
  //EDIT
  router.put('/api/tasks/:id', (req, res, next) => {
    Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(task => {
        res.status(200).send({message: "Successfully Updated", task})
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  
  //DESTROY
  router.delete('/api/tasks/:id', (req, res, next)=>{
    Task.findByIdAndRemove(req.params.id)
      .then(data=>{
        res.send("Successfully Deleted task")
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })









module.exports = {
    router
  }