var mongoose = require('mongoose')
var Schema = mongoose.Schema 
var schemaName = 'List'


var listSchema = new Schema ({
    title: {type: String, required: true},
    body: {type: String, required: true}
})


module.exports = mongoose.model(schemaName, listSchema)