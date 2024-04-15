import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [
    {
      id: 1,
      title: "Complete report",
      description: "Finish the quarterly report",
      status: "To Do",
      priority: "Medium",
    },
    {
      id: 2,
      title: "Prepare presentation",
      description: "Create slides for the meeting",
      status: "To Do",
      priority: "High",
    },
    {
      id: 3,
      title: "Send emails",
      description: "Respond to client inquiries",
      status: "To Do",
      priority: "Low",
    },
  ],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    markTaskAsDone: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.status = "Done";
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
   
    },
    markTaskAsInProgress: (state, action) => { 
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.status = "In Progress";
      }
    },
  },
});

export const { addTask, markTaskAsDone, deleteTask, markTaskAsInProgress } = tasksSlice.actions;
export default tasksSlice.reducer;
