import { combineReducers } from '@reduxjs/toolkit';
// Import your reducers here
import someReducer from './someSlice'; // Replace with your actual reducers

const rootReducer = combineReducers({
  some: someReducer, // Add your reducers here
  // Example: user: userReducer,
});

export default rootReducer;
