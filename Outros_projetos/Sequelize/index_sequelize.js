//Deve ser a primeira
const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const BodyParser = require('body-parser')
const Post = require('./models/Post')

// config
    // template engine
    app.engine('handlebars' , handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Body Parser
    app.use(BodyParser.urlencoded({extended: false}))
    app.use(BodyParser.json())
 
// Rotas

    // Rota principal
    app.get('/', function(req, res){
        /* Sem ordem
        Post.findAll().then(function(posts){
            res.render('home', {posts: posts})
        })*/
         //Com ordem
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
        /*
         DESC = Decrescente
           ASC = Crescente */

    })
    


    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro ao enviar: " + erro)
        })
    })

    // Rota para deletar
    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("Postagem removida com sucesso! ")
        }).catch(function(erro){
            res.send("Postagem inexistente! ")
        })
    })
    //Deve ser a ultima
app.listen(3000, function(){
    console.log("Servidor local rodando na url http://localhost:3000")
});