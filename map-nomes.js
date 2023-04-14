const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// const nomesPadronizados = nomes.map((nome) => {
//     return nome.toUpperCase();
// })


//omitindo o return
const nomesPadronizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesPadronizados);