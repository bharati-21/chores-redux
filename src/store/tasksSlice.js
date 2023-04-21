import { createSlice, nanoid } from '@reduxjs/toolkit';

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: ''
});

const initialState = [createTask('Order book'), createTask('Water plants')];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = createTask(action.payload);
      state.push(task);
    }
  }
});

export const { reducer: tasksReducer } = tasksSlice;
