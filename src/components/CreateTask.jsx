import React, { useContext, useEffect, useMemo, useState } from 'react'
// import TasksContext from '../contexts/TasksContext'
import useTaskStore from '../store/useTaskStore'

const CreateTask = () => {


    const [task,setTask] = useState('')
    const handleTask =(e) => {
        setTask(e.target.value)
        
    }
    // const {setTasks , tasks} = useContext(TasksContext)
    const {addTask } = useTaskStore()
    
 const handleSubmit  = (event) => {
  event.preventDefault()

  const newTask = {
    id : Date.now(),
    task : task,
    isDone : false
  }
    if(newTask){
      addTask(newTask)
    // setTasks([...tasks,newTask]) no more context 
    setTask('')}
    
    
 }
    
  return (
    <form className=' flex w-full'>
        <input type="text" value={task} onChange={handleTask} className='border flex-grow border-slate-500  bg-slate-200 py-2 px-4' />
        <button  onClick={handleSubmit} className='border border-slate-500 bg-slate-400 px-4 py-2' >Add</button>
        
    </form>
  )
}

export default CreateTask