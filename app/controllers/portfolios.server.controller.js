var Portfolio = require('mongoose').model('Portfolio');

module.exports = {
  index: function(req, res, next) {
    Portfolio.find({}, function(err, portfolios) {
      if (err) return next(err);
      res.status(404);
      res.json(portfolios);
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
