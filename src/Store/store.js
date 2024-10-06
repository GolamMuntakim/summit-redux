import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../Features/Counters/CountersSlice"


const store = configureStore({
    reducer : {
        counters : countersReducer,
    }
})
export default store;