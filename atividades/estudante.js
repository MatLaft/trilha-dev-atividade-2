const nomeAluno = 'Jhon Doe'
let idadeAluno = 20
const nota1 = 7
const nota2 = 8.5
const nota3 = 6.9
const mediaAluno = (nota1*4+nota2*3+nota3*3)/(4+3+3)
console.log(`Nome do Aluno: ${nomeAluno}\nIdade do aluno: ${idadeAluno}\nMedia do aluno: ${mediaAluno}`)

const passou = media => {
    //assumindo nota máxima de 10
    if (7 <= media && media <= 10) {
        console.log('Aluno aprovado')
    }else if (media > 0 && media<7) {
        console.log('Aluno reprovado')
    }else if (media === 0) {
        console.log('Aluno zerou')
    }else {
        console.log('Erro na entrada de dados!')
    }
}
passou(mediaAluno)