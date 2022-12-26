const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
const http = require("http").createServer(app);
const io = require("socket.io")(http,{cors:{origin:"*"}});
var array = [];

app.use("/form.css", express.static(__dirname + "/form.css"));
app.use("/chatApp.css", express.static(__dirname + "/chatApp.css"));

app.get("/chatbox", (req,res)=>{
    res.sendFile("chatbox.html", {root:__dirname});
});

app.get("/",(req,res)=>{
    res.sendFile("registration.html", {root:__dirname})
});

app.post("/getName" , (req,res)=>{
    // console.log(req.body);
    const jsonData = JSON.parse(JSON.stringify(req.body));
    const name = jsonData.name;
    array.push(name);
    console.log(array);
    res.redirect("/chatbox");
});

io.on('connection', (socket)=>{
    console.log("Socket connected");

    socket.broadcast.emit("message","hii");

    socket.on("chatMessage", function(data){
        io.sockets.emit("chatMessage", data);
    })
});

http.listen(3000, ()=>{
    console.log("Server is listening at " +  3000);
});

