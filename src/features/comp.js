import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   player1: "",
   win1: 0,
   win2: 0,
   ties: 0,
};

const comp = createSlice({
  name: "comp",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.player1 = action.payload.player1;
    },
    setUserwin1: (state, action) => {
      state.win1 = action.payload.win1 
    },
    setUserwin2: (state, action) => {
      state.win2 = action.payload.win2
    },
    setUsertied: (state, action) => {
      state.ties = action.payload.ties 
    }
  },
});

export const { setUserDetails,setUserwin1,setUserwin2,setUsertied } = comp.actions;

export const selectplayer1 = (state) => state.comp.player1;
export const selectwin1 = (state) => state.comp.win1;
export const selectwin2 = (state) => state.comp.win2;
export const selectties = (state) => state.comp.ties;

export default comp.reducer;