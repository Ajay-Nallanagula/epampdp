const http = require("node:http");

const proxyServer = http.createServer();
const PORT = 3000

const mainServers = [
    { host: 'localhost', port: 3001 },
    { host: 'localhost', port: 3002 },
    { host: 'localhost', port: 3003 },
    { host: 'localhost', port: 3004 },
]

proxyServer.on("request", (clientRequest, proxyResponse) => {

    //This could be a round-robin algorithm or any Load balancer algorithm
    const randomIndex = Math.floor((Math.random() * 4), 0)

    const proxyRequest = http.request({
        port: mainServers[randomIndex].port,
        host: mainServers[randomIndex].host,
        //Here we can add additional checks to request headers, security etc
        path: clientRequest.url,
        headers: clientRequest.headers,
        method: clientRequest.method
    })

    //console.log(proxyRequest)
    //proxyResponse.write(JSON.stringify(proxyRequest))

    proxyRequest.on("response", (serverResponse) => {
        //We can also transform the response etc 
        proxyResponse.writeHead(serverResponse?.statusCode, serverResponse.headers)

        serverResponse.pipe(proxyResponse)
    })



    clientRequest.pipe(proxyRequest)


})



proxyServer.listen({
    host: 'localhost',
    port: PORT
}, () => {
    console.log(`server is listening on http://localhost:${PORT}`)
})