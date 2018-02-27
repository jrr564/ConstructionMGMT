var express = require('express')
var taskControl = require('../controllers/taskController')
var projectControl = require('../controllers/projectController')
var updateControl = require('../controllers/updateController')
var userControl = require('../controllers/userController')

var router = express.Router()

router.route('/api/tasks')
  .get(taskControl.allTasks)
  .post(taskControl.addTask)
  .put(taskControl.updateTask)

// router.route('/api/tasks/:status')

/*
router.route('/api/projects')
  .get(projectControl.allProjects)
  .post(projectControl.addProject)

router.route('/api/updates')
  .get(updateControl.allUpdates)
  .post(updateControl.addUpdate)
*/

router.route('/api/users')
  .get(userControl.allUsers)

module.exports = router

