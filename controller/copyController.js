var express = require('express');
var router = express.Router();
var path = require('path');
const process = require('process');
const dirName = process.cwd();
const sourceCodePath = dirName + '/assets/code/mean.zip';
const decompress = require('decompress');
const fs = require('fs-extra');
const shell = require('shelljs');
class CopyController {
    constructor() {

    }
    copyProject(req, res) {
        const projectName = (req.body.projectName).toString();
        const pathName = (req.body.pathName).toString();
        try {
            shell.cd(pathName);
            shell.mkdir(projectName);
            decompress(sourceCodePath, pathName + '/' + projectName).then(files => {
                res.status(200).json({
                    data: 'Project unzipped successfully'
                });
            });
        } catch (e) {
            res.status(400).json({
                message: e
            });
        }

    }
    copyDataModels(req, res) {
        const projectName = (req.body.projectName).toString();
        const pathName = (req.body.pathName).toString();
        const model = (req.body.model)

        shell.cd(pathName + '/' + projectName + '/server');
        shell.mkdir('controller');
        shell.mkdir('models');
        fs.copy(dirName + '/assets/code/samplemodel.js', pathName + '/' + projectName + '/server/models/' + model.name + '.js')
            .then(() => {
                let contents = fs.readFileSync(pathName + '/' + projectName + '/server/models/' + model.name + '.js', 'utf8');
                
                let replaceContent = contents.replace(new RegExp('sampleModel', 'g'), model.name);
                fs.writeFileSync(pathName + '/' + projectName + '/server/models/' + model.name + '.js', replaceContent);
                fs.copy(dirName + '/assets/code/samplecontroller.js', pathName + '/' + projectName + '/server/controller/' + model.name + 'Controller.js')
                .then(() => {
                    let contents = fs.readFileSync(pathName + '/' + projectName + '/server/controller/' + model.name + 'Controller.js', 'utf8');
                    
                    let replaceContent = contents.replace(new RegExp('samplemodel', 'g'), model.name);
                    fs.writeFileSync(pathName + '/' + projectName + '/server/controller/' + model.name + 'Controller.js', replaceContent);
                    res.json({
                        response: replaceContent
                    });
                });
                
               
            })
            .catch(err => {
                res.json({
                    message: "Error : " + err
                });
            });
    }
}
var copyCtrl = new CopyController();
router.post('/project', copyCtrl.copyProject);
router.post('/model', copyCtrl.copyDataModels);
module.exports = router;