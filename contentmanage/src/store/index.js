import { configureStore } from "@reduxjs/toolkit";
import { userReducer , addUser } from "./slices/userSlice";

const store = configureStore({
    reducer : {
        users : userReducer
    }
})

export {store};
export {addUser};