import React from 'react'
import Task from './Task';

const TaskLists = ({jobs ,handleDelete,handleCheckup}) => {


      

  return (
    <div>
        <h3 className=' text-xl font-bold font-mono mb-3'>Tasks list  ( Total {jobs.length} , Done {jobs.filter( el => el.isDone).length})</h3>
        <div>{
            jobs.map(el => <Task handleCheckup={handleCheckup} handleDelete={handleDelete}  key={el.id}  task={el}/>)}</div>

    </div>
  )
}

export default TaskLists