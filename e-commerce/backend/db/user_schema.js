const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    name: String,
    email: String,
    password: String
})



// const loginSchema= new mongoose.Schema({
//     email: String,
//     password: String
// })

module.exports= mongoose.model('users', userSchema )
// module.exports= mongoose.model('user', loginSchema )

