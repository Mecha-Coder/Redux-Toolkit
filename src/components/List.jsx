import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchPost } from "../app/postSlice"
import Post from "./Post"


function List() {
  const dispatch = useDispatch()
  const {data, loading, error} = useSelector(state=>state.post)

  useEffect(()=>{
    dispatch(fetchPost())
  },[dispatch])

  if (loading)   {return <h2>Loading...</h2>}
  else if(error) {return <h2>Error: {error}</h2>}
  
  else if (!loading && !error){
    return (
      <section>
        <h2>Posts</h2>
        <Post post={data} />
      </section>
    )
  }
}

export default List