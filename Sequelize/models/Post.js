const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }

})

module.exports = Post

// Criação da tabela
//Post.sync({force: true})