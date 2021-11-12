const input = require("readline-sync")

console.log("\n Olá! Seja bem vindo. \n Vamos dar inicio ao seu cadastro!" );

const maior = input.question("Precisamos saber se voce tem 18 anos ou mais?! \n");

if(maior == "sim"){
    const nome = input.question("Vamos dar continuidade ao seu cadastro. Para isso precisamos fazer algumas perguntas, Por favor, informe seu nome completo \n")
    if(nome) {
        const data = input.question("Sua data de nascimento? Ex:24/12/1976 \n")
        if(data.length == 10){
            const cpf = input.question("O numero do seu CPF?(Somente os numeros) \n")
            if(cpf.length == 11){
                const email = input.question("Seu email? \n")
                if(email){
                    const tel = input.question("Telefone para contato. Ex:DD 9.XXXX-XXXX \n")
                    if (tel.length == 14){
                        console.log("Seu cadatro sera avaliado e informaremos a você por email. Obrigado e Boa sorte")
                    }else if(tel.length != 14){
                        console.log("Ops!Algo deu errado :(")
                    }
            
                } 
            } else if(cpf.length != 11){
                console.log("Ops!Algo deu errado :(")
            }
    
        }else if(data.length != 10 ){
            console.log("Ops!Algo deu errado :(")
        }
    } 
} else if (maior == "nao"){
    console.log("Infelizmente, não poderemos dar continuidade ao seu cadastro")
}
else{
    console.log("Erro 404")
} 



