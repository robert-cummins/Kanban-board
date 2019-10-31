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

router.get("/kanban/:id", (req, res) => {
  db.getProject(req.params.id).then(project => {
    res.render("kanban", {
      project
    });
  });
});

module.exports = router;
