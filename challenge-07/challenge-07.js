/*
Crie um array com 5 items (tipos variados).
*/
var arrV = [ true, 'Sam' , {carro : 'verde'} , '#lov' , 30];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem( newitemns ) {

	arrV.push(newitemns);
	return arrV;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([ 3 , false , {tipo: 'alien'}]);

console.log(arrV);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + arrV[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arrV.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + arrV[5].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var par = 10;

	while(par <=20) {
	 par % 2 === 0?	console.log( 'Números pares entre 10 e 20: ' + par) : '';
	 par++;
};

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var impar = 10;

	while(impar <=20) {
	 impar % 2 === 1?	console.log( 'Números ímpares entre 10 e 20: ' + impar) : '';
	 impar++;
};

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for(var pares = 100; pares <= 120; pares++){

pares % 2 === 0 ? console.log( 'Números pares entre 100 e 120: ' + pares ) : '';


};

for(var impares = 111; impares <= 125; impares++){

impares % 2 === 1 ? console.log( 'Números ímpares entre 111 e 125: ' + impares ) : '';

};