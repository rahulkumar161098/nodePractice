const express= require('express')
const reqFilter= require('./middleware')
const route= express.Router()

const app = express()

// middlewares


// app.use(reqFilter)
route.use(reqFilter)

app.get('/', (req, res)=>{
    res.send('This is home page')
})
// single level route middlewares
route.get('/user', reqFilter,(req, res)=>{
    res.send('This is user page')
})
route.get('/emp', reqFilter,(req, res)=>{
    res.send('This is emp page')
})
app.use(route)

app.listen(5000)