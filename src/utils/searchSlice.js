import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        
    },
    reducers: {
        cacheResults: (state, action) => {
            console.log(action.payload);
            state = Object.assign(state, action.payload)
            // state = { ...state, ...action.payload };
            // console.log(state);
        }
    }
})
export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;