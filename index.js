const http = require('http');
const hostname = 'localhost';
const port = 3000;
const url = require('url');

const server = http.createServer((req, res) => {

    console.log(req);
    
    if(req.method == 'GET') {
        let urlSite = `http://${hostname}:${port}${req.url}`;
        let requestUrl = new URL(urlSite);
        let pathName = requestUrl.pathname;
        let name = requestUrl.searchParams.get('name');
        console.log(Array.from(requestUrl.searchParams).length);
        switch(pathName) {
            case '/hello' :
                if(name !== null ){
                    res.statusCode = 200;
                    res.setHeader('Content-Type','text/plain');
                    res.end(`Hello ${name}`);
                    return;
                } else if (Array.from(requestUrl.searchParams).length > 0) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type','text/plain'); 
                    res.end('Bad Request');
                    return;
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type','text/plain');
                    res.end(`Hello world`);
                    return;
                }
                
            case '/goodbye' :
                if(name !== null ){
                    res.statusCode = 200;
                    res.setHeader('Content-Type','text/plain');
                    res.end(`Hello ${name}`);
                    return;
                } else if (Array.from(requestUrl.searchParams).length > 0) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type','text/plain'); 
                    res.end('Bad Request');
                    return;
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type','text/plain');
                    res.end(`Hello world`);
                    return;
                }  
            default:
                res.statusCode = 404;
                res.setHeader('Content-Type','text/plain'); 
                res.end('Not found');
        } 
    }
    else {
        res.statusCode = 400;
        res.setHeader('Content-Type','text/plain'); 
        res.end('Bad Request');
    }   
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});