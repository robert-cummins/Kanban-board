
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {taskId: 101, task_status:'todo', task: 'Wash dishes', project_id: 1},
        {taskId: 102, task_status:'todo', task: 'Clean kitchen floor', project_id: 1},
        {taskId: 103, task_status:'todo', task: 'Tidy bedroom', project_id: 1},
        {taskId: 104, task_status:'todo', task: 'CLean oven', project_id: 1},
        {taskId: 105, task_status:'doing', task: 'Clean bathroom', project_id: 1},
        {taskId: 106, task_status:'doing', task: 'Vacuum house', project_id: 1},
        {taskId: 107, task_status:'doing', task: 'Make bed', project_id: 1},

        {taskId: 108, task_status:'doing', task: 'Lay foundation', project_id: 2},
        {taskId: 109, task_status:'doing', task: 'Lay blocks for house', project_id: 2},
        {taskId: 110, task_status:'doing', task: 'Build timber frame', project_id: 2},
        {taskId: 111, task_status:'done', task: 'Tile the roof', project_id: 2},
        {taskId: 112, task_status:'done', task: 'Plaster the walls', project_id: 2},
        {taskId: 113, task_status:'done', task: 'Add plumbing', project_id: 2},
        {taskId: 114, task_status:'done', task: 'Add electrics', project_id: 2},
      ]);
    });
};
