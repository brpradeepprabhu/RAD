let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
let fs = require('fs');
const projectName = 'TestMeanApp';
const shell = require('shelljs');
const out = '/home/pradeep/Pradeep';
const sourceCodePath = __dirname + '/assets/code/mean.zip';
app.use(cors());
const decompress = require('decompress');
var nrc = require('node-run-cmd');
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());

app.get('/', (req, res) => {
	try {
		shell.cd(out);
		shell.mkdir(projectName);

		decompress(sourceCodePath, out + '/' + projectName).then((files) => {
			console.log('done!');
			res.json({ files: files });
		});
	} catch (e) {
		res.json({ message: e });
	}
});
app.get('/copyFiles', (req, res) => {
	shell.cd(out + '/' + projectName + '/server');
	shell.mkdir('models');
	shell.mv(__dirname + '/assets/code/samplemodel.js', 'models/');
	shell.sed('-i', 'sampleModel', 'testModel', 'models/samplemodel.js');
	res.json({ response: 'files created' + __dirname + '/assets/code/samplemodel.js' });
});
app.listen('3002', function() {
	console.log('running on 3002...');
});
