import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalSignUp: false,
  modalSignIn: false,
};

export const ASDStatesSlice = createSlice({
  name: "ASDStates",
  initialState,
  reducers: {
    setModalSignUp: (state, action) => {
      state.modalSignUp = action.payload;
    },
    setModalSignIn: (state, action) => {
      state.modalSignIn = action.payload;
    },
  },
});

export const {setModalSignUp, setModalSignIn} = ASDStatesSlice.actions;


export default ASDStatesSlice.reducer;
