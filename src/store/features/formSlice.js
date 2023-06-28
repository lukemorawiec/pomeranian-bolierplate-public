import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = formSlice.actions;

export default formSlice.reducer;
