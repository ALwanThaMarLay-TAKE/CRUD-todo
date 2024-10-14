import { TasksApi } from "../api/TaskApi";

export const fetcher = async (url) => {
  console.log("fetching");
  const res = await TasksApi.get(url);

  return res.data;
};
export const addTodo = async (newTodo) => {
  if (Math.random() > 0.5) return;

  const res = await TasksApi.post(
    `${import.meta.env.VITE_BASE_URL}/tasks`,
    newTodo
  );
  return res.data;
};
export const getTodos = async (page) => {
  console.log("fetching");
  const res = await TasksApi.get(
    `${import.meta.env.VITE_BASE_URL}/tasks?_page=${page + 1}&_limit=3`
  );
  console.log(res.data);
  return res.data;
};
export const deleteTodo = async (id) => {
  if (Math.random() > 0.5) return;

  const res = await TasksApi.delete(
    `${import.meta.env.VITE_BASE_URL}/tasks/${id}`
  );
  return res.data;
};
export const checkTodo = async (updateTodo) => {
  if (Math.random() > 0.5) return;
  const res = await TasksApi.put(
    `${import.meta.env.VITE_BASE_URL}/tasks/${updateTodo.id}`,
    updateTodo
  );
  return res.data;
};
export const infiniteFn = async ({pageParam}) => {
  console.log("infinite");
  const res = await TasksApi.get(
    `${import.meta.env.VITE_BASE_URL}/tasks?_page=${pageParam}&_limit=4`
  );
  return res;
};
