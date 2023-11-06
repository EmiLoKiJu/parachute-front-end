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
    return response.data;
  } catch (error) {
    console.error('Error');
    return error.response.data;
  }
});

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
