var express = require('express')
var taskControl = require('../controllers/taskController')
var projectControl = require('../controllers/projectController')
var updateControl = require('../controllers/updateController')

var router = express.Router()

// API routes for tasks post and put
router.route('/api/tasks')
  .post(taskControl.addTask)
  .put(taskControl.updateTask)

// API routes for tasks get
router.route('/api/tasks/users/:userId/projects/:projectId/status/:status/page/:page')
  .get(taskControl.filterTasks)

// API for user inbox
router.route('/api/inbox/:id')
  .get(taskControl.getInbox)

// API for dashboard
router.route('/api/dashboard/getCountByProject')
  .get(taskControl.getCountByProject)

router.route('/api/dashboard/getCountByStatus')
  .get(taskControl.getCountByStatus)

router.route('/api/dashboard/getCountByCreator')
  .get(taskControl.getCountByCreator)

router.route('/api/dashboard/getTop5DueTasks')
  .get(taskControl.getTop5DueTasks)

// API routes for projects
router.route('/api/projects')
  .get(projectControl.allProjects)
  .post(projectControl.addProject)

// API routes for updates
router.route('/api/updates')
  .get(updateControl.allUpdates)
  .post(updateControl.addUpdate)

module.exports = router
