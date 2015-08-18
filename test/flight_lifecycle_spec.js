var frisby = require('frisby');

frisby.create("Create a new flight")
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
  	.afterJSON(function(json) {
    	var flightId = json.id;
	    frisby.create('Get the new flight by id')
			.get("http://localhost:3000/api/flights/" + flightId)
			.expectStatus(200)
	    	.after(function() {
		        frisby.create('Change an existing flight')
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
						  id: flightId
						})
	        	.expectStatus(200)
	        	.after(function() {
	        		frisby.create('Delete the flight')
	        		.delete("http://localhost:3000/api/flights/" + flightId)
	        		.expectStatus(204)
	        	}).toss();
	        }).toss();
    }).toss();

// var frisby = require('frisby');

// frisby.create('get new cart')
//   .post(url + '/carts')
//   //some some expectations
//   .afterJSON(function(json) {
//     var cartId = json.cartId;

//     frisby.create('add item to cart')
//       .post(url + '/carts/' + cartId, {
//         "itemId": itemId,
//         "quantity": qty
//       }, {
//         json: true
//       })
//       //some some expectations
//       .after(function() {

//         frisby.create('edit cart')
//           .put(url + '/carts/' + cartId, {
//             "itemId": itemId,
//             "quantity": qty
//           }, {
//             json: true
//           })
//           //some expectations
//           .after(function() {

//             frisby.create('clear cart')
//               .delete(url + '/carts/' + cartId + "/items/" + itemId)
//               //some expectations
//               .toss();
//         }).toss();
//     }).toss();
// }).toss();
