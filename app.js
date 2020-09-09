const express = require("express")
const heroes = require("./src/heroes.json")
const home = require("./src/home")
const app = express() 

app.listen(3000, function (){
    console.log("Server is running!")
})

app.get('/', function(req,res){
   
    res.send(home.home)
})

app.get('/heroes',function(req,res){
    res.send(heroes)
})