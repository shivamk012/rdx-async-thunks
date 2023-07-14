import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "users",
    initialState : {
        data : []
    },
    reducers : {
        addUser(state , action){
            //TODO
        }
    }
})

export const userReducer = userSlice.reducer;
export const {addUser} = userSlice.actions;