import React, { useContext } from 'react'
import Task from './Task';
import TasksContext from '../contexts/TasksContext';

const TaskLists = ({jobs ,handleDelete,handleCheckup}) => {
  const {tasks} = useContext(TasksContext)


      

  return (
    <div>
        <h3 className=' text-xl font-bold font-mono mb-3'>Tasks list  ( Total {tasks.length} , Done {tasks.filter( el => el.isDone).length})</h3>
        <div>{
            tasks.map(el => <Task  key={el.id}  task={el}/>)}</div>

    </div>
  )
}

export default TaskLists