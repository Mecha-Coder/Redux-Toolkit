import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import moment from "moment";

const URL = "https://jsonplaceholder.typicode.com/posts"

export const fetchPost = createAsyncThunk("post/fetchPost", async()=>{
  
  try{
    const respond = await axios.get(URL)
    return respond.data
  } 
  catch (error){return error.message}

})

const postSlice = createSlice({
  name: "post",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers:{

    addPost: {
      reducer(state,action){state.data.push(action.payload)},
      prepare(title,body,userId){
        return {payload:{ 
          id: nanoid(), 
          timestamp: Date.now(),
          title, body, userId,
          reaction: {
            thumbsup: 0,
            heart   : 0,
            rocket  : 0,
            coffee  : 0,
          }
        }}
    }},

    clickReaction : (state,action)=>{
      const {id,selector} = action.payload
      const index = state.data.findIndex(item=>item.id===id)
      
      switch (selector){
        case 0 : state.data[index].reaction.thumbsup+=1; break;
        case 1 : state.data[index].reaction.heart+=1;    break;
        case 2 : state.data[index].reaction.rocket+=1;   break;
        case 3 : state.data[index].reaction.coffee+=1;   break;
        default:
      }
    }

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending,   (state) => {state.loading=true})

      .addCase(fetchPost.fulfilled, (state,action) => {
        state.loading=false;
        
        let min = 1;
        const amendList = action.payload.map(post=>{
          post.timestamp = moment(Date.now()).add(min++, 'minutes').valueOf();
          post.reaction = {
            thumbsup: 0,
            heart: 0,
            rocket: 0, 
            coffee: 0,
          }
          return post
        })
        state.data = amendList 
      })

      .addCase(fetchPost.rejected, (state,action) => {
        state.loading=false;
        state.error = action.error
      })
  }


})

export const {addPost, clickReaction}  = postSlice.actions;  
export default postSlice.reducer
 