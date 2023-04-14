const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

notas.forEach(function (nota, indice) {
    somaDasNotas += nota;
    console.log(indice);
});

//Essa função tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos: o elemento, o índice e o array atual, respectivamente.
//Função callback é uma função passada como parâmetro de outra.

const media = somaDasNotas / notas.length;
console.log(media);