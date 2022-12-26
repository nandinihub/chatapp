const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path");
const  products = [];


//first this will run (bcoz of the sequence)
// router.get("/",(req,res,next)=>{
//     console.log("1");
//     next();
// });



//second this will run
//and if we comment this out then only 1 will run bcz 2 is routed w/ /product
router.get("/",(req,res,next)=>{
    console.log("2");
    res.send('<form action = "/product"  method = "POST" ><input type = "text" name = "title"><button type = "submit">Click</button></form>');
});


//third this will run
router.post("/product",(req,res,next)=>{
    products.push(req.body);
    console.log(products);
    res.send("hi")
    const jsonData = JSON.stringify(req.body);
    console.log(typeof +jsonData);
    fs.appendFile("product.js", jsonData , function(err){
            if(err) throw err;
            console.log("Saving!");
        })
   // res.redirect("/");
})



router.use((req,res,next)=>{
    try{
        if(res.status(404).sendFile(path.join(__dirname, "demo.html")))
            throw "You've entered some wrong URL";
    }
    catch(err){
        console.log(err);
    }
})




module.exports = router;