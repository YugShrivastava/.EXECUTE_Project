import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice'
// import postReducer from '../features/postSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    // post: postReducer,
  }
})

export default store