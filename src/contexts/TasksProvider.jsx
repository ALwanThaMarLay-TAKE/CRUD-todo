// import React, { useState } from 'react'
// import TasksContext from './TasksContext'

// const TasksProvider = ({children}) => {

//     const [tasks,setTasks] = useState( [
//         { id: 1, task: "Finish web development assignment", isDone: false },
//         { id: 2, task: "Review JavaScript notes", isDone: false },
//         { id: 3, task: "Prepare presentation for LMS project", isDone: false },
//         { id: 4, task: "Walk the dog", isDone: false },
//         { id: 5, task: "Read a chapter of a book", isDone: false },
//         { id: 6, task: "Practice coding challenges", isDone: false }
//       ])
    
//       const handleDelete=(id) => {
       
//         setTasks(tasks.filter(el => el.id !== id))
//       }
//       const handleCheckup = (id) => {
//         setTasks( tasks.map( task => task.id === id ? { ... task , isDone : !task.isDone } : task))
//       }
    


//   return (
//     <TasksContext.Provider value={{tasks, setTasks , handleCheckup , handleDelete, }}>
// {children}
//     </TasksContext.Provider>
//   )
// }

// export default TasksProvider

// no more use context hook