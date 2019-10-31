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

module.exports = router