var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);
  require('../app/models/detail.server.model');
  require('../app/models/portfolio.server.model');
  return db;
};
