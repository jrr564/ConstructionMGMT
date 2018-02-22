module.exports = function(app, passport) {
  app.get('/', function(req, res) {
    res.render('login', { message: req.flash('loginMessage') });
  });

  app.get('/signup', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('signup', { message: req.flash('signupMessage') });
  });

  app.get('/home', isLoggedIn, function(req, res) {
    res.render('index', {
        user : req.user // get the user out of session and pass to template
    });
  });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the login page
    res.redirect('/');
}
