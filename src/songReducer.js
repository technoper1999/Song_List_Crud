import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songData: null,
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    fetchSongStart(state) {
      state.loading = true;
    },
    fetchSongSuccess(state, action) {
      state.loading = false;
      state.songData = action.payload;
    },
    fetchSongFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchSongStart, fetchSongSuccess, fetchSongFailure } = songSlice.actions;

export const songReducer = songSlice.reducer;