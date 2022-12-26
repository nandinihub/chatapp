const port = 3008;
var express = require("express");
var app = express();
const fs = require("fs");
const path = require("path");
const http = require("http").createServer(app);
const io = require('socket.io')(http, {cors:{origin: "*"}});



app.use("/chatstyle.css" , express.static(__dirname + "/chatstyle.css"));

app.get("/user1", (req,res)=>{
    res.sendFile(path.join(__dirname  , "chatbox.html"), ()=>{
        console.log("Chatbox Opened!");
    });
})


io.on('connection', (socket)=>{
    console.log("Socket connection: " + socket.id);

    // socket.on("message", (data)=>{
    //     socket.emit('message', data)
    //     // console.log(data);
    // });
  });

// app.get("/user2", (req,res)=>{
//     res.sendFile(path.join(__dirname  , "chatbox.html"), ()=>{
//         console.log("Chatbox Opened!");
//     });
// })

// app.get("/user3", (req,res)=>{
//     res.sendFile(path.join(__dirname  , "chatbox.html"), ()=>{
//         console.log("Chatbox Opened!");
//     });
// })

http.listen(port, ()=>{
    console.log("Server is listening at " +  port);
});