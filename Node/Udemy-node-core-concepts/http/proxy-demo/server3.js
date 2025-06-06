const http = require("node:http");

const server = http.createServer();
const PORT = 3003

server.on("request", (proxyRequest, serverResponse) => {


   serverResponse.write(JSON.stringify({ status: 200, message: 'response from Server3' }))

   proxyRequest.pipe(serverResponse)
   serverResponse.end()

})

server.listen({
   host: 'localhost',
   port: PORT
}, () => {
   console.log(`server is listening on http://localhost:${PORT}`)
})