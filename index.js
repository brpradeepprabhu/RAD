let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');

const copyController = require('./controller/copyController');
const dataController = require("./controller/dbController");
app.use(cors());

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