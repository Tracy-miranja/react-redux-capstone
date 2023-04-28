import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './Homepage/HomesSlice';
import DetailsReducer from './Details/DetailsSlice';

const store = configureStore({
  reducer: {
    album: HomeReducer,
    details: DetailsReducer,
  },
});

export default store;
