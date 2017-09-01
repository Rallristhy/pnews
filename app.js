
/* Importando express e criando server */
const express = require('express');
const server = express();

/* 
* Toda requisição vindas para o backend passará pelo urlencoded
* urlencoded é o formato dos dados vindos do frondend
*/
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: true }));

/* Rota Padrão */
server.use ('/', function (request, response){
	response.sendFile(__dirname + '/views/index.html');
});

/* Listando APP na porta 5000 */
server.listen (5000, function(){
	console.log ('Server running...');
});