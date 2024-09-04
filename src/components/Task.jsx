import React, { useRef, useState } from 'react'
import { motion, transform, useScroll } from "framer-motion"

const Task = ({task:{id,task,isDone} , handleDelete ,handleCheckup} ) => {
    const [del , setDel ] = useState(false)

  const HandleDelete = () => {
    if(confirm("Are you sure to Delete ?")){
      setDel(true)
      setTimeout(() => {
          
     handleDelete(id)
  
      }, "1000");
    
    }

  }

        const HandleCheckup =() => {
          handleCheckup(id)
          
        }
    


    
  
  return (
    <div className={` ${del ? "translate-x-full duration-1000 opacity-0" : " "}  border justify-between items-center flex p-3 rounded mb-3 last:mb-3`}>
       <div className="flex items-center gap-3">
        <input type="checkbox" name="" id="" checked={isDone} onChange={HandleCheckup} className='size-5'/>

        <p className={` ${isDone && ' line-through text-gray-400'}`}>{task}</p>
       </div>
        <button onClick={HandleDelete} className={`border hover:bg-red-400 border-red-600 bg-red-300 text-red-500 px-4 py-2 rounded-sm`}>Delete</button>
     
    
    </div>
  )
}

export default Task