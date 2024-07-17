import { createSlice } from '@reduxjs/toolkit';

const someSlice = createSlice({
  name: 'some',
  initialState: {},
  reducers: {
    // Define your reducers here
  },
});

export const { actions } = someSlice;
export default someSlice.reducer;
