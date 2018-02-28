var db = require('../models')
var taskControl = require('../controllers/taskController')
var projectControl = require('../controllers/projectController')
var userControl = require('../controllers/userController')

module.exports = function (app, passport) {
  app.get('/login', function (req, res) {
    res.render('login', { message: req.flash('loginMessage') })
  })

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
      successRedirect: '/', // redirect to the secure profile section
      failureRedirect: '/login', // redirect back to the login page if there is an error
      failureFlash: true // allow flash messages
    }), function(req, res) {
      res.status(200).end()
    })

  app.get('/signup', function (req, res) {
    // render the page and pass in any flash data if it exists
    res.render('signup', { message: req.flash('signupMessage') })
  })

  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/', // redirect to the login section
      failureRedirect: '/signup', // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    }),
    function (req, res) {
      res.status(200).end()
    })

  app.get('/', isLoggedIn, function (req, res) {
    Promise.all([
      userControl.loadAllUsers(),
      projectControl.loadAllProjects(),
      taskControl.loadTasksCount(req.user.id)
    ])
    .then( ([result1, result2, result3]) => {
      res.render('index', {
        user: req.user, // get the user out of session and pass to template
        allUsers: result1,
        allProjects: result2,
        myTasks: result3
      })
    })
    .catch(error => {
      console.log(error)
    })
  })

  app.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/login')
  })
}

// route middleware to make sure a user is logged in
function isLoggedIn (req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next()

  // if they aren't redirect them to the login page
  res.redirect('/login')
}
