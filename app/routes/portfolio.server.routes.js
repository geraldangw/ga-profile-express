module.exports = function(app) {

var Portfolio = require('../models/portfolio.server.model');
var portfolioController = require('../controllers/portfolios.server.controller');


//actual ROUTING, uses static page controller to render the static pages via specified routes.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/portfolios/new', portfolioController.new);

app.route('/portfolios')
  .get(portfolioController.index)
  .post(portfolioController.create);

app.route('/portfolios/:id')
  .get(portfolioController.show)
  .put(portfolioController.update)
  .delete(portfolioController.destroy);

};
