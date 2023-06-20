// actions.ts
import { createSlice } from "@reduxjs/toolkit";

// สร้าง createSlice และฟังก์ชัน reducer ของเรา
const formSlice = createSlice({
  name: "form",
  initialState: { data: JSON.parse(localStorage.getItem("formData") || "[]") }, // กำหนดให้ data เป็นอาร์เรย์เปล่าเมื่อไม่มีข้อมูลใน localStorage
  reducers: {
    saveFormData: (state, action) => {
      state.data = action.payload; // เปลี่ยนค่า state.data เป็นข้อมูลที่ส่งมาใน action
      localStorage.setItem("formData", JSON.stringify(state.data));
      console.log(localStorage.getItem("formData"));
    },
  },
});


export const { saveFormData } = formSlice.actions; // ส่งออกฟังก์ชัน saveFormData

export default formSlice.reducer; // ส่งออก reducer

