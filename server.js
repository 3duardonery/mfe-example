var express = require("express");
var app = express();

app.use(express.static("dist"));
app.listen(3001, function () {
  console.log("Running...");
});
