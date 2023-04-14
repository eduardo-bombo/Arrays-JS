const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

//acc = acumulador
function calculaMedia(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acc, nota) => {
        return acc + nota;
    }, 0);

    const media = somaDasNotas / listaDeNotas.length;
    return media;
}

//arrow function
//const somaDasNotas = listaDeNotas.reduce((acc, nota) => acc + nota, 0);

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}.`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}.`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}.`);