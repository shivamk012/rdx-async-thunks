import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUser = createAsyncThunk('user/fetch' , async() => {
    const result = await axios.get("https://api.waqi.info/feed/tokyo/?token=demo");
    
    // this data acts as payload in action object
    return result.data.data.aqi;
})

export {fetchUser};