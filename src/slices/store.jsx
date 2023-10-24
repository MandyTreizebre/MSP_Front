import {configureStore} from '@reduxjs/toolkit'

import adminReducer from "./adminSlice"
import darkModeReducer from "./darkModeSlice"

const store = configureStore({
    reducer: {
        admin: adminReducer,
        darkMode: darkModeReducer
    }
})

export default store