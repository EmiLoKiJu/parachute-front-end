import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './authentication/authenticationSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
