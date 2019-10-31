 
exports.up = function (knex, Promise) {
    return knex.schema.createTable('tasks', function (table) {
      table.increments('taskId')
      table.string('task')
      table.string('task_status')
      table.string('user_name')
      table.integer('project_id')
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tasks')
  }
  