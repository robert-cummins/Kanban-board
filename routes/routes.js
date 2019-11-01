const express = require("express");
const db = require("../dbFunctions");

const router = express.Router();

let projectArr

router.get("/", (req, res) => {
  db.getAllProjects().then(projects => {
      
    projectArr = projects

    res.render("home", {
      projects,
      projectArr
    });
  });
});


router.get("/kanban/:id", (req, res) => {
  db.getTask(req.params.id).then(task => {

    if (task.length == 0) {
        db.getProject(req.params.id).then(project => {
            res.render("kanban", {
                name: project.name,
                projectId: req.params.id,
                projectArr: projectArr
            })
        })
    } 
    
    else {
      db.getTasksForProject(req.params.id).then(tasks => {
        for (task of tasks) {
          if (task.task_status == "todo") {
            task.todo = "true";
          } else if (task.task_status == "doing") {
            task.doing = "true";
          } else if (task.task_status == "done") {
            task.done = "done";
          }
        }

        res.render("kanban", {
          tasks: tasks,
          name: tasks[0].name,
          projectId: tasks[0].project_id,
          projectArr: projectArr
        });
        
      });
    }
  });
});


router.post("/add-task/:id", (req, res) => {
  let newTask = {
    project_id: req.params.id, //hidden input on form
    task: req.body.task,
    task_status: req.body.task_status,
    user_name: req.body.user_name
  };

  db.addTask(newTask).then(() => {
    res.redirect("/kanban/" + req.params.id);
  });
});

router.post("/update-task/:projectId/:id", (req, res) => {
  db.updateTask(
    req.params.id,
    req.body.task_status,
    req.body.task,
    req.body.user_name
  ).then(() => {
    res.redirect("/kanban/" + req.params.projectId);
  });
});

router.post("/delete-task/:projectId/:id", (req, res) => {
  db.deleteTask(req.params.id).then(() => {
    res.redirect("/kanban/" + req.params.projectId);
  });
});

router.post("/add-project", (req, res) => {
  let newProject = {
    name: req.body.name
  };
  db.addProject(newProject).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
