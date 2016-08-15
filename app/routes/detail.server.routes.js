module.exports = function(app) {

var Detail = require('../models/detail.server.model');
var detailController = require('../controllers/details.server.controller');

app.route('/details')
  .get(detailController.index)
  .post(detailController.create);

app.route('/details/:id')
  .get(detailController.show)
  .put(detailController.update)
  .delete(detailController.destroy);

};
