import { createSlice } from "@reduxjs/toolkit";
import { addToLocal, getData } from "./storage";

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    data: getData()
  },
  reducers: {
    // state is initialState
    addData: (state, action) => {
      state.data.push(action.payload)
      addToLocal(state.data)
    },

    removeData: (state, action) => {
      state.data.splice(action.payload, 1)
      addToLocal(state.data)

    }




  }
})
export const { addData, removeData } = todoSlice.actions
export default todoSlice.reducer;