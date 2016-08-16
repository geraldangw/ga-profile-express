var Detail = require('mongoose').model('Detail');

module.exports = {
  index: function(req, res, next) {
    Detail.find({}, function(err, details) {
      if (err) return next(err);
      res.json(details);
    });
  },
  new: function(req, res) {
    res.render('details/new', {
      title: 'Add Details'
    });
  },
  create: function(req, res, next) {
    var detail = new Detail(req.body);
    detail.save(function(err) {
      if (err) return next(err);
      res.json(detail);
    });
  },
  show: function(req, res) {
    res.json(req.detail);
  },
  update: function(req, res, next) {
    Detail.findbyIdAndUpdate(req.detail.id, req.body, function(err, detail) {
      if (err) {
        return next(err);
      } else {
        res.json(detail);
      }
    });
  },
  destroy: function(req, res, next) {
    req.detail.remove(function(err) {
      if(err) {
        return next(err);
      } else {
        res.json(req.detail);
      }
    });
  },
  detail_by_id: function(req, res, next, id) {
    Detail.findOne({
        _id: id
      }, 'name age',
      function(err, detail) {
        if (err) {
          return next(err);
        } else {
          req.user = detail;
          next();
        }
      });
}
};
