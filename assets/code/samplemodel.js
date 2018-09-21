var mongoose = require('mongoose')

var sampleModel = mongoose.Schema(sampleData);

module.exports = mongoose.model('sampleModel', sampleModel);