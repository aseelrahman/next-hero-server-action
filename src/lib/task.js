import tasks from '../data/task.json'
export const getTasks = async() => {

    return tasks.tasks;
}

export const postTask = async (newTask) =>{
    newTask.id = tasks.length + 1;
    tasks.tasks.push(newTask);
    return{ok: true, message: "Task added successfully"}
}