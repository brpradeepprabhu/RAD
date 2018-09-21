let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

 
app.use(cors())
const copyController = require('./controller/copyController');
const dataController = require("./controller/dbController");


app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());

app.use('/api/copy',copyController);
app.use('/api/db',dataController)

app.listen('3002', function () {
	console.log('running on 3002...');
});