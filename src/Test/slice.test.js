import { configureStore } from '@reduxjs/toolkit';
import HomeReducer, { fecthAlbum } from '../redux/Homepage/HomesSlice';

jest.setTimeout(90000);

describe('HomesSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        album: HomeReducer,
      },
    });
  });

  it('should fetch album data successfully', async () => {
    await store.dispatch(fecthAlbum());
    const {
      album, isLoading, hasError,
    } = store.getState().album;

    expect(album.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
    expect(hasError).toBe(false);
  });
});
