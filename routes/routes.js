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

    res.render("kanban", 
    { 
        tasks: tasks,
        name : tasks[0].name,
        projectId : tasks[0].project_id
    }
    );
  });

//   <input type="hidden" value={{projectId}} name="projectId" />
});

router.post('/add-task/:id', (req, res) => {

 
    let newTask = {
        project_id: req.params.id, //hidden input on form
        task: req.body.task,
        task_status: req.body.task_status
    }
    console.log(newTask)
    db.addTask(newTask)
    .then(() => {
        res.redirect('/kanban/' + req.params.id)
    })
})

router.post('/update-task/:projectId/:id', (req, res) => {
    db.updateTask(req.params.id, req.body.task_status, req.body.task, req.body.user_name)
    .then(() => {
        res.redirect('/kanban/' + req.params.projectId)
    })
})


router.post('/delete-task/:projectId/:id', (req, res) => {
    db.deleteTask(req.params.id)
    .then(() => {
        res.redirect('/kanban/' + req.params.projectId)
    })
})

router.post('/add-project/:id', (req, res) => {
    let newProject = {
      name: req.body.name
    }
    db.addProject(newProject)
    .then(() => {
        res.redirect('/kanban/' + req.params.id)
    })
})


module.exports = router;
