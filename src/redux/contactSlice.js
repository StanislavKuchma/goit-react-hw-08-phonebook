import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { changeFilter } = contactSlice.actions;
export const contacts = contactSlice.reducer;
