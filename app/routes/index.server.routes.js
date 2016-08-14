//Linked via express.js file that requires this file to specify routes of app.

//sets a module exports function to specify the routes of the app and the routing of static pages.

module.exports = function(app) {

var staticPageController = require('../controllers/staticpage.server.controller');
// requires the controller of static pages.

//actual ROUTING, uses static page controller to render the static pages via specified routes.

app.get('/', staticPageController.renderHome);
app.get('/', staticPageController.renderAbout);
app.get('/contact', staticPageController.renderContact);
};
