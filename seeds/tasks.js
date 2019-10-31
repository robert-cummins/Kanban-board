
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {taskId: 101, task: 'Wash dishes', project_id: 1},
        {taskId: 102, task: 'Clean kitchen floor', project_id: 1},
        {taskId: 103, task: 'Tidy bedroom', project_id: 1},
        {taskId: 104, task: 'CLean oven', project_id: 1},
        {taskId: 105, task: 'Clean bathroom', project_id: 1},
        {taskId: 106, task: 'Vacuum house', project_id: 1},
        {taskId: 107, task: 'Make bed', project_id: 1},

        {taskId: 108, task: 'Lay foundation', project_id: 2},
        {taskId: 109, task: 'Lay blocks for house', project_id: 2},
        {taskId: 110, task: 'Build timber frame', project_id: 2},
        {taskId: 111, task: 'Tile the roof', project_id: 2},
        {taskId: 112, task: 'Plaster the walls', project_id: 2},
        {taskId: 113, task: 'Add plumbing', project_id: 2},
        {taskId: 114, task: 'Add electrics', project_id: 2},
      ]);
    });
};
