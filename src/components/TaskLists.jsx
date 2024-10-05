import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
// import TasksContext from '../contexts/TasksContext';
import useTaskStore from "../store/useTaskStore";
import SkeletonLoading from "./SkeletonLoading";
import useSWR from "swr";
import axios from "axios";
import { TasksApi } from "../api/TaskApi";
import { fetcher } from "../services/queries";

const TaskLists = () => {
  // const {tasks} = useContext(TasksContext) no more context hook
  const {  setTasks , tasks } = useTaskStore();
  // const [loading, setLoading] = useState(false);



  const {data,isLoading } = useSWR(`${import.meta.env.VITE_BASE_URL}/tasks` , fetcher)
  
  useEffect(() => {
    setTasks(data)
  },[isLoading])






  // const fetchTask = async () => {

  //   setLoading(true);

  //   const res = await fetch("http://localhost:3000/tasks");
  //   const data = await res.json();
  //   setLoading(false);

  //   setTasks(data);
  // };
  // useEffect(() => {
  //   fetchTask();

  // }, []);

  return (
    
    <div>
      <h3 className=" text-xl font-bold font-mono mb-3">
        Tasks list ( Total {tasks?.length} , Done{" "}
        {tasks?.filter((el) => el.isDone).length})
      </h3>
      {isLoading &&  <SkeletonLoading />}
      <div>
 
        {tasks?.map((el) => (
          <Task key={el.id} task={el} />
        ))}
      </div>

     
    </div>
  
  );
};

export default TaskLists;
