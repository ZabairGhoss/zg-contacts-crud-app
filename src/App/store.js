
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from '../redux/reducers/contactSlice';

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
    }
}) 