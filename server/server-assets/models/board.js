var mongoose = require('mongoose')
var Schema = mongoose.Schema 
var ObjectId = Schema.Types.ObjectId
var schemaName = 'Board'


var boardSchema = new Schema ({
    title: {type: String, required: true},
    body: {type: String, required: true},
    userId: {type: ObjectId, ref: 'User', require: true }
})


module.exports = mongoose.model(schemaName, boardSchema)