const input = require("readline-sync")

/*x = "Olá! Seja bem vindo."
y = "Vamos dar inicio ao seu cadastro!"
console.log(x,"\n", y) Outra opção para o inicio*/

console.log("\n Olá! Seja bem vindo. \n Vamos dar inicio ao seu cadastro!" )

const maior = input.question("Precisamos saber se você tem 18 anos ou mais?! \n");

if (maior == "sim"){
    const nome = input.question("Vamos dar continuidade ao seu cadastro. Para isso precisamos fazer algumas perguntas, Por favor, informe seu nome completo \n")
     if (nome === "string" ){
         const data = input.question("Sua data de nascimento? Ex: 22/02/2002 \n")
         if (data.length == 10){
             const cpf = input.question("O numero do seu CPF? (Somente os numeros) \n")
             if (cpf.length == 11 ) {
                 const email = input.question("Seu E-mail? \n")
                 if(email==="string"){
                     const tel = input.question("Telefone para contato. Ex:DD 9.XXXX-XXXX \n")
                     if (tel.length == 14 ){
                         console.log("Seu cadastro será avaliado e informaremos a você por e-mail. Obrigado e Boa Sorte")
                     }
                 }
             }
         }
     }
     /*else {
         console.log("Hmmm, sinto muito não foi possivel continuar, tente novamente mais tarde,obrigado.")
     } A ser discutido*/
    
     /*let y = "string"
    if(y.length == 5){
        input.question02("Sua data de nascimento?")
    }Tentativa invalida*/
}
else if(maior == "nao"){
    console.log("Infelizmente, não poderemos dar continuidade ao seu cadastro")
}
else {
    console.log("Erro 404")
}