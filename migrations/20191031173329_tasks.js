 
exports.up = function (knex, Promise) {
    return knex.schema.createTable('tasks', function (table) {
      table.increments('taskId')
      table.string('task')
      table.integer('project_id')
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tasks')
  }
  