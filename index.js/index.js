let a = 10;
const b = 20;

console.log(a == b);
false
/* operador é igual, mas os operadores são diferentes*/

let a = 10;
const b = "10";

console.log(a == b);
/* deu true porque ele ignora o tipo de dado quando voce usa o == */
/* se quiser que ele valide o conteúdo da sua variável e o tipo de dado 
da sua variavel o operador com tres iguais*/
/*true*/
/*um é numero e outro é texto*/

let a = 10;
const b = "10";

console.log(a === b);
/*false*/
/* um é numero e o outro é texto*/
let a = 10;
const b = "10";

console.log(a !== b);
/* diferente, essa expressão e diferente daquela*/
/* true*/
/* a é diferente de b tanto o valor quanto o tipo de dado*/


let a = 10;
const b = "10";

console.log(a != b);
/* false*/
/* vai ignorar o tipo e vai comparaar somente os valores*/


/*mais de uma condição para ser avaliada*/


let a = 10;
const b = "10";

console.log(a == b && typeof b == 'string');
/* e B typeof (o tipo de B) é igual uma string
/* true*/


let a = 10;
const b = "10";

console.log(a == b && typeof a == 'string');
/* false*/


let a = 10;
const b = "10";

console.log(a == b || typeof b == 'string');
/* true*/
/*  || significa ou uma condição é verdade ou as duas, só vai ser falso se tudo é falso*/


let cor ="verde";

if (cor === "verde") {
    console.log("siga");
}else{
    console.log ("pare");
}
/*siga*/

let cor ="vermelho";

if (cor === "verde") {
    console.log("siga");
}else{
    console.log ("pare");
}
/*pare*/



let cor ="amarelo";
if (cor === "verde") {
    console.log("siga");
} else if (cor ==="amarelo"){
    console.log ("atenção");
} else{
    console.log ("pare");
}
/* atenção*/











