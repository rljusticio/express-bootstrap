var express = require('express');
var app = express();

// We are using Express Router(), which is a built-in and powerful middle layer Routing service provided by ExpressJS.
var router = express.Router();

// We have stored the views (i.e HTML files) in the "views" folder.
// We are assigning that path using "__dirname" keyword, which points to your current working directory.
var path = __dirname + '/views/';

// define the Router middle layer, which will be executed before any other routes.
// This route will be used to print the type of HTTP request the particular Route is referring to.
router.use(function(req, res, next) {
  console.log('/' + req.method);

  // Once the middle layer is defined, you must pass "next()" so that next router will get executed.
  next();
});

router.get('/', function(req, res) {

  // The "sendFile()" function is a built-in function in ExpressJS and is designed to send files to a web browser
  res.sendFile(path + 'index.html');
});

router.get('/about', function(req, res) {
  res.sendFile(path + 'about.html');
});

router.get('/contact', function(req, res) {
  res.sendFile(path + 'contact.html');
});

// tells Express to use the Routes we have defined above.
app.use('/', router);

// The magic of Express Routing is we can assign the routes in order
// so the last one will get executed when the incoming request is not matching any route.
app.use('*', function(req, res) {
  res.sendFile(path + '404.html');
});

app.listen(3000, function() {
  console.log('Live at port 3000');
});
