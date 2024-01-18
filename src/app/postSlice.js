import { createSlice, nanoid } from "@reduxjs/toolkit"
import moment from "moment"

const initialState = [
  {
    id:"1", 
    title:"Learning Redux Toolkit", 
    content:"I've heard good things.",
    timestamp:  moment(Date.now()).subtract(5,"minutes").valueOf(),
    reaction: {
      thumbsup: 0,
      heart   : 0,
      rocket  : 0,
      coffee  : 0,
    }
  },
  {
    id:"2", 
    title:"Slices...", 
    content: "The more I say slice, the more I want pizza",
    timestamp: moment(Date.now()).subtract(10,"minutes").valueOf(),
    reaction: {
      thumbsup: 0,
      heart   : 0,
      rocket  : 0,
      coffee  : 0,
    }
  }
]

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers:{

    addPost: {
      reducer(state,action){state.push(action.payload)},
      prepare(title,content,user){
        return {payload:{ 
          id: nanoid(), 
          timestamp: Date.now(),
          title, content, user,
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
      const index = state.findIndex(item=>item.id===id)
      
      switch (selector){
        case 0 : state[index].reaction.thumbsup+=1; break;
        case 1 : state[index].reaction.heart+=1;    break;
        case 2 : state[index].reaction.rocket+=1;   break;
        case 3 : state[index].reaction.coffee+=1;   break;

        default:
      }
    }

  }
})

export const {addPost, clickReaction}  = postSlice.actions;  
export default postSlice.reducer
 