import Task from '../models/Task'
export const renderTasks = async ( req, res) => {

    const tasks = await Task.find().lean()

    res.render('index',{tasks:tasks})
}

export const  addTasks = async (req, res) => {
    try {
        const task = Task(req.body)
        await task.save()
        res.redirect('/')
    }catch (e) {
        console.log(e)
    }
}

export const editTasks =async (req, res) => {
    try {
        const { id } = req.params
        await Task.findByIdAndUpdate(id, req.body)
        res.redirect('/')
    }catch (e) {
        console.log(e)
    }
}

export const deleteTasks =async (req, res) => {
    try {
        const { id } = req.params
        await Task.findByIdAndDelete(id)
        res.redirect('/')
    }catch (e) {
        console.log(e)
    }
}

export const  toggleDoneTasks = async (req, res) => {
    try {
        const { id } = req.params
        const tasks = await Task.findById(req.params.id).lean()
        tasks.done =!tasks.done

        await Task.findByIdAndUpdate(id, tasks)

        res.redirect('/')
    }catch (e) {
        console.log(e)
    }
}

export const editView =async (req, res) => {
    try {
        const tasks = await Task.findById(req.params.id).lean()
        res.render("edit",{tasks:tasks})
    }catch (e) {
        console.log(e)
    }
}
