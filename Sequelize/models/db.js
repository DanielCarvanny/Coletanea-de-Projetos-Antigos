const Sequelize = require('sequelize')
   // Conexão com o banco de dados Mysql
   const sequelize = new Sequelize ('postapp', 'root', '*Rg550dx@8', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}