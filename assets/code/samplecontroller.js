var express = require('express');
var router = express.Router();
const samplemodel = require('../models/samplemodel');

class samplemodelController {
    constructor() {

    }
    fetchData(req, res, next) {
        samplemodel.find({}).then((err, data) => {
            if (err) {
                res.status(400).json({
                    message: error
                })
            } else {
                res.status(200).json({
                    data: data
                })
            }
        });
    };
}


var samplemodelCtrl = new samplemodelController();
router.get('/fetch', samplemodelCtrl.fetchData)