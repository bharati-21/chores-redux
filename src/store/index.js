import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { humansReducer } from './humansSlice';

/*automatically applu middlewares
three in prod: 
- checks if accidentally mutating state, 
- import and export serialized object version of state as JSON, 
- redux thunk -- to dispatch functions to make AJAX calls
*/

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        humans: humansReducer
    }
})