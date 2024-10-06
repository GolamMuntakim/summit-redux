import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../Features/Counters/CountersSlice"
import PostsReducer from "../Features/Post/PostSlice"


const store = configureStore({
    reducer : {
        counters : countersReducer,
        posts : PostsReducer
    }
})
export default store;