var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'Task'



var taskSchema = new Schema ({
    title: {type: String, required: true},
    body: {type: String, required: true},
  //  boardId: {type: ObjectId, ref: 'Board', require: true},
    // userId: {type: ObjectId, ref: 'User', require: true},
    listId: {type: ObjectId, ref: 'List', require: true}
})


module.exports = mongoose.model(schemaName, taskSchema)