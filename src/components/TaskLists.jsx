import React, { useContext, useEffect, useInsertionEffect, useRef, useState } from "react";
import Task from "./Task";
// import TasksContext from '../contexts/TasksContext';
import useTaskStore from "../store/useTaskStore";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { getTodos, infiniteFn } from "../services/queries";




const TaskLists = () => {
  // const {tasks} = useContext(TasksContext) no more context hook
  // const {tasks} = useTaskStore()
  // const { data, isLoading, isError , isFetching} = useQuery({
  // queryKey: ["tasks" , page],
  // queryFn: () =>  getTodos(page),
  // placeholderData : keepPreviousData
  // staleTime : 1000

  // });
  const loadMoreRef = useRef();

  const { data, isLoading, isError ,isFetchingNextPage, fetchNextPage , hasNextPage
   } = useInfiniteQuery({
    queryKey: ["tasks" , {}],
    queryFn: infiniteFn,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      if (allPages.length < 5) {
        return allPages.length + 1;
      } else {
        return undefined;
      }
    },
    

  },
);

  console.log(hasNextPage)
  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;
    const observer = new IntersectionObserver( (entries) => {
      if(entries[0].isIntersecting){
        fetchNextPage()
      }
    },{threshold : 1})
if(loadMoreRef.current){
  observer.observe(loadMoreRef.current)
}
    return () => {
      console.log('return fn working')
      if(loadMoreRef.current){
        observer.unobserve(loadMoreRef.current)
      }
    }
  } ,[hasNextPage , fetchNextPage]

  )

  return (
    <div>
      <h3 className=" text-xl font-bold font-mono mb-3">
        Tasks list ( Total {data?.length} , Done{" "}
        {data?.pages?.filter((el) => el.isDone).length})
      </h3>

      {data?.pages?.map((page) => {
        return page.data.map((el) => <Task key={el.id} task={el} />);
      })}

      {/* <div className=" flex gap-5">
        <button
          className="p-3 bg-blue-400 disabled:bg-red-400"
          disabled={page === 0}
          onClick={() => setPage((page) => page - 1)}
        >
          {" "}
          prev{" "}
        </button>
        <button
          className="p-3 bg-blue-400 disabled:bg-red-400"
          onClick={() => setPage((page) => page + 1)}
        >
          {" "}
          Next{" "}
        </button>
      </div> */}
      <div ref={loadMoreRef}>
        {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Scroll to load more' : 'No more todos'}
      </div>


    </div>
  );
};

export default TaskLists;
