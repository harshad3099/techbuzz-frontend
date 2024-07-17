import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Ensure this path is correct

const store = configureStore({
  reducer: rootReducer,
});

export default store;
