const http = require('http');
//create server 
http.createServer((req,res)=>{
res.writeHead(200,{'Content-type':'application/json'});
let salida ={
    nombre:'eduardo',
    profesion:'desarrolador',
    url:req.url
}
  res.write(JSON.stringify(salida));
 /*    res.write('hello world'); */
    res.end();
}).listen(8080);

console.log('escuchando el puerto 8080');
