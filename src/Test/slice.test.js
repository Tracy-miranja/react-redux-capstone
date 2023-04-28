import { configureStore } from '@reduxjs/toolkit';
import { HomesSlice, fecthAlbum } from '../redux/Homepage/HomesSlice';

jest.setTimeout(90000); // 30 seconds

describe('HomesSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        album: HomesSlice,
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
