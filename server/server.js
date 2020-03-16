const http = require('http');

const handler = require('./handler')

const port = 5000;
const server = http.createServer(handler);

server.listen(port,()=>{console.log(`serer play on port ${port}`)})
module.exports = server;