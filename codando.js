const input = require("readline-sync")

console.log("\n Olá! Seja bem vindo. \n Vamos dar inicio ao seu cadastro!");

var cadastro = input.question ("Precisamos saber se voce tem 18 anos ou mais?! \n")

function ficha(cadastro) {
    if(cadastro === "sim"){
        console.log("Vamos dar continuidade ao seu cadastro. Para isso precisamos fazer algumas perguntas, Por favor, informe seu nome completo \n")
    } else if (cadastro ==="nao"){
        console.log("Infelizmente, não poderemos dar continuidade ao seu cadastro")
    }else {
        console.log("Erro 404")
    }
}

ficha(cadastro)

var pergunta = input.question("Quer tentar novamente?\n")

function simOuNao(pergunta){

    if(pergunta === "sim"){
        var cadastro = input.question("voce tem 18 anos ou mais?")
        ficha(cadastro)
    } else{
        console.log("Infelizmente, não poderemos dar continuidade ao seu cadastroza")
    }
}
while (pergunta == "sim"){
    simOuNao(pergunta)
    var pergunta = input.question("Ta afim de tentar dnv? \n");
}