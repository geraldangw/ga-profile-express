// main js app. this is where the app will run from so we specify main requirements, port which the app will run from and start app servers from here.

var express = require('./config/express'); // express.js is where our MVC flow starts before this.
var app = express(); // we use app in many other files in the framework and its defined here to use express as a middleware router.

app.set('port', (process.env.PORT || 9000)); //set port to be production port or 8000 on local host.

app.listen(app.get('port'), function() {
  console.log ('Express Server for GA-PROFILE-EXPRESS is running at localhost', app.get('port'));
}); // console logs port number to ensure we know that app is running.

module.exports = app;
