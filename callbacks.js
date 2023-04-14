const nomes = ["Eduardo", "Ana", "Laura", "Pedro"];

nomes.forEach(function(nome) {
    console.log(nome);
})

//arrow function
nomes.forEach((nome) => {
    console.log(nome);
})

function imprimeNome(nome) {
    console.log(nome);
}

//se a função é passada como referência, não precisa de parênteses (não funciona se colocar)
nomes.forEach(imprimeNome);