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
    isLoading: false,
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

export default usaStatesSlice.reducer;

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     count: 0
//   },
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.count += action.payload;
//     }
//   }
// });

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;
