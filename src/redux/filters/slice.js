import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',

  initialState: {
    value: '',
  },

  reducers: {
    setFilterContact: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilterContact } = filtersSlice.actions;
export default filtersSlice.reducer;
