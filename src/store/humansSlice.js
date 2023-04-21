import { createSlice, nanoid } from '@reduxjs/toolkit';

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
    addHuman: (state, action) => {
      const human = createHuman(action.payload);
      state.push(human);
    }
  }
});

export const { reducer: humansReducer } = humansSlice;
