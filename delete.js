const dbConnection= require('./mongodb')

const del= async()=> {
    let db= await dbConnection();
    let result= await db.deleteMany({
        name: 'rahul'
    })
    console.log(result);
}
del()