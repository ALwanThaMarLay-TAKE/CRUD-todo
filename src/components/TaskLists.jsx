import React, { useContext } from 'react'
import Task from './Task';
// import TasksContext from '../contexts/TasksContext';
import useTaskStore from '../store/useTaskStore';

const TaskLists = () => {
  // const {tasks} = useContext(TasksContext) no more context hook
  const {tasks} = useTaskStore()


      

  return (
    <div>
        <h3 className=' text-xl font-bold font-mono mb-3'>Tasks list  ( Total {tasks.length} , Done {tasks.filter( el => el.isDone).length})</h3>
        <div>{
            tasks.map(el => <Task  key={el.id}  task={el}/>)}</div>

    </div>
  )
}

export default TaskLists