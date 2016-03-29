var http = require("http")
var url = require("url")

var server = http.createServer(function(req,res){
    var parsed = url.parse(req.url, true)
    var time = new Date(parsed.query.iso)
    var result
    
    if(req.url.match(/^\/api\/parsetime/)){
        result = {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        }
    }
    if(req.url.match(/^\/api\/unixtime/)){
        result = { 
            unixtime : time.getTime() 
        }
    }

    if(result){
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(result));
    }else{
        res.writeHead(404);
        res.end();
    }
})

server.listen(process.argv[2])