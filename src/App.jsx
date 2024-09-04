import React, { useState } from 'react'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TaskLists from './components/TaskLists'

const App = () => {

  const [tasks,setTasks] = useState( [
    { id: 1, task: "Finish web development assignment", isDone: false },
    { id: 2, task: "Review JavaScript notes", isDone: false },
    { id: 3, task: "Prepare presentation for LMS project", isDone: false },
    { id: 4, task: "Walk the dog", isDone: false },
    { id: 5, task: "Read a chapter of a book", isDone: false },
    { id: 6, task: "Practice coding challenges", isDone: false }
  ])
  console.log()
  const handleDelete=(id) => {
   
    setTasks(tasks.filter(el => el.id !== id))
  }
  const handleCheckup = (id) => {
    setTasks( tasks.map( task => task.id === id ? { ... task , isDone : !task.isDone } : task))
  }

  return (
    <div className='p-28 mx-auto min-w-fit w-[600px]'>
      <Heading/>
      <CreateTask tasks={tasks} setTasks={setTasks}/>
      <TaskLists jobs={tasks} handleDelete={handleDelete} handleCheckup={handleCheckup}/>

    </div>
  )
}

export default App