const port = 3808;
const express  = require("express");
const app = express();
const mongoConnect = require("./database");
app.use(mongoConnect);
const adminRoutes = require("./router.js");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


//sequence matters
app.use(adminRoutes);



app.listen(port);
console.log("Server is listening at "  + port);
