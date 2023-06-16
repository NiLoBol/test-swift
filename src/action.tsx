// actions.ts
import { createSlice } from "@reduxjs/toolkit";

// สร้าง createSlice และฟังก์ชัน reducer ของเรา
const formSlice = createSlice({
  name: "form",
  initialState: { data: null }, // สถานะเริ่มต้นของ state
  reducers: {
    saveFormData: (state, action) => {
      state.data = action.payload; // เปลี่ยนค่า state.data เป็นข้อมูลที่ส่งมาใน action
    },
  },
});

export const { saveFormData } = formSlice.actions; // ส่งออกฟังก์ชัน saveFormData

export default formSlice.reducer; // ส่งออก reducer

