import { combineReducers } from "@reduxjs/toolkit";
import dropdownReducer from "./dropdownReducer";
import audioToTextReducer from "./audioToTextReducer";

const rootreducer = combineReducers({
    dropdown: dropdownReducer,
    audioToText: audioToTextReducer,
});

export default rootreducer;