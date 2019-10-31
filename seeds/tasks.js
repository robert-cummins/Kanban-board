
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
        {taskId: 107, task: 'Make bed', project_id: 1}
      ]);
    });
};
