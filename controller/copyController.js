const express = require('express');
const router = express.Router();
const process = require('process');
const dirName = process.cwd();
const sourceCodePath = dirName + '/assets/code/mean.zip';
const decompress = require('decompress');
const fs = require('fs-extra');
const shell = require('shelljs');
const child_process = require('child_process');
class CopyController {
	constructor() {}
	/**
	 * Copy the project,models,controller and generate UI forms
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
	 * To install the packages for client and  server
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
			res.status(200).json({
				data: 'Packages are installed'
			});
		} catch (e) {
			res.status(400).json({
				message: e
			});
		}
	}
	createUIForms(data, projectPath,modelName) {
		return new Promise((resolove, reject) => {
			let modelData = data.slice();
			modelData = modelData.replace('{', '')
			modelData = modelData.replace('}', '');
			console.log(modelData)
			modelData = modelData.split(",");
			//	const modelData= JSON.parse(data);
			let forms = "<form>"
			modelData.forEach((fieldData) => {
				console.log(fieldData);
				const type = fieldData.split(":");
				forms += '<div class=" col-12 form-group">'
				forms += '<div class="row">'
				forms += ' <label class="col-offset-2 col-4 text-right" for="' + type[0] + '">' + type[0] + '</label>'
				switch (type[1].toLowerCase()) {
					case 'string':
						forms += ' <input type="text" class="col-4 form-control"  id="' + type[0] + '">'
						break;
					case 'date':
						forms += '<p-calendar class="col-4" styleClass="ui-grid-col-4" [style]="{\'width\':\'100%\'}" [inputStyle]="{\'width\':\'100%\'}" id="' + type[0] + '"></p-calendar>'
						break;
					case 'array':
						forms += '<p-dropdown class="col-4" styleClass="ui-grid-col-4" [style]="{\'width\':\'100%\'}"></p-dropdown>'
						break;
					case 'number':
						forms += ' <input type="number" class="col-4 form-control"  id="' + type[0] + '">'
						break;
					case 'boolean':
						forms += ' <input type="checkbox" class="col-4 form-control"  id="' + type[0] + '">'
						break;
					case '':
						break;
				}
				forms += '</div>'
				forms += '</div>'
				console.log(type);
			})
			forms +="<div class='row'><div class='col-8 text-right'><button class='btn btn-primary'>Submit</button></div></div>"
	
			forms += "</form>"
			child_process.execSync('ng g c ' + modelName, {
				cwd: projectPath
			});
			fs.writeFileSync(projectPath+ '/src/app/' + modelName+ "/" + modelName + '.component.html', forms);
			resolove(forms);
		})
	}
	/**
	 * To copy the data models
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
				replaceContent = replaceContent.replace(new RegExp('sampleData', 'g'), model.data);
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
						var angularContoller = fs.readFileSync(pathName + '/' + projectName + '/server/index.js', 'utf8');
						fs
							.copy(
								dirName + '/assets/code/sample.service.ts',
								pathName + '/' + projectName + '/client/src/service/' + model.name + '.service.ts'
							)
							.then(() => {
								let contents = fs.readFileSync(
									pathName + '/' + projectName + '/client/src/service/' + model.name + '.service.ts',
									'utf8'
								);
								let replaceContent = contents.replace(new RegExp('samplemodel', 'g'), model.name);
								fs.writeFileSync(
									pathName + '/' + projectName + '/client/src/service/' + model.name + '.service.ts',
									replaceContent
								);
								console.log(this)
								this.createUIForms(model.data,pathName + '/' + projectName +'/client',model.name).then((data) => {
									res.json({
										response: pathName + '/' + projectName + '/server/index.js',
										content: replaceContent
									});
								})

							});

					})
					.catch((err) => {
						res.json({
							message: 'Error : ' + err
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
{"projectName":"testApp","pathName":"/home/pradeep/","model":{"name":"team","data":"{first_name:String,last_name:String}"}}
*/
router.post('/model', copyCtrl.copyDataModels.bind(copyCtrl));
/*
{"projectName":"testAPIApp","pathName":"C:/Users/pbellikoth001/Project"}
*/
router.post('/install', copyCtrl.installPackages);
module.exports = router;