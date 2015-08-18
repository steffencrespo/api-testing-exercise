var frisby = require('frisby');
frisby.create("Get an existing flight by ID")
	.get("http://localhost:3000/api/flights/1")
	.expectStatus(200)
.toss();