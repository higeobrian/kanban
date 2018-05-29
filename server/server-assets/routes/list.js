var router = require('express').Router()
var List = require('../models/list')

//GET BY ID
router.get('/api/lists/:id', (req, res, next)=>{
    List.findById(req.params.id)
      .then(list =>{
        res.status(200).send(list)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  
  //ADD
  router.post('/api/lists', (req, res, next) => {
    var list = req.body
    List.create(list)
      .then(newList => {
        res.status(200).send(newList)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  
  //EDIT
  router.put('/api/lists/:id', (req, res, next) => {
    List.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(list => {
        res.status(200).send({message: "Successfully Updated", list})
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  
  //DESTROY
  router.delete('/api/lists/:id', (req, res, next)=>{
    List.findByIdAndRemove(req.params.id)
      .then(data=>{
        res.send("Successfully Deleted list")
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })









module.exports = {
    router
  }