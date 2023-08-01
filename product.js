const mongoose= require('mongoose')
var userSchema= new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    age: Number,

});
module.exports= mongoose.model('test', userSchema)