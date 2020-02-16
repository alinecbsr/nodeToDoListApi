'use restrict';
const toDoList = require('../controllers/toDoListController');

module.exports = function (app) {

  app.route('/tasks')
    .get(toDoList.listAllTasks)
    .post(toDoList.createTask);

  app.route('/tasks/:taskId')
    .get(toDoList.readTask)
    .put(toDoList.updateTask)
    .delete(toDoList.deleteTask);
};