

let result = {
    result:[]
}

const handler = function(req,res){
    const headers = defaultCorsHeaders;
    headers['Content-Type'] = 'application/json';
    res.writeHead(200, headers);
    if(req.method === 'OPTIONS'){
        res.writeHead(200,headers);
        res.end(data)
    }else if(req.method === 'POST'){
        if(req.url === '/api/message'){
            let body = ''
            res.writeHead(201,defaultCorsHeaders)
            req.on('data', chunk =>{
            body +=chunk;
            }).on('end',()=>{
            const data = JSON.parse(body);
            results.results.push(data);
            res.end(JSON.stringify(data));
              })
        }else {
          res.writeHead(404, defaultCorsHeaders);
          res.end();
        } 
    }else {
        res.writeHead(404, defaultCorsHeaders);
        res.end();
      }
      res.end('Hello, World!');
}

const defaultCorsHeaders = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10 // Seconds.
  };

module.exports = handler;