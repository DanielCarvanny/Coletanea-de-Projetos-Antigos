var http = require('http');

http.createServer(function(req, res){
    res.end("Hello world, welcome to my space");
}).listen(2000);

console.log("Servidor rodando");
