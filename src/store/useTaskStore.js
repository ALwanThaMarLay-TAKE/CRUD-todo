import { create } from "zustand";

const useTaskStore = create((set) => ({
    tasks : [
       
      ],
      deleteTask: (taskId) => (set((state) => ({
        tasks : state.tasks.filter( el => el.id !== taskId)
        
      }))),
      setTasks : (data) => (set({
        tasks : data
      })),
      addTask : (newTask) => (set((state) => {
        return {
            tasks : [...state.tasks , newTask]

        }
      })),
      doneTask : (taskId) => (set( (state) => {
        return {
            tasks : state.tasks.map( el => el.id === taskId? {...el, isDone : !el.isDone} : el)
        }
      } )),
      updateId : (update) => (set( (state) => ({
        tasks  : state.tasks.map( el => el.task === update.task ? {...el , id : update.id} : el )
      } )))

    
}))
export default useTaskStore;