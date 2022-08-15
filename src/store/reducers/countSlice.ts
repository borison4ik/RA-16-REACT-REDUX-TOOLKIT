import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountSate {
  value: number;
}

const initialState: CountSate = {
  value: 0,
};

export const countSlice = createSlice({
  name: 'countSlice',
  initialState,
  reducers: {
    inputNumber(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export default countSlice.reducer;
export const { inputNumber } = countSlice.actions;
