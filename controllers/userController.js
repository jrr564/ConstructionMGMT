var user = require('../models').User

module.exports = {
  allUsers: function (req, res) {
    db.Posts.findAll({
      where: {
        id: {
          [Op.ne]: req.id
        }
      }
    }).then(data => {
      if (data.length === 0) {
        res.status(404).send('No data found')
      } else {
        res.status(200).json(data)
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
