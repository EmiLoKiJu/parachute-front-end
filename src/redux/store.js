import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './authentication/authenticationSlice';
import parachutesReducer from './parachutes/parachutesSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    parachutes: parachutesReducer,
  },
});

export default store;
