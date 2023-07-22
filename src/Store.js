import { configureStore } from "@reduxjs/toolkit";
import GrouopSlice from "./Featues/GrouopSlice";

const store = configureStore({
  reducer: {
    group: GrouopSlice,
  },
});

export default store;
