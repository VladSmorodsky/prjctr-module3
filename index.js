const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    let resultObj = {
        status: 404,
        text: 'Not found'
    }    
    if(req.method == 'GET') {
        let urlSite = `http://${hostname}:${port}${req.url}`;
        let requestUrl = new URL(urlSite);
        let pathName = requestUrl.pathname;
        let name = requestUrl.searchParams.get('name');

        if(pathName == '/hello' || pathName == '/goodbye') {
            let greeting = pathName == '/hello' ? 'Hello ' : 'Goodbye';
            if(name !== null ){
                resultObj.status = 200;
                resultObj.text = `${greeting} ${name}`;
            } else if (Array.from(requestUrl.searchParams).length > 0) {
                resultObj.status = 404;
                resultObj.text = 'Not found';
            } else {
                resultObj.status = 200;
                resultObj.text = `${greeting} world`;
            }
        }
    }
    res.statusCode = resultObj.status;
    res.setHeader('Content-Type','text/plain');
    res.end(resultObj.text);    
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});