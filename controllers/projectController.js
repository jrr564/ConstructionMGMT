var project = require('../models').Projects

module.exports = {
  loadAllProjects: function() {
    return new Promise((resolve, reject) => {
      project.findAll({
        attributes: ['project_name', 'id']
      }).then(data => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


}
