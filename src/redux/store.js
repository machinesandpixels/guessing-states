import { configureStore } from "@reduxjs/toolkit";
import usaStatesReducer from "./usaStatesState";
// import counterReducer from "./counter";

export default configureStore({
  reducer: {
    // counter: counterReducer,
    usaStates: usaStatesReducer,
  }
});
