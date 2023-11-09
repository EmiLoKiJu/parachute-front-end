import { createSlice } from "@reduxjs/toolkit";

const humberger_slice = createSlice({
  name: 'turnOnOff',
  initialState: { isClose: true },
  reducers: {
    setOnOff: (state) => ({ isClose: !state.isClose }),
    setOff:() => ({ isClose: true })
  },

});

export const { setOnOff, setOff } = humberger_slice.actions;
export default humberger_slice;
