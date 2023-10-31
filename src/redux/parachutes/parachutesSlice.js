import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://parachute-back-end.onrender.com/';

const initialState = {
  parachutesList: [],
  currentParachute: {},
  isLoading: false,
  status: null,
};

export const fetchAllParachutes = createAsyncThunk(
  'parachutes/fetchAllParachutes',
  async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${url}parachutes`, {
      headers: {
        Authorization: `bearer ${token}`, 
      },
    });
    return response.data;
  },
);

export const createParachute = createAsyncThunk(
  'parachutes/createParachute',
  async (parachuteData) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${url}parachutes`, parachuteData, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    return response.data;
  },
);

export const fetchOneParachute = createAsyncThunk('parachutes/fetchOneParachute',
  async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios(`${url}parachutes/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    return response.data;
  });

const parachutesSlice = createSlice({
  name: 'parachutes',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllParachutes.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchAllParachutes.fulfilled, (state, action) => ({
        ...state,
        parachutesList: action.payload,
        isLoading: false,
      }))
      .addCase(fetchAllParachutes.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));

    builder
      .addCase(fetchOneParachute.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchOneParachute.fulfilled, (state, action) => ({
        ...state,
        currentParachute: action.payload,
        isLoading: false,
      }))
      .addCase(fetchOneParachute.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
    builder
      .addCase(createParachute.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(createParachute.fulfilled, (state, action) => ({
        ...state,
        parachutesList: [...state.parachutesList, action.payload],
        isLoading: false,
      }))
      .addCase(createParachute.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export default parachutesSlice.reducer;
