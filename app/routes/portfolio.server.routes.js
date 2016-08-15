module.exports = function(app) {

var Portfolio = require('../models/portfolio.server.model');
var portfolioController = require('../controllers/portfolios.server.controller');

app.route('/portfolios')
  .get(portfolioController.index)
  .post(portfolioController.create);

app.route('/portfolios/:id')
  .get(portfolioController.show)
  .put(portfolioController.update)
  .delete(portfolioController.destroy);

};
