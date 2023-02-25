import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
        appSlice: appSlice,
        searchSlice: searchSlice
    }
});

export default store;