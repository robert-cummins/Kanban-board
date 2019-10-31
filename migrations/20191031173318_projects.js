 
exports.up = function (knex, Promise) {
    return knex.schema.createTable('projects', function (table) {
      table.increments('projectId')
      table.string('name')
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('projects')
  }
  