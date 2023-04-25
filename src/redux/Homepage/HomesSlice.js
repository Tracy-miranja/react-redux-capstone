import { createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 

const url= 'https://coronavirus.m.pipedream.net/';

export const fecthAlbum = createAsyncThunk('album/fetchAlbum', async() =>{
    try{
        const response = await axios.get(url);
        return response.data;
    } catch(error){
        return (error.message)
    }
})

const initialState = {
    album:[],
    isLoading: false,
    hasError: false,
  }

export const HomesSlice = createSlice({
    name:'album',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
     builder
     .addCase( fecthAlbum.pending, (state) => {
        state.isLoading = true;
     })
     .addCase( fecthAlbum.fulfilled, (state,action) => {
        const {rawData}= action.payload;
        return{...state, isLoading:false,album:rawData}
     })
     .addCase( fecthAlbum.rejected, (state) => {
        state.isLoading = false;
     })
    }
})

export default HomesSlice.reducer;