import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value:0,
}

const detailsSlice = createSlice({
    name : 'details',
    initialState,
    reducers: {}
})

export default detailsSlice.reducer; 