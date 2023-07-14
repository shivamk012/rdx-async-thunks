import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUsers";

const userSlice = createSlice({
    name : "users",
    initialState : {
        data : [],
        loading : false,
        error : false
    },
    extraReducers(builder){
        builder.addCase(fetchUser.pending , (state, action) => {
            state.loading = true;
            state.data = [];
            state.error = false;
        });

        builder.addCase(fetchUser.fulfilled , (state , action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = false
        });

        builder.addCase(fetchUser.rejected , (state , action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export const userReducer = userSlice.reducer;
export const {addUser} = userSlice.actions;