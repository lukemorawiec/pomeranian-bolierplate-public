import { createSlice } from '@reduxjs/toolkit';

function saveInLocalStorage(counterValue) {
  window.localStorage.setItem('redux-counter-value', counterValue);
}

function getFromLocalStorage() {
  const valueFromStorage = window.localStorage.getItem('redux-counter-value');
  console.log('valueFromStorage', valueFromStorage);
  return Number(valueFromStorage) || 0;
}

const initialState = {
  value: getFromLocalStorage(),
  extras: {
    overFive: '',
    isExtraButtonClicked: false,
  },
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      saveInLocalStorage(state.value);

      if (state.value > 5) {
        state.extras.overFive = 'liczba jest większa od 5';
      }
    },
    decrement: (state) => {
      state.value -= 1;
      saveInLocalStorage(state.value);

      if (state.value <= 5) {
        state.extras.overFive = '';
      }
    },
    incrementByAmount: (state, action) => {
      console.log('action', action);
      const { passedValue, extraButtonClicked } = action.payload;
      state.value += passedValue;
      saveInLocalStorage(state.value);
      state.extras.isExtraButtonClicked = extraButtonClicked;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
