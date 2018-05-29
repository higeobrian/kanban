var mongoose = require('mongoose')
var Schema = mongoose.Schema 
var schemaName = 'Task'


var taskSchema = new Schema ({
    title: {type: String, required: true},
    body: {type: String, required: true}
})


module.exports = mongoose.model(schemaName, taskSchema)