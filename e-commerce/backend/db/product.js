const mongoose= require ('mongoose')

const ProductSchema= new mongoose.Schema({
    p_name: String,
    price: String,
    category: String,
    userId: String,
    company: String

})

module.exports= mongoose.model('products', ProductSchema)