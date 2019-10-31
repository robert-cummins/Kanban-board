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
  db.getTasksForProject(req.params.id).then(project => {
    // let data = {
    //     projects: project,
    //     name: project[0].name
  
    res.render("kanban", {
      projects: project,
      name: project[0].name,
    });
  });

//   <input type="hidden" value={{projectId}} name="projectId" />
});

router.post('/add-task', (req, res) => {

 
    let newTask = {
        taskId: req.body.projectId, //hidden input on form
        task: req.body.task,
        status: req.body.status
    }
    console.log(newTask)
    df.addTask(newTask)
    .then(() => {
        res.redirect('/')
    })
})



module.exports = router;
