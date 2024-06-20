import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getPsychologists,
  addPsychologists,
  deletePsychologist,
} from './operations';

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState: {
    psychologists: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getPsychologists.fulfilled, (state, action) => {
        state.psychologists = action.payload;
      })
      .addCase(addPsychologists.fulfilled, (state, action) => {
        state.psychologists.push(action.payload);
      })
      .addCase(deletePsychologist.fulfilled, (state, action) => {
        state.psychologists = state.psychologists.filter(
          psychologist => psychologist.id !== action.payload.id
        );
      })
      .addMatcher(isAnyOf(...getRequests('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getRequests('pending')), handlePending)
      .addMatcher(isAnyOf(...getRequests('rejected')), handleRejected),
});

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const arrayRequests = [getPsychologists, addPsychologists, deletePsychologist];

const getRequests = type => arrayRequests.map(action => action[type]);

export const psychologistsReducer = psychologistsSlice.reducer;
