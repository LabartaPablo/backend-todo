import { Router } from "express";
const router = Router();
import tasks, { statuses } from "../data/tasks.data.js";
import { v4 as uuidv4 } from 'uuid'; // Importa la función v4 de uuid --> El cual otorga un nuevo ID en POST.
import { taskBodyValidation } from "../middleware/tasks.middleware.js";


// 1. Muestra todas las tareas (independientemente de su estado)
router.get('/', (req, res) => {
    res.json(tasks);
});

// 2. Muestra todas las tareas que no están completadas
router.get('/pending', (req, res) => {
    res.json(tasks.filter((task) => task.status !== statuses.COMPLETED));
});


//3. CON ESTE CÓDIGO MUESTRO EN POSTMAN LA TAREA ESPECÍFICA POR ID
router.get('/:id', (req, res) => {
    const task = tasks.find((task) => task.id === req.params.id);
    if(!task) res.status(404).send({msg: "Tarea no encontrada"});
    res.json(task);
});



//4. AÑADIR CUALQUIER TAREA. pd NUNCA HAY QUE PONER EL ID
// REQUISITOS: EN EL JSON, ENTRE COMILLAS + NO PONGAS STATUSES.COMPLETED + NADA DE COMAS AL FINAL
// Ruta para agregar una tarea
router.post('/', (req, res) => {
    const newTask = {
        ...req.body,
        id: uuidv4()
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
    console.log('Tasks after POST:', tasks);
});


// 5. Ruta para actualizar una tarea por ID
router.put('/:id',taskBodyValidation, (req, res) => {
    console.log("updated task", req.query, req.params, req.body);
    res.json({ msg: "task updated succesfully"});
});

router.delete('/:id', (req, res) => {
    res.json({ msg: req.params.id + " has been deleted" });
});

export default router;
