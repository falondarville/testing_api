const express = require('express');
const nodemon = require('nodemon');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

username = process.env.USERNAME;
password = process.env.PASSWORD;

axios.get('http://qa-api-carrierx.int/core/v2/endpoints?login=' + username + '&password=' + password)
	.then(function(response){
		console.log(response)
	})
	.catch(function(error){
		console.log(error)
	})

app.listen(PORT, function(){
    console.log(`The server is up and running on port: ${PORT} .`);
});