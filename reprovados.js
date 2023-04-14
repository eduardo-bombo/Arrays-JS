const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

//tem que retornar true para incluir e false para não incluir
const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);

//quando o primeiro parâmetro não é utilizado (dá para ver que "aluno" está meio apagado), pode-se colocar "_" no lugar, e assim o JS sabe que o parâmetro não está sendo utilizado
//é obrigatório nomear o primeiro parâmetro de alguma forma para poder acessar o segundo
//alunos.filter((_, indice)...