var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')
var Schema = mongoose.Schema 
var schemaName = 'User'
var SALT = 12

var userSchema = new Schema ({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type:String, required: true, dropUps: true},
    created: {type: Number, required: true, default: Date.now()}

    // email: {type: Email, required: true}
})
userSchema.statics.generateHash = function (password){
    return bcrypt.hashSync(password, SALT)
} 

userSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password)
  }



module.exports = mongoose.model(schemaName, userSchema)