const express = require('express')
require('./config')
const userSchema = require('./product');


const app = express();

app.use(express.json())
app.post('/create_user', async (req, res) => {
    let user = new userSchema(req.body)
    const result = await user.save()
    res.send(result)
})
app.get('/user', async (req, res) => {
    let user = await userSchema.find()
    res.send(user)
})

app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params);
    let result = await userSchema.deleteOne(req.params)
    res.send(result)
})

app.put('/update/:_id', async (req, res) => {
    let update = await userSchema.updateOne(
        req.params,
        { $set: req.body }
    )
    res.send(update)
})

// search api with single/multiple fields
app.get('/search/:key', async(req, res)=>{
    console.log(req.params.key);
    let data= await userSchema.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}}
            ]
        }
    )
    res.send(data)
})

app.listen(5000)