import React, { useContext, useRef, useState } from "react";

// import TasksContext from "../contexts/TasksContext";
import useTaskStore from "../store/useTaskStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo , checkTodo } from "../services/queries";

const Task = ({ task: { id, task, isDone } }) => {

  // const { handleCheckup, handleDelete } = useContext(TasksContext); no more context hook
  // const {doneTask , deleteTask} = useTaskStore()
 const queryClient = useQueryClient()
  const {mutate : DeleteTodo , isPending} = useMutation({
    mutationFn : deleteTodo ,
    onSuccess : () => {
      console.log("success delete")
      queryClient.invalidateQueries({queryKey : ["tasks"]})
    }, 
    onError : (err , variable , context) => {
      console.log("err update")

      queryClient.setQueryData(["tasks" ], context.previoustasks)
    },
    onMutate: async (updateTodo) => {
        
      await queryClient.cancelQueries({ queryKey: ['tasks'] })
  
      const previoustasks = queryClient.getQueryData(['tasks'])
  
      queryClient.setQueryData(['tasks'], (old) => old.filter( el => el.id !== id ))
  
      return { previoustasks }
    },
  })
  const {mutate : UpdateTodo , isPending : isUpdating} = useMutation({
    mutationFn : checkTodo,
    onSuccess : () => {
      console.log("success check")
      queryClient.invalidateQueries({queryKey : ["tasks"]})
    
    },
    onError : (err , variable , context) => {
      console.log("err delete")

      queryClient.setQueryData(["tasks" ], context.previoustasks)
    },
    onMutate: async (updateTodo) => {
        
      await queryClient.cancelQueries({ queryKey: ['tasks'] })
  
      const previoustasks = queryClient.getQueryData(['tasks'])
  
      queryClient.setQueryData(['tasks'], (old) => old.map( el => el.id === id ? { ...el , isDone : !el.isDone} : el))
  
      return { previoustasks }
    },
    
  })
  const HandleDelete = () => {
    if (confirm("Are you sure to Delete ?")) {
DeleteTodo(id)

    }
  };

  const HandleCheckup = () => {
    const updateTodo = {
      id , 
      task ,
      isDone : !isDone
    }
UpdateTodo(updateTodo)
  };

  return (
    <div
      className={`
     border justify-between items-center flex p-3 rounded mb-3 last:mb-3`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name=""
          id=""
          checked={isDone}
          onChange={HandleCheckup}
          className="size-5"
        />

        <p className={` ${isDone && " line-through text-gray-400"}`}>{task}</p>
      </div>
      <p>{id}</p>
      <button
        onClick={HandleDelete}
        disabled={isPending}
        className={`border hover:bg-red-400 border-red-600 bg-red-300 text-red-500 px-4 py-2 rounded-sm`}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
