const Sequelize = require('sequelize')
const sequelize = new Sequelize ('teste', 'root', '*Rg550dx@8', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: "+erro)
})

//model postagem
const Postagem = sequelize.define('postagens', {
    titulo: {
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

//Postagem.sync({force: true})

//Postagem.create({
   // titulo: ,
    //conteudo:
//})

//model usuario
const Usuario = sequelize.define('usuarios', {
    nome: {
        type:Sequelize.STRING
    },
    sobrenome: {
        type:Sequelize.STRING
    },
    idade: {
        type:Sequelize.INTEGER
    },
    email: {
        type:Sequelize.STRING
    }
})

//Usuario.sync({force: true})

Usuario.create({
    nome: "Daniel",
    sobrenome: "Carvanny",
    idade: "16",
    email: "algumaparada_ai@naosei.com.br"
})