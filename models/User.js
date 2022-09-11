// load the things we need
const mongoose = require('mongoose')


// define the schema for our user model
const userSchema = mongoose.Schema({
    email        : {type:String, required: true, unique: true},
    name         : {type:String, required: true},
    state        : {type:String, enum: ['Activo','Inactivo']},
    dateCreated:  { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now }
})

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema)
