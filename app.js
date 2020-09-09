const express = require("express")
const heroes = require("./heroes.json")
const app = express() 

app.listen(3000, function (){
    console.log("Server is running!")
})

app.get('/', function(req,res){
    let home = `Ni Superman, Iron
    Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y
    hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como
    inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en
    ti!.
    `
    res.send(home)
})

app.get('/heroes',function(req,res){
    res.send(heroes)
})