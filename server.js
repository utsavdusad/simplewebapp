var express = require("express");

var app = express();
var PORT = 3000;

app.get("/", function(req, res) {
  res.send("Hello World from host: "+ process.env.HOSTNAME);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



