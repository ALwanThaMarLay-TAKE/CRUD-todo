import { TasksApi } from "../api/TaskApi"

export const fetcher = async(url) => {
console.log('fetching')
        const res = await TasksApi.get(url)
      
        return res.data
    
      }