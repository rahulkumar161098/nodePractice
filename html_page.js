var http= require('http')
var fileds= `
< input type="text" />
< input type="text" />
< input type="text" />
`

http.createServer(
    function(req, res){
        res.writeHead(200, {'Content-Type': "text/html"})
        res.write(fileds)
        res.end()
    }
).listen(5000)