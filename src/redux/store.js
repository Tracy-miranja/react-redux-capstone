import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from './Homepage/HomesSlice';
import DetailsReducer from './Details/DetailsSlice';

export const store = configureStore({
    reducer:{
        Home:HomeReducer,
        details: DetailsReducer,

    }
})

