import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./action";
import counterReducer from './counterSlice'

// ตรวจสอบข้อมูลใน Local Storage
// const storedFormData = localStorage.getItem("formData");
// const initialState = {
//   counter: { value: 0 },
//   data: storedFormData ? JSON.parse(storedFormData) : null,
// };


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: formReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;