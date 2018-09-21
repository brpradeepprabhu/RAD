var express = require('express');
var router = express.Router();
const samplemodel = require('../models/samplemodel');

class samplemodelController {
	constructor() {}
	fetchsamplemodel(req, res, next) {
		samplemodel.find({}).then((err, data) => {
			if (err) {
				res.status(400).json({
					message: err
				});
			} else {
				res.status(200).json({
					data: data
				});
			}
		});
	}
	createsamplemodel(req, res) {
		const samplemodelCreate = new samplemodel(req.body);
		samplemodelCreate.save((err, data) => {
			console.log(err);
			if (err) {
				res.status(400).json({
					message: err
				});
			} else {
				res.status(200).json({
					data: data
				});
			}
		});
	}
	updatesamplemodel(req, res) {
		const updatesamplemodel = new samplemodel(req.body);
		samplemodel.findByIdAndUpdate(
			updatesamplemodel._id,
			updatesamplemodel,
			{
				new: false
			},
			(err, data) => {
				if (err) {
					res.status(400).json({
						message: err
					});
				} else {
					res.status(200).json({
						data: "updated sucessfully"
					});
				}
			}
		);
	}
	deletesamplemodel(req, res) {
		const id = mongoose.Types.ObjectId(req.params.id);
		samplemodelCreate.findByIdAndRemove(
			{
				_id: id
			},
			(err, deleted) => {
				if (err) {
					res.status(400).json({
						message: err
					});
				} else {
					res.status(200).json({
						data: 'Deleted samplemodel Successfully'
					});
				}
			}
		);
	}
}

var samplemodelCtrl = new samplemodelController();
router.get('/fetch', samplemodelCtrl.fetchsamplemodel);
router.post('/create', samplemodelCtrl.createsamplemodel);
router.delete('/delete', samplemodelCtrl.deletesamplemodel);
router.put('/update', samplemodelCtrl.updatesamplemodel);
module.exports = router;
