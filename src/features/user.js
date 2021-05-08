import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   player1: "",
   player2: "",
   win1: 0,
   win2: 0,
   ties: 0,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.player1 = action.payload.player1;
      state.player2 = action.payload.player2;
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

export const { setUserDetails,setUserwin1,setUserwin2,setUsertied } = user.actions;

export const selectplayer1 = (state) => state.user.player1;
export const selectplayer2 = (state) => state.user.player2;
export const selectwin1 = (state) => state.user.win1;
export const selectwin2 = (state) => state.user.win2;
export const selectties = (state) => state.user.ties;

export default user.reducer;