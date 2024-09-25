import {configureStore} from '@reduxjs/toolkit';
import globalReducer from "./global/globalSlice";
import userReducer from "./users/userSlice";
import authReducer from "./auth/authSlice"


const store = configureStore({
    reducer: {
       global: globalReducer,
       user: userReducer,
       auth: authReducer,
    },
})

export default store;