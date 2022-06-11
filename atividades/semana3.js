/*/const array = []
const adicionaNumeros = array =>{
    for (let i=1;i<=200; i++) {
        array.push(i)
    }
    console.log(array)
}
adicionaNumeros(array)*/

/*
const lista = []
const incluirAtividade =string =>{
    lista.push(string)
}

const proximaAtividade = () =>{
    if(lista.length>0){
        console.log( lista[0]);
    }else{
        console.log('Não há próximas atividades')
    }
}
const atividadeConcluida = () =>{
    if(lista.length>0){
        lista.shift()
    }else{
        console.log('Não há atividades para concluir')
    }
}
proximaAtividade()
incluirAtividade('programar')
incluirAtividade('pescar')
proximaAtividade()
atividadeConcluida()
proximaAtividade()
atividadeConcluida()
atividadeConcluida()8/

 */

/*
const aprovados = []
const reprovados = []

const resultado = (nome,nota) =>{
    //Assumindo notas entre 0 e 10
    if(nota >= 7 && nota<=10){
        aprovados.push(nome)
    }else if(nota<7 && nota >= 0){
        reprovados.push(nome)
    }else{
        console.log('Entrada invalida!')
    }
}
const imprimeresultado= () =>{
    console.log(`Aprovados: ${aprovados} \nReprovados: ${reprovados}`)
}
resultado('Matheus',2)
resultado('Henrique',1)
resultado('Ana', 9)
imprimeresultado()

 */

/*const vogais = palavra =>{
    let contador = 0
    palavra = palavra.toLowerCase()
    for(let i = 0; i<(palavra.length);i++){
        if(palavra[i] === 'a' || palavra[i] === 'e' || palavra[i] === 'i' ||
            palavra[i] === 'o' || palavra[i] === 'u'){
            contador++;
        }
    }
    return contador
}


console.log(vogais('Aurelio'))*/

/*
const cidades = ['Florianópolis', 'Sombrio', 'Criciúma', 'Torres', 'Porto Alegre', 'Imbituba', 'São Paulo']
cidades.forEach(cidade=>{
    console.log(cidade)
})*/

/*
const diferente = array =>{
    let resultado = true
    let inicio = array[0]
    array.forEach(i=>{
        if( inicio !== i){
            resultado = false
        }
        inicio =i
    })
    return resultado
}
lista=[1,1,1,1,1,1,1,1]
lista2=[1,1,2,3,1,1,1,1]
console.log(diferente(lista))
console.log(diferente(lista2))*/

/*
const quemMelhor = string =>{
    string = string.toLowerCase()
    if (string === 'comercial'){
        console.log( "comercial > marketing")
    }else if(string === 'marketing'){
        console.log( "marketing > comercial")
    }else{
        console.log("todos são melhores")
    }
}*/

const areas = ['marketing', 'comercial', 'projetos','dho','presidencia','gestao interna']
const umarea = area =>{
    if(areas.includes(area.toLowerCase())){
        console.log("É uma área da Pixel")
    }else{
        console.log('Não é uma área da Pixel')
    }
}
