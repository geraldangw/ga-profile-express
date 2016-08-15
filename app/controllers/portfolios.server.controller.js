var Portfolio = require('mongoose').model('Portfolio');

module.exports = {
  index: function(req, res, next) {
    Portfolio.find({}, function(err, portfolios) {
      if (err) return next(err);
      res.status(404);
      res.json(portfolios);
    });
  },
  new: function(req, res) {
    res.render('portfolios/new', {
      title: 'Add portfolios'
    });
  },
  create: function(req, res, next) {
    var portfolio = new Portfolio(req.body);
    portfolio.save(function(err) {
      if (err) return next(err);
      res.json(portfolio);
    });
  },
  show: function(req, res) {
    res.json(req.portfolio);
  },
  update: function(req, res, next) {
    Portfolio.findbyIdAndUpdate(req.portfolio.id, req.body, function(err, portfolio) {
      if (err) {
        return next(err);
      } else {
        res.json(portfolio);
      }
    });
  },
  destroy: function(req, res, next) {
    req.portfolio.remove(function(err) {
      if(err) {
        return next(err);
      } else {
        res.json(req.portfolio);
      }
    });
  },
  portfolio_by_id: function(req, res, next, id) {
    Portfolio.findOne({
        _id: id
      }, 'name category',
      function(err, portfolio) {
        if (err) {
          return next(err);
        } else {
          req.user = portfolio;
          next();
        }
      });
  }
};
