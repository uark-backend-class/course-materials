var http = require('http');
var url = require('url');

http.createServer(function(request, response) {

  if (request.url === '/') {

    response.writeHead(200);
    response.end('ROOT ENDPOINT');

  } else if (request.url.indexOf('/cat') === 0) {

    if (request.method === 'GET') {
      var queryData = url.parse(request.url, true).query;
      var queryDataString = JSON.stringify(queryData);

      response.writeHead(200);
      response.end(JSON.stringify('YOU WERE SEARCHING FOR INFORMATION ABOUT: ' + queryDataString));
    } else if (request.method === 'POST') {
      var body = '';
      request.on('data', function(chunk) {
        body += chunk;
      });

      request.on('end', function() {
        var jsonBody = JSON.parse(body);
        var jsonBodyString = JSON.stringify(jsonBody);

        response.writeHead(200);
        response.end('YOU TRIED TO CREATE A NEW CAT: ' + jsonBodyString + ' \n');
      });
    }
  } else {
    response.writeHead(404);
    response.end();
  }

}).listen(5000, '127.0.0.1');
