var express = require('express');
var router = express.Router();
const process = require('process');
const dirName = process.cwd();
const sourceCodePath = dirName + '/assets/code/mean.zip';
const decompress = require('decompress');
const fs = require('fs-extra');
const shell = require('shelljs');
var child_process = require('child_process');
class CopyController {
	constructor() {}
	/**
	 *
	 *
	 * @param {*} req
	 * @param {*} res
	 * @memberof CopyController
	 */
	copyProject(req, res) {
		const projectName = req.body.projectName.toString();
		const pathName = req.body.pathName.toString();
		try {
			shell.cd(pathName);
			shell.mkdir(projectName);
			decompress(sourceCodePath, pathName + '/' + projectName).then((files) => {
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
	/**
 *
 *
 * @param {*} req
 * @param {*} res
 * @memberof CopyController
 */
	installPackages(req, res) {
		const projectName = req.body.projectName.toString();
		const pathName = req.body.pathName.toString();
        const angularPath = pathName + '/' + projectName + '/client';
        const serverPath = pathName + '/' + projectName + '/server';
		try {
			child_process.execSync('npm install', {
				cwd: angularPath
            });
            child_process.execSync('npm install', {
				cwd: serverPath
			});
			res.status(200).json({ data: 'Packages are installed' });
		} catch (e) {
			res.status(400).json({ message: e });
		}
	}
	/**
	 *
	 *
	 * @param {*} req
	 * @param {*} res
	 * @memberof CopyController
	 */
	copyDataModels(req, res) {
		const projectName = req.body.projectName.toString();
		const pathName = req.body.pathName.toString();
		const model = req.body.model;
		/**
		 * Adding models to the project files
		 */
		shell.cd(pathName + '/' + projectName + '/server');
		shell.mkdir('controller');
		shell.mkdir('models');
		fs
			.copy(
				dirName + '/assets/code/samplemodel.js',
				pathName + '/' + projectName + '/server/models/' + model.name + '.js'
			)
			.then(() => {
				let contents = fs.readFileSync(
					pathName + '/' + projectName + '/server/models/' + model.name + '.js',
					'utf8'
				);

				let replaceContent = contents.replace(new RegExp('sampleModel', 'g'), model.name);
				fs.writeFileSync(pathName + '/' + projectName + '/server/models/' + model.name + '.js', replaceContent);
				/**
		 			* Adding controller to the project files
		 		*/
				fs
					.copy(
						dirName + '/assets/code/samplecontroller.js',
						pathName + '/' + projectName + '/server/controller/' + model.name + 'Controller.js'
					)
					.then(() => {
						let contents = fs.readFileSync(
							pathName + '/' + projectName + '/server/controller/' + model.name + 'Controller.js',
							'utf8'
						);
						let replaceContent = contents.replace(new RegExp('samplemodel', 'g'), model.name);

						fs.writeFileSync(
							pathName + '/' + projectName + '/server/controller/' + model.name + 'Controller.js',
							replaceContent
						);
						let indexContent = fs.readFileSync(pathName + '/' + projectName + '/server/index.js', 'utf8');

						var apiData =
							'const ' + model.name + "Controller = require('./controller/" + model.name + "Controller')";
						apiData += '\n';
						apiData += "app.use('/api/" + model.name + "'," + model.name + 'Controller)';
						indexContent += '\n' + apiData;
						fs.writeFileSync(pathName + '/' + projectName + '/server/index.js', indexContent);

						res.json({
							response: pathName + '/' + projectName + '/server/index.js',
							content: indexContent
						});
					});
			})
			.catch((err) => {
				res.json({
					message: 'Error : ' + err
				});
			});
	}
}
var copyCtrl = new CopyController();
/*
{"projectName":"testAPIApp","pathName":"C:/Users/pbellikoth001/Project"}
*/
router.post('/project', copyCtrl.copyProject);
/*
{"projectName":"testAPIApp","pathName":"C:/Users/pbellikoth001/Project","model":{"name":"home"}}
*/
router.post('/model', copyCtrl.copyDataModels);
/*
{"projectName":"testAPIApp","pathName":"C:/Users/pbellikoth001/Project"}
*/
router.post('/install', copyCtrl.installPackages);
module.exports = router;
