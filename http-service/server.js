var http = require('http');
const PORT=8080;
function handleRequest(request, response){
    response.end('Serving the: ' + request.url + ' page!');
}
var server = http.createServer(handleRequest);

server.listen(PORT, function(){});
