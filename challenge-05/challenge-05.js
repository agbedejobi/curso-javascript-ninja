/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var recArray = [null, 'name', 5, undefined, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArray(arm){

	return arm;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

myArray(arm)[1];


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function twoPar(val , num){

return val[num];

};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var meuArray = [ 30 , 'sam' , 'vegan', true , null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

twoPar(meuArray , 0);
twoPar(meuArray , 1);
twoPar(meuArray , 2);
twoPar(meuArray , 3);
twoPar(meuArray , 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome){

	var livros = {
				JonhCarter : {
					quantidadePaginas : 78,
					autor : 'Carter',
					editora: "Rumels"
				} ,	
				HarryPotter : {
					quantidadePaginas : 540,
					autor : 'J.K Rolinkg',
					editora: "Ricco"
				},
				Prisioneiro : {
					quantidadePaginas : 250,
					autor : 'Sirius Black',
					editora: "Askaban"
				}
	};

	var livro;

	if(nome === 'JonhCarter'){

		livro = livros.JonhCarter;

	} else if(nome === 'HarryPotter'){

		livro = livros.HarryPotter;
	} else if(nome === 'Prisioneiro'){

		livro = livros.Prisioneiro;
	} else if(nome!='JonhCarter' || nome!='HarryPotter' || nome!='Prisioneiro'){

		livro = livros;
	};

	return livro;

};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

function book(nome){

	var livros = {
				JonhCarter : {
					quantidadePaginas : 78,
					autor : 'Carter',
					editora: "Rumels"
				} ,	
				HarryPotter : {
					quantidadePaginas : 540,
					autor : 'J.K Rolinkg',
					editora: "Ricco"
				},
				Prisioneiro : {
					quantidadePaginas : 250,
					autor : 'Sirius Black',
					editora: "Askaban"
				}
	};

	var livro;

	if(nome === 'JonhCarter'){

		livro = livros.JonhCarter;

		return 'O livro ' + nome +' tem '+ livros.JonhCarter.quantidadePaginas +' páginas!';

	} else if(nome === 'HarryPotter'){

		livro = livros.HarryPotter;

		return 'O livro ' + nome +' tem '+ livros.HarryPotter.quantidadePaginas +' páginas!';

	} else if(nome === 'Prisioneiro'){

		livro = livros.Prisioneiro;

		return 'O livro ' + nome +' tem '+ livros.Prisioneiro.quantidadePaginas +' páginas!';

	} else if(nome!='JonhCarter' || nome!='HarryPotter' || nome!='Prisioneiro'){

		livro = livros;
	};

	return livro;

};


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
function book(nome){

	var livros = {
				JonhCarter : {
					quantidadePaginas : 78,
					autor : 'Carter',
					editora: "Rumels"
				} ,	
				HarryPotter : {
					quantidadePaginas : 540,
					autor : 'J.K Rolinkg',
					editora: "Ricco"
				},
				Prisioneiro : {
					quantidadePaginas : 250,
					autor : 'Sirius Black',
					editora: "Askaban"
				}
	};

	var livro;

	if(nome === 'JonhCarter'){

		livro = livros.JonhCarter;

		return 'O autor do livro ' + nome +' é '+ livros.JonhCarter.autor +'.';

	} else if(nome === 'HarryPotter'){

		livro = livros.HarryPotter;

		return 'O autor do livro ' + nome +' é '+ livros.HarryPotter.autor +'.';

	} else if(nome === 'Prisioneiro'){

		livro = livros.Prisioneiro;

		return 'O autor do livro ' + nome +' é '+ livros.Prisioneiro.autor +'.';;

	} else if(nome!='JonhCarter' || nome!='HarryPotter' || nome!='Prisioneiro'){

		livro = livros;
	};

	return livro;

};

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
function book(nome){

	var livros = {
				JonhCarter : {
					quantidadePaginas : 78,
					autor : 'Carter',
					editora: "Rumels"
				} ,	
				HarryPotter : {
					quantidadePaginas : 540,
					autor : 'J.K Rolinkg',
					editora: "Ricco"
				},
				Prisioneiro : {
					quantidadePaginas : 250,
					autor : 'Sirius Black',
					editora: "Askaban"
				}
	};

	var livro;

	if(nome === 'JonhCarter'){

		livro = livros.JonhCarter;

		return 'O livro ' + nome +' foi publicado pela editora '+ livros.JonhCarter.editora +'.';

	} else if(nome === 'HarryPotter'){

		livro = livros.HarryPotter;

		return 'O livro ' + nome +' foi publicado pela editora '+ livros.HarryPotter.editora +'.';

	} else if(nome === 'Prisioneiro'){

		livro = livros.Prisioneiro;
		
		return 'O livro ' + nome +' foi publicado pela editora '+ livros.Prisioneiro.editora +'.';

	} else if(nome!='JonhCarter' || nome!='HarryPotter' || nome!='Prisioneiro'){

		livro = livros;
	};

	return livro;

};
