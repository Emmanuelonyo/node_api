const Task = require('../models/tasks')

const getAllTasks = async (req, res) =>{
    const task = await Task.create(req.body)
    res.status(201).json( {task} )
    
}


const getTasks = (req, res) =>{
    res.json({id:req.params.id})
}

const createTasks = async (req, res) =>{
    
    const task = await Task.create(req.body)
    res.status(201).json( {task} )
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