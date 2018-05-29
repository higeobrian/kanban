var mongoose = require('mongoose')
var Schema = mongoose.Schema 
var schemaName = 'Board'


var boardSchema = new Schema ({
    title: {type: String, required: true},
    body: {type: String, required: true}
})


module.exports = mongoose.model(schemaName, boardSchema)