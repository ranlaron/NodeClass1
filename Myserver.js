var http = require ("http");

function process_reuqest(req, res) {
    var body = "Hi Ran2\n"
    var content_length = body.length;
    res.writeHead(200,{
        'content-Length' : content_length,
        'content_Type' : 'text/plain'
    });
    res.end(body);
}

var s = http.createServer(process_reuqest);
s.listen(8080);