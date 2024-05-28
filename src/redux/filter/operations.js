import { createAsyncThunk } from "@reduxjs/toolkit";

export const filterPsychologists = createAsyncThunk(
  'psychologists/filter',
  async ({ filter, type }, { getState }) => {
    const state = getState();
    const data = type === 'favorites' ? state.favorites.favorites : state.psychologists.psychologists;
    let filteredData = [];

    switch (filter) {
      case "Not popular":
        filteredData = data.filter(item => item.rating < 4.75);
        break;
      case "Popular":
        filteredData = data.filter(item => item.rating >= 4.75);
        break;
      case "Greater than 180$":
        filteredData = data.filter(item => item.price_per_hour > 180);
        break;
      case "Less than 180$":
        filteredData = data.filter(item => item.price_per_hour <= 180);
        break;
      case "Z to A":
        filteredData = [...data].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "A to Z":
        filteredData = [...data].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filteredData = data;
        break;
    }
    return { filteredData, type };
  }
);