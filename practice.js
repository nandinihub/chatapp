var crypto = require("crypto");

// var buf = Buffer.from('thisismypassword');
// console.log(buf);

// var key = crypto.randomBytes(16);
// console.log(key);

// var buf = Buffer.alloc(15).toString('hex').slice(0, 16);
// console.log(buf);
// var iv = Buffer.from('thisismypassword').toString('hex');
// console.log(iv);

// const https = require('https');

// const options = {
//   hostname: 'encrypted.google.com',
//   port: 443,
//   path: '/',
//   method: 'GET'
// };

// const req = https.request(options, (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', (e) => {
//   console.error(e);
// });
// req.end();

const express = require("express");
const app = express();

var http = require("http");
app.get("/", function(res) {
 res.on('data', function(data) {
  console.log(data);
 });
});
app.listen(5000)