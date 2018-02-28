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

  allProject: function (req, res) {
    project.findAll().then(data => {
      if (data.length === 0) {
        res.status(404).send('No data found')
      } else {
        res.status(200).json(data)
      }
    }).catch(error => {
      console.log(error)
    })
  },

  addProject: function (req, res) {
    console.log(req.body)
    project.create(req.body).then(() => {
      res.status(200).send('project added')
    }).catch(error => {
      console.log(error)
    })
  }
}
