import React from 'react'
import Task from './Task';

const TaskLists = ({jobs ,handleDelete}) => {


      

      
  return (
    <div>
        <h3 className=' text-xl font-bold font-mono mb-3'>Tasks list</h3>
        <div>{
            jobs.map(el => <Task handleDelete={handleDelete}  key={el}  task={el}/>)}</div>

    </div>
  )
}

export default TaskLists