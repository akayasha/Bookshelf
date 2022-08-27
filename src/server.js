const http = require('http');

const requestListener = (request,response) =>{
    response.setHeader ("Content-Type" ,"text/html")

    const method = request.method;

    if(method === "getcls"){
        response.end("<h1>Hallo</h1>")
    }
    
    response.statusCode = 200;
    response.end("<h1>Succes</h1>")
}


const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port,host,()=>{
    console.log(`Server Running at ${host} on Port ${port}`);
})

console.log("RUN");