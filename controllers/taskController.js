var tasks = require('../models').Tasks
var Op = require('Sequelize').Op
var sequelize = require('sequelize')

module.exports = {
  findTaskById: function (req, res) {
    tasks.findById(req.body.id).then(data => {
      if (data.length === 0) {
        res.status(404).send('No data found')
      } else {
        res.status(200).json(data)
      }
    }).catch(error => {
      console.log(error)
    })
  },

  loadTasksCount: function(id) {
    return new Promise((resolve, reject) => {
      tasks.count({
        where: {
          'issued': id,
          status: {
            [Op.ne]: "completed"
          }
        }
      }).then(data => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  getInbox: function (req, res) {
    tasks.findAndCountAll({
      where: {
        issued: req.body.id,
        status: {
          [Op.ne]: "completed"
        }
      },
      order: [['created_date', 'DESC']]
    }).then(data => {
      if (data.length === 0) {
        res.status(404).send('No data found')
      } else {
        console.log(data.count)
        console.log(data.rows)
        res.status(200).json(data)
      }
    }).catch(error => {
      console.log(error)
    })
  },

  filterTasks: function (req, res) {
    tasks.findAndCountAll({
      where: {
        UserId: req.params.userId || {
          [Op.ne]: null
        },
        status: req.params.status || {
          [Op.ne]: null
        },
        project: req.params.projectId || {
          [Op.ne]: null
        }
      },
      offset: (req.params.page - 1) * 10,
      limit: 10,
      order: [['created_date', 'DESC']]
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
    tasks.create(req.body).then(() => {
      res.status(200).send('task added')
    }).catch(error => {
      console.log(error)
    })
  },

  updateTask: function (req, res) {
    console.log(req.params)
    tasks.update(req.body,
      {
        where: {
          id: req.params.id
        }
      }).then((data) => {
      if (data[0] === 0) {
        res.status(404).send('No affected data')
      } else {
        res.status(200).send('task updated')
      }
    }).catch(error => {
      console.log(error)
    })
  },

  getCountByProject: function(req, res) {
    tasks.findAll({
      group: ['project'],
      attributes: [['project', 'name'], [sequelize.fn('COUNT', 'project'), 'value']],
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

  getCountByStatus: function(req, res) {
    tasks.findAll({
      group: ['status'],
      attributes: [['status', 'name'], [sequelize.fn('COUNT', 'status'), 'value']],
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

  getCountByCreator: function(req, res) {
    tasks.findAll({
      group: ['created_by'],
      attributes: [['created_by', 'name'], [sequelize.fn('COUNT', 'created_by'), 'value']],
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

  getTop5DueTasks: function(req, res) {
    tasks.findAll({
      where: {
        due_date: {
          [Op.gt]: new Date()
        }
      },
      limit: 5,
      order: [['due_date', 'ASC']],
      attributes: [['task_description', 'name'], ['due_date', 'value']],
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

}
