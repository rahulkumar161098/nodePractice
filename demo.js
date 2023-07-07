// a=10
// b=23
// console.log(a+b);

// function test(){
//     console.log('hello test demo');
// }
// test()

// creating nodejs server
// var http= require('http')
// http.createServer(function(request, response){
// response.write('getting response from nodejs server')
// response.end()
// }).listen(5000)

// annonymous functions
// var add= function(a,b){
//     return a+b;
// }

// function complex(add){
//     console.log(add(12,34));
// }

// // debugger
// complex(function(a,b){
//     return a+b
// });


// module 
var other= require('./other')
console.warn(other(12,23));

var http = require('http')

var data=[
    {name: 'Rahul', age: 23, email: 'rahul@gmail.com'},
    {name: 'Abhi', age: 23, email: 'Abhi@gmail.com'}
    ]
json_data= JSON.stringify(data)

http.createServer(
    function(req, res){
        res.writeHead(200, {'Content-Type':'appliction/json'})
        res.write(json_data)
    }
).listen(5000)