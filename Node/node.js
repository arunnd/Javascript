const http = require('http');

http.createServer(function(req, res){
    console.log("server started");
    res.write(`{'data': 'Hello'}`);
    res.write(`{'data': 'world23'}`);
    res.end();
    }).listen(8001);
    
    