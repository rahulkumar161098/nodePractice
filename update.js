const dbConnection= require('./mongodb')

const updateData= async ()=>{
    let db= await dbConnection();
    let result= await db.updateOne(
        {name: 'abhi'},{
            $set:{name: 'rahulkumar'}
        }
        
    )
    console.log('update');
}
updateData()