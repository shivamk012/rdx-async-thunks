import { configureStore } from "@reduxjs/toolkit";
import { userReducer} from "./slices/userSlice";
import { fetchUser } from "./thunks/fetchUsers";

const store = configureStore({
    reducer : {
        users : userReducer
    }
})

export {store};
export {fetchUser};