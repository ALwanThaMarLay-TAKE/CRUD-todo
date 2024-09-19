import React, { useContext, useRef, useState } from "react";

// import TasksContext from "../contexts/TasksContext";
import useTaskStore from "../store/useTaskStore";

const Task = ({ task: { id, task, isDone } }) => {
  const [del, setDel] = useState(false);
  // const { handleCheckup, handleDelete } = useContext(TasksContext); no more context hook
  const { doneTask, deleteTask } = useTaskStore();
  const [checkLoading, setCheckLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchCheckup = async (id, isDone) => {
    setCheckLoading(true);
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isDone: !isDone,
      }),
    });
    const data = await res.json();
    setCheckLoading(false);
    doneTask(id);
  };
  const fetchDelete = async (id) => {
    setDeleteLoading(true)
    const res = await fetch(`http://localhost:3000/tasks/${id}`,{
      method : "DELETE",
      
    })
    const data = await res.json()
    setDeleteLoading(false)
    setDel(true)
  }

  const HandleDelete = () => {
    if (confirm("Are you sure to Delete ?")) {
fetchDelete(id)
      // setTimeout(() => {
      //   deleteTask(id);
      // }, "1000");
    }
  };

  const HandleCheckup = () => {
    fetchCheckup(id, isDone);
  };

  return (
    <div
      onTransitionEnd={() => {
        console.log("delete mal");
        deleteTask(id);
      }}
      className={` ${
        del ? "translate-x-full duration-1000 opacity-0" : " "
      }  border justify-between items-center flex p-3 rounded mb-3 last:mb-3`}
    >
      <div className="flex items-center gap-3">
        {checkLoading ? (
          <l-ring
            size="15"
            stroke="2"
            bg-opacity="0"
            speed="2"
            color="black"
          ></l-ring>
        ) : (
          <input
            type="checkbox"
            name=""
            id=""
            checked={isDone}
            onChange={HandleCheckup}
            className="size-5"
          />
        )}

        <p className={` ${isDone && " line-through text-gray-400"}`}>{task}</p>
      </div>
      {deleteLoading ?     <l-ring
            size="15"
            stroke="2"
            bg-opacity="0"
            speed="2"
            color="black"
          ></l-ring> :   <button
          onClick={HandleDelete}
          className={`border hover:bg-red-400 border-red-600 bg-red-300 text-red-500 px-4 py-2 rounded-sm`}
        >
          Delete
        </button> }
    
    </div>
  );
};

export default Task;
