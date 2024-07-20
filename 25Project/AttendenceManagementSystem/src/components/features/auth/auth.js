import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggedin : false,
}

export const loginSlice = createSlice({
    name:"login",
    initialState:initialState,
    reducers:{
        userLogin: (state)=>{
            state.isLoggedin = true;
        },
        userLogout:(state)=>{
            state.isLoggedin = false;
        }
    }
})
export const {userLogin, userLogout} = loginSlice.actions;
export  default loginSlice.reducer;