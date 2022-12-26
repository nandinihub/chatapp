//---------------FILE SYSTEM MODULE----------------

//write file

// const fs = require("fs");
// fs.writeFile("./practice.js", "This is my text", function(err){       
//     if (err) throw err;
//     console.log("Created!");
// })

//read file 

// var http = require("http");
// http.createServer(function(req,res){
//     fs.readFile("app.js",function(err,data){
//         res.writeHead(200, {'Content-Type': 'text/html'});   
//         res.write(data);                                     //data points to the content mentioned in the header
//         return res.end();                                    
//     });
// }).listen(3000);
// console.log("hi")

//update file

// fs.appendFile("app.js", "this is to add the text", function(err){   //append adds the data and writeFile replaces txt
//     if(err) throw err;
//     console.log("Updated!");
// })

// delete file

// fs.unlink("tessstFile.js", ()=>{
//     console.log("Deleted!");
// })

//rename file

fs.rename("termsNconsition.txt" , "termsNcondtion.txt", ()=>{
    console.log("Renamed!");
})


