import React, { useEffect, useMemo, useState } from 'react'

const CreateTask = ({setTasks , tasks}) => {
    const [task,setTask] = useState('')
    const handleTask =(e) => {
        setTask(e.target.value)
        
    }
    
 const handleSubmit  = () => {
    if(task){
    setTasks([...tasks,task])
    setTask('')}
    
    
 }
    
  return (
    <div className=' flex w-full'>
        <input type="text" value={task} onChange={handleTask} className='border flex-grow border-slate-500  bg-slate-200 py-2 px-4' />
        <button onClick={handleSubmit} className='border border-slate-500 bg-slate-400 px-4 py-2'>Add</button>
        
    </div>
  )
}

export default CreateTask