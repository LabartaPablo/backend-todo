// controllers/task.controller.js

import Task from '../models/task.model.js';

export const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//*async function createTask(req,res) {
//  taskBodyValidation.create(req.body)
 // .then((user)) => 
//}


//crear async con mis variables