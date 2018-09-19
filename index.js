let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
let fs = require('fs');
const projectName = 'TestMeanApp';
const shell = require('shelljs');
const out = 'C:/Users/seven pc1/pradeep';
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
	var commands = 'mkdir ' + projectName;
	var options = {
		cwd: out
	};
	nrc.run(commands, options).then(
		function(exitCodes) {
			if (exitCodes != 0) {
				res.json({ message: 'Folder already exist' });
			} else {
				decompress(sourceCodePath, out + '/' + projectName).then((files) => {
					console.log('done!');
					res.json({ files: files });
				});
			}
		},
		function(err) {
			res.json({ message: 'error' });
		}
	);
});
app.get('/copyFiles', (req, res) => {
    shell.mkdir('move');
    shell.cp( __dirname + '/assets/code/samplemodel.js','move/');
    shell.cd(out + '/' + projectName + '/server');
    shell.mkdir('models');
    shell.mv( __dirname + '/assets/move/samplemodel.js','models/');
    res.json({response:"files created"+__dirname + '/assets/code/samplemodel.js'})
});
app.listen('3002', function() {
	console.log('running on 3002...');
});
