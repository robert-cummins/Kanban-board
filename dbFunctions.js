const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const database = require("knex")(config);

function getAllProjects(db = database) {
  return db("projects").select();
}

function getProject(projectId, db = database) {
  return db("projects")
    .where("projectId", projectId)
    .first();
}

function getTask(projectId, db = database) {
  return db("tasks")
    .where("project_id", projectId)
    .select()
}

function getTasksForProject(projectId, db = database) {
    return db("projects")
    .where("projectId", projectId)
    .join("tasks", "projects.projectId", "project_id")
    .select();
  
}

function addTask(task, db = database){
    return db('tasks').insert(task)
}

function updateTask(id, status, task, user_name, db = database){
    return db('tasks')
        .where("taskId", id)
        .update({task_status: status, task: task, user_name: user_name})
        
}

function deleteTask(id, db = database){
    return db('tasks')
    .where('taskId', id).delete()
}

function addProject(project, db = database){
    return db('projects').insert(project)
}


    


module.exports = {
  getAllProjects,
  getProject,
  getTasksForProject,
  addTask,
  updateTask,
  deleteTask,
  addProject,
  getTask
};
