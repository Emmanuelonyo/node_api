const Task = require('../models/tasks')

const getAllTasks = async (req, res) =>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    }catch(err){
        res.status(500).json({msg:err.message})
    }
    
}


const getTasks = async (req, res) =>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No task with ID : ${taskID}` })
        }
        res.status(200).json({task})
    }catch(err){

        res.status(500).json({msg:err.message})
    }
}

const createTasks = async (req, res) =>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json( {task} )
    }catch(err){
        res.status(500).json({msg:err.message})
    }
}

const updateTasks = async (req, res) =>{
    try{
        const {id:taskID} = req.params
        
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new:true, 
            runValidators:true
        })

        if(!taskID){
            return res.status(404).json({msg:err.message})
        }

        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err.message})
    }
}

const deleteTasks = async (req, res) =>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No task with ID : ${taskID}` })
        }

        res.status(200).json({status:"success", message:"Task Deleted successfuly"})
    }catch(err){
        res.status(500).json({msg:err.message})
    }
}


module.exports =  {
    getAllTasks,
    getTasks,
    createTasks,
    deleteTasks,
    updateTasks
}