const dbConnection= require('./mongodb')


dbConnection().then((res)=>{
    res.find().toArray().then((data)=>{
        console.log(data);
    })
})

dbConnection()
