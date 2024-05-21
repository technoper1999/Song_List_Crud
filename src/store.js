import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define the initial state for the song reducer
const initialSongState = {
  songName: '',
  artist: '',
};

// Create the song reducer using createSlice
const songSlice = createSlice({
  name: 'song',
  initialState: initialSongState,
  reducers: {
    setSongName: (state, action) => {
      state.songName = action.payload;
    },
    setArtist: (state, action) => {
      state.artist = action.payload;
    },
  },
});

// Extract the reducer and actions from the songSlice
const { reducer: songReducer, actions } = songSlice;

// Create the root reducer
const rootReducer = {
  song: songReducer,
};

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

// Export the actions for easier usage
export const { setSongName, setArtist } = actions;

export default store;