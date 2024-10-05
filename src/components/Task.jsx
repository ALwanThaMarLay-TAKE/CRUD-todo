import React, { useContext, useRef, useState } from "react";

// import TasksContext from "../contexts/TasksContext";
import useTaskStore from "../store/useTaskStore";
import { TasksApi } from "../api/TaskApi";
import useSWRMutation from "swr/mutation";
import useSWR, { mutate } from "swr";
import { fetcher } from "../services/queries";

const Task = ({ task: { id, task, isDone } }) => {

  
  const {deleteTask , doneTask , tasks} = useTaskStore()
  const fetchCheckup = async (url, { arg: { id , task , isDone} }) => {

     new Error("failed checkup");
    const res = await TasksApi.put(url + "/" + id, {id , 
      task, isDone
    } );
    const data = await res.data;

    return data ;
  };

  const fetchDelete = async (url, { arg }) => {


    const res = await TasksApi.delete(url );

    const data = res.data;
    console.log("delete done");
    return data;
  };

  const { trigger, isMutating } = useSWRMutation(
    `${import.meta.env.VITE_BASE_URL}/tasks/${id}`,
    fetchDelete ,{
      revalidate :false
    }
 
  );
  const { trigger: updateCheckUp, isMutating: isChecking } = useSWRMutation(
    `${import.meta.env.VITE_BASE_URL}/tasks`,
    fetchCheckup,{
      onSuccess : () =>{
        console.log("successfully check")
      } ,
      onError : (e) => {
doneTask(id)
      } ,
    }
  );

  const HandleDelete = (e) => {
    if (confirm("Are you sure to Delete ?")) {
      try {
        trigger( );
        deleteTask(id)
      } catch (error) {
        addTask({ id, task, isDone })
      }
     
    }
  };

  const HandleCheckup = () => {
    const updateTask = {
      id,
      task,
      isDone  : !isDone
    }
    try{

      doneTask(id)
    updateCheckUp(
      updateTask,
      {
        revalidate: false,
        
        
      }
    );
  }catch{
    doneTask(id)
  }
}

  return (
    <div
      className={` 
   
       border justify-between items-center flex p-3 rounded mb-3 last:mb-3`}
    >
      <div className="flex items-center gap-3">
        {/* {isChecking ? (
          <l-ring
            size="15"
            stroke="2"
            bg-opacity="0"
            speed="2"
            color="black"
          ></l-ring>
        ) : */}
         
          <input
            type="checkbox"
      
            checked={isDone}
            onChange={HandleCheckup}
            className="size-5"
          />
        
    

        <p className={` ${isDone && " line-through text-gray-400"}`}>{task}</p>
      </div>
      <p>id-{id}</p>
      {isMutating ? (
        <l-ring
          size="15"
          stroke="2"
          bg-opacity="0"
          speed="2"
          color="black"
        ></l-ring>
      ) : (
        <button
          onClick={HandleDelete}
          className={`border hover:bg-red-400 border-red-600 bg-red-300 text-red-500 px-4 py-2 rounded-sm`}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default Task;
