import React, { useContext, useEffect, useMemo, useState } from "react";
// import TasksContext from '../contexts/TasksContext'
import useTaskStore from "../store/useTaskStore";

import { ring } from "ldrs";
import { TasksApi } from "../api/TaskApi";
import useSWRMutation from "swr/mutation";
import useSWR from "swr";
import { fetcher } from "../services/queries";

const CreateTask = () => {
  // const [addLoading, setAddLoading] = useState(false)

  // Default values shown

  const [task, setTask] = useState("");

  ring.register();
  const handleTask = (e) => {
    setTask(e.target.value);
  };
  // const {setTasks , tasks} = useContext(TasksContext)
      const { addTask,updateId ,deleteTask  } = useTaskStore();

  //     const createTask =async (newTask) => {
  //       setAddLoading(true)
  //     const Res = await fetch("http://localhost:3000/tasks" , {
  //       method : "POST",
  //       headers : {"Content-Type" : "application/json"},
  //       body : JSON.stringify(newTask)
  //     })
  //     const data = await Res.json()
  // console.log(data)

  //     setAddLoading(false)

  // addTask(data)

  //     }
  const createTask = async (url, { arg }) => {
    if (Math.random() > 0.5) return;// * for test failure request
    const res = await TasksApi.post(url, arg);
    console.log("success");
    return res.data;
  };

 

  const { trigger, isMutating } = useSWRMutation(
    `${import.meta.env.VITE_BASE_URL}/tasks`,
    createTask,{
      revalidate : false
    }
    
    
  );

  const handleSubmit = async (event) => {
    if (task.trim()) {
      event.preventDefault();

      const newTask = {
        task: task,
        isDone: false,
      };

      const TempoTask = {
        id: Date.now(),
        task: task,
        isDone: false,
      };

      addTask(TempoTask);
      setTask("");
    try {

      const res = await trigger(newTask,{
     
      });
  
     updateId(res)
    } catch (error) {
      deleteTask(TempoTask.id)
    }
   


      


    }
  };

  return (
    <form className=" flex w-full">
      <input
        disabled={isMutating}
        type="text"
        value={task}
        onChange={handleTask}
        className="border flex-grow border-slate-500  bg-slate-200 py-2 px-4"
      />
      <button
        disabled={isMutating}
        onClick={handleSubmit}
        className="border border-slate-500 bg-slate-400 px-4 py-2"
      >
        {isMutating ? (
          <l-ring
            size="20"
            stroke="3"
            bg-opacity="0"
            speed="2"
            color="black"
          ></l-ring>
        ) : (
          "Add"
        )}
      </button>
    </form>
  );
};

export default CreateTask;
