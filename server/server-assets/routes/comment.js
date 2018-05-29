var router = require('express').Router()
var Commentt = require('../models/comment')

//GET BY ID
router.get('/api/comments/:id', (req, res, next)=>{
    Commentt.findById(req.params.id)
      .then(comment =>{
        res.status(200).send(comment)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  
  //ADD
  router.post('/api/comments', (req, res, next) => {
    var comment = req.body
    Commentt.create(comment)
      .then(newComment => {
        res.status(200).send(newComment)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  
  //EDIT
  router.put('/api/comments/:id', (req, res, next) => {
    Commentt.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(comment => {
        res.status(200).send({message: "Successfully Updated", comment})
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  
  //DESTROY
  router.delete('/api/comments/:id', (req, res, next)=>{
    Commentt.findByIdAndRemove(req.params.id)
      .then(data=>{
        res.send("Successfully Deleted comment")
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })









module.exports = {
    router
  }