import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [
    {id: 0, name:"Jack Daniels"},
    {id: 1, name:"Steve Austin"},
    {id: 2, name:"Jack Web"}
  ],

})

export default userSlice.reducer