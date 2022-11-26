var http = require('http');
var Date = require('./MyDateModule')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':"text/html"});
    res.write("The Current date and time : " + Date.myDateTime());
    res.end("Hello JPG You Have To Start Learn Node.Js");
}).listen(8080);




/* var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("Hello Node Js I Stated To Learn You");
}).listen(8080); */

