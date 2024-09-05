import { create } from "zustand";

const useTaskStore = create((set) => ({
    tasks : [
        { id: 1, task: "Finish web development assignment", isDone: false },
        { id: 2, task: "Review JavaScript notes", isDone: false },
        { id: 3, task: "Prepare presentation for LMS project", isDone: false },
        { id: 4, task: "Walk the dog", isDone: false },
        { id: 5, task: "Read a chapter of a book", isDone: false },
        { id: 6, task: "Practice coding challenges", isDone: false }
      ],
      deleteTask: (taskId) => (set((state) => ({
        tasks : state.tasks.filter( el => el.id !== taskId)
        
      }))),
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