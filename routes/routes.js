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
      name: project[0].name
    });
  });
});

module.exports = router;
