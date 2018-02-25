var express = require('express')
var app = express()

var db = require('./models')

var morgan = require('morgan')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var cookieParser = require('cookie-parser')
var session = require('express-session')

var passport = require('passport')
var flash = require('connect-flash')

var exphbs = require('express-handlebars')

var port = process.env.PORT || 8080

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'))

// log every request to the console
app.use(morgan('dev'))

// simulate DELETE and PUT
app.use(methodOverride())

// read cookies (needed for auth)
app.use(cookieParser())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// required for passport
app.use(session({ secret: 'constructionmgmt' })) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./routes/html-routes.js')(app, passport) // load our routes and pass in our app and fully configured passport

// View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

require('./config/passport')(passport) // pass passport for configuration

db.sequelize.sync()
  .then(function () {
    app.listen(port, function () {
      console.log('App listening on PORT ' + port)
    })
  })
