import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const URL = "https://jsonplaceholder.typicode.com/users"

export const fetchUser = createAsyncThunk("user/fetchUser", async()=>{
  try{
    const respond = await axios.get(URL)
    return respond.data
  } 
  catch (error){return error.message}

})

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  extraReducers: (build)=>{
    build
      .addCase(fetchUser.pending,   (state) => {state.loading=true})

      .addCase(fetchUser.fulfilled, (state,action) => {
        state.loading=false;
        state.data = action.payload
      })

      .addCase(fetchUser.rejected, (state,action) => {
        state.loading=false;
        state.error = action.error
      })
  }
})

export default userSlice.reducer