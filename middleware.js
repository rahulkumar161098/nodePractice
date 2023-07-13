module.exports= reqFilter= (req, res, next)=>{
    // console.log('reqFilter');
    if(!req.query.age){
        res.send('Please provide your age')
    }
    else if(req.query.age<18){
        res.send('You can not access this page, You are under age!')
    }
    else{
        next();
    }
    
}