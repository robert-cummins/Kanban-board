
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projectId: 1, name: 'Clean the house '},
        {projectId: 2, name: 'Build a house'}
       
      ]);
    });
};
