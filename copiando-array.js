const notas = [7, 7, 8, 9];

//"..." é um operador de espalhamento (spread operator)
const novasNotas = [...notas];

novasNotas.push(10);

console.log(notas);
console.log(novasNotas);

//outra maneira de fazer
//const novasNotas = [5, ...notas, 10];