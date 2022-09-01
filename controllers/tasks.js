const Task = require('../models/tasks')

const getAllTasks = (req, res) =>{
    res.json("All Tasks")
}


const getTasks = (req, res) =>{
    res.json({id:req.params.id})
}

const createTasks = (req, res) =>{
    res.json(req.body)
}

const updateTasks = (req, res) =>{
    res.json({id:req.params.id})
}

const deleteTasks = (req, res) =>{
    res.json({id:req.params.id})
}


module.exports =  {
    getAllTasks,
    getTasks,
    createTasks,
    deleteTasks,
    updateTasks
}