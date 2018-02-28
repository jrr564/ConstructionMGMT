var express = require('express')
var taskControl = require('../controllers/taskController')
var projectControl = require('../controllers/projectController')
var updateControl = require('../controllers/updateController')
var userControl = require('../controllers/userController')

var router = express.Router()

router.route('/api/tasks')
  .post(taskControl.addTask)
  .put(taskControl.updateTask)

router.route('/api/tasks/users/:userId/projects/:projectId/status/:status/page/:page')
  .get(taskControl.filterTasks)

/*data: [
    {
        value: number,
        name: string
    }
]*/

/*
router.route('/api/projects')
  .get(projectControl.allProjects)
  .post(projectControl.addProject)

router.route('/api/updates')
  .get(updateControl.allUpdates)
  .post(updateControl.addUpdate)
*/

module.exports = router
