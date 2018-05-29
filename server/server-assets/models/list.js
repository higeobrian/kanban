var mongoose = require('mongoose')
var Schema = mongoose.Schema 
var ObjectId = Schema.Types.ObjectId 
var schemaName = 'List'


var listSchema = new Schema ({
    title: {type: String, required: true},
    body: {type: String, required: true},
    boardId: {type: ObjectId, ref: 'Board', require: true},
    userId: {type: ObjectId, ref: 'User', require: true }
})


module.exports = mongoose.model(schemaName, listSchema)