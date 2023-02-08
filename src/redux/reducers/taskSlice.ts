import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

export type taskListState = {
  id: string;
  list: [];
};

const initialState: taskListState = {
  id: '',
  list: [],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state: any, action) => {
      const newTask = {
        id: action.payload.id + nanoid(),
        list: action.payload.list,
      }
      state?.push(newTask);
    },
    deleteTask: (state: any, action) => {
      return state.filter((item) => item.id !== action.payload.id)
    },
    editTask: (state: any, action) => {
      state.map((item, index) => {
        if (state[index].id === action.payload.id) {
          item.list = action.payload.list;
        }
      });
    }
  }
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;