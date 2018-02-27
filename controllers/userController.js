var user = require('../models').User
var Op = require('Sequelize').Op;

module.exports = {
  allUsers: function (req, res) {
    user.findAll().then(data => {
      res.status(200).json(data)
    }).catch(error => {
      console.log(error)
    })
  }
}
