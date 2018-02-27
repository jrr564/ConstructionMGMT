var tasks = require('../models').Tasks

module.exports = {
  allTasks: function (req, res) {
    db.Posts.findAll({
      where: {
        userID: 11
      },
      order: [['id', 'DESC']]
    }).then(data => {
      if (data.length === 0) {
        res.status(404).send('No data found')
      } else {
        res.status(200).json(data)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  addTask: function (req, res) {
    console.log(req.body)
    db.Posts.create(req.body).then(() => {
      res.status(200).send('Post added')
    }).catch(error => {
      console.log(error)
    })
  },
  updateTask: function (req, res) {
    console.log(req.params)
    db.Posts.update({
      isDeleted: true
    },
      {
        where: {
          id: req.params.id
        }
      }).then((data) => {
      if (data[0] === 0) {
        res.status(404).send('No affected data')
      } else {
        res.status(200).send('Post updated')
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
