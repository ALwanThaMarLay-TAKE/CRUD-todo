import React, { useState } from 'react'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TaskLists from './components/TaskLists'
// import TasksProvider from './contexts/TasksProvider'

const App = () => {


  return (
    // <TasksProvider> this is for context hook , no more use 
    <div className='p-28 mx-auto min-w-fit w-[600px]'>
      <Heading/>
      <CreateTask />
      <TaskLists />

    </div>
    // </TasksProvider>
  )
}

export default App