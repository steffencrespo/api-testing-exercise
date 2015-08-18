var frisby = require('frisby');
frisby.create("Get an existing flight by ID")
	.post('http://localhost:3000/api/flights'
		,{
		  data_partida: "2015-10-10",
		  data_chegada: "2015-10-10",
		  numero: "1",
		  origem: "porto alegre",
		  destino: "manaus",
		  duracao: 0,
		  lugares: 0,
		  companhia: "TAM",
		  id: 0
		})
	.expectStatus(200)
	.get("http://localhost:3000/api/flights/1")
	.expectStatus(200)
	.put('http://localhost:3000/api/flights'
		,{
		  data_partida: "2015-10-10",
		  data_chegada: "2015-10-15",
		  numero: "1",
		  origem: "porto alegre",
		  destino: "manaus",
		  duracao: 0,
		  lugares: 0,
		  companhia: "TAM",
		  id: 0
		})
	.expectStatus(200)
	.get("http://localhost:3000/api/flights")

.toss();