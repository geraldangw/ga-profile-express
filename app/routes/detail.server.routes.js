module.exports = function(app) {

var Detail = require('../models/detail.server.model');
var detailController = require('../controllers/details.server.controller');

//actual ROUTING, uses static page controller to render the static pages via specified routes.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/details/new', detailController.new);

app.route('/details')
  .get(detailController.index)
  .post(detailController.create);

app.route('/details/:id')
  .get(detailController.show)
  .put(detailController.update)
  .delete(detailController.destroy);

};
