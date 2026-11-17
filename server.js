const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8083;
const mime = {'html':'text/html','css':'text/css','js':'application/javascript','svg':'image/svg+xml','ico':'image/x-icon','png':'image/png','jpg':'image/jpeg','woff2':'font/woff2'};
http.createServer((req,res)=>{
  let f = path.join(__dirname, req.url==='/'?'/index.html':req.url);
  fs.readFile(f,(e,d)=>{
    if(e){res.writeHead(404);res.end('Not found');return;}
    res.writeHead(200,{'Content-Type':mime[path.extname(f).slice(1)]||'text/plain'});
    res.end(d);
  });
}).listen(port,()=>console.log('Running on http://localhost:'+port));
