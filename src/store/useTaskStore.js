import { create } from "zustand";

const useTaskStore = create((set) => ({
    tasks : [
       
      ],
      deleteTask: (taskId) => (set((state) => ({
        tasks : state.tasks.filter( el => el.id !== taskId)
        
      }))),
      setTasks : (tasks) => (set({
        tasks : tasks
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
      } ))

    
}))
export default useTaskStore;