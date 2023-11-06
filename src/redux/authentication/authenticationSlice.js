import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLogin = createAsyncThunk('login/getlogin', async ({ user }, { getState }) => {
  const token = getState().login.token;
  if (token == null) {
    try {
      const response = await axios.post('https://parachute-back-end.onrender.com/login', {
        username: user
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.data.error == "Invalid username") throw new Error('Invalid username');
      else {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', user);
        return { token: response.data.token, user: user };
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  } else {
    return token;
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState: { token: null, isLoading: false, user: '' },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLoading = false;
    },
    clearToken: (state) => {
      state.token = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLogin.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getLogin.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.token = action.payload.token;
          state.user = action.payload.user;
          state.isLoading = false;
        }
      })
      .addCase(getLogin.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

export default loginSlice.reducer;

export const { setUser, setToken, clearToken } = loginSlice.actions;
