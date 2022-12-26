const socket = io("http://localhost:8009");
socket.on("connection")

socket.on("message",(data)=>{
    document.querySelector("h1").innerHTML = data
})

const sendMessage = ()=>{

    socket.emit('message',"hiii")
}
