var express = require('express');			// include express.js
var server = express();						    // a local instance of it

function serverStart() {
  console.log("Server started");
}

function getName(request, response) {
  let rnd = Math.random()*10;
  if(rnd%2 == 0){
    let str = "🤠😇\n😇🤠\n";
  }else{
    let str = "🤯🫠\n🫠🤯\n";
  }
  response.send(str + str + str + str + str + str);
}

server.listen(8080, serverStart);
server.get("/hello", getName);
