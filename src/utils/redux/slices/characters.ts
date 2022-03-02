import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: any = {
  characters: null,
  error: false,
  loading: false,
};

export const getCharacters = createAsyncThunk(
  `characters/all`,
  async (values, { rejectWithValue }) => {
    try {
      const res: any = await axios.get('https://swapi.dev/api/people');
      console.log(res.data.results, 'character res');
      const response = { data: res.data.results };
      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error = { data: err.response.data, status: err.response.status };
      console.log(error, 'error');
      return rejectWithValue(error);
    }
  },
);

export const searchCharacter = createAsyncThunk(
  `characters/find`,
  async (searchKey, { rejectWithValue }) => {
    try {
      const res: any = await axios.get(`https://swapi.dev/api/people/?search=${searchKey}`);
      console.log(res.data.results, 'character res');
      const response = { data: res.data.results };
      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error = { data: err.response.data, status: err.response.status };
      console.log(error, 'error');
      return rejectWithValue(error);
    }
  },
);

export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getCharacters.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.characters = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(searchCharacter.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(searchCharacter.fulfilled, (state, action) => {
        state.characters = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(searchCharacter.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })

      .addDefaultCase(state => state),
});

export default characterSlice;
