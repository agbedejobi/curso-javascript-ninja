/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Paulista'

console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'Corinthians', 'Palmeiras' , 'Santos', 'São Paulo', 'Portuguesa'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(a){

    var indice = a+1;

return a<=4 ? 'O time que está em ' + indice + 'ºlugar é o ' + teams[a] + '.':'Não temos a informação do time que está no ' + indice +'ºlugar.';
    /*if(a <= 4) {
    
    return 'O time que está em ' + indice + 'ºlugar é o ' + teams[a] + '.';
    } else {

            return 'Não temos a informação do time que está nessa posição.'

    };*/
};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log (showTeamPosition(0));
console.log (showTeamPosition(2));
console.log (showTeamPosition(3));
console.log (showTeamPosition(6));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20;
while(counter >= 20 && counter <= 30){
    
    console.log(counter); //console.log(counter++);
    counter++;

};

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor) {


var collorB = cor === 'blue'? '#0000ff' :  'Não temos o equivalente hexadecimal para ' + cor + '.';
var collorR = cor === 'red' ? '#ff0000' : 'Não temos o equivalente hexadecimal para ' + cor + '.';
var collorP = cor === 'black'?'#000000' : 'Não temos o equivalente hexadecimal para ' + cor + '.';
var collorG = cor === 'pink'? '#ff69b4' : 'Não temos o equivalente hexadecimal para ' + cor + '.';
var collorM = cor === 'brown'?'#964b00' : 'Não temos o equivalente hexadecimal para ' + cor + '.';



    switch(cor){
        case 'blue':
        //console.log('O hexadecimal para a cor ' + cor + ' é ' + collorB +'.');
        return 'O hexadecimal para a cor ' + cor + ' é ' + collorB +'.';
        break;
        case 'red':
        //console.log('O hexadecimal para a cor ' + cor + ' é ' + collorR +'.');
        return 'O hexadecimal para a cor ' + cor + ' é ' + collorR +'.';
        break;
        case 'black':
        //console.log('O hexadecimal para a cor ' + cor + ' é ' + collorP +'.');
        return 'O hexadecimal para a cor ' + cor + ' é ' + collorP +'.';
        break;
        case 'pink':
        //console.log('O hexadecimal para a cor ' + cor + ' é ' + collorG +'.');
        return 'O hexadecimal para a cor ' + cor + ' é ' + collorG +'.';
        break;
        case 'brown':
        //console.log('O hexadecimal para a cor ' + cor + ' é ' + collorM +'.');
        return 'O hexadecimal para a cor ' + cor + ' é ' + collorM +'.';
        break;
        default:
        return 'Não temos o equivalente hexadecimal para ' + cor + '.';
        //console.log('Não temos o equivalente hexadecimal para ' + cor + '.');
        //console.log(collor);
    };


};

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('red'));
console.log(convertToHex('yellow'));
console.log(convertToHex('blue'));
console.log(convertToHex('grey'));
console.log(convertToHex('black'));
console.log(convertToHex('pink'));
console.log(convertToHex('green'));
console.log(convertToHex('brown'));
