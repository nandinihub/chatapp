const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;


const callback = ()=>{
mongoClient.connect("mongodb://127.0.0.1:27017/practiceDB")
.then(result =>{
    console.log("Connected!");
})
.catch(err =>{
    console.log("err"+ err);
})
}

module.exports = callback;