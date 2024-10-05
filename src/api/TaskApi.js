import axios from "axios";

export const TasksApi = axios.create({
  
    headers : {"Content-Type" : "application/json"}
})