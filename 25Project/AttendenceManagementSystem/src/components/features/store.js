import {configureStore} from "@reduxjs/toolkit"
import loginReducer from "./auth/auth"

export const store = configureStore({
    reducer:{
        login:loginReducer,
    },
})