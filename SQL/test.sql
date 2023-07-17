CREATE TABLE usuarios (
    nome VARCHAR (50),
    sobrenome VARCHAR (50),
    sexo VARCHAR (100),
    nascimento DATE,
    rg VARCHAR (100),
    email VARCHAR (100),
    idade INT,
    endereço VARCHAR (100),
    telefone CHAR (14)
);


CREATE TABLE pet (
    name VARCHAR(20),
    owner VARCHAR(20),
    species VARCHAR(20),
    sex CHAR(1),
    birth DATE,
    death DATE
);

CREATE TABLE bank(
    nome VARCHAR (20),
    cep VARCHAR (100),
    CNPJ BIGINT(14),
    telefone CHAR (14),
    endereço VARCHAR (100),
    valores DECIMAL (65)
);

INSERT INTO usuarios (nome, sobrenome, sexo, rg, email, idade, endereço, telefone) VALUES (
    "Daniel",
    "Silva",
    "Masculino",
    "190.250.781-19",
    "test@gmail.com",
    29,
    "Rua Afonso teixeira",
    "22908022567"
); 

DROP DATABASE SistemaDeCadastro
CREATE DATABASE SistemaDeCadastro

INSERT INTO usuarios (nome, sobrenome, sexo, rg, email, idade, endereço, telefone) VALUES (
    "Isadora",
    "Alváres",
    "Mulher",
    "530.202.963-17",
    "test@gmail.com",
    16,
    "Rua Marcos Cabral",
    "22958811362"
); 

UPDATE usuarios SET sexo = "Homem" WHERE nome = "Daniel";

b45d0c12894b81cfc77e9c6c606a0aab