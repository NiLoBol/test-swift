import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./action";

// ตรวจสอบข้อมูลใน Local Storage
const storedFormData = localStorage.getItem("formData");
const initialState = {
  form: storedFormData ? JSON.parse(storedFormData) : null,
};

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState: initialState, // กำหนดค่าเริ่มต้นให้ store
});

export default store;
