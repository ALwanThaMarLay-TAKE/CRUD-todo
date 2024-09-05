import React, { useContext, useRef, useState } from "react";

// import TasksContext from "../contexts/TasksContext";
import useTaskStore from "../store/useTaskStore";

const Task = ({ task: { id, task, isDone } }) => {
  const [del, setDel] = useState(false);
  // const { handleCheckup, handleDelete } = useContext(TasksContext); no more context hook
  const {doneTask , deleteTask} = useTaskStore()

  const HandleDelete = () => {
    if (confirm("Are you sure to Delete ?")) {
      setDel(true);
      setTimeout(() => {
        deleteTask(id);
      }, "1000");
    }
  };

  const HandleCheckup = () => {
    doneTask(id);
  };

  return (
    <div
      className={` ${
        del ? "translate-x-full duration-1000 opacity-0" : " "
      }  border justify-between items-center flex p-3 rounded mb-3 last:mb-3`}
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
      <button
        onClick={HandleDelete}
        className={`border hover:bg-red-400 border-red-600 bg-red-300 text-red-500 px-4 py-2 rounded-sm`}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
