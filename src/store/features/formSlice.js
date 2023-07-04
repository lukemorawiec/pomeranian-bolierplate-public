import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '',
  name: '',
  email: '',
  additionalStuff: {
    environment: false,
    github: false,
  },
  payment: 'blik',
  rules: false,
  marketing: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setValue: (state, action) => {
      const { fieldName, fieldValue } = action.payload;
      state[fieldName] = fieldValue;
    },
    setAdditionalStuffValue: (state, action) => {
      const { fieldName, fieldValue } = action.payload;
      state.additionalStuff[fieldName] = fieldValue;
    },
  },
});

export const { setValue, setAdditionalStuffValue } = formSlice.actions;

export default formSlice.reducer;
