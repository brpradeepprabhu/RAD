var express = require('express');
var router = express.Router();
const process = require('process');
const dirName = process.cwd();
const fs = require('fs');
class DbController {
	constructor() {}
	setDB(req, res) {
        const projectName = req.body.projectName.toString();
		const pathName = req.body.pathName.toString();
        const dbConfig = req.body.db;
        var config = {
            app: {
                port: 3000
            },
            db: {
                host: 'localhost',
                name: 'testDB',
                port: 27017,
                username:'',
                password:''
            }
        };
        config.db.host = dbConfig.host;
        config.db.name = dbConfig.name;
        config.db.port = dbConfig.host;
        config.db.username = dbConfig.username;
        config.db.password = dbConfig.password;
        let replaceContent = 'var config = '
        replaceContent += JSON.stringify(config)
        replaceContent += '\n'
        replaceContent += 'module.exports = config'
        				
        fs.writeFileSync(
            pathName + '/' + projectName + '/server/config/config.js',
            replaceContent
        ); 
        res.json({
            response: "config is updated",
            content: replaceContent
        });
    }
}
var dbCtrl = new DbController();
router.post('/setDB', dbCtrl.setDB);
module.exports = router;
