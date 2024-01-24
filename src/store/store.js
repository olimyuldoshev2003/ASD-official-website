import { configureStore } from "@reduxjs/toolkit";
import ASDstates from "../reducers/ASDstates";

export const store = configureStore({
    reducer: {
        ASDstates
    }
})