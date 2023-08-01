const express = require("express");
const User = require("./db/user_schema");
const Product = require("./db/product");
const cors = require("cors");
require("./db/config");
const Jwt = require('jsonwebtoken')


const app = express();
app.use(express.json());
app.use(cors());
const jwtKey= 'e-com';

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});

app.post("/login", async (req, res) => {
    let user = await User.findOne(req.body).select("-password");
    if (req.body.email && req.body.password) {
        if (user) {
            Jwt.sign({user}, jwtKey,{expiresIn:"12h"},(err, token)=>{
                if(err){
                    res.send({message: "Something went wromg, Please try after sometime"})
                }
                res.send({auth: token});
            })
            
        } else {
            res.send({ result: "User not found" });
        }
    } else {
        res.send({ result: "User not found" });
    }
});

app.post("/add_product", async (req, res) => {
    const product = new Product(req.body);
    let result = await product.save();
    res.send(result);
});

app.get("/products", verifyToken, async (req, res) => {
    const product = await Product.find();
    if (product.length > 0) {
        res.send(product);
    } else {
        res.send({ message: "No result founds!" });
    }
});

app.delete("/delete/:id", async (req, res) => {
    const result = await Product.deleteOne({ _id: req.params.id });
    res.send(result);
});

app.get("/update/:id", async (req, res) => {
    const result = await Product.findOne({ _id: req.params.id });
    if (result) {
        console.log("Result", result._doc);
        res.send(result);
    } else {
        res.send({ message: "Result no found" });
    }
});

app.put("/updateProduct/:id", async(req, res) => {
    const result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    );
    res.send('hello');
});

// search api
app.get('/search/:key',verifyToken, async(req, res)=> {
    let result= await Product.find({
        "$or":[
            {p_name:{$regex:req.params.key}},
            {price: {$regex : req.params.key}},
            {category: {$regex : req.params.key}},
            {company: {$regex : req.params.key}}
        ]
    })
    res.send(result)
})

function verifyToken(req, res, next){
    let token= req.headers['authorization']
    if(token){
        token= token.split(' ')[1]
        console.log(token);
        Jwt.verify(token, jwtKey,(err, decoded)=>{
            if(err){
                res.status(401).send({message: " Please provide valid token "})
            }else{
                next()
            }
        })
    }else{
        res.status(403).send({message: "Please add token with headers"})
    }
    // console.log('middleware warking', token);
    
}

app.listen(5000);
