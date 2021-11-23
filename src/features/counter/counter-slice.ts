// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // It is okay to do this because immer makes it immutable under the hood
    // increment
    incremented(state) {
      state.value++
    },
    // decrement
    decremented(state) {
      state.value++
    },

    // Add amount
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    }
  }
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer; 