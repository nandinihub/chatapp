var express = require("express");
var app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {cors : { origin : "*"}})

app.set("view engine", "ejs")

app.get("/home", (req, res)=>{
    res.render("home")
})

server.listen(8000, ()=>{
    console.log("Server is running...")
})

io.on("connection", (socket)=>{
    console.log("Connected : " + socket.id);

    socket.on("message", (data)=>{
        socket.emit('message', data)
        // console.log(data);
    }); 
}); 