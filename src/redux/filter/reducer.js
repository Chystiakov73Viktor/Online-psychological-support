import { createSlice } from '@reduxjs/toolkit';
import { filterPsychologists } from './operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
    filteredPsychologists: [],
    filteredFavorites: [],
  },
  reducers: {
    setPsychologistsFiltered(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(filterPsychologists.fulfilled, (state, action) => {
      const { filteredData, type } = action.payload;
      if (type === 'favorites') {
        state.filteredFavorites = filteredData;
      } else {
        state.filteredPsychologists = filteredData;
      }
    });
  },
});

export const { setPsychologistsFiltered } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
