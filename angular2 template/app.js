// Main initialize ========================================
var express         = require ("express");
var app             = express();
var bodyParser      = require("body-parser");
var mongoose        = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //needed with angular $http.post

app.use (express.static("public"));

app.set("view engine","ejs");

 
 //=======ROUTES=============
 
 app.get("/", function(req,res){
     
     res.render("index");
 })
 
 //===========================
 
 
 
 
 //server listening ======================================
app.listen (8081, function(){
   console.log("The APP1  Server has Started!");
         });
         
//======================================================