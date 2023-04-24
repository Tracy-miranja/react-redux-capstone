import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:0,
}

export const HomesSlice = createSlice({
    name:'Home',
    initialState,
    reducers: {}
})

export default HomesSlice.reducer;