let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
let fs = require('fs');

app.use(cors());
const decompress = require('decompress');
 

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get("/", (req, res) => {
    console.log(__dirname + '\\test.zip')
var inp = __dirname + '\\test.zip';
var out = 'C:/Users/pbellikoth001'
decompress(inp, out).then(files => {
    console.log('done!');
    res.json({'files':files});
});

})
app.listen('3002', function () {
    console.log('running on 3002...');
});