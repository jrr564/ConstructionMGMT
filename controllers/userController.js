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
      res.status(200).json(data)
    }).catch(error => {
      console.log(error)
    })
  }
}
