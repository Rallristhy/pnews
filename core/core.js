/* Localizar a aplicação angular.module.('app')
 * [] é utilizado para importar componentes para dentro da controller criada
 * se tivesse mais diretivas em [] é necessário colocar como parâmetros na function
*/
angular.module('app', []);

/* Criando uma controller e adicionando na app */
angular.module('app').controller('Controller1', [
	function(){

		/* Garantindo que o ctr é a controller atual */
		const ctr = this;

		/* Cria a variável value dentro da controller */
		ctr.value = 10;

		/* Criação da função inc dentro da controller */
		ctr.inc = function(){
			ctr.value++;
		}
	}
]);