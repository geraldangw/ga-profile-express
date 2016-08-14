//Linked via express.js file that requires this file to specify routes of app.

//sets a module exports function to specify the routes of the app and the routing of static pages.

module.exports = function(app) {

var staticPageController = require('../controllers/staticpage.server.controller');
var informationController = require('../controllers/information.server.controller');
var linksController = require('../controllers/links.server.controller');
var projectsController = require('../controllers/projects.server.controller');
// requires the controller of static pages.

//actual ROUTING, uses static page controller to render the static pages via specified routes.

app.get('/', staticPageController.renderHome);
app.get('/about', staticPageController.renderAbout);
app.get('/contact', staticPageController.renderContact);
app.get('/information', informationController.index);
app.get('/links', linksController.index);
app.get('/projects', projectsController.index);
};
