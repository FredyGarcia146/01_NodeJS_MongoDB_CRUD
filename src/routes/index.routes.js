import {Router} from 'express'
import {
    renderTasks,
    addTasks,
    editTasks,
    deleteTasks,
    toggleDoneTasks,
    editView
} from '../controllers/task.controller'

const router = Router()


router.get("/", renderTasks)

router.post("/tasks/add", addTasks)

router.post("/tasks/:id/edit", editTasks)
router.get("/tasks/:id/edit", editView)

router.get("/tasks/:id/delete", deleteTasks)

router.get("/tasks/:id/toggleDone", toggleDoneTasks)




export default router