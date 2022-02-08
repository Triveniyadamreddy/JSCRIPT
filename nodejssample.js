var http = require('http');

http.createServer(function (req,res){

    res.write('First program')
    res.end('\n Hello World!')
}).listen(8080);