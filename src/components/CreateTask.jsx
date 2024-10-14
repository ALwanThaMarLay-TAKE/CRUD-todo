import React, { useContext, useEffect, useMemo, useState } from 'react'
// import TasksContext from '../contexts/TasksContext'
import useTaskStore from '../store/useTaskStore'
import { useMutation, useQueries, useQueryClient } from '@tanstack/react-query'
import { addTodo } from '../services/queries'

const CreateTask = () => {


    const [task,setTask] = useState('')
    const handleTask =(e) => {
        setTask(e.target.value)
        
    }
    const queryClient = useQueryClient()
    // const {setTasks , tasks} = useContext(TasksContext)
    // const {addTask } = useTaskStore()
    const {mutate : AddTodo , isPending} = useMutation( {
      mutationFn : addTodo,
      onMutate: async (newTodo) => {
        
        await queryClient.cancelQueries({ queryKey: ['tasks'] })
    
        const previoustasks = queryClient.getQueryData(['tasks'])
    
        queryClient.setQueryData(['tasks'], (old) => [...old, {id : Date.now() , ...newTodo}])
    
        return { previoustasks }
      },
      onError: (err, newTodo, context) => {
        console.log("error add")
        queryClient.setQueryData(['tasks'], context.previoustasks)
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['tasks'] })
      },
    })
 const handleSubmit  = (event) => {
  event.preventDefault()

  const newTask = {
 
    task : task,
    isDone : false
  }
    if(newTask){
      AddTodo(newTask)
    // setTasks([...tasks,newTask]) no more context 
    setTask('')}
    
    
 }
    
  return (
    <form className=' flex w-full'>
        <input type="text" value={task} onChange={handleTask} className='border flex-grow border-slate-500  bg-slate-200 py-2 px-4' />
        <button disabled={isPending}  onClick={handleSubmit} className='border border-slate-500 bg-slate-400 px-4 py-2' >Add</button>
        
    </form>
  )
}

export default CreateTask