const http = require("http");

http.createServer((req, res)=>{
    res.end("Hello");
}).listen(3200);

console.log("server is listening in 3200");
