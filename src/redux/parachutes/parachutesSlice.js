import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getParachutes = createAsyncThunk('parachutes/getParachutes', async (token) => {
  try {
    console.log('this is the token: ')
    console.log(token);
    const response = await axios.get(
      'https://parachute-back-end.onrender.com/parachutes',
      { headers: {
          'Authorization': `bearer ${token}`
        }
      }
    );
    console.log (response.data);
    const sortedData = response.data.sort((a, b) => a.id - b.id);
    return sortedData;
  } catch (error) {
    console.error('Error');
    return error.response.data;
  }
});

export const postParachutes = createAsyncThunk('parachutes/postParachutes', async ({token, body}) => {
  try {
    console.log('this is the token: ')
    console.log(token);
    const response = await axios.post(
      'https://parachute-back-end.onrender.com/parachutes',
      body,
      { headers: {
          'Authorization': `bearer ${token}`
        }
      }
    );
    console.log (response.data);
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
  initialState: { parachutes: [], isLoading: false },
  extraReducers: (builder) => {
    builder
      .addCase(getParachutes.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getParachutes.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        parachutes: action.payload,
      }))
      .addCase(getParachutes.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

export default parachutesSlice.reducer;
