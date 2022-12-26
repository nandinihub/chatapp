const fs = require("fs");
var http = require("http");
http.createServer(function (req, res) {
  var url = req.url;
  console.log(url);
  if (url === "/") {
    fs.readFile("demo.html", function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);                                     //data points to the content mentioned in the header
      return res.end();
    })
  }
  fs.writeFileSync("tessstFile.js", "We've created a js file browser.", () => {
    console.log("file created");
    return res.end();
  })
  // res.writeHead(200, { 'Content-Type': 'text/html' });    //that the data is of html type
  // res.write("Server here");                                   //writes a res to the client
  // res.end();                                         //to end the response process
  // console.log(req)
}).listen(8081);