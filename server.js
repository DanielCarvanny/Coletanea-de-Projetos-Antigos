const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog");
})

app.get("/documento", function(req, res){
    res.send("<form action='salvar_dados.php' method='post'><input type='text' placeholder='Digite aqui'> <br/><input type='checkbox'>Checkbox <br/><input type='radio'>Radio button <br/><input type='range'> <br/><input type='submit' value='Enviar'></form>")
})

app.get("/ola/:nome", function(req, res){
    res.send("ola " +req.params.nome+"</h1>")
})

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("ola " +req.params.nome+"</h1>"+"</h2> seu cargo e: "+req.params.cargo+"</h2>")
})


app.get("/ola/:nome/:cargo/:cor", function(req, res){
    res.send("ola " +req.params.nome+"</h1>"+"</h2> seu cargo e: "+req.params.cargo+"</h2>"+"</h3> sua cor e: "+req.params.cor+"</h3>");
})

app.listen(3000, function(){
    console.log("Servidor rodando na url http://localhost:3000")
}); //Deve ser a ultima
//localhost:2000