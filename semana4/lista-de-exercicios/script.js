/*

Exercícios de leitura de código

1. A função pede para o usuário preencher o valor da cotação do dólar, calcula o valor em reais de US$100 e imprime no console o mesmo.
O valor impresso no console depende do valor da cotação a ser inserido. Para ter um exemplo, se fosse inserido uma cotação de 5, 
o valor impresso no console seria R$500.

2. A função calcula qual seria o valor final para determinados investimentos tendo como parâmetros o tipo de investimento e o valor inicial.
No caso do exemplo, o console imprimiria: 165 \n TIPO DE INVESTIMENTO INFORMADO INCORRETO!

3. O programa, tendo uma array de números, cria duas novas arrays, com a primeira contendo os números pares e a segunda os ímpares.
No console seria impresso: Quantidade total de números 14 \n 6 \n 8.

4. O programa, dado uma array de números, vai encontrar qual é o maior e o menor número nela, exceto se todos os números da array
forem negativos, porque o programa considera o menor número 0. Seria impresso no console -10 \n 1590.

*/

//Exercícios de lógica de programação

//1. 

//a) false

//b) false

//c) true

//d) true

//e) true

/* 2. Não funciona porque a variável quantidadeDeNumerosPares não foi definida e não há incremento do contador do loop, caracterizando 
um loop infinito, além de iteraria até i ser menor ou igual a N, na verdade teria que ser menor */

const quantidadeDeNumerosPares = 5;
let i = 0;
while (i < quantidadeDeNumerosPares) {
    console.log(i * 2);
    i++;
}

//3.

function classificaTriangulo (a, b, c) {
    if (a !== undefined && b !== undefined && c !== undefined) {
        if (a === b && b === c) {
            return 'O triângulo é equilátero.';
        } else if (a !== b && a !== c && b !== c) {
            return 'O triângulo é escaleno.';
        } else {
            return 'O triângulo é isósceles.';
        }
    } else {
        return 'Insira um triângulo válido.'
    }
}

console.log(classificaTriangulo(20, 20, 20));

//4. 

function mostraMaior (a, b) {
    if (a > b) {
        return 'O maior é ' + a; 
    } else {
        return 'O maior é: ' + b;
    }
    
}

function indicaIndivisibilidade (a, b) {
    if (a % b === 0) {
        return a + ' é divisível por ' + b;
    } else {
        return a + ' não é divisível por ' + b;
    }
}

function determinaDiferença (a, b) {
    if (a > b) {
        return 'A diferença entre eles é ' + (a - b);
    } else {
        return 'A diferença entre eles é ' + (b - a);
    }
}

const numero1 = 15;
const numero2 = 30;

if (numero1 !== undefined && numero2 !== undefined) {

    console.log('Entrada:');
    console.log(`${numero1} e ${numero2}`)
    console.log('Saída:');
    console.log(mostraMaior(numero1, numero2));
    console.log(indicaIndivisibilidade(numero1, numero2));
    console.log(indicaIndivisibilidade(numero2, numero1));
    console.log(determinaDiferença(numero1, numero2));
}

//Exercícios de funções

//1.

function imprimeSegundoMaiorESegundoMenor (array) {
    let indexMaior;
    let indexMenor;
    let numeroMaior = -Infinity;
    let numeroMenor = Infinity;
    let arraySec = [];
    for (numero of array) {
        arraySec.push(numero);
        if (numero > numeroMaior) {
            numeroMaior = numero;
            indexMaior = array.indexOf(numero);
        }
        if (numero < numeroMenor) {
            numeroMenor = numero;
            indexMenor = array.indexOf(numero);
        }
    }
    if (indexMaior < indexMenor) {
        arraySec.splice(indexMenor, 1);
        arraySec.splice(indexMaior, 1);
    } else {
        arraySec.splice(indexMaior, 1);
        arraySec.splice(indexMenor, 1);
    }
    numeroMaior = -Infinity;
    numeroMenor = Infinity;
    for (numero of arraySec) {
        if (numero > numeroMaior) {
            numeroMaior = numero;
        }
        if (numero < numeroMenor) {
            numeroMenor = numero;
        }
    }
    console.log(`O segundo número maior é ${numeroMaior} é o segundo número menor é ${numeroMenor}.`);
} 

let arrayNumeros = [6, 78, 4, 21, 32, 9, 45, 2, 80];
imprimeSegundoMaiorESegundoMenor(arrayNumeros);

//2.

// let helloFuture4 = function () {
//     alert('Hello Future4');
// }

// helloFuture4();

//Exercícios de objetos

/*

1. Objetos são usados para representar dados de forma mais intuitiva, digamos assim, em que as propriedades tem um nome que facilite 
a compreensão, mas isso é feita sem precisar ser ordenada. O array é usado também para guardar várias informações, mas em forma de lista,
em que é feita de forma ordenada, usando para acessar cada elemento um índice que representa a posição de cada um.

*/

//2.

function criaRetangulo (a, b) {
    let retangulo = {
        largura: a,
        altura: b,
        perimetro: 2 * (a + b),
        area: a * b
    }
    return retangulo;
}

