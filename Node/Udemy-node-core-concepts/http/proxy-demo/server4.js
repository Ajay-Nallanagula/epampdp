const http = require("node:http");

const server = http.createServer();
const PORT = 3004

server.on("request", (proxyRequest, serverResponse) => {


   serverResponse.write(JSON.stringify({ status: 200, message: 'response from Server4' }))

   proxyRequest.pipe(serverResponse)
   serverResponse.end()

})

server.listen({
   host: 'localhost',
   port: PORT
}, () => {
   console.log(`server is listening on http://localhost:${PORT}`)
})