import React, { useRef, useState } from 'react'
import { motion, transform, useScroll } from "framer-motion"

const Task = ({task , handleDelete}) => {
    const [del , setDel ] = useState(false)

  const HandleDelete =() => {
    setDel(true)
    setTimeout(() => {
        
   handleDelete(task)

    }, "1000");

  }

        
    


    
  
  return (
    <div className={` ${del ? "translate-x-full duration-1000 opacity-0" : " "}  border justify-between items-center flex p-3 rounded mb-3 last:mb-3`}>
        <p>{task}</p>
        <button onClick={HandleDelete} className={`border hover:bg-red-400 border-red-600 bg-red-300 text-red-500 px-4 py-2 rounded-sm`}>Delete</button>
     
    
    </div>
  )
}

export default Task