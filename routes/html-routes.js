var db = require('../models')

module.exports = function (app, passport) {
  app.get('/', function (req, res) {
    res.render('login', { message: req.flash('loginMessage') })
  })

  // process the login form
  app.post('/', passport.authenticate('local-login', {
      successRedirect: '/home', // redirect to the secure profile section
      failureRedirect: '/', // redirect back to the login page if there is an error
      failureFlash: true // allow flash messages
    }), function(req, res) {
      res.status(200).end()
    })

  app.get('/signup', function (req, res) {
    // render the page and pass in any flash data if it exists
    res.render('signup', { message: req.flash('signupMessage') })
  })

  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/home', // redirect to the login section
      failureRedirect: '/signup', // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    }),
    function (req, res) {      
      res.status(200).end()
    })

  app.get('/home', isLoggedIn, function (req, res) {
    res.render('index', {
      user: req.user // get the user out of session and pass to template
    })
  })

  app.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })
}

// route middleware to make sure a user is logged in
function isLoggedIn (req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next()

  // if they aren't redirect them to the login page
  res.redirect('/')
}
