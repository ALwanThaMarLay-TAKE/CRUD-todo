import React, { useContext, useEffect, useMemo, useState } from 'react'
// import TasksContext from '../contexts/TasksContext'
import useTaskStore from '../store/useTaskStore'


import { ring } from 'ldrs'
const CreateTask = () => {
  const [addLoading, setAddLoading] = useState(false)


  
  // Default values shown
 
    const [task,setTask] = useState('')

ring.register()
    const handleTask =(e) => {
   

        setTask(e.target.value)
      
        
    }
    // const {setTasks , tasks} = useContext(TasksContext)
    const {addTask } = useTaskStore()

    const createTask =async (newTask) => {
      setAddLoading(true)
    const Res = await fetch("http://localhost:3000/tasks" , {
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(newTask)
    })
    const data = await Res.json()
console.log(data)
  
    setAddLoading(false)

addTask(data)

      
      
    }
    
 const handleSubmit  = (event) => {
  if(task.trim()){
  event.preventDefault()

  const newTask = {

    task : task,
    isDone : false
  }


createTask(newTask)

    // setTasks([...tasks,newTask]) no more context 
    setTask('')
    
  }
 }
    
  return (
    <form className=' flex w-full'>
        <input disabled={addLoading} type="text" value={task} onChange={handleTask} className='border flex-grow border-slate-500  bg-slate-200 py-2 px-4' />
        <button  disabled={addLoading}  onClick={handleSubmit} className='border border-slate-500 bg-slate-400 px-4 py-2' >{ addLoading ?   <l-ring
    size="20"
    stroke="3"
    bg-opacity="0"
    speed="2" 
    color="black" 
  ></l-ring>: "Add"}</button>
        
    </form>
  )
}

export default CreateTask