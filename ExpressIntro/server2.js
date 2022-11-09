var express = require('express');			// include express.js
var server = express();						    // a local instance of it

function serverStart() {
  console.log("Server started");
}

function getName(request, response) {
  let str = "🤠😇\n🤯🫠\n"
  response.send(str + str + str + str + str + str);
}

server.listen(8080, serverStart);
server.get("/hello", getName);
