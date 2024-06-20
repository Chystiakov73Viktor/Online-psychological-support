import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAddPsychologists,
  fetchDeletePsychologist,
  fetchGetPsychologists,
} from '../../services/db';
import psychologists from '../../services/psychologists.json';

export const getPsychologists = createAsyncThunk(
  'psychologists/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchGetPsychologists();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPsychologists = createAsyncThunk(
  'psychologists/addPsychologists',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAddPsychologists(psychologists);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePsychologist = createAsyncThunk(
  'psychologists/deletePsychologist',
  async (id, { rejectWithValue }) => {
    try {
      await fetchDeletePsychologist(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
