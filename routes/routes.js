const express = require("express");
const db = require("../dbFunctions");

const router = express.Router();

router.get("/", (req, res) => {
  db.getAllProjects().then(projects => {
    res.render("home", {
      projects
    });
  });
});

router.get("/", (req, res) => {
  db.getAllProjects().then(projects => {
    res.render("home", {
      projects
    });
  });
});
//don't really need this, same as below but without info of tasks todo.
// router.get('/kanban/:id', (req, res) => {
//     db.getProject(req.params.id)
//     .then(project => {
//         res.render('kanban', {
//             project
//         })
//     })
// })

router.get("/kanban/:id", (req, res) => {
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

    res.render("kanban", { tasks: tasks });
  });
});

module.exports = router;
