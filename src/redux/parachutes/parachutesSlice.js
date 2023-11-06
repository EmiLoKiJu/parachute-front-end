import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getParachutes = createAsyncThunk('parachutes/getParachutes', async (token) => {
  try {
    const response = await axios.get(
      'https://parachute-back-end.onrender.com/parachutes',
      { headers: {
          'Authorization': `bearer ${token}`
        }
      }
    );
    const sortedData = response.data.sort((a, b) => a.id - b.id);
    return sortedData;
  } catch (error) {
    console.error('Error');
    return error.response.data;
  }
});

export const postParachutes = createAsyncThunk('parachutes/postParachutes', async ({token, body}) => {
  try {
    const response = await axios.post(
      'https://parachute-back-end.onrender.com/parachutes',
      body,
      { headers: {
          'Authorization': `bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error');
    return error.response.data;
  }
});

/*
To call this function:

dispatch(postParachutes({
  token: 'your_token_here',
  body: {
    "photo_link": "https://freesvg.org/img/1549153478.png",
    "name": "Testing-again",
    "city": "Santiago",
    "rent": "4.9",
    "description": "A parachute that does work sometimes",
    "min_duration": 1
  }
}));

*/

const parachutesSlice = createSlice({
  name: 'parachutes',
  initialState: { parachutes: [], isLoading: false, isUploading: false },
  reducers: {
    setParachute: (state, action) => {
      return ({ ...state, parachutes: [...state.parachutes, action.payload] });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getParachutes.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getParachutes.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        parachutes: action.payload,
      }))
      .addCase(getParachutes.rejected, (state) => ({ ...state, isLoading: false }))
      .addCase(postParachutes.pending, (state) => ({ ...state, isUploading: true }))
      .addCase(postParachutes.fulfilled, (state) => ({
        ...state,
        isUploading: false
      }))
      .addCase(postParachutes.rejected, (state) => ({ ...state, isUploading: false }));
  },
});

export default parachutesSlice.reducer;

export const { setParachute } = parachutesSlice.actions;
