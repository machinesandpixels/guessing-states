import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getStates = createAsyncThunk(
  'usaStates/getStates',
  async () => {
  const { data } = await axios.get('data/usaStates.json');
  return data;
 }
);

export const usaStatesSlice = createSlice({
  name: 'usaStates',
  initialState: {
    states: [],
    randomState: null,
    isLoading: false,
  },
  reducers: {
    selectRandomState: (state) => {
      if (state.states.length > 0) {
        state.randomState =
          state.states[Math.floor(Math.random() * state.states.length)];
      }
    },
    removeState: (state, action) => {
      state.states = state.states.filter(x => x.name !== action.payload);
      console.log('RemoveState', action.payload)
    },
  },
  extraReducers: {
    [getStates.pending]: (state) => {
      state.isLoading = true;
    },
    [getStates.fulfilled]: (state, action) => {
      state.states = action.payload;
      state.isLoading = false;
    },
    [getStates.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export const { selectRandomState, removeState } = usaStatesSlice.actions;
export default usaStatesSlice.reducer;