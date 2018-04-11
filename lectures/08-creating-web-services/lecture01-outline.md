# Node HTTP Library
  - HTTP Parser
    - A C program that is wrapped in JavaScript and brought into Node.js as a part of its core functionality via the http module.
    - It parses HTTP requests and responses - breaks the data apart and allows us to handle the individual aspects of a request or response.
    - [GitHub Repo](https://github.com/nodejs/http-parser)
  - http.createServer
    - The createServer() function on Node's HTTP module is how we create our own web services. This will allow us to write code that other developers can use.
    - The requestListener parameter is a callback that allows us to listen for incoming requests and provide those requests with a response.
    - [Documentation](https://nodejs.org/docs/v8.3.0/api/http.html#http_http_createserver_requestlistener)
  - requestListener
    - The listener that hooks into the request event is provided with two parameters, an object that represents the incoming request and an object that represents the outgoing response.
    - The request event is emitted each time there is an incoming request to the server. There may be multiple requests per connection.
    - [Documentation](https://nodejs.org/docs/v8.3.0/api/http.html#http_event_request)
  - Incoming Message
    - Can view information associated with the request being made via the request parameter.
    - Implements the Readable Stream interface, while also implementing specific events, methods and parameters.
    - [Documentation](https://nodejs.org/docs/v8.3.0/api/http.html#http_class_http_incomingmessage)
  - Server Response
    - Can construct the response being sent back to the client via the response parameter.
    - Implements the Writable Stream interface without inheriting from Writable, and implements some additional events as well.
    - [Documentation](https://nodejs.org/docs/v8.3.0/api/http.html#http_class_http_serverresponse)
  - http.Server
    - The create server function returns an instance of this server. This class inherits from the server class that exists in the network module, and like other classes that we've looked at today, adds functionality on top of what it inherits from.
    - [Documentation](https://nodejs.org/docs/v8.3.0/api/http.html#http_class_http_server)
  - net.Server
    - Creates either a TCP or local server.
    - Inherits from Event Emitter.
    - [Documentation](https://nodejs.org/docs/v8.3.0/api/http.html#net_class_net_server)
  - Creating a Web Server
    1. Call the create function and define the request listener callback.
      ```js
      const http = require('http');

      http.createServer((request, response) => {

      });
      ```
    2. Specify the port number and address the server should be listening for.
      ```js
      const http = require('http');

      http.createServer((request, response) => {
        // At this point, we can do a console log here and see some basic interaction
      }).listen(5000, '127.0.0.1');
      ```
      - In this example, we're just localhost, that it to say, the computer that we're currently using will also be playing the part of the server, and the port is picked with no particular thing in mind.
    3. Create the response headers.
      ```js
      const http = require('http');

      http.createServer((request, response) => {
        response.writeHead(200, {
          'Content-Type': 'text/plain'
        });
      }).listen(5000, '127.0.0.1');

      ```
    4. Create the body and send the response.
      ```js
      const http = require('http');

      http.createServer((request, response) => {
        response.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        response.end('This is the response from my web server\n');

      }).listen(5000, '127.0.0.1');
      ```
  - Running a Web Server
    - Unlike previous Node programs we've written, when we run this server code, it doesn't simply execute and return to the terminal window.
    - The code will run continuously, listening for incoming requests until we actively kill the process.
    - If any changes are made to the source code for the server that is currently running, the process will have to be killed and run again for those changes to be present.
  - JSON Response
    - In order to send JSON responses, we have to do a bit of tweaking.
    ```js
    const http = require('http');

    http.createServer((request, response) => {
      response.writeHead(200, {
        'Content-Type': 'application/json'
      });

      const responseBody = {
        one: 'This is the response from my web server',
        two: 'This is another property on my response'
      };
      response.end(JSON.stringify(responseBody));

    }).listen(5000, '127.0.0.1');
    ```
  - Request Headers
    - The HTTP parser built into Node will separate out the request's headers for us, and gives us an easy way to view them.
    ```js
    const http = require('http');

    http.createServer((request, response) => {
      console.log(request.headers);

      response.writeHead(200, {
        'Content-Type': 'application/json'
      });

      const responseBody = {
        one: 'This is the response from my web server',
        two: 'This is another property on my response'
      };
      response.end(JSON.stringify(responseBody));

    }).listen(5000, '127.0.0.1');
    ```

# Routing
  - Routing
    - Mapping HTTP requests to content, such as files that exist on the server, or determining if logic has be run to provide data to send back as the response.
    - We need to look at what URL is passed into the request and provide different content in the response based on what the URL is asking for.
  - Examining the URL
    - We can add endpoints to our API by examining the URL, which is made available to use by the HTTP parser as a property on the request object.
    ```js
    const http = require('http');

    http.createServer((request, response) => {
      if (request.url === '/person') {
        const personObject = {
          firstname: 'James',
          lastname: 'Smith',
          age: 35
        };

        response.writeHead(200, {
          'Content-Type': 'application/json'
        });
        response.end(JSON.stringify(personObject));
      }

    }).listen(5000, '127.0.0.1');
    ```
  - Content and URL
    - Different URLs can be programmed to provide different types of content in the response.
    - Remember, the response object behaves as if it were a Writable stream.
    ```js
    const http = require('http');
    const fs = require('fs');

    http.createServer((request, response) => {
      if (request.url === '/person') {
        const personObject = {
          firstname: 'James',
          lastname: 'Smith',
          age: 35
        };

        response.writeHead(200, {
          'Content-Type': 'application/json'
        });
        response.end(JSON.stringify(personObject));
      }

      if (request.url === '/lorem') {
        fs.createReadStream(__dirname + '/lorem.txt').pipe(response);
      }

    }).listen(5000, '127.0.0.1');
    ```
  - Query Parameters
    - If we want to send additional data as input to do additional logic for a GET request, we can include that data in the url as query parameters, and examine them using Node's built in URL library.
    - Query parameters help with GET requests since those by definition do not include a body.
    - [Documentation](https://nodejs.org/dist/latest-v6.x/docs/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost)
    - http://localhost:5000/?query1=5&query2=lion
      ```js
      const http = require('http');
      const url = require('url');
      const fs = require('fs');

      http.createServer((request, response) => {

        if (request.url === '/person') {
          const personObject = {
            firstname: 'James',
            lastname: 'Smith',
            age: 35
          };

          response.writeHead(200, {
            'Content-Type': 'application/json'
          });
          response.end(JSON.stringify(personObject));
        }

        if (request.url === '/lorem') {
          fs.createReadStream(__dirname + '/lorem.txt').pipe(response);
        }

        const queryData = url.parse(request.url, true).query;
        console.log(queryData);
        response.writeHead(200);
        response.end();

      }).listen(5000, '127.0.0.1');
      ```
  - Robust URL Handling
    - We need to make sure we're handling requests that come in for an endpoint we've not explicitly defined, as well as make sure that our code doesn't fall into any other successes that might happen before we end the response stream.
    ```js
    const http = require('http');
    const fs = require('fs');

    http.createServer((request, response) => {
      if (request.url === '/') {
        response.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        response.end('ROOT ENDPOINT\n');
      } else if (request.url === '/person') {
        const personObject = {
          firstname: 'James',
          lastname: 'Smith',
          age: 35
        };

        response.writeHead(200, {
          'Content-Type': 'application/json'
        });
        response.end(JSON.stringify(personObject));
      } else if (request.url === '/lorem') {
        fs.createReadStream(__dirname + '/lorem.txt').pipe(response);
      } else {
        response.writeHead(404);
        response.end();
      }

    }).listen(5000, '127.0.0.1');
    ```
  - Handling HTTP Methods
    - Like examining the url, we can inspect the request object to see what type of request is being made, and execute different code based on that type.
    ```js
    const http = require('http');
    const fs = require('fs');

    http.createServer((request, response) => {

      if (request.url === '/') {
        response.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        response.end('ROOT ENDPOINT\n');
      } else if (request.url === '/person' && request.method === 'GET') {
        const personObject = {
          firstname: 'James',
          lastname: 'Smith',
          age: 35
        };

        response.writeHead(200, {
          'Content-Type': 'application/json'
        });
        response.end(JSON.stringify(personObject));
      } else if (request.url === '/person' && request.method === 'POST') {
        let body = '';
        request.on('data', (chunk) => {
          body += chunk;
        });

        request.on('end', () => {
          const jsonBody = JSON.parse(body);

          response.writeHead(200);
          response.end('YOU TRIED TO CREATE A NEW USER: ' + jsonBody.firstname + ' \n');
        });
      } else if (request.url === '/lorem') {
        fs.createReadStream(__dirname + '/lorem.txt').pipe(response);
      } else {
        response.writeHead(404);
        response.end();
      }

    }).listen(5000, '127.0.0.1');
    ```

# Testing Web Services
  - Browser
    - You can navigate to endpoints in your browser to test GET methods.
    - Limited in testing potential due to not having easy ways to send PUT or POST
  - curl
  curl -i -X POST -H 'Content-Type: application/json' -d '' http://localhost:5000/person
    - Command line tool that lets you build various types of requests and supply headers and data via text.
    - curl -X GET http://localhost:5000
    - curl -i -X POST -H 'Content-Type: application/json' -d '{ "firstname" : "Sarah" }' http://localhost:5000/person
    - curl -X POST -H 'Content-Type: application/json' -d '{ "firstname" : "Sarah" }' http://localhost:5000/person
    - [curl](https://curl.haxx.se/)
  - Postman
    - GUI for building requests and viewing responses.
    - [Postman](https://www.getpostman.com/)
