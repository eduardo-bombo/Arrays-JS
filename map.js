const notas = [10, 9.5, 8, 7, 6];

//método apropriado para reescrever arrays; NÃO ALTERA a lista original
const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log(notas);
console.log(notasAtualizadas);