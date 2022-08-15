import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilesSate {
  files: string[];
}

const initialState: FilesSate = {
  files: [],
};

export const filesSlice = createSlice({
  name: 'filesSlice',
  initialState,
  reducers: {
    chooseFiles(state, action: PayloadAction<string>) {
      state.files.unshift(action.payload);
    },
  },
});

export default filesSlice.reducer;
export const { chooseFiles } = filesSlice.actions;
