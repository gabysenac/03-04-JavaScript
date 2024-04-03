// function minhaFuncao(){
//     console.log("testando")
// }

// minhaFuncao()
// minhaFuncao()
// minhaFuncao()
// minhaFuncao()


// const minhaFuncaoEmVariavel = function(txt){
//     console.log(`imprimindo: ${txt}`)
// }

// minhaFuncaoEmVariavel("sapato")
// minhaFuncaoEmVariavel("meu amor")
// minhaFuncaoEmVariavel("colher")
// minhaFuncaoEmVariavel(7+8)

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;






// pode dar o nome que voce quiser pq ela vai entrar na letra ou no lugar que voce quiser que ela vá

// function soma (a, b){
//     console.log(`A soma entre ${a} e ${b} é = ${a + b}`)  
//     console.log(`A sub entre ${a} e ${b} é = ${a + b}`)  
//     console.log(`A div entre ${a} e ${b} é = ${a + b}`)  
//     console.log(`A mulr entre ${a} e ${b} é = ${a + b}`)  
// }

// soma(a,b)
// console.log(a)
// console.log(b)
// // soma(c,b)
// // soma(d,a)



// function raizQuadrada (numero){
//     return numero * numero
    
// }

// console.log(raizQuadrada(4))




// outro jeito de fazer uma conta de raiz quadrada com menor e maior
// criando uma funcao anonima estabelecendo uma funcao que vai ficar guardada na variavel. o retorn vai estabelecer o resultado da operação
// console.log é uma funcao que retorna para o console do computador alguma coisa. retona resultado da funcao
// dentro do console pode por uma função

// const raizquadrada = (numero) => {
//     return numero * numero
    
// }

// console.log(raizquadrada(4))



// const testArrow = () =>{
//     console.log("Essa é uma arrow function")
// }
// testArrow()



// const parOuImpar = (n) => {
//     if(n %2 === 0){
//         console.log(`${n} é par`)
//         return 
//     }
//     console.log(`${n} é impar`)
// }

// coloque dentro do paragrafo o numero que voce quer saber se é par ou imapar:
// parOuImpar(65296646)



// const lista = [1, 2, 3, 4, 5]

// console.log(lista)
// console.log(typeof lista)

// // a primeira posição de uma array é SEMPRE ZERO. SEMPRE COMEÇA COM ZERO.

// console.log(lista[0])
// console.log(lista[1])
// console.log(lista.length)

// quao longo é o array, cumprimento (length)
// array é uma variavel que armazena valores do mesmo tipo (numeros, letras)
// ONDE COMEÇA , ATE ONDE ELA VAI , COMO ELA SE REPETE (laço for)
// length é cumprimento

// const lista2 = ["fusca", "toro", "chevete", "golf", "opala"]
// console.log(lista2.length)
// for(let i = 0; i < lista2.length; i++){
//     console.log(`Elemento da lista ${lista2[i]}`)
// }

// desafio
// escreva um array com as cores: azul, amarela, verde, vermelho e branca
// escreva uma estrutura de repertção com laco for para retornar todos os elementos do array

// questão 1
// const lista = ["azul", "vermelho", "amarela", "verde", "branca"]
// console.log(lista.length)
// for(let i = 0; i < lista.length; i++){
//     console.log(`Elementos da lista de cores são: ${lista[i]}`)
// }

// // função anonima
// const nums = [1, 2, 3, 4, 5]
// nums. forEach((n) => {
//     console.log(`O numero autual é: ${n}`)
// })


// const numbers = [5, 12, 4, 22];
// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers);
// console.log(allNumbers);

// const text = "algum texto";
// const text2 = "FORÇA JOVEM";
// console.log(text.toUpperCase());
// console.log(text2.toLocaleLowerCase());

// const array = ["a", "b", "c"];
// array.push("d");

// // console.log(array);
// // console.log(array.length);

// array.pop();
// const itemRemovido = array.pop();

// console.log(itemRemovido);
// console.log(array);
// console.log(array.length);

// array.push("Dá", "Para", "Inserir", "Vários")
// console.log(array);



const letters = ["a", "b", "c"];
const letter = letters.shift();
console.log(letter);
console.log(letters);

// o unshift reorganiza os elementos
letters.unshift("z", "x", "y");
letters.unshift("p");
console.log(letters);
