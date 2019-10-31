
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {taskId: 101, user_name: 'Cherise', task_status:'todo', task: 'Wash dishes', project_id: 1},
        {taskId: 102, user_name: 'Rob', task_status:'todo', task: 'Clean kitchen floor', project_id: 1},
        {taskId: 103, user_name: 'Ethan', task_status:'todo', task: 'Tidy bedroom', project_id: 1},
        {taskId: 104, user_name: 'Cass', task_status:'todo', task: 'CLean oven', project_id: 1},
        {taskId: 105, user_name: 'Cherise', task_status:'doing', task: 'Clean bathroom', project_id: 1},
        {taskId: 106, user_name: 'Rob', task_status:'doing', task: 'Vacuum house', project_id: 1},
        {taskId: 107, user_name: 'Ethan', task_status:'doing', task: 'Make bed', project_id: 1},

        {taskId: 108, user_name: 'Cass', task_status:'doing', task: 'Lay foundation', project_id: 2},
        {taskId: 109, user_name: 'Cherise', task_status:'doing', task: 'Lay blocks for house', project_id: 2},
        {taskId: 110, user_name: 'Rob', task_status:'doing', task: 'Build timber frame', project_id: 2},
        {taskId: 111, user_name: 'Ethan', task_status:'done', task: 'Tile the roof', project_id: 2},
        {taskId: 112, user_name: 'Cass', task_status:'done', task: 'Plaster the walls', project_id: 2},
        {taskId: 113, user_name: 'Cherise', task_status:'done', task: 'Add plumbing', project_id: 2},
        {taskId: 114, user_name: 'Rob', task_status:'done', task: 'Add electrics', project_id: 2},
      ]);
    });
};
