import { createSlice, nanoid } from '@reduxjs/toolkit';
import { assignToUser } from './tasksSlice';

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: []
});

const initialState = [
  createHuman('John'),
  createHuman('Jane'),
  createHuman('Marc'),
  createHuman('Steve')
];

const humansSlice = createSlice({
  name: 'humans',
  initialState,
  reducers: {
    add: (state, action) => {
      const human = createHuman(action.payload);
      state.push(human);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(assignToUser, (state, action) => {
      const { taskId, humanId } = action.payload;

      for (const human of state) {
        if (human.id === humanId) {
          human.taskIds.push(taskId);
        } else {
          human.taskIds = human.taskIds.filter((id) => id !== taskId);
        }
      }
    });
  }
});

export const { reducer: humansReducer } = humansSlice;
export const {
  actions: { add }
} = humansSlice;
