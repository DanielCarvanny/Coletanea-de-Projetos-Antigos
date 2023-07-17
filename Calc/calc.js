const express = require("express");
const app = express();

var SomaFunc = require("./somar");
var SubFunc = require("../sub")
var Multifunc = require("../multi")
var DivFunc = require("./div");
const { isNumberObject } = require("util/types");

app.get("/calc/:tipo/:num1/:num2", function(req, res){
    if(req.params.tipo == "soma"){
        var num1 = parseInt(req.params.num1)
        var num2 = parseInt(req.params.num2)
        var result = (SomaFunc(num1, num2));

        console.log(SomaFunc(num1, num2));
        res.send(num1 + "+" + num2+ "=" +result);

    }
    
    if(req.params.tipo == "sub"){
        var num1 = parseInt(req.params.num1)
        var num2 = parseInt(req.params.num2)
        var result = (SubFunc(num1, num2));

        console.log(SubFunc(num1, num2));
        res.send(num1 + "-" + num2+ "=" +result);

    }

    if(req.params.tipo == "div"){
        var num1 = parseInt(req.params.num1)
        var num2 = parseInt(req.params.num2)
        var result = (DivFunc(num1, num2));

        console.log(DivFunc(num1, num2));
        res.send(num1 + "/" + num2+ "=" +result);

    }

    if(req.params.tipo == "multi"){
        var num1 = parseInt(req.params.num1)
        var num2 = parseInt(req.params.num2)
        var result = (Multifunc(num1, num2));

        console.log(Multifunc(num1, num2));
        res.send(num1 + "x" + num2+ "=" +result);

    }

})

app.listen(3001, function(){
    console.log("Servidor rodando na url http://localhost:3001")
});

//console.log(SomaFunc(1,2))
//console.log(SubFunc(10,5))
//console.log(Multifunc(100,10))
//console.log(DivFunc(4,2))