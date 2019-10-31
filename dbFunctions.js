const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

function getAllProjects(db = database){
    return db('projects').select()
}

function getProject(id, db = database){
    return db('projects').where('projectId', id).first().then(project => {console.log(project)})
}


module.exports = {
    getAllProjects
}

1// getProjects(database)
getProject(2, database)