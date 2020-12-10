var express = require("express");
var app = express();
app.use(express.static(__dirname + '/statics'));



app.use("/" ,(req,res,next) => {

    console.log("ahmad");
    res.sendFile(__dirname + '/statics/home.html'); 
});
app.use("/" ,(req,res,next) => {

    console.log("ahmad");
    res.sendFile(__dirname + '/statics/home.html'); 
});

app.use("/" ,(req,res,next) => {

    console.log("ahmad");
    res.sendFile(__dirname + '/statics/home.html'); 
});
app.use("/" ,(req,res,next) => {

    console.log("ahmad");
    res.sendFile(__dirname + '/statics/home.html'); 
});



app.listen(8000);
console.log("server is rummimg in port 8000!!!");