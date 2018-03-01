var user = require('../models').User

module.exports = {
  loadAllUsers: function() {
    return new Promise((resolve, reject) => {
      user.findAll({
        attributes: ['username', 'id']
      }).then(data => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
