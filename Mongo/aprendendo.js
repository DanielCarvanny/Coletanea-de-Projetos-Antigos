const mongoose = require ("mongoose")

//Config Mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb://127.0.0.1:27017/test", {
  useNewUrlParser:true,
  useUnifiedTopology: true
} ).then(() => {
  console.log("Connected!");
})

// Model - User
// Definindo model
  const UserSchema = mongoose.Schema({

    nome: {
      type: String,
      require: true
    },
    sobrenome: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    idade: {
      type: Number,
      require: true
    },
    Pais: {
      type: String,
      require: true
    } 
  })

// Collection
  mongoose.model('users', UserSchema )
  
  const User = mongoose.model('users')
  
  new User({
    nome: "Zé",
    sobrenome: "Ninguém",
    email: "zez1nhoe@email.com",
    idade: 21,
    Pais: "Brasil"
  }).save().then(() => {
    console.log("User criado com sucesso!")
  }).catch((err) => {
  console.log("Error: " +err);
})