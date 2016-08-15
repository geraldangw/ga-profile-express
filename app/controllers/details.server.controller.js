var Detail = require('mongoose').model('Detail');

module.exports = {
  index: function(req, res, next) {
    Detail.find({}, function(err, details) {
      if (err) return next(err);
      res.status(404);
      res.json(details);
    });
  },
  show: function(req, res) {
    res.send('show routes');
  },
  create: function(req, res) {
    res.send('create routes');
  },
  update: function(req, res) {
    res.send('update routes');
  },
  destroy: function(req, res) {
    res.send('update routes');
  }
};
