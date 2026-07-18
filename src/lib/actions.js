   'use server'
import { revalidatePath } from "next/cache";
import { postTask } from "./task";
import { redirect } from "next/navigation";


export const createATask = async (formData) => {
    // const title = formData.get('title')
    // const description = formData.get('description')
    // const priority = formData.get('priority')
    // const status = formData.get('status')
    // const assignedTo = formData.get('assignedTo')

    // const newTask = {title, description, priority, status, assignedTo}

    const newTask = Object.fromEntries(formData.entries())

    console.log('Adding a task with name: ', newTask);

    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/tasks')
    }
    return res;
    
}

export const newTaskAction = async (formData) => {
 
    const newTask = Object.fromEntries(formData.entries());

    console.log('Adding a task with name: ', newTask);

    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/tasks');
        redirect('/tasks');
    }
    
    return res;
}