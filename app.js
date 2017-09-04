/* Importando express e criando server */
const express = require('express');
const server = express();
const port = 50005;

/* 
* Toda requisição vinda para o servidor passará pelo urlencoded
* urlencoded é o formato dos dados vindos da view
*/
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

/* Mapeamentos de Diretórios para a View ter visibilidade */
server.use("/node_modules",  express.static(__dirname + '/node_modules'));
server.use("/core",  express.static(__dirname + '/core'));


/* Rota Padrão */
server.use ('/', function (request, response){
	response.sendFile(__dirname + '/views/index.html');
});

/* Listando APP na porta 5000 */
server.listen (port, function(){
	console.log ('Servidor em execução na porta: '+port);
});