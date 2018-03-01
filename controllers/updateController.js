var update = require('../models').Updates

module.exports = {
  allUpdates: function (req, res) {
    update.findAll().then(data => {
      if (data.length === 0) {
        res.status(404).send('No data found')
      } else {
        res.status(200).json(data)
      }
    }).catch(error => {
      console.log(error)
    })
  },

  addUpdate: function (req, res) {
    console.log(req.body)
    update.create(req.body).then(() => {
      res.status(200).send('update added')
    }).catch(error => {
      console.log(error)
    })
  }
}
