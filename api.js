const express = require('express')
const dbConnect= require('./mongodb')
const mongodb= require('mongodb')

const app= express();

app.use(express.json())

app.get('/', async (req, res)=> {
    let db= await dbConnect();
    let data= await db.find({}).toArray();
    console.log(data);
    res.send(data)
})

app.post('/', async (req, res)=>{
    // let getData= req.data;
    let db= await dbConnect();
    let data= await db.insertOne(req.body)
    // console.log(req.body);
    res.send(data)
})

app.put('/', async(req,res)=> {
    let db= await dbConnect();
    // using request
    let data= await db.updateOne(
        {name: req.body.name},
        {$set:req.body}
    )
    res.send({message: 'data update'})
})

app.delete('/:id', async (req, res)=> {
    console.log(req.params.id);
    let db= await dbConnect();
    let data= await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send({message: data})
})


app.listen(5000)