import React, { useState } from 'react'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TaskLists from './components/TaskLists'

const App = () => {

  const [tasks,setTasks] = useState([
    "Finish web development assignment",
    "Review JavaScript notes",
    "Prepare presentation for LMS project",
    "Walk the dog",
    "Read a chapter of a book",
    "Practice coding challenges"
  ])
  const handleDelete=(job) => {
    setTasks(tasks.filter(el => el !== job))
  }
  console.log(tasks)
  return (
    <div className='p-28 mx-auto min-w-fit w-[600px]'>
      <Heading/>
      <CreateTask tasks={tasks} setTasks={setTasks}/>
      <TaskLists jobs={tasks} handleDelete={handleDelete}/>

    </div>
  )
}

export default App