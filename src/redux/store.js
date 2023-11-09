import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './authentication/authenticationSlice';
import parachutesReducer from './parachutes/parachutesSlice';
import humberger_slice from './Humberger/humbergerSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    parachutes: parachutesReducer,
    humberger_switch: humberger_slice.reducer
  },
});

export default store;
