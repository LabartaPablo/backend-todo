import { Router } from 'express'
const userRouter = Router()

userRouter.get('/', (req,res)=>{
    res.json({
        "user": "Pablo Labarta"
    })
})

//create

//buscar por id





export default userRouter;
