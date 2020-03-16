

let result = {
    result:[]
}

const handler = function(req,res){
    const headers = defaultCorsHeaders;
    headers['Content-Type'] = 'application/json';
    response.writeHead(statusCode, headers);
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
          status = 404;
          resp.writeHead(status, defaultCorsHeaders);
          resp.end();
        } 
    }else {
        resp.writeHead(404, defaultCorsHeaders);
        resp.end();
      }
      resp.end('Hello, World!');
}