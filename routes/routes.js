const express = require('express')
const df = require('../dbFunctions')

const router = express.Router()

router.get('/', (req, res) => {
    df.getAllProjects()
    .then(projects => {
        res.render('home', {
            projects
        })
    })
})

router.get('/kanban/:id', (req, res) => {
    df.getAllProjects(req.params.id, db = database)
    .then(project => {
        res.render('kanban', {
            project
        })
    })
})

module.exports = router